import {
  ActionIcon,
  Badge,
  Button,
  Drawer,
  FileInput,
  Text,
  Tooltip,
} from "@mantine/core";
import axios from "axios";
import { CreateAppOutput } from "generated/graphql";
import { useState } from "react";
import { CloudUpload } from "tabler-icons-react";
import Publish from "./Publish";

function PublishAsGame({
  description,
  version,
  icon,
  license,
  name,
  id,
}: CreateAppOutput) {
  const [opened, setOpened] = useState(false);
  // Installers
  const [macFile, setMacFile] = useState<any>();
  const [windowsFile, setWindowsFile] = useState<any>();
  const [linuxFile, setLinuxFile] = useState<any>();
  // Upload status
  const [macUploadStatus, setMacUploadStatus] = useState("Not uploaded");
  const [winUploadStatus, setWinUploadStatus] = useState("Not uploaded");
  const [linuxUploadStatus, setLinuxUploadStatus] = useState("Not uploaded");

  // Uploaded files
  const [macUrl, setMacUrl] = useState("");
  const [winUrl, setWinUrl] = useState("");
  const [linuxUrl, setLinuxUrl] = useState("");

  // Upload functions
  const uploadFile = async (file, changeStatus, setLink) => {
    changeStatus("Uploading...");
    let { data } = await axios.post("/api/upload/games", {
      name: file.name,
      type: file.type,
    });
    const url = data.url;
    const fileUrl = data.fileUrl;
    await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });
    setLink(fileUrl);
    changeStatus("Uploaded!");
  };

  return (
    <>
      <Tooltip radius={999} label="Publish">
        <ActionIcon onClick={() => setOpened(true)}>
          <CloudUpload color="purple" />
        </ActionIcon>
      </Tooltip>
      <Drawer
        title={
          <Text weight={500} m={10} size={"xl"}>
            Publish
          </Text>
        }
        onClose={() => setOpened(false)}
        opened={opened}
        position="right"
        size="xl"
        classNames={{
          drawer: "sm:w-1/2 overflow-y-auto pb-32",
        }}
      >
        <div className="px-10 py-4">
          <h2 className="font-semibold text-lg">Select Installers</h2>
          <h4 className="text-slate-400 text-xs ml-4">
            Make sure to choose the right installers, you can not change them
            after uplaod
          </h4>
          <>
            <FileInput
              disabled={macUploadStatus !== "Not uploaded"}
              accept=".dmg"
              label="Mac"
              placeholder=".dmg installer"
              onChange={(file) => setMacFile(file)}
            />
            <FileInput
              disabled={winUploadStatus !== "Not uploaded"}
              accept=".msi"
              label="Windows"
              placeholder=".msi installer"
              onChange={(file) => setWindowsFile(file)}
            />
            <FileInput
              disabled={linuxUploadStatus !== "Not uploaded"}
              accept=".deb"
              label="Linux"
              placeholder=".deb installer"
              onChange={(file) => setLinuxFile(file)}
            />
          </>
          {macFile && windowsFile && linuxFile && (
            <Button
              //disable when uploading and when uploaded
              disabled={
                (macUploadStatus === "Uploaded!" &&
                  winUploadStatus === "Uploaded!" &&
                  linuxUploadStatus === "Uploaded!") ||
                macUploadStatus === "Uploading..." ||
                winUploadStatus === "Uploading..." ||
                linuxUploadStatus === "Uploading..."
              }
              onClick={() => {
                uploadFile(macFile, setMacUploadStatus, setMacUrl);
                uploadFile(windowsFile, setWinUploadStatus, setWinUrl);
                uploadFile(linuxFile, setLinuxUploadStatus, setLinuxUrl);
              }}
              className="bg-violet-400 mt-5 hover:bg-violet-400"
            >
              Upload assets
            </Button>
          )}
          {macFile && windowsFile && linuxFile && (
            <div className="shadow-lg rounded-3xl flex flex-col gap-2 mt-5 px-5 py-3">
              <h2 className="font-semibold text-lg">status</h2>
              <Badge
                color={
                  macUploadStatus === "Uploaded!"
                    ? "green"
                    : macUploadStatus === "Uploading..."
                    ? "yellow"
                    : "gray"
                }
              >
                Mac: {macUploadStatus}
              </Badge>
              <Badge
                color={
                  winUploadStatus === "Uploaded!"
                    ? "green"
                    : winUploadStatus === "Uploading..."
                    ? "yellow"
                    : "gray"
                }
              >
                Windows: {winUploadStatus}
              </Badge>
              <Badge
                color={
                  linuxUploadStatus === "Uploaded!"
                    ? "green"
                    : linuxUploadStatus === "Uploading..."
                    ? "yellow"
                    : "gray"
                }
              >
                Linux: {linuxUploadStatus}
              </Badge>
            </div>
          )}

          {
            // Upload status
            macUploadStatus === "Uploaded!" &&
              winUploadStatus === "Uploaded!" &&
              linuxUploadStatus === "Uploaded!" && (
                <div className="shadow-lg rounded-3xl overflow-x-hidden flex flex-col gap-2 mt-5 px-5 py-3">
                  <h2 className="font-semibold text-lg">Uploaded assets</h2>
                  <p>mac:</p>
                  <a
                    className="text-blue-400 hover:underline text-xs"
                    target={"_blank"}
                    href={macUrl}
                    rel="noreferrer"
                  >
                    {macUrl}
                  </a>
                  <p>win:</p>
                  <a
                    className="text-blue-400 hover:underline text-xs"
                    target={"_blank"}
                    href={winUrl}
                    rel="noreferrer"
                  >
                    {winUrl}
                  </a>
                  <p>lin:</p>
                  <a
                    className="text-blue-400 hover:underline text-xs"
                    target={"_blank"}
                    href={linuxUrl}
                    rel="noreferrer"
                  >
                    {linuxUrl}
                  </a>
                </div>
              )
          }
        </div>
        <div className="px-10 mt-20 flex justify-end">
          {macUploadStatus === "Uploaded!" &&
            winUploadStatus === "Uploaded!" &&
            linuxUploadStatus === "Uploaded!" && (
              <Publish
                sourceAppId={id}
                description={description}
                name={name}
                version={version}
                icon={icon}
                license={license}
                windowsInstaller={winUrl}
                macInstaller={macUrl}
                linuxInstaller={linuxUrl}
              />
            )}
        </div>
      </Drawer>
    </>
  );
}

export default PublishAsGame;
