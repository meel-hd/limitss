import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "server/graphql/resolvers/user/types/User";
import { UnauthorizedError } from "type-graphql";

export class Context {
  req?: NextApiRequest;
  res?: NextApiResponse;
  user?:User;
}
export class UserContext extends Context {
  user!: User;
  static errorDomain = 'UserContextErrorDomain'
  static async userFromId(id:string):Promise<User>{
    let user = await prisma.user.findUnique({
      where:{
        id:id
      }
    })
    if (!user){
      throw new UnauthorizedError()
    }
    return user
  }
}