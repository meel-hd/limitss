import { Length } from "class-validator"
import { Field, InputType, ObjectType } from "type-graphql"

@ObjectType()
export class AppType {
    
    @Length(1,185)
    @Field(() => String)
    name: string 

    @Length(1,185)
    @Field(() => String)
    link: string

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

    @Field(() => Number)
    width: number

    @Field(() => Number)
    height: number

    @Field(() => Boolean)
    maximized: boolean

    @Field(() => Boolean)
    alwaysOnTop: boolean

    @Field(() => Boolean)
    focus: boolean
}

@InputType()
export class CreateAppInput {    
    @Length(1,185)
    @Field(() => String)
    name: string 

    @Length(1,185)
    @Field(() => String)
    link: string

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

    @Field(() => Number)
    width: number

    @Field(() => Number)
    height: number

    @Field(() => Boolean)
    maximized: boolean

    @Field(() => Boolean)
    alwaysOnTop: boolean

    @Field(() => Boolean)
    focus: boolean
}


@ObjectType()
export class createAppOutput extends AppType {
    @Field(() => Number)
    id: number
}