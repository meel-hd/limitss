import {
  Autocomplete,
  Avatar,
  Text,
  Button,
  Card,
  FileInput,
  Modal,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
const Licenses = ["MIT", "Apache", "BSD", "GPL"];

function Setup() {
  const [productName, setProductName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [license, setLicense] = useState("");
  const [version, setVersion] = useState("1.0.0");
  const [appId, setAppId] = useState("");
  const [icon, setIcon] = useState<File | null>(null);
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <Card withBorder radius={"lg"} shadow={"xs"} className="w-3/4 h-3/4">
        <TextInput
          className="w-1/2 sm:w-1/3"
          required
          label="Product name"
          placeholder="The name visible to users"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextInput
          className="w-1/2 sm:w-1/3"
          required
          label="Name"
          placeholder="Enter the name... Example: myapp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          className="w-1/2 sm:w-1/3"
          required
          label="Description"
          placeholder="Two sentences describing the app..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Autocomplete
          data={Licenses}
          className="w-1/2 sm:w-1/3"
          required
          label="License"
          placeholder="Software license"
          value={license}
          onChange={setLicense}
        />
        <FileInput
          className="w-1/2 sm:w-1/3"
          required
          label="Icon"
          placeholder="Choose app icon"
          value={icon}
          onChange={setIcon}
        />
        {/* { icon != null && <Avatar src={URL.createObjectURL(icon)} />} */}
        <TextInput
          className="w-1/2 sm:w-1/3"
          required
          label="App Id"
          placeholder="Example: My app Desktop"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
        />
        <TextInput
          className="w-1/2 sm:w-1/3"
          required
          label="Version"
          placeholder="Example: 1.0.0"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        />
        {/* You can choose from predefined licenses */}
        <Card.Section p={20} className="flex flex-row justify-end items-center">
          <Button
            className="bg-gradient-to-r rounded-full from-indigo-500 to-violet-400 hover:bg-gradient-to-t"
          >
            Build App
          </Button>
        </Card.Section>
      </Card>
    </div>
  );
}

export default Setup;
