import { Autocomplete, FileInput, TextInput } from "@mantine/core";
import { useState } from "react";
const Licenses = ["MIT", "Apache", "BSD", "GPL"];
function PrimaryInputs() {
  const [productName, setProductName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [license, setLicense] = useState("");
  const [version, setVersion] = useState("1.0.0");
  const [appId, setAppId] = useState("");
  const [icon, setIcon] = useState<File | null>(null);
  return (
    <div className="flex flex-col w-1/2 sm:w-1/3">
      <TextInput
        required
        label="Product name"
        placeholder="The name visible to users"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextInput
        required
        label="Name"
        placeholder="Example: myapp"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        required
        label="Description"
        placeholder="Two sentences describing the app..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Autocomplete
        data={Licenses}
        required
        label="License"
        placeholder="Software license"
        value={license}
        onChange={setLicense}
      />
      <FileInput
        required
        label="Icon"
        placeholder="Choose app icon"
        value={icon}
        onChange={setIcon}
      />
      {/* { icon != null && <Avatar src={URL.createObjectURL(icon)} />} */}
      <TextInput
        required
        label="App Id"
        placeholder="Example: My app Desktop"
        value={appId}
        onChange={(e) => setAppId(e.target.value)}
      />
      <TextInput
        required
        label="Version"
        placeholder="Example: 1.0.0"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
      />
    </div>
  );
}

export default PrimaryInputs;
