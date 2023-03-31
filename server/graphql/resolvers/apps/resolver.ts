import "reflect-metadata";
import { Context } from "server/types/Context";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { GeneratorService } from "./services";
import { CreateAppInput, createAppOutput } from "./types/CreateApp";
import { PublishGameInput } from "./types/PublishGame";

@Resolver(() => createAppOutput)
export class AppsResolver {
  @Authorized("CREATOR")
  @Mutation(() => createAppOutput)
  async createApp(
    @Arg("arg") arg: CreateAppInput,
    @Ctx() context: Context
  ): Promise<createAppOutput> {
    return new GeneratorService(context).createApp(arg);
  }

  @Authorized("CREATOR")
  @Query(() => [createAppOutput])
  async getMyApps(@Ctx() context: Context): Promise<createAppOutput[]> {
    return new GeneratorService(context).getMyApps();
  }

  @Authorized("CREATOR")
  @Mutation(() => createAppOutput)
  async deleteApp(
    @Arg("appId") appId: number,
    @Ctx() context: Context
  ): Promise<createAppOutput> {
    return new GeneratorService(context).deleteApp(appId);
  }

  @Authorized("CREATOR")
  @Mutation(() => Boolean)
  async publishGame(
    @Arg("args") args: PublishGameInput,
    @Ctx() context: Context
  ): Promise<boolean> {
    return new GeneratorService(context).publishAppToGame(args);
  }
}
