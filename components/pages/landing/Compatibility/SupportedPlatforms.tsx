import { Image } from "@mantine/core";
import { MainColor } from "pages";

function SupportedPlatforms() {
  return (
    <div style={{
        //linear gradient
        backgroundImage: `linear-gradient(${MainColor}10,${MainColor}40, ${MainColor} , ${MainColor}40, ${MainColor}10)`,
        
    }} className=" h-40 -mt-12 z-50 relative flex justify-center items-centers overflow-hidden">
      <div className="w-full flex justify-center gap-5 items-center pl-4">
        <Image width={150} src="/images/Hero/OS/windows.png" alt="Windows" className="select-none pointer-events-none"/>
        <Image width={150} src="/images/Hero/OS/macOs.png" alt="Mac" className="select-none pointer-events-none"/>
        <Image width={150} src="/images/Hero/OS/linux.png" alt="Linux" className="select-none pointer-events-none"/>
      </div>
    </div>
  );
}

export default SupportedPlatforms;
