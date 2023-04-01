import { Accordion, Avatar, Badge, Button, Loader, Text } from "@mantine/core";
import axios from "axios";
import { CreateAppOutput } from "generated/graphql";
import { useEffect, useState } from "react";
import DeleteApp from "./DeleteApp";
import PublishAsGame from "./PublishAsGame";
import ReleasesDetails from "./ReleasesDetails";
import Status from "./Status";
import { WorkflowUsage } from "./WorkflowUsage";

function AppDetails({
  appDetails,
  close,
  handleRefetch,
}: {
  appDetails: CreateAppOutput;
  handleRefetch: () => void;
  close: () => void;
}) {
  const {
    name,
    appId,
    description,
    height,
    icon,
    license,
    version,
    width,
    id,
  } = appDetails;
  const [workflow, setWorkflow] = useState<any>();

  useEffect(() => {
    const getWorkflow = async () => {
      const { data: res } = await axios.post(
        "/api/github/repos/workflows/publish",
        {
          name: name,
        }
      );
      setWorkflow(res);
      console.log("run");
    };
    getWorkflow();
  }, [name]);

  return (
    <div className="ml-2 sm:ml-16 h-[85vh] max-h-[85vh]  px-5 pb-2 pt-0">
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
        <Text className="sm:max-w-2xl" size="sm" color="dimmed">
          {description}
        </Text>
      </div>
      <section className="flex flex-col-reverse sm:flex-row justify-between">
        <div>
          <ReleasesDetails name={name} />
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/3">
          <Accordion
            pb={30}
            variant="separated"
            radius="xl"
            defaultValue="status"
            mt={20}
          >
            <Accordion.Item value="status">
              <Accordion.Control>
                <Text weight={600}>Status</Text>
              </Accordion.Control>
              <Accordion.Panel>
                {workflow ? (
                  <Status jobs={workflow.firstRunJobs.jobs} />
                ) : (
                  <Loader color={"violet"} />
                )}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="usage">
              <Accordion.Control>
                <Text weight={600}>Build Time Usage</Text>
              </Accordion.Control>
              <Accordion.Panel>
                {workflow?.usage ? (
                  <WorkflowUsage usage={workflow.usage} />
                ) : (
                  <Loader color={"violet"} />
                )}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="settings">
              <Accordion.Control>
                <Text weight={600}>Settings</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="flex gap-4">
                  <PublishAsGame />
                  <DeleteApp id={id} handleRefetch={handleRefetch} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section className="flex justify-end">
        <Button
          onClick={close}
          className="bg-violet-500 my-4 hover:bg-violet-400"
          mt={20}
        >
          Close
        </Button>
      </section>
    </div>
  );
}

export default AppDetails;
