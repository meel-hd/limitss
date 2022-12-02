import { ApolloError } from "apollo-server-micro";
import { CreateAppOutput } from "generated/graphql";
import prisma from "lib/prisma";
import { Context } from "server/types/Context";
import { UnauthorizedError } from "type-graphql";
import { CreateAppInput, createAppOutput } from "../types/CreateApp";

export class GeneratorService {
  context: Context;
  constructor(context: Context) {
    this.context = context;
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
        appId: args.appId,
        description: args.description,
        fullscreen: args.fullscreen,
        height: args.height,
        icon: args.icon,
        license: args.license,
        name: args.name,
        titleChange: args.titleChange,
        topMenu: args.topMenu,
        version: args.version,
        width: args.width,
        ownerId: user.id,
        link: args.link,
      },
    });

    if (!app) {
      throw new ApolloError("Failed to create app");
    }
    return app;
  }

  async getMyApps(): Promise<createAppOutput[]> {
    const userEmail = this.context.user.email;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (!user) {
      throw new UnauthorizedError();
    }

    const apps = await prisma.app.findMany({
      where: { ownerId: user.id },
      take: 10,
    });

    return apps;
  }
  async deleteApp(appId: number): Promise<CreateAppOutput> {
    const userEmail = this.context.user.email;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (!user) {
      throw new UnauthorizedError();
    }
    const app = await prisma.app.delete({
      where: {
        id: appId ,
      },
    });
    if (!app) {
      throw new ApolloError("Failed to delete app");
    }


    return app
  }
  // Class close Bracket
}
