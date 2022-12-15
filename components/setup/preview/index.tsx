import { useState } from "react";
import MacOsPrev from "./MacOsPrev";
import WindowsOsPrev from "./WindowsOsPrev";

function Preview({ appName, icon }: { appName: string; icon: string }) {
  const [isMacPrev, setIsMacPrev] = useState(true);
  return (
    <div className="">
      {isMacPrev ? (
        <MacOsPrev appName={appName} icon={icon} togglePrev={setIsMacPrev} />
      ) : (
        <WindowsOsPrev
          icon={icon}
          appName={appName}
          togglePrev={setIsMacPrev}
        />
      )}
    </div>
  );
}

export default Preview;
