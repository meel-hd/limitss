import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import { RequestsCard } from "components/resources/RequestsCard";
import Head from "next/head";

function Resources() {
  return (
    <>
      <Head>
        <title>Limitss | Home</title>
        <meta name="description" content="Home page"></meta>
      </Head>
      <Navigation activeTab="resources" />
      <AuthorizedOnly>
        <div className="w-full py-5 mt-4 pl-4 sm:pl-32">
          <div className="w-1/3 min-w-[180px]">
            <RequestsCard />
          </div>
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Resources;
