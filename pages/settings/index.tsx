import { Avatar, Button, Text } from "@mantine/core";
import AuthorizedOnly from "components/auth/AuthorizedOnly";
import ThemeSwitch from "components/head/lib/ThemeSwitch";
import Navigation from "components/head/Navigation";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

function Settings() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Limitss | Settings</title>
        <meta name="description" content="Manage your account settings"></meta>
      </Head>
      <Navigation activeTab="settings" />
      <AuthorizedOnly>
        <div className="w-full mt-10 pl-44">
          <h1>Settings</h1>
          <section className="w-full flex items-center justify-end">
          <div className="w-40  p-2 rounded-full shadow-sm">
            <ThemeSwitch size={20} expanded={true} />
          </div></section>
          <div className="max-w-3xl mt-5 w-3/5 flex ">
            <Avatar radius={"xl"} size={150} src={session.user.image} />
            <div className="px-4 py-2">
              <h2 className="font-semibold">{session.user.name}</h2>
              <Text ml={4} color={"dimmed"} size={"sm"}>
                {session.user.email}
              </Text>
              <div className="mt-2 pl-2">
                <p className="uppercase">Company</p>
                <p>Role</p>
              </div>
          <section className="w-full flex items-center justify-end">
                <Button size="sm" className="bg-violet-400 hover:bg-violet-400">Edit</Button>
              </section>
            </div>
          </div>
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
