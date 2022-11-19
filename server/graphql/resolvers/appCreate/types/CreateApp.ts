import { Length } from "class-validator"
import { Field, InputType, ObjectType } from "type-graphql"

@ObjectType()
export class AppType {
    @Length(1,185)
    @Field(() => String)
    productName: string
    
    @Length(1,185)
    @Field(() => String)
    name: string

    @Length(1,185)
    @Field(() => String)
    description: string
    
    @Length(1,185)
    @Field(() => String)
    license: string
    
    // TODO: Figure out how to add a propper lenght of icon's base46 string in the db
    @Length(1,185)
    @Field(() => String)
    icon: string
    
    @Length(1,185)
    @Field(() => String)
    appId: string
    
    @Length(1,185)
    @Field(() => String)
    version: string
    
    @Length(1,185)
    @Field(() => String)
    title: string

    @Field(() => Number)
    width: number

    @Field(() => Number)
    height: number

    @Field(() => Boolean)
    fullscreen: boolean

    @Field(() => Boolean)
    titleChange: boolean

    @Field(() => Boolean)
    topMenu: boolean
}

@InputType()
export class CreateAppInput {
    @Field(() => String)
    @Length(1,185)
    productName: string
    
    @Length(1,185)
    @Field(() => String)
    name: string

    @Length(1,185)
    @Field(() => String)
    description: string
    
    @Length(1,185)
    @Field(() => String)
    license: string
    
    // TODO: Figure out how to add a propper lenght of icon's base46 string in the db
    @Length(1,185)
    @Field(() => String)
    icon: string
    
    @Length(1,185)
    @Field(() => String)
    appId: string
    
    @Length(1,185)
    @Field(() => String)
    version: string
    
    @Length(1,185)
    @Field(() => String)
    title: string

    @Field(() => Number)
    width: number

    @Field(() => Number)
    height: number

    @Field(() => Boolean)
    fullscreen: boolean

    @Field(() => Boolean)
    titleChange: boolean

    @Field(() => Boolean)
    topMenu: boolean
}


@ObjectType()
export class createAppOutput extends AppType {
    @Field(() => Number)
    id: number
}