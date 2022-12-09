import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Octokit } from "octokit";
import { authOptions } from "pages/api/auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const session = await unstable_getServerSession(req, res, authOptions);
  const user = session?.user?.email
    ? await prisma.user.findUnique({ where: { email: session.user.email } })
    : null;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // Check if name is provided
  if (!req.body.name) {
    return res.status(400).json({ message: "Bad request" });
  }

  const octokit = new Octokit({
    // @ts-ignore
    auth: session.user.accessToken,
  });
  // Get username from github
  const { data: userGithub } = await octokit.request("GET /user");
  const username = userGithub.login;
  // Get all repos from github
  const { data: repos } = await octokit.request("GET /user/repos");
  // Filter repos by by app name
  const matchedRepos = repos.filter((repo) =>
    repo.name.includes(req.body.name.split(" ").join("-") + "-")
  );
  const repo = matchedRepos[0];

  // Get the usage of publish.yml workflow
  const { data: usage } = await octokit.request(
    "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
    {
      owner: username,
      repo: repo.name,
      workflow_id: "publish.yml",
    }
  );

  // Get the  runs of publish.yml workflow
  const { data: runs } = await octokit.request(
    "GET /repos/{owner}/{repo}/actions/runs",
    {
      owner: username,
      repo: repo.name,
    }
  );
  if (!runs.workflow_runs[0]) {
    return res.status(200).json({ usage, firstRunJobs: [] });
  } else {
    // Get the jobs of the first run in publish.yml workflow
    const { data: firstRunJobs } = await octokit.request(
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
      {
        owner: username,
        repo: repo.name,
        run_id: runs.workflow_runs[0].id,
      }
    );
    res.status(200).json({ usage, firstRunJobs });
  }
};
export default handler;
