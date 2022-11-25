import { Button, Text } from "@mantine/core";
import PrimaryBtn from "components/lib/PrimaryBtn";
import { useSession } from "next-auth/react";
import Link from "next/link";

function AuthorizedOnly({ children }) {
  const { status ,data:session} = useSession();
  return (
    <>
      {status == "authenticated" && session.user.email? (
        children
      ) : (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <Text size={'lg'} my={10}>You are not signed in</Text>
          <Link href={"/signin"}>
            <Button 
            className=" bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]">Sign In</Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default AuthorizedOnly;
