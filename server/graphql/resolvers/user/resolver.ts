import "reflect-metadata";
import type { Context } from "server/types/Context";
import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { UserService } from "./services";
import { User,UserArgs } from "./types/User";

@Resolver(() => User)
export class UserResolver {
  @Authorized()
  @Mutation(() => User)
  async updateUser(
    @Arg('args') args: UserArgs,
    @Ctx() context: Context
  ): Promise<User> {
    return new UserService(context).updateUser(args);
  }
  @Authorized()
  @Query(() => User)
  async me(@Ctx() context: Context): Promise<User> {
    return new UserService(context).me();
  }
}
