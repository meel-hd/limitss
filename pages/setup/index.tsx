import { Button, Card } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Navigation from "../../components/head/Navigation";
import PrimaryInputs from "../../components/setup/PrimaryInputs";
import WindowValues from "../../components/setup/WindowValues";
import { CreateApp } from "../../lib/gql.client";
import { CreateAppInput } from "../../generated/graphql";

enum CREATE_APP_STEP {
  GENERAL = "GENERAL",
  WINDOW = "WINDOW",
  SUCCESS = "SUCCESS",
}

function Setup() {
  const [step, setStep] = useState(CREATE_APP_STEP.GENERAL);
  const [createAppVars, setCreateAppVars] = useState<CreateAppInput>({
    appId: "",
    description: "",
    fullscreen: true,
    height: 600,
    icon: "",
    license: "",
    name: "",
    productName: "",
    title: "",
    titleChange: false,
    topMenu: false,
    version: "",
    width: 800,
  });

  const { data, mutateAsync } = useMutation({
    mutationKey: ["CreateApp"],
    mutationFn: () =>
      CreateApp({
        arg: {
          ...createAppVars,
        },
      }),
  });

  return (
    <>
      <Navigation/>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Card radius={0} shadow="md" className="w-3/4 h-3/4">
          {step == CREATE_APP_STEP.WINDOW && <PrimaryInputs createAppValues={createAppVars} handleChange={setCreateAppVars} />}
          {step == CREATE_APP_STEP.GENERAL && <WindowValues createAppValues={createAppVars} handleChange={setCreateAppVars}/>}
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
            {/* <button onClick={() => mutateAsync()}>test</button> */}
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
          
        {/* {data && <code>{JSON.stringify(data)}</code>} */}
        {/* <p >{JSON.stringify(createAppVars)}</p> */}
      </div>
    </>
  );
}

export default Setup;
