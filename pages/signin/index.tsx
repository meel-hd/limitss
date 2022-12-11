import PrimaryBtn from "components/lib/PrimaryBtn";
import Head from "next/head";
import Header from "../../components/head";
import { signIn, useSession } from "next-auth/react";
import { Avatar, Button, Card, Text } from "@mantine/core";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { BrandGithub } from "tabler-icons-react";
import Logo from "components/head/lib/Logo";
import Link from "next/link";
function SignInPage() {
  const { status, data: session } = useSession();
  const rounter = useRouter();
  return (
    <>
      <Head>
        <title>Limitss Sign In to your Account and Manage your Apps</title>
        <meta
          name="description"
          content="Login to Limitss and Manage your Desktop App From The Dashboard."
        ></meta>
      </Head>
      {/* <Header minimal={true} /> */}
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Card
          radius="xl"
          shadow={"sm"}
          className="w-[27%] min-w-[350px] h-[500px] flex flex-col justify-center items-center"
        >
          <h1 className="-mt-24 font-semibold">Sign In</h1>
          <div className="rounded-full shadow-md p-5  mb-2">
            <Logo width={80} withoutText={true} />
          </div>
          <Logo withoutIcon={true} />
          <Button
            onClick={() => signIn("github", { callbackUrl: "/home" })}
            styles={{
              root: {
                ":disabled": {
                  backgroundColor: "rgb(99, 102 ,241)",
                  color: "#fff",
                },
              },
            }}
            leftIcon={<BrandGithub color="#fff" />}
            loading={status == "loading"}
            className="bg-violet-500 mt-10 hover:bg-violet-400 min-w-[120px]  shadow-lg h-[40px]"
          >
            Sign in with Github
          </Button>
          {status == "authenticated" && (
            <Link
              className="flex flex-col justify-center items-center"
              href={"/home"}
            >
              <span className="font-semibold mt-3">Or</span>  <Text size={'xs'} className="text-violet-500 ">continue as {session.user.name.split(' ')[0]}</Text>
            </Link>
          )}
          <Text size={"xs"} className="mt-5" color="dimmed">
            By continuing you agree to our{" "}
            <Link href="/terms" className="text-violet-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-violet-500">
              Privacy Policy
            </Link>
          </Text>
        </Card>
      </div>
    </>
  );
}

export default SignInPage;
