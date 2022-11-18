import PrimaryBtn from "components/lib/PrimaryBtn";
import Head from "next/head";
import Header from "../../components/head";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mantine/core";
import { useEffect } from "react";
import { useRouter } from "next/router";
function SignInPage() {
  const { status } = useSession();
  const rounter = useRouter()
  useEffect(()=>{
    if(status== 'authenticated'){
      rounter.push('/home')
    }
  },[rounter, status])
  return (
    <>
      <Head>
        <title>Limitss Log In to your Account and Manage your Apps</title>
        <meta
          name="description"
          content="Login to Limitss and Manage your Desktop App From The Dashboard."
        ></meta>
      </Head>
      <Header minimal={true} />
      <div className="w-full flex flex-row justify-start items-center">
        <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center sm:items-start px-10 sm:px-20 py-32">
          <Button
          onClick={() =>signIn('github',{callbackUrl:'/home'})}
            styles={{
              root: {
                ":disabled": {
                  backgroundColor: "rgb(99, 102 ,241)",
                  color: "#fff",
                },
              },
            }}
            loading={status == "loading"}
            className=" bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]"
          >
            Sign in with Github
          </Button>
        </div>
        <div className="hidden sm:flex flex-col justify-center items-center sm:w-1/2 h-[90vh]">
          <div className="w-4/6 h-7 rotate-45 bg-violet-200 rounded-tr-full shadow-lg rounded-bl-full"></div>
          <div className="w-60 h-60 bg-fuchsia-300 rounded-tl-full rounded-br-full"></div>
          <div className="w-3/6 h-7 rotate-45 bg-violet-300 rounded-tr-full rounded-bl-full"></div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
