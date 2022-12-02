import { Avatar, Badge, Card, Text, Tooltip } from "@mantine/core";
import { ArrowRight } from "tabler-icons-react";

export type AppCardProps = {
  appName: string;
  appIcon: string;
  appCompany: string;
  description: string;
  margin?: string | number;
  selectApp: () => void;
};

function AppCard({
  appCompany,
  appName,
  description,
  margin,
  appIcon,
  selectApp
}: AppCardProps) {
  return (
    <Card radius={'lg'} className="relative hover:scale-105 transition-transform duration-300 hover:shadow-md" m={margin || 20} w={200} h={320} shadow={"sm"}>
      <div className="flex items-center ">
        <Avatar className="pointer-events-none select-none" src={appIcon} radius={999} size={"lg"} />
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
        onClick={() =>{
          selectApp()
        }}
          className="inline-flex w-10 h-10 justify-center items-center  hover:bg-violet-400 text-violet-400 hover:text-white rounded-full transition duration-150"
        >
          <ArrowRight />
        </button>
      </div>
    </Card>
  );
}

export default AppCard;
