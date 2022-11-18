import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => String)
    name: string
    @Field(() => String)
    email: string
    @Field(() => String,{nullable: true})
    company?: string
    @Field(() => String,{nullable: true})
    role?: string
    @Field(() => String)
    image: string
}

@InputType()
export class UserArgs{
    
    @Field(() => String)
    name: string
    @Field(() => String)
    email: string
    @Field(() => String,{nullable: true})
    company?: string
    @Field(() => String,{nullable: true})
    role?: string
    @Field(() => String)
    image: string
}