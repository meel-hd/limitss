import "reflect-metadata";
import { Context } from "server/types/Context";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { GeneratorService } from "./services";
import { CreateAppInput, createAppOutput } from "./types/CreateApp";

@Resolver(() => createAppOutput)
export class AppsResolver {
  @Authorized()
  @Mutation(() => createAppOutput)
  async createApp(@Arg("arg") arg: CreateAppInput, @Ctx() context:Context): Promise<createAppOutput> {
    return new GeneratorService(context).createApp(arg);
  }

  @Authorized()
  @Query(()=> [createAppOutput])
  async getMyApps( @Ctx() context:Context):Promise<createAppOutput[]>{
    return new GeneratorService(context).getMyApps();
  }
}
