import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import Head from "next/head";

function Home() {
  return (
    <>
    <Head>
    <title>
          Limitss | Home
        </title>
        <meta
          name="description"
          content="Home page"
        ></meta>
    </Head>
      <Navigation activeTab="home"/>
      <AuthorizedOnly>
        <div className="w-full text-center">home</div>
      </AuthorizedOnly>
    </>
  );
}

export default Home;
