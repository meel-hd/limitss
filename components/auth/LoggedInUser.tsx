import { Avatar, Button, MantineNumberSize, Text } from "@mantine/core";
import { useSession } from "next-auth/react";
import Link from "next/link";
type Props = {
  expanded?: boolean;
  link?: string;
  size?: MantineNumberSize;
  forCreators?: boolean;
};
function LoggedInUser({ expanded, link, size, forCreators }: Props) {
  const { data: session, status } = useSession();
  return (
    <div>
      {status == "authenticated" ? (
        <Link href={link || "/creator/settings"}>
          <div className="flex justify-around max-w-[110px] cursor-pointer truncate items-center">
            <Avatar
              alt={session.user.name}
              size={size || 35}
              radius={"lg"}
              src={session.user.image}
            />
            {expanded && (
              <Text className="truncate ml-4" size={"xs"}>
                {session.user.name}
              </Text>
            )}
          </div>
        </Link>
      ) : (
        <Link href={forCreators ? "/creator/signin" : '/signin'}>
          <Button
            className={` bg-violet-400 hover:bg-violet-400 ${
              !expanded && "px-1 max-w-[60px]"
            }`}
          >
            {expanded ? "Sign In" : "Join"}
          </Button>
        </Link>
      )}
    </div>
  );
}

export default LoggedInUser;
