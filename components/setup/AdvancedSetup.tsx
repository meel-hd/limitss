import {
  Card,
  Select,
  Switch,
  Text,
  Badge,
  Button,
  NumberInput,
  SimpleGrid,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { Check, X } from "tabler-icons-react";

function AdvancedSetup({ hideAdvanced }) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Card radius={0} my={30} shadow="sm" className="w-3/4 h-3/4">
        <Card.Section py={10} px={20} className="flex flex-wrap sm:flex-nowrap">
          <div className="flex flex-col  w-full md:w-2/3">
            <Text mt={25} size={"xs"} color="dimmed">
              Whether or not the window starts centered or not.
            </Text>
            <Switch
              color={"violet"}
              size="sm"
              label="Center"
              // checked={createAppValues.maximized}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
            />
            <Text mt={25} size={"xs"} color="dimmed">
              Whether the window is resizable or not.
            </Text>
            <Switch
              color={"violet"}
              size="sm"
              label="Resizable"
              // checked={createAppValues.maximized}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
            />
            <Text mt={25} size={"xs"} color="dimmed">
              Whether the window is visible initially or not.
            </Text>
            <Switch
              color={"violet"}
              size="sm"
              label="Visible"
              // checked={createAppValues.maximized}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
            />

            <div>
              <Text mt={25} size={"xs"} color="dimmed">
                Sets the window title to be hidden on macOS.
                <Badge color="violet" size="sm" className="ml-2">
                  Mac Only
                </Badge>
              </Text>
            </div>
            <Switch
              color={"violet"}
              size="sm"
              label="Title hidden"
              // checked={createAppValues.maximized}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
            />
            <Select
              mt={25}
              className="lg:w-1/2"
              label="Theme"
              description="The initial window theme. Defaults to the system theme."
              placeholder="Default system theme"
              clearable
              data={["Light", "Dark"]}
            />
            <Select
              mt={25}
              className="lg:w-1/2"
              label="Title bar style"
              description={
                <div className="flex justify-between items-center">
                  <p>
                    Transparent: the window background color is shown instead.{" "}
                  </p>
                  <Badge color="violet" size="sm" className="ml-2">
                    Mac Only
                  </Badge>
                </div>
              }
              placeholder="Visible: A normal title bar."
              clearable
              data={["Visible", "Transparent"]}
            />
          </div>
          <div className="h-full w-full sm:w-1/3 mt-10 sm:mt-0">
            <Text size='lg' my={10} weight={600}>
              Window bounds
            </Text>

            <SimpleGrid cols={2} miw={150}>
              <NumberInput min={200} hideControls label="Min Width" value={300}/>
              <NumberInput min={200} hideControls label="Min Height" value={300}/>
              <NumberInput min={200} hideControls label="Max Width" value={300}/>
              <NumberInput min={200} hideControls label="Max Height" value={300}/>
              <NumberInput min={200} hideControls label="Initial Y" value={300}/>
              <NumberInput min={200} hideControls label="Initial X" value={300}/>
            </SimpleGrid>
          </div>
        </Card.Section>
        <Card.Section p={20} className="flex flex-row justify-end items-center">
          <Button
            onClick={() => {
              scrollTo({ y: 0 });
              // delay
              setTimeout(() => {
                hideAdvanced();
              }, 400);
            }}
            className=" bg-indigo-500 min-w-[130px] hover:bg-indigo-500"
          >
            Done
          </Button>
        </Card.Section>
      </Card>
    </div>
  );
}

export default AdvancedSetup;
