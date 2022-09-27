import { Image, Text } from "@mantine/core";

function Logo({ width }: { width?: number | string }) {
  return (
    <div className="flex flex-row justify-center items-center">
      {/* <Image
        width={width ? width : 20}
        alt="DesWapp logo"
        src="./logo-transparent.png"
      /> */}
      <Text
        color={'violet'}
        weight={700}
        className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400'
      >
        DesWapp
      </Text>
    </div>
  );
}

export default Logo;
