import { ApolloServer } from "apollo-server-micro";
import Cors from 'micro-cors';
import { schema } from "../../../server/graphql/schema";

const cors = Cors()

export const config = {
    api:{
        bodyParser: false,
    },
};

export default cors(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    // await database()

    const graphqlSchema = await schema()

    const apolloServer = new ApolloServer({
        schema: graphqlSchema,
        cache:'bounded'
    })
    await apolloServer.start()

    return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})
