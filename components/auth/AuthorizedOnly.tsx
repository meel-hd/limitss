import { Button, LoadingOverlay, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Me } from "lib/gql.client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CreatorOnly from "./CreatorOnly";

function AuthorizedOnly({ children, forCreators = false }) {
  const { status, data: session } = useSession();

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => Me(),
  });
  return (
    <>
      <LoadingOverlay visible={status == "loading" || isLoading} />
      {status == "authenticated" && session.user.email && user?.me.email ? (
        // if user is not a creator, show the children
        !forCreators ? (
          children
        ) : (
          // if it is a CREATOR view check if the user is a creator
          <CreatorOnly user={user.me}>{children}</CreatorOnly>
        )
      ) : (
        status != "loading" &&
        !isLoading && (
          <div className="w-full h-screen flex justify-center items-center flex-col">
            <Text size={"lg"} my={10}>
              You are not signed in
            </Text>
            <Link href={forCreators ? "/creator/signin" : "/signin"}>
              <Button className=" bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]">
                Sign In
              </Button>
            </Link>
          </div>
        )
      )}
    </>
  );
}

export default AuthorizedOnly;
