import { Badge, Card, Image, Text, useMantineColorScheme } from "@mantine/core";

interface GameCardProps {
  marginTop?: string | number;
}

function GameCard({ marginTop }: GameCardProps) {
  const theme = useMantineColorScheme();
  const images = [
    "/images/Games/CoastalWorld.png",
    "/images/Games/HelloRun.png",
    "/images/Games/KidDisco.png",
  ];
  return (
    <Card
      mt={marginTop || 0}
      className={`w-60 py-3 px-2 h-96 rounded-3xl ${
        theme.colorScheme == "light" && "bg-slate-400/5 "
      } hover:bg-violet-300/10 hover:scale-[102%] duration-100 shadow-sm cursor-pointer`}
    >
      <Image
        className="pointer-events-none select-none"
        mx={"auto"}
        width={210}
        radius={16}
        height={210}
        src={images[Math.floor(Math.random() * images.length)]}
        alt=""
      />
      <div className="mt-2 ml-4">
        <Text>$ 20.32</Text>
        <Text mt={4} className="font-semibold text-xl ">
          Game Name: Edition
        </Text>
        <div className="mt-4 gap-2 flex flex-wrap">
          <Badge
            className="lowercase"
            variant="light"
            color={"gray"}
            size={"xs"}
          >
            Windows
          </Badge>
          <Badge
            className="lowercase"
            variant="light"
            color={"gray"}
            size={"xs"}
          >
            Mac OS
          </Badge>
          <Badge
            className="lowercase"
            variant="light"
            color={"gray"}
            size={"xs"}
          >
            Linux
          </Badge>
        </div>
      </div>
    </Card>
  );
}

export default GameCard;
