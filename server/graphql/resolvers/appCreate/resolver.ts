import "reflect-metadata";
import { Context } from "server/types/Context";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { GeneratorService } from "./services";
import { CreateAppInput, createAppOutput } from "./types/CreateApp";

@Resolver(() => createAppOutput)
export class AppCreateResolver {
  @Mutation(() => createAppOutput)
  async createApp(@Arg("arg") arg: CreateAppInput, @Ctx() context:Context): Promise<createAppOutput> {
    return new GeneratorService(context).createApp(arg);
  }
  @Query(()=> String)
  async hello():Promise<String>{
    return "hello world"
  }
}
