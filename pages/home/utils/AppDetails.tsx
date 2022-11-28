import { Avatar, Badge, Paper, Text } from "@mantine/core";
import { CreateAppOutput } from "generated/graphql";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "tabler-icons-react";

function AppDetails({
  name,
  appId,
  description,
  fullscreen,
  height,
  icon,
  license,
  link,
  titleChange,
  topMenu,
  version,
  width,
}: CreateAppOutput) {
  return (
    <div className="bg-red-d ml-2 sm:ml-16 h-[85vh] max-h-[85vh]  px-5 py-2">
      <div className="flex items-center">
        <Avatar radius={999} size="lg" src={icon} />
        <h1 className="ml-5">{name}</h1>
      </div>
      <div className="flex items-center">
        <Badge ml={30} size="xs" variant="dot" color={"gray"}>
          {license}
        </Badge>
        <Text ml={15} size={"xs"} color="dimmed">
          {version}
        </Text>
      </div>
      <div className="pl-2 sm:pl-10 mt-4">
        <Text className="sm:max-w-2xl" size="sm" color="gray">
          {description}
        </Text>
        <Demensions width={width} height={height} />
      </div>
    </div>
  );
}

export default AppDetails;

function Demensions({width,height}){
    return(
        
        <div className="w-full mt-5 flex flex-col items-center">
          <div className="flex items-center">
            <ArrowLeft size={14} color="#8F00FF" />
            <Text size="sm" mx={5} color="#8F00FF">
              {width}px
            </Text>
            <ArrowRight size={14} color="#8F00FF" />
          </div>
          <div className={`flex items-center`}>
            <Paper
              withBorder
              className={`w-[320px] h-[150px] max-w-[80vw]   
              
              `}
              shadow={"sm"}
            >
            </Paper>
            <div className="flex flex-col items-center">
              <ArrowUp size={14} color="#8F00FF" />
              <Text size="sm" mx={5} color="#8F00FF">
                {height}px
              </Text>
              <ArrowDown size={14} color="#8F00FF" />
            </div>
          </div>
        </div>
    )
}