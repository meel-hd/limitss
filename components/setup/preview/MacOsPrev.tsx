import { Avatar, Tooltip } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

export interface PreviewProps {
  appName: string;
  icon: string;
  togglePrev: Dispatch<SetStateAction<boolean>>;
}

function MacOsPrev({ appName, icon, togglePrev }: PreviewProps) {
  return (
    <Tooltip  color={'gray'} radius='xl' className="select-none" label="Double click to switch preview">
      <div
        onDoubleClick={() => togglePrev((old) => !old)}
        style={{ backgroundImage: 'url("https://picsum.photos/1000")' }}
        className="bg-gray-500 shadow-md flex flex-col justify-end items-center select-none w-[500px] h-[296px] overflow-hidden rounded-xl "
      >
        {appName.length > 0 && icon.length > 0 && (
          <div
            className="text-black bg-[#ffffff60] mb-6
        max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap
        py-[2px] px-[10px] font-medium rounded-md select-none font-sans"
          >
            {appName}
          </div>
        )}
        <div
          style={{
            backgroundImage: 'url("macDock.png")',
            backgroundSize: "100%",
          }}
          className=" w-[313px] h-[110px] rounded-t-md flex justify-center items-center"
        >
         { icon.length > 0 && <Avatar
            className="rounded-none pointer-events-none"
            size={"xl"}
            src={icon}
          />}
        </div>
      </div>
    </Tooltip>
  );
}

export default MacOsPrev;
