import NavigationArrows from "./lib/NavigationArrows";
import ThemeSwitch from "./lib/ThemeSwitch";

function Header() {
  return (
    <header className="shadow-md h-12 px-2 flex flex-row justify-between items-center">
      <h3>Logo</h3>
      {/* <NavigationArrows onlyBack={true} margin={10} /> */}
      <ThemeSwitch />
    </header>
  );
}

export default Header;
