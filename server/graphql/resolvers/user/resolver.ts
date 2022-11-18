import 'reflect-metadata';
import type { Context } from 'server/types/Context';
import { Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { UserService } from './services';
import { User } from './types/User';

@Resolver(() => User)
export class UserResolver {
    @Authorized()
    @Query(()=>User)
    async me(@Ctx() context : Context): Promise<User>{
        return new UserService(context).me()
    }
}