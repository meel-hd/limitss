import { Card } from "@mantine/core";
import LoggedInUser from "components/auth/LoggedInUser";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChartTreemap, Home,
  Menu2,
  Propeller
} from "tabler-icons-react";
import Logo from "./lib/Logo";
import NavbarLink from "./lib/NavbarLink";
import ThemeSwitch from "./lib/ThemeSwitch";

export type Tabs = "home" | "settings" | "setup" | "resources";

function Navigation({ activeTab }: { activeTab: Tabs }) {
  const [expanded, setExpanded] = useState(false);

  // set expanded to false if a click was outside of the navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expanded &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".navigation")
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expanded]);
  

  return (
    <Card
      color="violet"
      shadow={"xs"}
      style={{
        transition: expanded ? "width 0.2s ease-in" : '' //: "width 0.4s ease-in",
        // width: expanded ? "170px" : "60px",
        // width
        // ${expanded ? "w-[170px]" : "w-[60px]"}
      }}
      className={` fixed top-0 ${
        !expanded ? "w-full sm:w-[60px]" : "w-[170px] left-0 h-screen min-h-[380px] " 
      } 
      ${!expanded ? 'flex-row' : 'flex-col'}  sm:flex-col 
      sm:left-0 sm:h-screen sm:min-h-[380px] flex
      justify-between items-center
      overflow-visible px-1 select-none z-[200] 
      `}
    >
      <div className="flex flex-row sm:flex-col items-center w-full">
        <Link className={`${!expanded && "idden"} sm:flex`} href={"/home"}>
          <Logo width={30} withoutText={!expanded} />
        </Link>
        <div
          className={`${
            expanded ? "w-[100%]" : "w-full"
          } p-0 flex justify-end items-center`}
        >
          <Menu2
            color="gray"
            size={25}
            strokeWidth={1.5}
            className={`cursor-pointer mt-0 sm:mt-10 sm:mx-auto  active:scale-105`}
            onClick={() => setExpanded((oldVal) => !oldVal)}
          />
        </div>
      </div>

      <div
        className={`${
          !expanded ? "hidden" : "flex"
        } sm:flex flex-col items-center h-1/3 w-full`}
      >
        <NavbarLink
          expanded={expanded}
          Icon={Home}
          href="/home"
          active={activeTab == "home"}
          label="Home"
        />
        <NavbarLink
          expanded={expanded}
          Icon={Propeller}
          href="/setup"
          active={activeTab == "setup"}
          label="Setup"
        />
        <NavbarLink
          expanded={expanded}
          Icon={ChartTreemap}
          active={activeTab == "resources"}
          href="/resources"
          label="Resources"
        />
      </div>

      <div
        className={`${
          !expanded ? "hidden" : "flex"
        } sm:flex flex-col w-full justify-between items-center gap-[10px]`}
      >
        {/* <NavbarLink Icon={Settings} label="Settings" expanded={expanded} href={'/settings'} /> */}
        <ThemeSwitch expanded={expanded} size={25} />
        <LoggedInUser expanded={expanded} size={30} />
      </div>
    </Card>
  );
}

export default Navigation;
