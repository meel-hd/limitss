import { useMantineColorScheme, useMantineTheme, Text } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

function ThemeSwitch({
  size,
  expanded,
}: {
  size?: number;
  expanded?: boolean;
}) {
  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div
      className="flex flex-row cursor-pointer justify-around p-1 w-full items-center"
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? (
        <Sun
          className="active:rotate-90 duration-700  transition-all"
          size={size ? size : 18}
          color={theme.colors.yellow[4]}
        />
      ) : (
        <MoonStars
          strokeWidth={1.5}
          className="active:rotate-90 duration-700  transition-all"
          size={size ? size : 18}
          color={theme.colors.violet[4]}
        />
      )}
      {expanded && (
        <Text
          size={"xs"}
          color={
            colorScheme == "dark"
              ? theme.colors.yellow[3]
              : theme.colors.violet[4]
          }
        >
          {colorScheme == "dark" ? "Dark" : "Light"}
        </Text>
      )}
    </div>
  );
}

export default ThemeSwitch;
