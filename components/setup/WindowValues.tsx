import {
  FileInput, NumberInput,
  Switch,
  Text, TextInput
} from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
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
        label="Name"
        description="This will show as the name of the app in the dock and other parts"
        placeholder="The name visible to users"
        value={createAppValues.name}
        error={createAppValues.name.length > 185 ? 'Name is too long, only 185 characters allowed, it will look bad : )': false}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, name: e.target.value };
          })
        }
      />
      <TextInput
        label="Link"
        description="The screen the app will open on it every time"
        placeholder="Two sentences describing the app..."
        error={createAppValues.link.length > 185 ? 'Link is too long, only 185 characters allowed.': false}
        value={createAppValues.link}
        onChange={(e) => 
          handleChange((oldValues) => {
            return { ...oldValues, link: e.target.value };
          })
        }
      />
      <FileInput
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
      />
      <Text mt={25} size={"xs"} color="dimmed">
        Show the app in fullscreen when it loads
      </Text>
      <Switch
        color={"violet"}
        size="sm"
        label="Fullscreen"
        checked={createAppValues.fullscreen}
        offLabel={<X size={15} />}
        onLabel={<Check size={15} />}
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
        offLabel={<X size={15} />}
        onLabel={<Check size={15} />}
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
        offLabel={<X size={15} />}
        onLabel={<Check size={15} />}
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
