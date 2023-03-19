import { useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { MainColor } from "pages";
import Search from "../shared/Search";
import Logo from "./lib/Logo";

const LINKS = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Join",
    href: "/signin",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Header({
  minimal,
  notFixed,
  forceColor,
}: {
  minimal?: boolean;
  notFixed?: boolean;
  forceColor?: string;
}) {
  const [scroll] = useWindowScroll();
  return (
    <header
      className={`${
        !notFixed && "fixed z-[300]"
      } 
      ${
        scroll.y > 0
          && `backdrop-blur-sm bg-[${MainColor}]/10`
      }
      w-full flex justify-between h-14  px-5 md:px-32 items-center`}
    >
      <Link href={"/"}>
        <Logo textSize={"lg"} gap={14} width={35} forceColor={forceColor} />
      </Link>
      {!minimal && (
        <>
          <div className="flex justify-center items-center"></div>
          <div className="flex justify-center items-center">
            <div className="hidden sm:flex justify-center gap-6 items-center font-semibold mr-14">
              {LINKS.map((link) => (
                <Link
                  className="hover:opacity-90"
                  key={link.href + link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Search />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
