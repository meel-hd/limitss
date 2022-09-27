import { Button, Card } from "@mantine/core";
import { useState } from "react";
import Header from "../../components/head/Header";
import PrimaryInputs from "../../components/setup/PrimaryInputs";
import WindowValues from "../../components/setup/WindowValues";
import { useMutation } from "@tanstack/react-query";
import { CreateApp } from "../../lib/gql.client";
import { showNotification } from "@mantine/notifications";

enum CREATE_APP_STEP {
  GENERAL = "GENERAL",
  WINDOW = "WINDOW",
  SUCCESS = "SUCCESS",
}

function Setup() {
  const [step, setStep] = useState(CREATE_APP_STEP.GENERAL);
  const { data, mutateAsync } = useMutation({
    mutationKey: ["CreateApp"],
    mutationFn: () =>
      CreateApp({
        arg: {
          productName: "Linear App",
          name: "linear",
          description: "Moder issue tracking",
          license: "MIT",
          icon: "",
          appId: "Linear App Desktop",
          version: "1.0.0",
          title: "Linear",
          width: 600,
          height: 600,
          fullscreen: true,
          titleChange: false,
          topMenu: false,
        },
      }),
  });
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Card radius={0} shadow="md" className="w-3/4 h-3/4">
          {step == CREATE_APP_STEP.WINDOW && <PrimaryInputs />}
          {step == CREATE_APP_STEP.GENERAL && <WindowValues />}
          <Card.Section
            p={20}
            className="flex flex-row justify-between items-center"
          >
            <Button
              className={step == CREATE_APP_STEP.GENERAL ? "opacity-0" : ""}
              onClick={() => setStep(CREATE_APP_STEP.GENERAL)}
              variant="white"
              color={"violet"}
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
            <button onClick={() => mutateAsync()}>test</button>
          </Card.Section>
        </Card>
      </div>
    </>
  );
}

export default Setup;
