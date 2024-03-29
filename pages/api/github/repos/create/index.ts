import prisma from "lib/prisma";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Octokit } from "octokit";
import { authOptions } from "pages/api/auth/[...nextauth]";
import addGitignore from "../../../../../server/github/utils/addGitignore";
import addIndexHtml from "../../../../../server/github/utils/addIndexHtml";
import addMainJs from "../../../../../server/github/utils/addMainJs";
import addPackageJsonToRepo from "../../../../../server/github/utils/addPackageJson";
import addPublishYml from "../../../../../server/github/utils/addPublishYml";
import AddTauriConfigJson from "../../../../../server/github/utils/addTauriConfigJson";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
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
  const octokit = new Octokit({
    // @ts-ignore
    auth: session.user.accessToken,
  });
  const response = await octokit.request("POST /user/repos", {
    name: req.body.name.split(" ").join("-") + "-" + nanoid(10),
    description: req.body.description
      ? req.body.description
      : `This repo was created by ${user.name} using the Limitss app.`,
    private: true,
  });
  // Adding neccassary files to the repo
  await addPackageJsonToRepo(
    octokit,
    {
      name: req.body.name,
      description: req.body.description,
      version: req.body.version,
      license: req.body.license,
    },
    response.data.owner.login,
    response.data.name
  );
  await addGitignore(octokit, response.data.owner.login, response.data.name);
  await addPublishYml(octokit, response.data.owner.login, response.data.name);
  await addIndexHtml(octokit, response.data.owner.login, response.data.name);
  await addMainJs(
    octokit,
    response.data.owner.login,
    response.data.name,
    req.body.link
  );
  await AddTauriConfigJson({
    alwaysOnTop: req.body.alwaysOnTop,
    description: req.body.description,
    focus: req.body.focus,
    height: req.body.height,
    maximized: req.body.maximized,
    name: req.body.name,
    version: req.body.version,
    width: req.body.width,
    octokit: octokit,
    owner: response.data.owner.login,
    repo: response.data.name,
    center: req.body.center,
    resizable: req.body.resizable,
    hiddenTitle: req.body.hiddenTitle,
    maxHeight: req.body.maxHeight,
    maxWidth: req.body.maxWidth,
    minHeight: req.body.minHeight,
    minWidth: req.body.minWidth,
    theme: req.body.theme,
    titleBarStyle: req.body.titleBarStyle,
    x: req.body.x,
    y: req.body.y,
  });
  res.status(200).json({ message: "Success", owner: response.data.owner.login, repo: response.data.name });
};
