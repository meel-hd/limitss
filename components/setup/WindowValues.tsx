import { FileInput, Switch, Text, TextInput } from "@mantine/core";
import Uploader from "components/upload";
import { Dispatch, SetStateAction, useState } from "react";
import { Check, X } from "tabler-icons-react";
import { CreateAppInput } from "../../generated/graphql";

interface WindowValuesProps {
  createAppValues: CreateAppInput;
  handleChange: Dispatch<SetStateAction<CreateAppInput>>;
}

export const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

function WindowValues({ createAppValues, handleChange }: WindowValuesProps) {
  return (
    <div className="flex flex-col justify-start items-start w-full sm:w-1/3">
      <TextInput
        label="Name"
        description="This will show as the name of the app to users"
        placeholder="The name "
        value={createAppValues.name}
        error={
          createAppValues.name.length > 185
            ? "Name is too long, only 185 characters allowed, it will look bad : )"
            : false
        }
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, name: e.target.value };
          })
        }
      />
      <TextInput
        label="Link"
        description="The screen the app will open on it every time"
        placeholder="https://example.com"
        error={
          createAppValues.link.length > 185
            ? "Link is too long, only 185 characters allowed."
            : createAppValues.link.length > 0 &&
              !urlRegex.test(createAppValues.link)
            ? "Not a valid URL"
            : false
        }
        value={createAppValues.link}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, link: e.target.value };
          })
        }
      />
      <Uploader handleChange={handleChange} />
      {/* <FileInput
        className="w-full sm:w-1/2 truncate"
        label="Icon"
        accept="image/png"
        description="This is the icon of the app"
        placeholder="Choose app icon"
        // TODO: Figure out how to implement icons
        // value={createAppValues.icon}
        onChange={(icon) => {
          handleChange((oldValus) => {
            if (icon != null) {
              return { ...oldValus, icon: URL.createObjectURL(icon as Blob) };
            } else {
              return {...oldValus, icon:''};
            }
          });
        }}
      /> */}
      <Text mt={25} size={"xs"} color="dimmed">
        Whether the window is maximized or not.
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Maximized"
        checked={createAppValues.maximized}
        offLabel={<X size={15} />}
        onLabel={<Check size={15} />}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, maximized: e.target.checked };
          })
        }
      />
      <Text mt={15} size="xs" color={"dimmed"}>
        Whether the window should always be on top of other windows.
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Always On Top"
        checked={createAppValues.alwaysOnTop}
        offLabel={<X size={15} />}
        onLabel={<Check size={15} />}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, alwaysOnTop: e.target.checked };
          })
        }
      />
      <Text mt={15} size="xs" color={"dimmed"}>
        Whether the window will be initially focused or not.
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Focused"
        checked={createAppValues.focus}
        offLabel={<X size={15} />}
        onLabel={<Check size={15} />}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, focus: e.target.checked };
          })
        }
      />
    </div>
  );
}

export default WindowValues;
