import "reflect-metadata";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { GeneratorService } from "./services";
import { CreateAppInput, createAppOutput } from "./types/CreateApp";

@Resolver(() => createAppOutput)
export class AppCreateResolver {
  @Mutation(() => createAppOutput)
  async createApp(@Arg("arg") arg: CreateAppInput): Promise<createAppOutput> {
    return new GeneratorService().createApp(arg);
    // return {
    //     appId:'d',
    //     description:'e',
    //     fullscreen:false,
    //     height:993,
    //     icon:'',
    //     id:'erfu',
    //     license:'ei',
    //     name:'je',
    //     productName:'e',
    //     title:'s',
    //     titleChange:false,
    //     topMenu: false,
    //     version:'e',
    //     width:848

    // }
  }
  @Query(()=> String)
  async hello():Promise<String>{
    return "hello world"
  }
}
