import { AppsResolver } from "./apps/resolver"
import { UserResolver } from "./user/resolver"

const resolvers: [Function, ...Function[]] = [
    UserResolver,
    AppsResolver
]

export default resolvers