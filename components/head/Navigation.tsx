import { Card, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { AdjustmentsHorizontal, ChevronsRight, Home, Icon, Settings } from "tabler-icons-react";
import Logo from "./lib/Logo";
import NavbarLink from "./lib/NavbarLink";
import ThemeSwitch from "./lib/ThemeSwitch";

function Navigation() {
  const theme = useMantineTheme();
  const [expanded, setExpanded] = useState(false);
  return (
    <Card
      color="violet"
      shadow={"xl"}
      className={` px-1 flex z-10 justify-between items-center 
          flex-col fixed top-0 left-0 h-screen  borderf-r-[1px] pt-2 pb-10
      } ${theme.colorScheme == "dark" && "bordfer-gray-800"} ${
        expanded ? "min-w-[150px]" : "min-w-[60px]"
      }`}
    >
      <div className="justify-start">
        <Logo width={30} withoutIcon={expanded} withoutText={!expanded} />
        <div className={`${expanded ? 'w-[150%]' : 'w-full'} p-0 flex justify-end items-center`}>
          <ChevronsRight
            color="gray"
            className={`cursor-pointer mt-10 ${expanded && "-rotate-180"} `}
            onClick={() => setExpanded((oldVal) => !oldVal)}
          />
        </div>
      </div>

      <div className="h-1/3 w-full flex flex-col items-center">
        <NavbarLink expanded={expanded} Icon={Home} href='/home' label='Home'/>
        <NavbarLink expanded={expanded} Icon={AdjustmentsHorizontal} href='/setup' active={true} label='Setup'/>
      </div>

      <div className={"flex flex-col justify-between items-center h-16"}>
        <NavbarLink Icon={Settings} label="Settings" expanded={expanded} href={'/settings'} />
        <ThemeSwitch expanded={expanded} size={25} />
      </div>
    </Card>
  );
}

export default Navigation;
