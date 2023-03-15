import { Button, useMantineColorScheme } from "@mantine/core";
import AlphaRelease from "components/pages/landing/AlphaRelease";
import AlphaReleasePricing from "components/pages/landing/AlphaReleasePricing";
import Compatibility from "components/pages/landing/Compatibility";
import Features from "components/pages/landing/Features";
import Footer from "components/pages/landing/Footer";
import JoinInvitation from "components/pages/landing/Invitation";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/head";
import HeroSection from "../components/pages/landing/Hero";
import Walkthrought from "../components/pages/landing/Walkthrough";
import { Image } from "@mantine/core";
import { useEffect } from "react";
import { useColorScheme } from "@mantine/hooks";

export const MainColor = "#1C1C28";

const Home: NextPage = () => {
  const theme = useMantineColorScheme();
  useEffect(() => {
    theme.toggleColorScheme("dark");
  }, [theme]);

  return (
    <main
      style={{
        backgroundColor: MainColor,
        color: "white",
      }}
    >
      <Head>
        <title>
          Limitss Build Desktop Apps from your Webapp Faster with no Code
        </title>
        <meta
          name="description"
          content="Build Native Desktop Apps from Webapps without Code."
        />
      </Head>
      <Header />
      <HeroSection />
      <section className=" flex justify-center items-center">
        <Image
          src="/images/q.png"
          alt="hero"
          width={800}
          className="max-w-[90vw] shadow-lg overflow-hidden rounded-xl"
        />
      </section>
      <Features />
      <Walkthrought />
      {/* <CustomersApp /> */}
      <AlphaRelease />
      <Compatibility />
      <JoinInvitation />
      <AlphaReleasePricing />
      <Footer />
    </main>
  );
};

export default Home;
