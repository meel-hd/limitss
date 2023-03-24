import prisma from "lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          // Access to read user profile data and email, full access to public and private repos,
          // add workfows, and manage codespaces
          scope: "read:user user:email user repo workflow ",
        },
      },
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  // Configure session to be  stored as jwt
  session: {
    strategy: "jwt",
  },

  // debug:true,
};

export default NextAuth(authOptions);
