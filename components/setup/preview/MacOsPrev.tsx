import { Avatar, Tooltip } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

export interface PreviewProps {
  appName: string;
  icon: string;
  togglePrev: Dispatch<SetStateAction<boolean>>;
}

function MacOsPrev({ appName, icon, togglePrev }: PreviewProps) {
  
  return (
    <Tooltip  color={'gray'} radius='xl' className="select-none" label="Click to preview Windows">
      <div
        onClick={() => togglePrev((old) => !old)}
        style={{ backgroundImage: `url("https://picsum.photos/1500")`, backgroundSize:"100%" }}
        className="bg-gradient-to-tl from-gray-400  to-sky-200  hidden sm:flex shadow-md  flex-col justify-end items-center select-none w-[500px] h-[296px] overflow-hidden rounded-xl "
      >
        {appName.length > 0 && icon.length > 0 && (
          <div
            className="text-black bg-[#ffffff90] mb-4
        max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap
        py-[2px] px-[10px] font-medium rounded-md select-none font-sans"
          >
            {appName}
          </div>
        )}
        <div
          style={{
            backgroundColor:'rgba(243 ,244 ,246,0.7)',
            backgroundImage: 'url("dock.png")',
            backgroundSize: "90%",
            backgroundPosition: 'center'
          }}
          className=" w-[50%] h-11 mb-1 mx-1 bg-no-repeat rounded-lg flex justify-center items-center"
        >
         { icon.length > 0 && <Avatar
            className="rounded-none pointer-events-none"
            size={"md"}
            src={icon}
          />}
        </div>
      </div>
    </Tooltip>
  );
}

export default MacOsPrev;
