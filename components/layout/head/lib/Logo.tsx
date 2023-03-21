import { MantineNumberSize, Text, useMantineTheme } from "@mantine/core";
import SvgLogo from "./SvgLogo";

interface LogoProps {
  width?: number | string;
  withoutText?: boolean;
  withoutIcon?: boolean;
  textSize?: MantineNumberSize;
  gap?: number;
  forcecolor?: string;
}

function Logo({
  width,
  withoutText,
  withoutIcon,
  textSize,
  gap,
  forcecolor,
}: LogoProps) {
  const theme = useMantineTheme();
  return (
    <div className="flex  flex-row justify-center items-center">
      {!withoutIcon && (
        <SvgLogo
          forcecolor={forcecolor}
          className="select-none pointer-events-none "
          width={width ? width : 20}
          height={width ? width : 20}
        />
      )}
      {!withoutText && (
        <Text
          ml={gap ? gap : 0}
          weight={700}
          size={textSize}
          color={theme.colorScheme == "dark" ? "white" : ""}
          className=" select-none "
        >
          Limitss
        </Text>
      )}
    </div>
  );
}

export default Logo;
