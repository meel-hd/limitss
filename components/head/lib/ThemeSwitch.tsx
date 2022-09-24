import { Group, Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

function ThemeSwitch() {
  const theme = useMantineTheme();
  
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group position="center">
      <Switch
      checked={colorScheme == 'dark'}
        onChange={() => toggleColorScheme()}
        size="md"
        color={theme.colorScheme === "dark" ? "gray" : "dark"}
        offLabel={
          <Sun size={16} strokeWidth={2.5} color={theme.colors.indigo[4]} />
        }
        onLabel={
          <MoonStars size={16} strokeWidth={2.5} color={theme.colors.violet[6]} />
        }
      />
    </Group>
  );
}

export default ThemeSwitch;
