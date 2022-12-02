import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Octokit } from "octokit";
import { authOptions } from "pages/api/auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    const session = await unstable_getServerSession(req, res, authOptions);
    console.log("session", session);
    const user = session?.user?.email
        ? await prisma.user.findUnique({ where: { email: session.user.email } })
        : null;
    
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    console.log("user", user);
    
    const octokit = new Octokit({
        auth:
        // @ts-ignore
        session.user.accessToken,
    });
    const response = await octokit.request("GET /rate_limit");
    
    res.status(200).json(response.data);
};
export default handler;