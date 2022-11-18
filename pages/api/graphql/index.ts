import { ApolloServer } from "apollo-server-micro";
import prisma from "lib/prisma";
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { Context, UserContext } from "server/types/Context";
import { schema } from "../../../server/graphql/schema";
import { authOptions } from "../auth/[...nextauth]";

const cors = Cors()

export const config = {
    api:{
        bodyParser: false,
    },
};

export default cors(async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }

    // Session Management
    const session = await unstable_getServerSession(req,res,authOptions)
    const user = session?.user?.email ? await prisma.user.findUnique({where:{
        email: session.user.email
    }}) : null;

    const graphqlSchema = await schema()

    const apolloServer = new ApolloServer({
        schema: graphqlSchema,
        cache:'bounded',
        context:async ({ req}) => {
            // console.log(req)
            // console.log("(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((")
            // console.log(res)
            const context:Context = {
              req,
              user: user ? await UserContext.userFromId(user?.id) : null
            };
            return context;
          },
    })
    await apolloServer.start()

    return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})
