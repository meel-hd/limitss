import {
  Button,
  Center,
  Chip,
  Image,
  Modal,
  SegmentedControl,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlertTriangle } from "tabler-icons-react";

interface GameCardProps {
  image: string;
  name: string;
  publisher: string;
  links: gameLinks;
}
// type for game links each game has 3 links
type gameLinks = {
  windows: string;
  linux: string;
  mac: string;
};

function GameCard({ image, name, publisher, links }: GameCardProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [platform, setPlatform] = useState("mac");
  useEffect(() => {
    // default to users os
    if (typeof window !== "undefined") {
      const os = window.navigator.platform;
      if (os.includes("Win")) {
        setPlatform("windows");
      } else if (os.includes("Mac")) {
        setPlatform("mac");
      } else if (os.includes("Linux")) {
        setPlatform("linux");
      }
    }
  }, []);
  return (
    <>
      <div className="bg-[#20202E80] backdrop-blur-md overflow-hidden rounded-2xl w-[270px] max-w-[90vw] h-[370px]">
        <Image className=" h-40" src={image} alt="" />
        <div className="px-4 py-1 mt-10">
          <h3 className="text-xl font-semibold mt-4">{name}</h3>
          <p className="text-xs ml-1">{publisher}</p>
          <p className="text-xs font-semibold mt-2">Windows, Linux, Mac</p>
          <div className="flex items-center justify-between mt-8">
            <p className="text-sm">⭐ 4.5</p>
            <button
              onClick={() => setOpen(true)}
              className="px-5 py-1 text-sm rounded-full bg-violet-500 active:translate-y-1"
            >
              Try
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={<p className="font-bold">{name}</p>}
        centered
        radius={"lg"}
        opened={open}
        onClose={() => setOpen(false)}
      >
        <Center>
          <SegmentedControl
            w={"100%"}
            value={platform}
            onChange={(value) => setPlatform(value)}
            radius={999}
            data={[
              { label: "Windows", value: "windows" },
              { label: "Linux", value: "linux" },
              { label: "Mac", value: "mac" },
            ]}
          />
        </Center>
        <div className="my-10">
          <div className="flex justify-between items-center hover:bg-white/10 rounded-lg p-2">
            <section className="flex items-center gap-3">
              {/* File Identifier */}
              <div
                className={
                  "w-10 h-8 flex justify-center items-center text-white rounded-lg opacity-70" +
                  (platform === "windows"
                    ? " bg-blue-400"
                    : platform === "linux"
                    ? " bg-red-300"
                    : " bg-gray-500")
                }
              >
                <p className=" text-center">
                  {platform === "windows" && ".msi"}
                  {platform === "linux" && ".deb"}
                  {platform === "mac" && ".dmg"}
                </p>
              </div>
              {/* File Name */}
              <div className="flex items-center justify-between">
                <p className="text-sm truncate">
                  {name.replace(/\s/g, "-") +
                    "-" +
                    platform +
                    "-v1.0.0" +
                    (platform === "windows"
                      ? ".msi"
                      : platform === "linux"
                      ? ".deb"
                      : ".dmg")}
                </p>
              </div>
            </section>
            <Button
              size="sm"
              loading={isLoading}
              onClick={() => {
                setIsLoading(true);
                getFile(name, platform, links, setIsLoading);
              }}
              className="px-5 py-1 text-xs rounded-full text-white bg-violet-500 hover:bg-violet-500 "
            >
              {isLoading ? "" : "Get"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default GameCard;

async function getFile(
  name: string,
  platform: string,
  links: gameLinks,
  setLoading
) {
  const fileUrl = links[platform];
  const xhr = new XMLHttpRequest();

  xhr.responseType = "blob";

  xhr.open("GET", fileUrl);
  xhr.send();

  xhr.onload = () => {
    // Check if the request was successful
    if (xhr.status === 200) {
      // Get the response data as a Blob object
      const blob = xhr.response;

      // Create a download link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      // Format file name correctly based on platform and game name
      link.download =
        name.replace(/\s/g, "-") +
        "-" +
        platform +
        "-v1.0.0" +
        (platform === "windows"
          ? ".msi"
          : platform === "linux"
          ? ".deb"
          : ".dmg");

      // Click the download link to trigger the download
      setLoading(false);
      link.click();
    } else {
      console.log("Something went wrong");
      showNotification({
        title: "Error",
        message: "Something went wrong",
        color: "red",
        icon: <AlertTriangle />,
      });
    }
  };
  return;
}
