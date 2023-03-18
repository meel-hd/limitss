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

export type CreateAppInput = {
  alwaysOnTop: Scalars['Boolean'];
  appId: Scalars['String'];
  description: Scalars['String'];
  focus: Scalars['Boolean'];
  height: Scalars['Float'];
  icon: Scalars['String'];
  license: Scalars['String'];
  link: Scalars['String'];
  maximized: Scalars['Boolean'];
  name: Scalars['String'];
  version: Scalars['String'];
  width: Scalars['Float'];
};

export type CreateAppOutput = {
  __typename?: 'createAppOutput';
  alwaysOnTop: Scalars['Boolean'];
  appId: Scalars['String'];
  description: Scalars['String'];
  focus: Scalars['Boolean'];
  height: Scalars['Float'];
  icon: Scalars['String'];
  id: Scalars['Float'];
  license: Scalars['String'];
  link: Scalars['String'];
  maximized: Scalars['Boolean'];
  name: Scalars['String'];
  version: Scalars['String'];
  width: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createApp: CreateAppOutput;
  deleteApp: CreateAppOutput;
  githubMutation: Scalars['String'];
  sendToSlack: Scalars['Boolean'];
  updateUser: User;
};


export type MutationCreateAppArgs = {
  arg: CreateAppInput;
};


export type MutationDeleteAppArgs = {
  appId: Scalars['Float'];
};


export type MutationSendToSlackArgs = {
  message: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  args: UserArgs;
};

export type Query = {
  __typename?: 'Query';
  getMyApps: Array<CreateAppOutput>;
  github: Scalars['String'];
  me: User;
};

export type User = {
  __typename?: 'User';
  company?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

export type UserArgs = {
  company?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
};

export type CreateAppMutationVariables = Exact<{
  arg: CreateAppInput;
}>;


export type CreateAppMutation = { __typename?: 'Mutation', createApp: { __typename?: 'createAppOutput', name: string, description: string, license: string, icon: string, appId: string, version: string, width: number, height: number, maximized: boolean, alwaysOnTop: boolean, focus: boolean, id: number, link: string } };

export type DeleteAppMutationVariables = Exact<{
  appId: Scalars['Float'];
}>;


export type DeleteAppMutation = { __typename?: 'Mutation', deleteApp: { __typename?: 'createAppOutput', name: string } };

export type GetMyAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyAppsQuery = { __typename?: 'Query', getMyApps: Array<{ __typename?: 'createAppOutput', name: string, description: string, license: string, icon: string, appId: string, version: string, width: number, height: number, maximized: boolean, alwaysOnTop: boolean, focus: boolean, id: number, link: string }> };

export type SendToSlackMutationVariables = Exact<{
  message: Scalars['String'];
}>;


export type SendToSlackMutation = { __typename?: 'Mutation', sendToSlack: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', name: string, email: string, company?: string | null, role?: string | null, image: string } };

export type UpdateUserMutationVariables = Exact<{
  args: UserArgs;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', name: string, email: string, company?: string | null, role?: string | null, image: string } };


export const CreateAppDocument = gql`
    mutation CreateApp($arg: CreateAppInput!) {
  createApp(arg: $arg) {
    name
    description
    license
    icon
    appId
    version
    width
    height
    maximized
    alwaysOnTop
    focus
    id
    link
  }
}
    `;
export const DeleteAppDocument = gql`
    mutation DeleteApp($appId: Float!) {
  deleteApp(appId: $appId) {
    name
  }
}
    `;
export const GetMyAppsDocument = gql`
    query GetMyApps {
  getMyApps {
    name
    description
    license
    icon
    appId
    version
    width
    height
    maximized
    alwaysOnTop
    focus
    id
    link
  }
}
    `;
export const SendToSlackDocument = gql`
    mutation SendToSlack($message: String!) {
  sendToSlack(message: $message)
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    name
    email
    company
    role
    image
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation UpdateUser($args: UserArgs!) {
  updateUser(args: $args) {
    name
    email
    company
    role
    image
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
    DeleteApp(variables: DeleteAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteAppMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteAppMutation>(DeleteAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteApp', 'mutation');
    },
    GetMyApps(variables?: GetMyAppsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyAppsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyAppsQuery>(GetMyAppsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMyApps', 'query');
    },
    SendToSlack(variables: SendToSlackMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendToSlackMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendToSlackMutation>(SendToSlackDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SendToSlack', 'mutation');
    },
    Me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Me', 'query');
    },
    UpdateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;