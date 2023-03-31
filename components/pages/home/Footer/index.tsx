import { useMantineColorScheme } from "@mantine/core";
import Logo from "components/layout/head/lib/Logo";
import ThemeSwitch from "components/layout/head/lib/ThemeSwitch";
import Link from "next/link";

function Footer() {
  const theme = useMantineColorScheme();
  return (
    <footer
      className={`flex w-full overflow-hidden ${
        theme.colorScheme == "dark" ? "bg-gray-700/20" : " bg-gray-200/30"
      } rounded-t-3xl`}
    >
      <div className="flex justify-start w-[45vw] p-10">
        <Logo />
      </div>
      <ul className="px-4 flex flex-col sm:flex-row sm:gap-10 justify-center items-center text-sm font-medium ">
        <li className="hover:underline">
          <Link href={"/home"}>Home</Link>
        </li>
        <li className="hover:underline">
          <Link href={"/collections"}>Collections</Link>
        </li>
        <li className="hover:underline">
          <Link href={"/latest"}>Latest</Link>
        </li>
      </ul>
      <div className=" flex justify-end w-[45vw] p-10">
        <div className="w-20">
          <ThemeSwitch expanded={true} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
