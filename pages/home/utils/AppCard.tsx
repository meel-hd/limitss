import { Avatar, Badge, Button, Card, Text, Tooltip } from "@mantine/core";
import PrimaryBtn from "components/lib/PrimaryBtn";

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
      <Tooltip  position="right" radius={"lg"} label="License">
        <Badge variant="dot" color={"gray"}>
          {appCompany}
        </Badge>
      </Tooltip>
      {/* <div className="truncate h-32"> */}
      <Text h={140}  className=" overflow-hidden leading-relaxed " color={'dimmed'} mt={35} size={'sm'}>{description}  {description}</Text>
      {/* </div> */}
      <div className="w-full absolute bottom-0 right-0 left-0 flex p-2 justify-end items-center">
        <Button color={"violet"} variant="subtle">
          Update
        </Button>
      </div>
    </Card>
  );
}

export default AppCard;
