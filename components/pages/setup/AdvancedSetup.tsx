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
import { advancedConfigValues } from "./types";

type props = {
  hideAdvanced: () => void;
  advancedOptions: advancedConfigValues;
  setAdvancedOptions: (options: advancedConfigValues) => void;
};

function AdvancedSetup({
  hideAdvanced,
  advancedOptions,
  setAdvancedOptions,
}: props) {
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
              checked={advancedOptions.center}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
              onChange={(e) => {
                setAdvancedOptions({
                  ...advancedOptions,
                  center: e.target.checked,
                });
              }}
            />
            <Text mt={25} size={"xs"} color="dimmed">
              Whether the window is resizable or not.
            </Text>
            <Switch
              color={"violet"}
              size="sm"
              label="Resizable"
              checked={advancedOptions.resizable}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
              onChange={(e) => {
                setAdvancedOptions({
                  ...advancedOptions,
                  resizable: e.target.checked,
                });
              }}
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
              checked={advancedOptions.hiddenTitle}
              offLabel={<X size={15} />}
              onLabel={<Check size={15} />}
              onChange={(e) => {
                setAdvancedOptions({
                  ...advancedOptions,
                  hiddenTitle: e.target.checked,
                });
              }}
            />
            <Select
              mt={25}
              value={advancedOptions.theme}
              className="lg:w-1/2"
              label="Theme"
              description="The initial window theme. Defaults to the system theme."
              placeholder="Default system theme"
              clearable
              data={["Light", "Dark"]}
              onChange={(value) => {
                setAdvancedOptions({
                  ...advancedOptions,
                  // @ts-ignore
                  theme: value,
                });
              }}
            />
            <Select
              mt={25}
              className="lg:w-1/2"
              value={advancedOptions.titleBarStyle}
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
              onChange={(value) => {
                setAdvancedOptions({
                  ...advancedOptions,
                  // @ts-ignore
                  titleBarStyle: value ? value : "Visible",
                });
              }}
            />
          </div>
          <div className="h-full w-full sm:w-1/3 mt-10 sm:mt-0">
            <Text size="lg" my={10} weight={600}>
              Window bounds
            </Text>

            <SimpleGrid cols={2} miw={150}>
              <NumberInput
                min={200}
                hideControls
                label="Min Width"
                value={advancedOptions.minWidth}
                onChange={(value) => {
                  setAdvancedOptions({
                    ...advancedOptions,
                    minWidth: value,
                  });
                }}
              />
              <NumberInput
                min={200}
                hideControls
                label="Min Height"
                value={advancedOptions.minHeight}
                onChange={(value) => {
                  setAdvancedOptions({
                    ...advancedOptions,
                    minHeight: value,
                  });
                }}
              />
              <NumberInput
                min={200}
                hideControls
                label="Max Width"
                value={advancedOptions.maxWidth}
                onChange={(value) => {
                  setAdvancedOptions({
                    ...advancedOptions,
                    maxWidth: value,
                  });
                }}
              />
              <NumberInput
                min={200}
                hideControls
                label="Max Height"
                value={advancedOptions.maxHeight}
                onChange={(value) => {
                  setAdvancedOptions({
                    ...advancedOptions,
                    maxHeight: value,
                  });
                }}
              />
              <NumberInput
                min={200}
                hideControls
                label="Initial Y"
                value={advancedOptions.y}
                onChange={(value) => {
                  setAdvancedOptions({
                    ...advancedOptions,
                    y: value,
                  });
                }}
              />
              <NumberInput
                min={200}
                hideControls
                label="Initial X"
                value={advancedOptions.x}
                onChange={(value) => {
                  setAdvancedOptions({
                    ...advancedOptions,
                    x: value,
                  });
                }}
              />
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
