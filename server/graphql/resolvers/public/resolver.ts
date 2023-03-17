import "reflect-metadata";
import { Resolver, Mutation, Arg } from "type-graphql";
import { PublicServices } from "./services";

@Resolver()
export class PublicResolver {
  @Mutation(() => Boolean)
  async joinNewsletter(@Arg("email") email: string): Promise<boolean> {
    return new PublicServices().joinNewsletter(email);
  }
}
