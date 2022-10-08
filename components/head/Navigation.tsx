import { Card } from "@mantine/core";
import { useState } from "react";
import { AdjustmentsHorizontal, ChevronsRight, Home, Propeller, Settings } from "tabler-icons-react";
import Logo from "./lib/Logo";
import NavbarLink from "./lib/NavbarLink";
import ThemeSwitch from "./lib/ThemeSwitch";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card
      color="violet"
      shadow={"xl"}
      style={{
        transition: expanded ? 'width 0.2s ease-in' : 'width 0.4s ease-in',
        width: expanded ? '170px' : '60px',
      }}
      className={` min-h-[380px] hidden px-1 sm:flex z-10 select-none justify-between items-center flex-col fixed top-0 left-0 h-screen  pt-2 pb-10`}
    >
      <div className="justify-start">
        <Logo width={30}  withoutText={!expanded} />
        <div className={`${expanded ? 'w-[100%]' : 'w-full'} p-0 flex justify-end items-center`}>
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
        <NavbarLink expanded={expanded} Icon={Home} href='/home' label='Home'/>
        <NavbarLink expanded={expanded} Icon={AdjustmentsHorizontal} href='/setup' active={true} label='Setup'/>
        {/* <NavbarLink expanded={expanded} Icon={BuildingStore} href='/store' label='Store'/> */}
        <NavbarLink expanded={expanded} Icon={Propeller} href='/account' label='Account'/>
      </div>

      <div className={"flex flex-col w-full justify-between items-center h-16"}>
        <NavbarLink Icon={Settings} label="Settings" expanded={expanded} href={'/settings'} />
        <ThemeSwitch expanded={expanded} size={25} />
      </div>
    </Card>
  );
}

export default Navigation;
