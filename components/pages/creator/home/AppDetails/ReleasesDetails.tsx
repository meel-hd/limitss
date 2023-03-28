import { Loader, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import formatBytes from "./utils/formatBytes";

function ReleasesDetails({ name }: { name: string }) {
  const [releases, setReleases] = useState<any>();
  useEffect(() => {
    const getReleases = async () => {
      const { data: res } = await axios.post("/api/github/repos/releases", {
        name: name,
      });
      setReleases(res);
    };
    getReleases();
  }, [name]);

  return (
    <>
      {!releases && <Loader color={"violet"} />}
      {releases && releases.length === 0 && (
        <Text size={"sm"} color="dimmed">
          No releases found, please check the status above for more information.
        </Text>
      )}
      {releases &&
        releases?.map((release, index) => {
          return (
            <div key={release.id}>
              <h1>
                Release {index + 1}: <small>{release.name}</small>
              </h1>
              <h3 className="ml-5 font-semibold">Assets</h3>
              {release.assets.length === 0 && (
                <Text ml={20} size={"sm"} color="dimmed">
                  No assets, please check the status above for more information.
                </Text>
              )}
              <div className="pl-5 flex flex-wrap">
                {release.assets.map((asset) => {
                  return (
                    <div
                      className="hover:bg-slate-400/10 w-1/2 px-6 py-1 rounded-md "
                      key={asset.id}
                    >
                      <div className="flex flex-wrap relative">
                        <Text size={"sm"}>{asset.name}</Text>
                        <Text size={8} color="dimmed" className="mr-6 ml-1 ">
                          {formatBytes(asset.size, 2)}
                        </Text>
                      </div>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        className="text-violet-300 hover:underline"
                        href={asset.browser_download_url}
                      >
                        Download
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ReleasesDetails;
