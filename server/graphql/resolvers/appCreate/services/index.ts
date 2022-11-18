// import { PrismaClient } from "@prisma/client";
// import { decode, JwtPayload } from "jsonwebtoken";
// import { Context } from "../../auth/types/context";
import { ApolloError } from "apollo-server-micro";
import prisma from "lib/prisma";
import { CreateAppInput, createAppOutput } from "../types/CreateApp";

// const prisma = new PrismaClient();

export class GeneratorService {
  // Create Add the app of the user
  //   context: Context;
  //   constructor (context: Context) {
  //     this.context = context
  //   }

  async createApp(args: CreateAppInput): Promise<createAppOutput> {
    // // Extract the user email from the payload
    // const {id: CreatorEmail} = decode(this.context.authToken) as JwtPayload;
    // // Find the user in the database if not inform the user
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email: CreatorEmail,
    //   },
    // });
    // if (!user) {
    //   throw `User with email ${CreatorEmail} doesn't have an account`
    // }

    // // Create the app in the database
    // const app = await prisma.app.create({
    //   data: {
    //     title: args.title,
    //     ownerId: user.id,
    //     appId: args.appId,
    //     description: args.description,
    //     fullscreen: args.fullscreen,
    //     height: args.height,
    //     icon: args.icon,
    //     license: args.license,
    //     name: args.name,
    //     productName: args.productName,
    //     titleChange: args.titleChange,
    //     topMenu: args.topMenu,
    //     version: args.version,
    //     width: args.width,
    //   }
    // });
    // return {
    //   appId: app.appId,
    //   description: app.description,
    //   fullscreen: app.fullscreen,
    //   height: app.height,
    //   icon: app.icon,
    //   id: app.id as unknown as string,
    //   license: app.license,
    //   name: app.name,
    //   productName: app.productName,
    //   titleChange: app.titleChange,
    //   title: app.title,
    //   topMenu: app.topMenu,
    //   version: app.version,
    //   width: app.width,
    // };
    const app = await prisma.app.create({
      data: {
        appId: args.appId,
        description: args.description,
        fullscreen: args.fullscreen,
        height: args.height,
        icon: args.icon,
        license: args.license,
        name: args.name,
        productName: args.productName,
        title: args.title,
        titleChange: args.titleChange,
        topMenu: args.topMenu,
        version: args.version,
        width: args.width,
      },
    });
    if(!app){
      throw new ApolloError('Failed to create app')
    }
    console.log(app)
    return { ...args, id: "jesa" };
  }
}
