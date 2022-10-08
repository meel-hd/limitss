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
  function handleClick() {
    router.push(href);
  }
  return (
    <div
      onClick={() => handleClick()}
      className={`${active ? "bg-violet-400" : "hover:bg-violet-100 "} 
      ${
        expanded
          ? "rounded-full hover:shadow-sm  "
          : "rounded-xl  hover:shadow-md"
      }
        w-full flex flex-row justify-around items-center  m-1 p-3 hover:cursor-pointer duration-300 transition-colors`}
    >
      <Icon
        size={25}
        strokeWidth={1.5}
        color={active ? 'white' : "gray"}
      />
      {expanded && (
        <Text color={active ? "white" : "dimmed"} className="ml-2">
          {label}
        </Text>
      )}
    </div>
  );
}

export default NavbarLink;
