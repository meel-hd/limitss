import { NumberInput, Switch, TextInput } from "@mantine/core";
import { useState } from "react";
function WindowValues() {
  const [title, setTitle] = useState("");
  const [windowWidth, setWindowWidth] = useState(800);
  const [windowHeight, setWindowHeight] = useState(600);
  const [fullscreen, setFullscreen] = useState(true);
  const [titleChange, setTitleChange] = useState(false);
  const [topMenu, setTopMenu] = useState(false);
  return (
    <div className="flex flex-col justify-start items-start w-1/2 sm:w-1/3">
      <TextInput
        label="Title"
        description="This will appear as the title off the app when it loads"
        placeholder="Title of the app"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <NumberInput
        min={200}
        hideControls
        label="Width"
        value={windowWidth}
        onChange={(val) => setWindowWidth(val as number)}
      />
      <NumberInput
        min={200}
        hideControls
        defaultValue={600}
        label="Height"
        value={windowHeight}
        onChange={(val) => setWindowHeight(val as number)}
      />
      <Switch
        color={"violet"}
        size="md"
        mt={25}
        label="Fullscreen"
        checked={fullscreen}
        onChange={(e) => setFullscreen(e.currentTarget.checked)}
      />
      <Switch
        color={"violet"}
        size="md"
        mt={25}
        label="Title Change"
        checked={titleChange}
        onChange={(e) => setTitleChange(e.currentTarget.checked)}
      />
      <Switch
        color={"violet"}
        size="md"
        mt={25}
        label="Top Menu"
        checked={topMenu}
        onChange={(e) => setTopMenu(e.currentTarget.checked)}
      />
    </div>
  );
}

export default WindowValues;
