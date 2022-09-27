import {
  useMantineColorScheme,
  useMantineTheme
} from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

function ThemeSwitch({size}:{size?: number;}) {
  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
      <div onClick={() => toggleColorScheme()}>
        {colorScheme === "dark" ? (
          <Sun
            className="active:rotate-90 duration-700  transition-all"
            size={size ? size : 18}
            color={theme.colors.yellow[6]}
          />
        ) : (
          <MoonStars
            strokeWidth={1}
            className="active:-rotate-90 duration-700  transition-all"
            size={size ? size : 18}
            color={theme.colors.violet[6]}
          />
        )}
      </div>
  );
}

export default ThemeSwitch;
