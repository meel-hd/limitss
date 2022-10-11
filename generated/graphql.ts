import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AppType = {
  __typename?: 'AppType';
  appId: Scalars['String'];
  description: Scalars['String'];
  fullscreen: Scalars['Boolean'];
  height: Scalars['Float'];
  icon: Scalars['String'];
  license: Scalars['String'];
  name: Scalars['String'];
  productName: Scalars['String'];
  title: Scalars['String'];
  titleChange: Scalars['Boolean'];
  topMenu: Scalars['Boolean'];
  version: Scalars['String'];
  width: Scalars['Float'];
};

export type CreateAppInput = {
  appId: Scalars['String'];
  description: Scalars['String'];
  fullscreen: Scalars['Boolean'];
  height: Scalars['Float'];
  icon: Scalars['String'];
  license: Scalars['String'];
  name: Scalars['String'];
  productName: Scalars['String'];
  title: Scalars['String'];
  titleChange: Scalars['Boolean'];
  topMenu: Scalars['Boolean'];
  version: Scalars['String'];
  width: Scalars['Float'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApp: CreateAppOutput;
  login: LoginOutput;
  register: RegisterOutput;
};


export type MutationCreateAppArgs = {
  arg: CreateAppInput;
};


export type MutationLoginArgs = {
  arg: LoginInput;
};


export type MutationRegisterArgs = {
  arg: RegisterInput;
};

export type Query = {
  __typename?: 'Query';
  appWorking: Scalars['Boolean'];
};

export type RegisterInput = {
  company: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  token: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  apps: AppType;
  company: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  role: Scalars['String'];
};

export type CreateAppOutput = {
  __typename?: 'createAppOutput';
  appId: Scalars['String'];
  description: Scalars['String'];
  fullscreen: Scalars['Boolean'];
  height: Scalars['Float'];
  icon: Scalars['String'];
  id: Scalars['String'];
  license: Scalars['String'];
  name: Scalars['String'];
  productName: Scalars['String'];
  title: Scalars['String'];
  titleChange: Scalars['Boolean'];
  topMenu: Scalars['Boolean'];
  version: Scalars['String'];
  width: Scalars['Float'];
};

export type CreateAppMutationVariables = Exact<{
  arg: CreateAppInput;
}>;


export type CreateAppMutation = { __typename?: 'Mutation', createApp: { __typename?: 'createAppOutput', productName: string, name: string, description: string, license: string, icon: string, appId: string, version: string, title: string, width: number, height: number, fullscreen: boolean, titleChange: boolean, topMenu: boolean, id: string } };

export type LoginMutationVariables = Exact<{
  arg: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', token: string, user: { __typename?: 'User', fullName: string, email: string, company: string, role: string } } };


export const CreateAppDocument = gql`
    mutation CreateApp($arg: CreateAppInput!) {
  createApp(arg: $arg) {
    productName
    name
    description
    license
    icon
    appId
    version
    title
    width
    height
    fullscreen
    titleChange
    topMenu
    id
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($arg: LoginInput!) {
  login(arg: $arg) {
    user {
      fullName
      email
      company
      role
    }
    token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateApp(variables: CreateAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAppMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAppMutation>(CreateAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateApp', 'mutation');
    },
    Login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;