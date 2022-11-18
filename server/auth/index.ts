import { AuthChecker, UnauthorizedError } from 'type-graphql'
import { Context } from '../types/Context'

export const authChecker: AuthChecker<Context> = ({ context }) => {
    const {user} = context
    if(!user){
        throw new UnauthorizedError()
    }

    return true
}
