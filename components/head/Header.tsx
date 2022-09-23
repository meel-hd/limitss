import { Button } from "@mantine/core";
import Link from "next/link";
import Logo from "./lib/Logo";
import ThemeSwitch from "./lib/ThemeSwitch";

function Header() {
  return (
    <header className="shadow-sm h-12 px-2 flex flex-row justify-between items-center">
      <Logo width={40} />
      <Link href={'/'} >
        < Button variant="white" color={'violet'}>Home</Button>
      </Link>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
