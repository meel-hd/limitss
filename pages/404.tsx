import { Button, Image, Text } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import NavigationArrows from "../components/layout/head/lib/NavigationArrows";

function NotFound() {
  return (
    <div className="p-4">
      <Head>
        <title>404 Not Found - I think you are lost.</title>
      </Head>
      <NavigationArrows onlyBack={true} />
      <div className="flex flex-col justify-center items-center text-center">
        <Image mt={20} width={"20vw"} alt="404" src={"./404.svg"} />
        <Text
          mb={20}
          className="p-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400"
          weight={600}
        >
          Oops! I think you are lost
        </Text>
        <Text mb={80} size={"lg"} weight={400}>
          It looks like the page you are looking for does not exist.
        </Text>
        <Link href={"/home"}>
          <Button variant="outline" color={"violet"}>
            Get Back to Home Sweet Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
