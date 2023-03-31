import LoggedInUser from "components/auth/LoggedInUser";
import Logo from "components/layout/head/lib/Logo";
import Search from "components/layout/shared/Search";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full flex justify-between px-6 sm:px-12 py-4 items-center">
      <div className="flex items-center gap-[10vw] w-[40vw] ">
        <Logo width={25} gap={20} />
        <ul className="hidden md:flex justify-center gap-16 font-semibold items-center">
          <li className="hover:scale-[1.03] duration-150">
            <Link href={"/home"}>Home</Link>
          </li>
          <li className="hover:scale-[1.03] duration-150">
            <Link href={"/collections"}>Collections</Link>
          </li>
          <li className="hover:scale-[1.03] duration-150">
            <Link href={"/latest"}>Latest</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end w-[30vw] gap-3 sm:gap-10 ">
        <Search onlySimple={true} />
        <LoggedInUser forCreators={false} link="/settings" />
      </div>
    </header>
  );
}

export default Header;
