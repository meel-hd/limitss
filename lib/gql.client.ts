import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";

// TODO: Remove the nookies lib

const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string);

export const {
    CreateApp,Me,UpdateUser,GetMyApps,DeleteApp, SendToSlack
    
} = getSdk(gqlClient);

export const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            cacheTime: 1000 * 60 * 60 * 6, // 6 hours
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
        }
    }
});