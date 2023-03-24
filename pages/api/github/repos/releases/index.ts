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

  const githubAccount = await prisma.account.findFirst({
    where: {
      userId: user.id,
      provider: "github",
    },
  });
  if (!githubAccount) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Check if name is provided
  if (!req.body.name) {
    return res.status(400).json({ message: "Bad request" });
  }

  const octokit = new Octokit({
    auth: githubAccount.access_token,
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

  // Get the releases of the repo
  const { data: releases } = await octokit.request(
    "GET /repos/{owner}/{repo}/releases{?per_page,page}",
    {
      owner: username,
      repo: repo.name,
      per_page: 10,
    }
  );
  res.status(200).json(releases);
};
export default handler;
