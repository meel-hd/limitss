import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Navigation from "components/head/Navigation";
import ActionsResources from "components/resources/ActionsResources";
import { RequestsCard } from "components/resources/RequestsCard";
import Head from "next/head";

function Resources() {
  return (
    <>
      <Head>
        <title>Limitss | Resources</title>
        <meta name="description" content="Resources page"></meta>
      </Head>
      <Navigation activeTab="resources" />
      <AuthorizedOnly>
        <div className="w-full py-5 mt-10 pl-0 sm:pl-32 flex flex-wrap">
          <div className="w-full sm:w-1/2 min-w-[380px] sm:mr-20 mt-5">
            <ActionsResources />
          </div>
          <div className="w-full sm:w-1/3 min-w-[180px] mt-5 sm:mt-0 ">
            <RequestsCard />
          </div>
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Resources;
