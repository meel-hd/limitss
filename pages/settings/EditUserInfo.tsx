import { Button, Text, LoadingOverlay, Modal, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { UpdateUser } from "lib/gql.client";
import { useState } from "react";

function EditUserInfo({ opened, setOpened, data, updateData }) {
  const [name, setName] = useState<string>(data.name);
  const [company, setCompany] = useState<string>(data.company);
  const [role, setRole] = useState<string>(data.role);
  const [image, setImage] = useState<string>(data.image);
  function clearState() {
    setName(data.name);
    setCompany(data.company);
    setRole(data.role);
    setImage(data.image);
  }
  const { mutateAsync, isLoading, isError } = useMutation({
    mutationKey: ["UpdateUser"],
    mutationFn: () =>
      UpdateUser({
        args: {
          email: data.email,
          name,
          company,
          role,
          image,
        },
      }),
      onSuccess:()=>{
        updateData((oldData) => {
          return { ...oldData, name, company, role, image };
        });
        setOpened(false)
      }
  });
  return (
    <Modal
      title="Edit Account"
      onClose={() => setOpened(false)}
      opened={opened}
    >
      {isError && <Text size={'xs'} color={'red'}>Something went wrong! <br/>Please refrech the page</Text>}
      <TextInput
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        label="Company"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <TextInput
        label="Role"
        placeholder="Role at company"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <TextInput
        label="Profile Image"
        placeholder="Image Link"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div className="w-full mt-5 flex justify-between items-center">
        <Button
          variant="outline"
          color={"violet"}
          onClick={() => {
            clearState();
            setOpened(false);
          }}
        >
          Cancel
        </Button>
        <Button
          className="bg-violet-500 hover:bg-violet-500"
          onClick={async() => {
            await mutateAsync()
          }}
        >
          Update
        </Button>
      </div>
      
      <LoadingOverlay overlayBlur={2} visible={isLoading} />
    </Modal>
  );
}

export default EditUserInfo;
