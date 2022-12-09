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
    const matchedRepos = repos.filter((repo) => repo.name.includes(req.body.name.split(" ").join("-") + "-" ));
    const repo = matchedRepos[0];
    
    const {data: publishWorkflow} = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}', {
        owner: username,
        repo: repo.name,
        workflow_id: 'publish.yml'
      })

      const {data:usage} = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing', {
        owner: username,
        repo: repo.name,
        workflow_id: 'publish.yml'
      })


    res.status(200).json({ publishWorkflow, usage });
}
export default handler;