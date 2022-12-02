import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { Octokit } from "octokit";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
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
    auth:
      // @ts-ignore
      session.user.accessToken,
  });
  const response = await octokit.request("GET /user");
  
  res.status(200).json(response);
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb", // Set desired value here
    },
  },
};
