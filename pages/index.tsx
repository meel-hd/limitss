import { Button, Notification } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/head";
import CustomersApp from "../components/landing/CustomersApp";
import HeroSection from "../components/landing/Hero";

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
      <div className="w-full flex justify-center -mt-7 items-center">
        <div className="w-3 h-3 rounded-full bg-fuchsia-400 animate-bounce mr-2"></div>
        <div className="w-4 h-4 rounded-full bg-violet-400 animate-bounce mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-indigo-400 animate-bounce"></div>
      </div>
      <CustomersApp />
      {/* <Pricing /> */}
    </>
  );
};

export default Home;
