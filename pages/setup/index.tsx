import { Button, Card, Loader } from "@mantine/core";
import NavigationArrows from "../../components/head/NavigationArrows";
import PrimaryInputs from "../../components/setup/PrimaryInputs";
import WindowValues from "../../components/setup/WindowValues";

function Setup() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <Card withBorder radius={"lg"} shadow={"xs"} className="w-3/4 h-3/4">
        <NavigationArrows onlyBack={true} margin={10} />
        <div className="flex flex-row justify-between">
          <PrimaryInputs />
          <div>
            <Loader variant="bars" />
          </div>
          <WindowValues />
        </div>
        <Card.Section p={20} className="flex flex-row justify-end items-center">
          <Button className="bg-gradient-to-r rounded-full from-indigo-500 to-violet-400 hover:shadow-0xl">
            Next Step
          </Button>
        </Card.Section>
      </Card>
    </div>
  );
}

export default Setup;
