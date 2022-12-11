import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import ActionsResources from "components/resources/ActionsResources";
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
        <div className="w-full py-5 mt-4 pl-0 sm:pl-32 flex flex-wrap">
          <div className="w-full sm:w-1/3 min-w-[180px] sm:mr-20">
            <RequestsCard />
          </div>
          <div className="w-full sm:w-1/2 min-w-[380px]  mt-10">
            <ActionsResources />
          </div>
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Resources;
