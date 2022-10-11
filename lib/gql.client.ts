import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";
import { getSdk } from "../generated/graphql";
import { parseCookies } from "nookies";


const cookies = parseCookies();
const token = cookies['token'] 

const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string,{
    headers:{
        token: token
    }
});

export const {
    CreateApp,
    Login,
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