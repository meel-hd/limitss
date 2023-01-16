import { Avatar, Badge, Card, Text } from "@mantine/core";

export type AppCardProps = {
  appName: string;
  appIcon: string;
  version: string;
  description: string;
  margin?: string | number;
  selectApp: () => void;
};

function AppCard({
  version,
  appName,
  description,
  margin,
  appIcon,
  selectApp,
}: AppCardProps) {
  return (
    <Card
      radius={"lg"}
      className="w-10/12 min-w-[200px] sm:w-[200px] relative hover:scale-105 transition-transform duration-300 hover:shadow-md cursor-pointer"
      m={margin || 20}
      h={320}
      shadow={"sm"}
      onClick={() => {
        selectApp();
      }}
    >
      <div className="flex items-center ">
        <Avatar
          className="pointer-events-none select-none"
          src={appIcon}
          radius={999}
          size={"lg"}
        />
        <p className="truncate ml-4 font-semibold text-lg">{appName}</p>
      </div>
      <Badge variant="light" mt={10} color={"gray"}>
        {version}
      </Badge>
      {/* <div className="truncate h-32"> */}
      <Text
        h={140}
        className=" overflow-hidden leading-relaxed "
        color={"dimmed"}
        mt={35}
        size={"sm"}
      >
        {description}
      </Text>
    </Card>
  );
}

export default AppCard;
