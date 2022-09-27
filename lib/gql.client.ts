import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";
import { getSdk } from "../generated/graphql";

const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string);

export const {
    CreateApp
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
})