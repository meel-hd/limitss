import { Button, Card } from "@mantine/core";
import { useState } from "react";
import Header from "../../components/head/Header";
import PrimaryInputs from "../../components/setup/PrimaryInputs";
import WindowValues from "../../components/setup/WindowValues";

enum CREATE_APP_STEP {
  GENERAL = "GENERAL",
  WINDOW = "WINDOW",
  SUCCESS = "SUCCESS",
}

function Setup() {
  const [step, setStep] = useState(CREATE_APP_STEP.GENERAL);
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Card radius={0} shadow="md" className="w-2/4 h-3/4">
          {step == CREATE_APP_STEP.WINDOW && <PrimaryInputs />}
          {step == CREATE_APP_STEP.GENERAL && <WindowValues />}
          <Card.Section
            p={20}
            className="flex flex-row justify-between items-center"
          >
            <Button
              className={step == CREATE_APP_STEP.GENERAL ? 'opacity-0': ''}
              onClick={()=> setStep(CREATE_APP_STEP.GENERAL)}
              variant="white"
              color={'violet'}
            >
              Go Back
            </Button>
            {step == CREATE_APP_STEP.GENERAL && (
              <Button
                onClick={() => setStep(CREATE_APP_STEP.WINDOW)}
                className="bg-gradient-to-r from-indigo-500 to-violet-400 hover:shadow-0xl"
              >
                Next Step
              </Button>
            )}
          </Card.Section>
        </Card>
      </div>
    </>
  );
}

export default Setup;
