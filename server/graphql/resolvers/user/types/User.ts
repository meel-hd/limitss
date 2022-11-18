import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => String)
    name: string
    @Field(() => String)
    email: string
    @Field(() => String)
    company?: string
    @Field(() => String)
    role?: string
    @Field(() => String)
    image: string
}