import { Button, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";

function Header() {
  const theme = useMantineTheme();
  return (
    <header
      style={{
        backgroundColor: theme.colorScheme == "light" ? "white" : "#1a1b1e",
      }}
      className="fixed z-[300] w-full flex justify-between h-14 border-b-[1px]d shadohw-lg px-5 items-center"
    >
      <div className="flex justify-center items-center">
        <Text
          color={theme.colorScheme == "dark" ? theme.white : ""}
          className={"font-semibold"}
          ml={25}
        >
          Company
        </Text>
        <Text
          color={theme.colorScheme == "dark" ? theme.white : ""}
          className={"font-semibold"}
          ml={25}
        >
          Blog
        </Text>
        <Text
          color={theme.colorScheme == "dark" ? theme.white : ""}
          className={"font-semibold"}
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
    </header>
  );
}

export default Header;
