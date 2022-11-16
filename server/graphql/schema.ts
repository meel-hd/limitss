import "reflect-metadata";
import { makeExecutableSchema } from '@graphql-tools/schema'
import { buildTypeDefsAndResolvers } from 'type-graphql'
// import { authChecker } from '../auth'

import MyResorlvers from './resolvers'

export const schema = async () => {
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
        resolvers: MyResorlvers ,
        // authChecker: authChecker,
    })
    return makeExecutableSchema({ typeDefs, resolvers: resolvers })
}
