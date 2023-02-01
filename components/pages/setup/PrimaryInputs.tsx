import { Button, NumberInput, Select, TextInput } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { Dispatch, SetStateAction } from "react";
import { ChevronsDown } from "tabler-icons-react";
import { CreateAppInput } from "../../../generated/graphql";

export const LICENSES = ["MIT", "Apache", "BSD", "GPL"];
interface PrimaryInputsProps {
  createAppValues: CreateAppInput;
  handleChange: Dispatch<SetStateAction<CreateAppInput>>;
  showAdvanced: () => void
}
export const semverRegex =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/;

function PrimaryInputs({ createAppValues, handleChange, showAdvanced }: PrimaryInputsProps) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div className="flex flex-col w-full sm:w-1/3">
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
      <TextInput
        label="Description"
        description="This will show in some parts of the OS about the app"
        placeholder="Two sentences describing the app..."
        value={createAppValues.description}
        // todo: add error message
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, description: e.target.value };
          })
        }
        error={
          createAppValues.description.length > 185
            ? "Description is too long, only 185 characters allowed"
            : false
        }
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
      <TextInput
        label="Version"
        description="For the users to know which version of the app they are using"
        placeholder="Example: 1.0.0"
        value={createAppValues.version}
        // check if the length is valid and it's a valid version
        error={
          createAppValues.version.length > 185
            ? "Version is too long, only 185 characters allowed"
            : createAppValues.version.length > 0 &&
              !semverRegex.test(createAppValues.version)
            ? "Version is not valid"
            : false
        }
        onChange={(e) =>
          handleChange((oldValues) => {
            return { ...oldValues, version: e.target.value.trim() };
          })
        }
      />
      <Button
        onClick={() => {
          showAdvanced()
          // delauy scroll for 400ms
          setTimeout(() => {
            scrollTo({ y: 1000000});
          }, 100);


        }}
        className="mt-4"
        color={"violet"}
        variant="subtle"
        rightIcon={<ChevronsDown />}
      >
        Advanced
      </Button>
    </div>
  );
}

export default PrimaryInputs;
