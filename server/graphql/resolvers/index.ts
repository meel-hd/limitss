import { AppsResolver } from "./apps/resolver"
import { GithubResolver } from "./github/resolver"
import { UserResolver } from "./user/resolver"

const resolvers: [Function, ...Function[]] = [
    UserResolver,
    AppsResolver,
    GithubResolver,
]

export default resolvers