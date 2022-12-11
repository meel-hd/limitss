import { Card } from "@mantine/core";
import LoggedInUser from "components/auth/LoggedInUser";
import Link from "next/link";
import { useState } from "react";
import {
  ChartTreemap,
  ChevronsRight,
  Home,
  Propeller
} from "tabler-icons-react";
import Logo from "./lib/Logo";
import NavbarLink from "./lib/NavbarLink";
import ThemeSwitch from "./lib/ThemeSwitch";

export type Tabs = "home" | "settings" | "setup" | "resources";

function Navigation({ activeTab }: { activeTab: Tabs }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card
      color="violet"
      shadow={"xl"}
      style={{
        transition: expanded ? "width 0.2s ease-in" : "width 0.4s ease-in",
        width: expanded ? "170px" : "60px",
      }}
      className={` min-h-[380px] overflow-visible hidden px-1 sm:flex z-[200] select-none justify-between items-center flex-col fixed top-0 left-0 h-screen  pt-2`}
    >
      <div className="justify-start">
        <Link href={"/home"}>
            <Logo width={30} withoutText={!expanded} />
        </Link>
        <div
          className={`${
            expanded ? "w-[100%]" : "w-full"
          } p-0 flex justify-end items-center`}
        >
          <ChevronsRight
            color="gray"
            size={25}
            strokeWidth={1}
            className={`cursor-pointer mt-10 ${expanded && "-rotate-180"} `}
            onClick={() => setExpanded((oldVal) => !oldVal)}
          />
        </div>
      </div>

      <div className="h-1/3 w-full flex flex-col items-center">
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
        className={
          "flex flex-col w-full justify-between bg-redd-500 items-center gap-[10px]"
        }
      >
        {/* <NavbarLink Icon={Settings} label="Settings" expanded={expanded} href={'/settings'} /> */}
        <ThemeSwitch expanded={expanded} size={25} />
        <LoggedInUser expanded={expanded} size={30}/>
      </div>
    </Card>
  );
}

export default Navigation;
