import { Button, Card, LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import NavigationArrows from "../../components/head/NavigationArrows";
import PrimaryInputs from "../../components/setup/PrimaryInputs";
import WindowValues from "../../components/setup/WindowValues";

function Setup() {
  const [isBuilding, setIsBuilding] = useState(false);
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <Card radius={0} shadow="md" className="w-3/4 h-3/4">
        <NavigationArrows onlyBack={true} margin={10} />
        <div className="flex flex-row justify-between">
          <PrimaryInputs />
          <div>
            <LoadingOverlay
              onClick={() => setIsBuilding(false)}
              visible={isBuilding}
            />
          </div>
          <WindowValues />
        </div>
        <Card.Section p={20} className="flex flex-row justify-end items-center">
          <Button
            onClick={() => setIsBuilding(true)}
            className="bg-gradient-to-r from-indigo-500 to-violet-400 hover:shadow-0xl"
          >
            Next Step
          </Button>
        </Card.Section>
      </Card>
    </div>
  );
}

export default Setup;
