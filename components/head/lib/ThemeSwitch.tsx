import { ActionIcon, Group, Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

function ThemeSwitch() {
  const theme = useMantineTheme();
  
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group position="center">
      
      <ActionIcon
      variant="transparent"
        onClick={() => toggleColorScheme()}
        size="lg"
        // sx={{background: 'transparent'}}
      >
        {colorScheme === 'dark' ? <Sun size={18} color={theme.colors.yellow[6]}/> : <MoonStars size={18} color={theme.colors.violet[6]} />}
      </ActionIcon>
    </Group>
  );
}

export default ThemeSwitch;
