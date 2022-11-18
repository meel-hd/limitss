import { AppCreateResolver } from "./appCreate/resolver"
import { UserResolver } from "./user/resolver"

const resolvers: [Function, ...Function[]] = [
    UserResolver,
    AppCreateResolver
]

export default resolvers