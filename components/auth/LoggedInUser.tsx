import { Avatar, Button, Text } from "@mantine/core";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
type Props = {
  expanded?: boolean,
  link?:string, 
}
function LoggedInUser({ expanded,link }: Props) {
  const { data: session, status } = useSession();
  return (
    <div>
      {status == "authenticated" ? (<Link href={link || '/settings'}>
        <div className="flex justify-around max-w-[110px] cursor-pointer truncate items-center">
          <Avatar
            alt={session.user.name}
            size={35}
            radius={"lg"}
            src={session.user.image}
          />
          {
            expanded && <Text className="truncate ml-4" size={'xs'}>{session.user.name}</Text>
          }
        </div></Link>
      ) : (
        <Button 
        onClick={() => signIn()}
        className={` bg-violet-400 hover:bg-violet-400 ${!expanded && "px-1 max-w-[60px]"}`}>{expanded ? "Sign In" : "Join"}</Button>
      )}
    </div>
  );
}

export default LoggedInUser;
