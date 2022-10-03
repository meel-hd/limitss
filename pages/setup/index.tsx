import { Button, Card } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import Navigation from "../../components/head/Navigation";
import Preview from "../../components/setup/preview";
import PrimaryInputs from "../../components/setup/PrimaryInputs";
import WindowValues from "../../components/setup/WindowValues";
import { CreateAppInput } from "../../generated/graphql";
import { CreateApp } from "../../lib/gql.client";

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
    <Head>
      <title>DesWapp  Setup your Desktop for The Build and Delevery to Users</title>
      <meta name="description" content="Start Building a Desktop from your Website without Code or Thinking about Time"></meta>
    </Head>
      <Navigation />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Card radius={0} my={30} shadow="sm" className="w-3/4 h-3/4">
          <Card.Section
            className="flex flex-row justify-between "
            pt={10}
            px={20}
          >
            {step == CREATE_APP_STEP.WINDOW && (
              <PrimaryInputs
                createAppValues={createAppVars}
                handleChange={setCreateAppVars}
              />
            )}
            {step == CREATE_APP_STEP.GENERAL && (
              <WindowValues
                createAppValues={createAppVars}
                handleChange={setCreateAppVars}
              />
            )}
            <Preview appName={createAppVars.title} icon={createAppVars.icon}/>
          </Card.Section>
          <Card.Section
            p={20}
            className="flex flex-row justify-between items-center"
          >
            <Button
              className={step == CREATE_APP_STEP.GENERAL ? "opacity-0 cursor-default" : ""}
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
