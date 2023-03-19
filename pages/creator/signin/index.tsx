import { Badge, Button, Card, Text } from "@mantine/core";
import Logo from "components/layout/head/lib/Logo";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BrandGithub } from "tabler-icons-react";
function SignInPage() {
  const { status, data: session } = useSession();
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
          <Badge variant="filled" color={'violet'} className="absolute top-10 -right-5 rotate-45" radius={5}>Creator Program</Badge>
          <h1 className="-mt-24 font-semibold">Sign In</h1>
          <div className="rounded-full shadow-md p-5  mb-2">
            <Logo width={80} withoutText={true} />
          </div>
          <Logo withoutIcon={true} />
          {/* <Text size={10} className="mt-7" color="dimmed">
            Works only with personal accounts not organization accounts for now.
          </Text> */}
          <Button
            onClick={() => signIn("github", { callbackUrl: "/creator/home" })}
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
            className="bg-violet-500 mt-5 hover:bg-violet-400 min-w-[120px]  shadow-lg h-[40px]"
          >
            Sign in with Github
          </Button>
          {status == "authenticated" && (
            <Link
              className="flex flex-col justify-center items-center"
              href={"/home"}
            >
              <span className="font-semibold mt-3">Or</span>{" "}
              <Text size={"xs"} className="text-violet-500 ">
                continue as {session.user.name.split(" ")[0]}
              </Text>
            </Link>
          )}
          <Text size={"xs"} className="mt-5 absolute bottom-5" color="dimmed">
            By continuing you agree to{" "}
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
