import { Image, MantineNumberSize, Text } from "@mantine/core";

interface LogoProps {
  width?: number | string;
  withoutText?: boolean;
  withoutIcon?: boolean;
  textSize?: MantineNumberSize;
}

function Logo({ width, withoutText, withoutIcon, textSize}: LogoProps) {
  return (
    <div className="flex flex-row justify-center items-center">
      {!withoutIcon && (
        <Image
          className="select-none pointer-events-none"
          width={width ? width : 20}
          alt="DesWapp logo"
          src="./logo-transparent.png"
        />
      )}
      {!withoutText && (
        <Text
          color={"violet"}
          weight={700}
          size={textSize}
          className="text-transparent select-none bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400"
        >
          DesWapp
        </Text>
      )}
    </div>
  );
}

export default Logo;
