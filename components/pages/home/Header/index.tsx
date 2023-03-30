import LoggedInUser from "components/auth/LoggedInUser";
import Logo from "components/layout/head/lib/Logo";

function Header() {
  return (
    <header className="w-full flex justify-between px-6 sm:px-12 py-4 items-center">
      <div className="flex items-center gap-[10vw] w-[40vw] ">
        <Logo width={25} gap={20} />
        <ul className="hidden md:flex justify-center gap-16 font-semibold items-center">
          <li>Home</li>
          <li>Collections</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className="flex items-center justify-end w-[30vw] gap-3 sm:gap-10 ">
        <LoggedInUser forCreators={false} link="/settings" />
      </div>
    </header>
  );
}

export default Header;
