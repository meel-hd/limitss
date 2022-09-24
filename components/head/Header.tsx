import { Button } from "@mantine/core";
import Link from "next/link";
import Logo from "./lib/Logo";
import ThemeSwitch from "./lib/ThemeSwitch";

function Header() {
  return (
    <header className="shadow-sm h-12 px-2 flex flex-row justify-between items-center">
      <Logo width={40} />
      <div>
        <Link href={"/"}>
          <Button className="hover:underline" variant="white" color={"violet"}>
            Home
          </Button>
        </Link>
        <Link href={"/docs"}>
          <Button className="hover:underline" variant="white" color={"violet"}>
            Docs
          </Button>
        </Link>
        <Link href={"/pricing"}>
          <Button className="hover:underline" variant="white" color={"violet"}>
            Pricing
          </Button>
        </Link>
      </div>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
