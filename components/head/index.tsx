import { Button, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Logo from "./lib/Logo";

function Header({ minimal }: { minimal?: boolean }) {
  const theme = useMantineTheme();
  return (
    <header
      style={{
        backgroundColor: theme.colorScheme == "light" ? "white" : "#1a1b1e",
      }}
      className="fixed hover:shadow-sm z-[300] w-full flex justify-between h-14 border-b-[1px]d shadohw-lg px-5 items-center"
    >
      <Logo width={35} />
      { !minimal &&
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
            <Link href={"/login"}>
              <Button mr={10} color={"violet"} variant="white">
                Log in
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button className="bg-gradient-to-r from-indigo-500 to-violet-400 hover:opacity-70">
                Register
              </Button>
            </Link>
          </div>
        </>
      }
    </header>
  );
}

export default Header;
