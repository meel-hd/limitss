import { Button } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/head";
import HeroSection from "../components/landing/Hero";
import Pricing from "../components/landing/Pricing";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          DesWapp Build Desktop Apps from your Webapp Faster with no Code
        </title>
        <meta
          name="description"
          content="Build Native Desktop Apps from Webapps without Code."
        />
      </Head>
      <Header />
      <div className="flex w-full min-h-screen justify-center items-center">
        <HeroSection  >
          {<Link href={'/setup'}>
            <Button className="bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]" >Get Started</Button>
          </Link>}
        </HeroSection>
      </div>
      <Pricing />
    </>
  );
};

export default Home;
