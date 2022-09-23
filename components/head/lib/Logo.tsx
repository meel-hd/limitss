import { Image, Text } from "@mantine/core";

function Logo({ width }: { width?: number | string }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <Image
        width={width ? width : 20}
        alt="DesWapp logo"
        src="./logo-transparent.png"
      />
      <Text
        color={'violet'}
        weight={700}
      >
        esWapp
      </Text>
    </div>
  );
}

export default Logo;
