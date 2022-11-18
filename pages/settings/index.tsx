import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import { signOut } from "next-auth/react";
import Head from "next/head";

function Settings() {
  return (
    <>
    <Head>
      
    <title>
          Limitss | Settings
        </title>
        <meta
          name="description"
          content="Manage your account settings"
        ></meta>
    </Head>
      <Navigation activeTab="settings" />
      <AuthorizedOnly>
        <div className="w-full pl-44">
          <h1>Settings</h1>
          <button className="text-violet-400 mt-10" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign Out
          </button>
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Settings;
