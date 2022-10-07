import { Image, MantineNumberSize, Text, useMantineTheme } from "@mantine/core";

interface LogoProps {
  width?: number | string;
  withoutText?: boolean;
  withoutIcon?: boolean;
  textSize?: MantineNumberSize;
}

function Logo({ width, withoutText, withoutIcon, textSize}: LogoProps) {
  const theme = useMantineTheme()
  return (
    <div 
    // style={{
    //   fillRule: theme.colorScheme == 'dark' ? 'grayscale(1) invert(1)' : undefined
    // }}
    className="flex  flex-row justify-center items-center">
      {!withoutIcon && (
        <Image
          className="select-none pointer-events-none"
          width={width ? width : 20}
          alt="DesWapp logo"
          src={`./logo-${theme.colorScheme}.png`}
        />
      )}
      {!withoutText && (
        <Text
          weight={700}
          size={textSize}
          className=" select-none "
        >
          DesWapp
        </Text>
      )}
    </div>
  );
}

export default Logo;
