import { Button, Image, Text } from "@mantine/core";
import Link from "next/link";
import { Home } from "tabler-icons-react";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Image mt={20} width={"30vw"} alt="404" src={"./404.svg"} />
      <Text mb={20} className="p-2 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400" weight={600}>Oops! I think you are lost</Text>
      <Text mb={80} size={'lg'} weight={400}>It looks like the page you are looking for does not exist.</Text>
      <Link href={"/"}>
        <Button
          leftIcon={<Home color="#9333ea" />}
          variant='white'
          color={'violet'}
        >
          Get Back to Home Sweet Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
