import { ApolloError } from "apollo-server-micro";
import prisma from "lib/prisma";
import { Context } from "server/types/Context";
import { UnauthorizedError } from "type-graphql";
import { CreateAppInput, createAppOutput } from "../types/CreateApp";


export class GeneratorService {
    context: Context;
    constructor (context: Context) {
      this.context = context
    }

  async createApp(args: CreateAppInput): Promise<createAppOutput> {
    const CreatorEmail = this.context.user.email;
    const user = await prisma.user.findUnique({
      where: {
        email: CreatorEmail,
      },
    });
    if (!user) {
      throw new UnauthorizedError();
    }

    const app = await prisma.app.create({
      data: {
        title: args.title,
        ownerId: user.id,
        appId: args.appId,
        description: args.description,
        fullscreen: args.fullscreen,
        height: args.height,
        icon: args.icon,
        license: args.license,
        name: args.name,
        productName: args.productName,
        titleChange: args.titleChange,
        topMenu: args.topMenu,
        version: args.version,
        width: args.width,
      }
    });
    
    if(!app){
      throw new ApolloError('Failed to create app')
    }
    return app;
  }
}
