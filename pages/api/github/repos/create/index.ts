import prisma from "lib/prisma";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Octokit } from "octokit";
import { authOptions } from "pages/api/auth/[...nextauth]";
import addPackageJsonToRepo from "./utils/addPackageJson";

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

  res.status(200).json(response);
};
