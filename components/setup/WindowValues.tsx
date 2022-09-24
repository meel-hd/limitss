import { NumberInput, Switch, Text, FileInput, TextInput } from "@mantine/core";
import { useState } from "react";
function WindowValues() {
  const [title, setTitle] = useState("");
  const [windowWidth, setWindowWidth] = useState(800);
  const [windowHeight, setWindowHeight] = useState(600);
  const [fullscreen, setFullscreen] = useState(false);
  const [titleChange, setTitleChange] = useState(false);
  const [topMenu, setTopMenu] = useState(false);
  const [icon, setIcon] = useState<File | null>(null);
  return (
    <div className="flex flex-col justify-start items-start w-full sm:w-1/3">
      <TextInput
        required
        label="Title"
        description="This will appear as the title off the app when it loads"
        placeholder="Title of the app"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FileInput
        required
        className="w-full sm:w-1/2"
        label="Icon"
        description='This is the icon of the app'
        placeholder="Choose app icon"
        value={icon}
        onChange={setIcon}
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
      <Text mt={25} size={"xs"} color="dimmed">
        Show the app in fullscreen when it loads
      </Text>
      <Switch
        color={"violet"}
        size="md"
        label="Fullscreen"
        checked={fullscreen}
        onChange={(e) => setFullscreen(e.currentTarget.checked)}
      />
      <Text mt={15} size="xs" color={"dimmed"}>
        When visiting different URLs if the title should change
      </Text>
      <Switch
        color={"violet"}
        size="md"
        label="Title Change"
        checked={titleChange}
        onChange={(e) => setTitleChange(e.currentTarget.checked)}
      />
      <Text mt={15} size="xs" color={"dimmed"}>
        A menu with some options Like refrech and force reload
      </Text>
      <Switch
        color={"violet"}
        size="md"
        label="Top Menu"
        checked={topMenu}
        onChange={(e) => setTopMenu(e.currentTarget.checked)}
      />
    </div>
  );
}

export default WindowValues;
