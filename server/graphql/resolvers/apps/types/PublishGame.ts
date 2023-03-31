import { Length } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class PublishGameInput {
  @Length(1, 185)
  @Field(() => String)
  name: string;

  @Length(1, 185)
  @Field(() => String)
  description: string;

  @Length(1, 185)
  @Field(() => String)
  license: string;

  @Length(1, 185)
  @Field(() => String)
  icon: string;

  @Length(1, 185)
  @Field(() => String)
  version: string;

  @Field(() => String)
  macInstaller: string;

  @Field(() => String)
  windowsInstaller: string;

  @Field(() => String)
  linuxInstaller: string;
}
