import "reflect-metadata";
import { Resolver, Mutation, Arg } from "type-graphql";
import { PublicServices } from "./services";

@Resolver()
export class PublicResolver {
  @Mutation(() => Boolean)
  async sendToSlack(@Arg("message") message: string): Promise<boolean> {
    return new PublicServices().sendToSlack(message);
  }
}
