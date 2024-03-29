import { Avatar, Button, Kbd, Loader, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import AuthorizedOnly from "components/auth/AuthorizedOnly";
import NavigationArrows from "components/layout/head/lib/NavigationArrows";
import ThemeSwitch from "components/layout/head/lib/ThemeSwitch";
import Navigation from "components/layout/head/Navigation";
import { Me } from "lib/gql.client";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import { User } from "server/graphql/resolvers/user/types/User";
import EditUserInfo from "./EditUserInfo";

function Settings() {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState<User>();
  const { data: session } = useSession();
  const { isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: () => Me(),
    onSuccess: (data) => setData(data.me),
  });
  return (
    <>
      <Head>
        <title>Limitss | Settings</title>
        <meta name="description" content="Manage your account settings"></meta>
      </Head>
      <Navigation activeTab="settings" />
      <AuthorizedOnly>
        <div className="w-full mt-15 sm:mt-4 pl-4 sm:pl-32">
          <NavigationArrows onlyBack={true} />
          <h1 className="mt-10">Settings</h1>
          <section className="w-full mt-3">
            <Text className="font-semibold">Theme</Text>
            <Kbd className="mt-2">Ctrl + B</Kbd>
            <div className="w-40 mt-2  px-10 ">
              <ThemeSwitch size={20} expanded={true} />
            </div>
          </section>
          <section className="w-full mt-3">
            <Text className="font-semibold">Account</Text>
            <div className="max-w-3xl mt-2 w-3/5 flex ">
              <Avatar
                radius={"xl"}
                size={150}
                src={data?.image || session?.user?.image}
              />
              <div className="px-4 py-2">
                <h2 className="font-semibold">
                  {data?.name || session?.user?.name}
                </h2>
                <Text ml={4} color={"dimmed"} size={"sm"}>
                  {session?.user?.email}
                </Text>
                {data && (
                  <>
                    <div className="mt-2 pl-2">
                      <p className="text-sm text-gray-500">
                        {data.company || "Not provided"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {data.role || "Not provided"}
                      </p>
                    </div>
                    <section className="w-full flex items-center justify-end">
                      <Button
                        onClick={() => setOpened(true)}
                        size="sm"
                        className="bg-violet-400 hover:bg-violet-400"
                      >
                        Edit
                      </Button>
                      <EditUserInfo
                        updateData={setData}
                        data={data}
                        opened={opened}
                        setOpened={setOpened}
                      />
                    </section>
                  </>
                )}
                {isLoading && <Loader mt={5} ml={5} color={"violet"} />}
                {isError && (
                  <Text size={"xs"} color={"red"}>
                    Something went wrong! <br />
                    Please refrech the page
                  </Text>
                )}
              </div>
            </div>
          </section>
          <button
            className="text-violet-400 mt-10"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </button>
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Settings;
