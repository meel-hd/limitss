import { Button, Text, useMantineTheme } from "@mantine/core";
import LoggedInUser from "components/auth/LoggedInUser";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "./lib/Logo";

function Header({ minimal }: { minimal?: boolean }) {
  const theme = useMantineTheme();
  const { status } = useSession();
  return (
    <header
      style={{
        backgroundColor: theme.colorScheme == "light" ? "white" : "#1a1b1e",
      }}
      className="fixed hover:shadow-sm z-[300] w-full flex justify-between h-14 border-b-[1px]d shadohw-lg px-5 items-center"
    >
      <Link href={"/"}>
        <a>
          <Logo width={35} />
        </a>
      </Link>
      {!minimal && (
        <>
          <div className="flex justify-center items-center">
            <Text
              className="hidden sm:flex"
              color={theme.colorScheme == "dark" ? theme.white : "dimmed"}
              weight={400}
              ml={25}
            >
              Company
            </Text>
            <Text
              className="hidden sm:flex"
              color={theme.colorScheme == "dark" ? theme.white : "dimmed"}
              weight={400}
              ml={25}
            >
              Blog
            </Text>
            <Text
              className="hidden sm:flex"
              color={theme.colorScheme == "dark" ? theme.white : "dimmed"}
              weight={400}
              ml={25}
            >
              Careers
            </Text>
          </div>
          <div className="flex justify-center items-center">
            {status == "authenticated" ? (
              <LoggedInUser size={32} link="/home" />
            ) : (
              <Link href={"/signin"}>
                <Button className="bg-gradient-to-r from-indigo-500 px-4 to-violet-400 hover:opacity-70">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
