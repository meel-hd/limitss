import { Avatar, Tooltip } from "@mantine/core";
import { PreviewProps } from "./MacOsPrev";

function WindowsOsPrev({ appName, icon, togglePrev }: PreviewProps) {
  return (
    <Tooltip
      color={"gray"}
      radius="xl"
      className="select-none   hidden  sm:flex "
      label="Click to preview MacOs"
    >
      <div
        onClick={() => togglePrev((old) => !old)}
        style={{
          backgroundImage: 'url("https://picsum.photos/1000")',
          backgroundSize: "100%",
        }}
        className="bg-gradient-to-br from-blue-400  to-sky-300 bg-no-repeat select-none   hidden  sm:flex  shadow-md  flex-col justify-end items-center w-[370px] h-[200px] lg:w-[500px] lg:h-[296px] ml-5  overflow-hidden rounded-xl "
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
              size={20}
              src={icon}
            />
          )}
        </div>
      </div>
    </Tooltip>
  );
}

export default WindowsOsPrev;
