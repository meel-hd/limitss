import { Card, useMantineTheme } from "@mantine/core";
import Logo from "./lib/Logo";
import ThemeSwitch from "./lib/ThemeSwitch";

function Navigation({ onLeft }: { onLeft?: boolean }) {
  const theme = useMantineTheme();
  return (
    <Card
    shadow={'xl'}
      className={`shadow-smd h-12 px-2 flex z-10 ${
        onLeft
          ? "flex-col fixed top-0 left-0 h-screen  borderf-r-[1px] pt-2 pb-10 min-w-[60px]"
          : "flex-row"
      } ${theme.colorScheme == 'dark' && 'bordfer-gray-800'} justify-between items-center`}
    >
      <Logo width={30} withoutText={true}/>

      <ThemeSwitch size={25} />
    </Card>
  );
}

export default Navigation;
