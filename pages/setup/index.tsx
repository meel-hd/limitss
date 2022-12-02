import { Button, Card, LoadingOverlay } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthorizedOnly from "components/auth/AuthorizedOnly";
import Uploader from "components/upload";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Check, ExclamationMark } from "tabler-icons-react";
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
  const router = useRouter();
  const [createAppVars, setCreateAppVars] = useState<CreateAppInput>({
    appId: "",
    description: "",
    link: "",
    fullscreen: true,
    height: 600,
    icon: "",
    license: "",
    name: "",
    titleChange: false,
    topMenu: false,
    version: "",
    width: 800,
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ["CreateApp"],
    mutationFn: () =>
      CreateApp({
        arg: {
          ...createAppVars,
        },
      }),
    onSuccess: () => {
      showNotification({
        title: "Done",
        color: "lime",
        message: "The app " + createAppVars.name + " is created.",
        icon: <Check color="white" />,
      });
      router.replace("/home");
    },
    onError: () => {
      showNotification({
        title: "Error",
        color: "red",
        message: "Something went wrong! Please try again.",
        icon: <ExclamationMark color="white" />,
      });
    },
  });
  // Check the user input in the second part of the setup
  const invalidInput =
    createAppVars.name.length == 0 ||
    createAppVars.name.length > 185 ||
    createAppVars.link.length == 0 ||
    createAppVars.link.length > 185 ||
    createAppVars.description.length == 0 ||
    createAppVars.description.length > 185 ||
    createAppVars.appId.length == 0 ||
    createAppVars.appId.length > 185 ||
    createAppVars.version.length == 0 ||
    createAppVars.version.length > 185 ||
    createAppVars.license == null ||
    createAppVars.license.length == 0;

  const createRepo = async () => {
    axios.post("/api/github/repos/create", {
      name: createAppVars.name,
      description: createAppVars.description,
    });
  };
  return (
    <>
      <Head>
        <title>Limitss | Setup</title>
        <meta
          name="description"
          content="Start Building a Desktop from your Website without Code or Thinking about Time"
        ></meta>
      </Head>
      <Navigation activeTab="setup" />
      <AuthorizedOnly>
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
              <Preview appName={createAppVars.name} icon={createAppVars.icon} />
            </Card.Section>
            <Card.Section
              p={20}
              className="flex flex-row justify-between items-center"
            >
              <Button
                disabled={CREATE_APP_STEP.GENERAL == step}
                className={
                  step == CREATE_APP_STEP.GENERAL
                    ? "opacity-0  cursor-default"
                    : ""
                }
                onClick={() => setStep(CREATE_APP_STEP.GENERAL)}
                variant="white"
                color={"violet"}
              >
                Go Back
              </Button>
              {step == CREATE_APP_STEP.GENERAL && (
                <Button
                  styles={{
                    root: {
                      ":disabled": {
                        backgroundColor: "rgba(99, 102 ,241,.5)",
                        color: "#fff",
                      },
                    },
                  }}
                  className=" bg-indigo-500 hover:bg-indigo-500"
                  onClick={() => setStep(CREATE_APP_STEP.WINDOW)}
                  disabled={
                    createAppVars.name.length == 0 ||
                    createAppVars.link.length == 0 ||
                    createAppVars.icon.length == 0
                  }
                >
                  Next Step
                </Button>
              )}
              {step == CREATE_APP_STEP.WINDOW && (
                <>
                  <Button
                    className="w-24 bg-gradient-to-r from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]"
                    onClick={() => {
                      mutateAsync()
                        .then(() => createRepo())
                        .catch((err) => null);
                    }}
                    disabled={invalidInput}
                  >
                    Build
                  </Button>
                </>
              )}
            </Card.Section>
            <LoadingOverlay overlayBlur={2} visible={isLoading} />
          </Card>
        </div>
      </AuthorizedOnly>
    </>
  );
}

export default Setup;
