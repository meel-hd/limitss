import { AppsResolver } from "./apps/resolver"
import { GithubResolver } from "./github/resolver"
import { PublicResolver } from "./public/resolver"
import { UserResolver } from "./user/resolver"

const resolvers: [Function, ...Function[]] = [
    UserResolver,
    AppsResolver,
    GithubResolver,
    PublicResolver,
]

export default resolvers