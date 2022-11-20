import { Avatar, Badge, Card, Text, Tooltip } from "@mantine/core";
import { ArrowRight } from "tabler-icons-react";

export type AppCardProps = {
  appName: string;
  appIcon: string;
  appCompany: string;
  description: string;
  margin?: string | number;
};

function AppCard({
  appCompany,
  appName,
  description,
  margin,
  appIcon,
}: AppCardProps) {
  return (
    <Card className="relative" m={margin || 20} w={200} h={320} shadow={"sm"}>
      <div className="flex items-center ">
        <Avatar src={appIcon} radius={999} size={"lg"} />
        <p className="truncate ml-4 font-semibold text-lg">{appName}</p>
      </div>
      <Tooltip position="right" radius={"lg"} label="License">
        <Badge variant="dot" color={"gray"}>
          {appCompany}
        </Badge>
      </Tooltip>
      {/* <div className="truncate h-32"> */}
      <Text
        h={140}
        className=" overflow-hidden leading-relaxed "
        color={"dimmed"}
        mt={35}
        size={"sm"}
      >
        {description} {description}
      </Text>
      {/* </div> */}
      <div className="w-full absolute bottom-0 right-0 left-0 flex p-2 justify-end items-center">
        <button
          className="inline-flex w-11 h-11 justify-center items-center  hover:bg-violet-300 text-violet-400 hover:text-white rounded-full transition duration-150"
        >
          <ArrowRight />
        </button>
      </div>
    </Card>
  );
}

export default AppCard;