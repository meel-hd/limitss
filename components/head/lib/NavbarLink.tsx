import { useMantineTheme, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { Icon } from "tabler-icons-react";

interface NavbarLinkProps {
  Icon: Icon;
  label: string;
  href: string;
  expanded: boolean;
  active?: boolean;
}


function NavbarLink({ Icon, href, label, expanded, active }: NavbarLinkProps) {
  const theme = useMantineTheme();
  const router = useRouter();
  function handleClick(){
    router.push(href);
  }
  return (
    <div
        onClick={()=> handleClick()}
      className={`${active && "bg-[#ffffff20]"} 
      ${expanded ? "rounded-full" : 'rounded-xl'}
        w-full flex flex-row justify-around items-center m-1 p-2 hover:bg-[#ffffff20] hover:shadow-md hover:cursor-pointer`}
    >
      <Icon
        size={30}
        strokeWidth={1.5}
        color={active ? theme.colors.violet[5] : "gray"}
      />
      {expanded && (
        <Text color={active ? "violet" : "dimmed"} className="ml-2">
          {label}
        </Text>
      )}
    </div>
  );
}

export default NavbarLink;
