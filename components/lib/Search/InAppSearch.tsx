import { Input, useMantineColorScheme } from "@mantine/core";
import { Search } from "tabler-icons-react";

interface InAppSearchProps {
  ml?: string | number;
  mr?: string | number;
  hiddenOnMobile?: boolean;
}

function InAppSearch({ ml, mr, hiddenOnMobile }: InAppSearchProps) {
  const theme = useMantineColorScheme();
  return (
    <Input
      className={`${hiddenOnMobile ? "hidden sm:flex" : "flex"}`}
      classNames={{
        input: `border-0  md:w-[150%] ${
          theme.colorScheme != "dark" ? "bg-slate-500/10" : "bg-white/10"
        }`,
      }}
      placeholder="Search..."
      icon={<Search width={18} />}
      ml={ml || 0}
      mr={mr || 0}
    />
  );
}

export default InAppSearch;
