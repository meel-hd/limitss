import { Skeleton, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import { GetMyApps } from "lib/gql.client";
import Head from "next/head";
import { useEffect } from "react";
import AppCard from "./utils/AppCard";

function Home() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["GetMyApps"],
    queryFn: () => GetMyApps(),
  });
  useEffect(() => {
    refetch().catch((err) => 0);
  }, [refetch]);
  return (
    <>
      <Head>
        <title>Limitss | Home</title>
        <meta name="description" content="Home page"></meta>
      </Head>
      <Navigation activeTab="home" />
      <AuthorizedOnly>
        <div className="w-full mt-4 pl-4 sm:pl-32">
          <h1 className="font-semibold mt-5">Your Apps</h1>
          {isLoading && <div className="flex justify-center sm:justify-start  flex-wrap  overflow-hidden ">
            <Skeleton  m={20} w={200} h={320} />
            <Skeleton  m={20} w={200} h={320} />
            </div>}
          {isError && <Text size='xs' ml={20} color='red'>Something went wrong! Please Refrech the page</Text>}
          {data && (
            <div 
            className="flex justify-center sm:justify-start  flex-wrap  overflow-hidden "
            // className="flex flex-col justify-center items-center sm:grid overflow-hidden sm:grid-cols-4 md:grid-csols-3 grid-rows-3 gap-2"
            >
              {data.getMyApps.map((app) => {
                return (
                  <AppCard
                    key={app.id}
                    appIcon={app.icon}
                    appCompany={app.license}
                    appName={app.name}
                    description={app.description}
                  ></AppCard>
                );
              })}
            </div>
          )}
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Home;
