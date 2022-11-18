import "reflect-metadata";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { GeneratorService } from "./services";
import { CreateAppInput, createAppOutput } from "./types/CreateApp";

@Resolver(() => createAppOutput)
export class AppCreateResolver {
  @Mutation(() => createAppOutput)
  async createApp(@Arg("arg") arg: CreateAppInput): Promise<createAppOutput> {
    return new GeneratorService().createApp(arg);
  }
  @Query(()=> String)
  async hello():Promise<String>{
    return "hello world"
  }
}
