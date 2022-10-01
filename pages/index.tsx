import { Button } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title> DesWapp  Build Desktop Apps from your Webapp Faster with no Code</title>
        <meta name="description" content="Build Native Desktop Apps from Webapps without Code." />
      </Head>
      <main className="min-h-screen flex-1 flex flex-col justify-center items-center  p-5 ">
        <h1 className="text-6xl">
          Welcome to{" "}
          <a className="hover:underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400 font-semibold font-mono  " href="#">
          DesWapp
          </a>
        </h1>
        <Link href={'/setup'}>
        <Button
          className="bg-gradient-to-r from-indigo-500 to-violet-400 hover:shadow-0xl"
          mt={50}
        >
          Get Started
        </Button>
        </Link>
      </main>
    </>
  );
};

export default Home;
