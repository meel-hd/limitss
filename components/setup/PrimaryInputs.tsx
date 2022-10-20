import { Select, TextInput } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { CreateAppInput } from "../../generated/graphql";

export const LICENSES = ["MIT", "Apache", "BSD", "GPL"];
interface PrimaryInputsProps {
  createAppValues: CreateAppInput;
  handleChange: Dispatch<SetStateAction<CreateAppInput>>;
}

function PrimaryInputs({ createAppValues, handleChange }: PrimaryInputsProps) {
  return (
    <div className="flex flex-col w-full sm:w-1/3">
      <TextInput
        label="Product name"
        description="This will show as the name of the app in the dock and other parts"
        placeholder="The name visible to users"
        value={createAppValues.productName}
        error={createAppValues.productName.length > 185 ? 'Title is too long, only 185 characters allowed': false}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, productName: e.target.value };
          })
        }
      />
      <TextInput
        label="Name"
        placeholder="Example: myapp"
        value={createAppValues.name}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, name: e.target.value };
          })
        }
        error={createAppValues.name.length > 185 ? 'Title is too long, only 185 characters allowed': false}
      />
      <TextInput
        label="Description"
        description="This will show in some parts of the OS about the app"
        placeholder="Two sentences describing the app..."
        value={createAppValues.description}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, description: e.target.value };
          })
        }
        error={createAppValues.description.length > 185 ? 'Title is too long, only 185 characters allowed': false}
      />
      <Select
        data={LICENSES}
        searchable
        clearable
        label="License"
        description="Establish how your software is distributed"
        placeholder="Software license"
        value={createAppValues.license}
        onChange={(license) =>
          handleChange((oldValues) => {
            return { ...oldValues, license: license as string };
          })
        }
      />
      {/* { icon != null && <Avatar className="rounded-full" src={URL.createObjectURL(icon)} />} */}
      <TextInput
        label="App Id"
        description="This will appears when you hover on the app"
        placeholder="Example: My app Desktop"
        value={createAppValues.appId}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, appId: e.target.value };
          })
        }
        error={createAppValues.appId.length > 185 ? 'Title is too long, only 185 characters allowed': false}
      />
      <TextInput
        label="Version"
        description="For the users to know which version of the app they are using"
        placeholder="Example: 1.0.0"
        value={createAppValues.version}
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, version: e.target.value.trim() };
          })
        }
        error={createAppValues.version.length > 185 ? 'Title is too long, only 185 characters allowed': false}
      />
    </div>
  );
}

export default PrimaryInputs;
