import { Avatar, Tooltip } from "@mantine/core";
import { PreviewProps } from "./MacOsPrev";

function WindowsOsPrev({ appName, icon, togglePrev }: PreviewProps) {
  return (
    <Tooltip color={'gray'} radius='xl' className="select-none " label="Double click to switch preview">
      <div
        onDoubleClick={() => togglePrev((old) => !old)}
        style={{
          backgroundImage: 'url("wallpaper.png")',
          backgroundSize: "100%",
        }}
        className="bg-blue-400 select-none shadow-md flex flex-col justify-end items-center w-[500px] h-[296px] overflow-hidden rounded-xl "
      >
        {appName.length > 0 && icon.length > 0 && (
          <div
            className="ml-28 mb-2 text-black bg-gray-100 border-[1px] border-gray-200
      max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap
      py-[1px] px-[10px] font-light text-sm rounded-md select-none font-sans"
          >
            {appName}
          </div>
        )}
        <div
          style={{
            backgroundImage: 'url("windowsDock.png")',
            backgroundSize: "100%",
          }}
          className=" w-full h-[30px] flex justify-center items-center"
        >
          {icon.length > 0 && (
            <Avatar
              className="ml-28 rounded-none pointer-events-none"
              size={"sm"}
              src={icon}
            />
          )}
        </div>
      </div>
    </Tooltip>
  );
}

export default WindowsOsPrev;
