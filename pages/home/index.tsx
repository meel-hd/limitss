import { Modal, Skeleton, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import AppCard from "components/pages/home/AppCard";
import AppDetails from "components/pages/home/AppDetails";
import { CreateAppOutput } from "generated/graphql";
import { GetMyApps } from "lib/gql.client";
import Head from "next/head";
import { useEffect, useState } from "react";

function Home() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["GetMyApps"],
    queryFn: () => GetMyApps(),
  });
  useEffect(() => {
    refetch().catch((err) => 0);
  }, [refetch]);

  const [selectedApp, setSelectedApp] = useState<CreateAppOutput>();
  return (
    <>
      <Head>
        <title>Limitss | Home</title>
        <meta name="description" content="Home page"></meta>
      </Head>
      <Navigation activeTab="home" />
      <AuthorizedOnly>
        <div className="w-full py-5 mt-4 pl-4 sm:pl-32">
          <h1 className="font-semibold ">Your Apps</h1>
          {isLoading && (
            <div className="flex justify-center sm:justify-start  flex-wrap  overflow-hidden ">
              <Skeleton radius={"lg"} m={20} w={200} h={320} />
              <Skeleton radius={"lg"} m={20} w={200} h={320} />
            </div>
          )}
          {isError && (
            <Text size="xs" ml={20} color="red">
              Something went wrong! Please Refrech the page
            </Text>
          )}
          {data && (
            <div
              className="flex justify-center sm:justify-start  flex-wrap  overflow-hidden "
              // className="flex flex-col justify-center items-center sm:grid overflow-hidden sm:grid-cols-4 md:grid-csols-3 grid-rows-3 gap-2"
            >
              {data.getMyApps.map((app) => {
                return (
                  <AppCard
                    selectApp={() => {
                      setSelectedApp(app);
                    }}
                    key={app.id}
                    appIcon={app.icon}
                    appCompany={app.license}
                    appName={app.name}
                    description={app.description}
                  />
                );
              })}
              {data.getMyApps.length == 0 && (
                <div className="w-96 bg-violet-300/20  max-w-full rounded-xl  h-52 flex justify-center items-center flex-col">
                  <Text mb={30} size="lg" ml={20}>
                    You have no apps yet
                  </Text>
                </div>
              )}
            </div>
          )}
          {selectedApp && (
            <Modal
              closeButtonLabel="Back"
              styles={{
                title: {
                  marginLeft: 60,
                  fontSize: 20,
                  fontWeight: 600,
                },
              }}
              title={"App Details"}
              exitTransitionDuration={40000}
              fullScreen={true}
              onClose={() => setSelectedApp(null)}
              opened={selectedApp?.name?.length !== 0}
            >
              <AppDetails
                handleRefetch={() => {
                  refetch().catch((err) => console.log(err));
                  setSelectedApp(null);
                }}
                appDetails={selectedApp}
              />
            </Modal>
          )}
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Home;
