import { ColorScheme, Group, Switch, useMantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { MoonStars, Sun } from "tabler-icons-react";

function ThemeSwitch() {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <Group position="center">
      <Switch
        onClick={() => toggleColorScheme()}
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
