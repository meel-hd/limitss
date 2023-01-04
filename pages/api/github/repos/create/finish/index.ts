import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Octokit } from "octokit";
import { authOptions } from "pages/api/auth/[...nextauth]";
import addAppIcon from "server/github/utils/addAppIcon";
import addBuildRs from "server/github/utils/addBuildRs";
import addCargoToml from "server/github/utils/addCargoToml";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Check if variables are  provided
  if (!req.body.repo || !req.body.owner || !req.body.iconUrl || !req.body.name || !req.body.description || !req.body.license) {
    return res.status(400).json({ message: "Bad request" });
  }
  const repo = req.body.repo;
  const owner = req.body.owner;

  const session = await unstable_getServerSession(req, res, authOptions);

  const user = session?.user?.email
    ? await prisma.user.findUnique({ where: { email: session.user.email } })
    : null;

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const octokit = new Octokit({
    // @ts-ignore
    auth: session.user.accessToken,
  });

  await addCargoToml(
    octokit,
    owner,
    repo,
    req.body.name,
    req.body.description,
    req.body.license
  );
  await addBuildRs(octokit, owner, repo);
  await addAppIcon(octokit, owner, repo, req.body.iconUrl);
  // Trigger the build workflow
  await octokit.request("POST /repos/{owner}/{repo}/dispatches", {
    owner: owner,
    repo: repo,
    event_type: "publish",
  });
  res.status(200).json({ message: "Success" });
};
export default handler;
