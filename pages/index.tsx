import SupportedPlatforms from "components/pages/landing/Compatibility/SupportedPlatforms";
import Features from "components/pages/landing/Features";
import Footer from "components/pages/landing/Footer";
import JoinInvitation from "components/pages/landing/Invitation";
import NewReleases from "components/pages/landing/NewReleases";
import Newsletter from "components/pages/landing/Newsletter";
import TheBest from "components/pages/landing/TheBest";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/head";
import HeroSection from "../components/pages/landing/Hero";

export const MainColor = "#1C1C28";

const Home: NextPage = () => {
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
      <Header forceColor="white"/>
      <HeroSection />
      <SupportedPlatforms />
      <Features />
      <NewReleases />
      <TheBest />
      <JoinInvitation />
      <Newsletter />
      <Footer forceColor="white"/>
    </main>
  );
};

export default Home;
