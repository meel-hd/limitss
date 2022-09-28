import {
  NumberInput,
  Switch,
  Text,
  FileInput,
  TextInput,
  Avatar,
} from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";
import { Check, X } from "tabler-icons-react";
import { CreateAppInput } from "../../generated/graphql";

interface WindowValuesProps {
  createAppValues: CreateAppInput;
  // handleChange: (a: CreateAppInput) => CreateAppInput;
  //
  handleChange: Dispatch<SetStateAction<CreateAppInput>>;
}

function WindowValues({ createAppValues, handleChange }: WindowValuesProps) {
  return (
    <div className="flex flex-col justify-start items-start w-full sm:w-1/3">
      <TextInput
        label="Title"
        description="This will appear as the title off the app when it loads"
        placeholder="Title of the app"
        value={createAppValues.title}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, title: e.target.value };
          })
        }
      />
      <FileInput
        className="w-full sm:w-1/2 truncate"
        label="Icon"
        description="This is the icon of the app"
        placeholder="Choose app icon"
        // TODO: Figure out how to implement icons
        // value={createAppValues.icon}
        onChange={(icon) => {
          handleChange((oldValus) => {
            return { ...oldValus, icon: URL.createObjectURL(icon as Blob) };
          });
        }}
      />
      {createAppValues.icon.length > 0 && (
        <Avatar
          className="shadow-sm"
          radius={"xl"}
          src={createAppValues.icon}
        />
      )}
      <NumberInput
        min={200}
        hideControls
        label="Width"
        value={createAppValues.width}
        onChange={(val) =>
          handleChange((oldValues) => {
            return { ...oldValues, width: val as number };
          })
        }
      />
      <NumberInput
        min={200}
        hideControls
        defaultValue={600}
        label="Height"
        value={createAppValues.height}
        onChange={(val) =>
          handleChange((oldValues) => {
            return { ...oldValues, height: val as number };
          })
        }
      />
      <Text mt={25} size={"xs"} color="dimmed">
        Show the app in fullscreen when it loads
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Fullscreen"
        checked={createAppValues.fullscreen}
        offLabel={<X size={15}/>}
        onLabel={<Check size={15}/>}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, fullscreen: e.target.checked };
          })
        }
      />
      <Text mt={15} size="xs" color={"dimmed"}>
        When visiting different URLs if the title should change
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Title Change"
        checked={createAppValues.titleChange}
        offLabel={<X size={15}/>}
        onLabel={<Check size={15}/>}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, titleChange: e.target.checked };
          })
        }
      />
      <Text mt={15} size="xs" color={"dimmed"}>
        A menu with some options Like refrech and force reload
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Top Menu"
        checked={createAppValues.topMenu}
        offLabel={<X size={15}/>}
        onLabel={<Check size={15}/>}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, topMenu: e.target.checked };
          })
        }
      />
    </div>
  );
}

export default WindowValues;
