import { ApolloError } from "apollo-server-micro";
import prisma from "lib/prisma";
import { Context } from "server/types/Context";
import { User } from "../types/User";

export class UserService {
      //Access the context
      context: Context;
      constructor(context: Context) {
          this.context = context;
      }
    async me():Promise<User>{
        const user = await prisma.user.findUnique({where:{
            email:this.context.user.email
        }})
        if(!user){
            throw new ApolloError('User Not found')
        }
        return user;
        return {
            company:'',
            name:'',
            email:'',
             image:'',
            role:''
        }
    }
}