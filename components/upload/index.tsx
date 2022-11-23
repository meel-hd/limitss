import axios from "axios";
import { Upload } from "tabler-icons-react";
import { SetStateAction, useState } from "react";
import { FileInput, Loader, Text, useMantineTheme } from "@mantine/core";
import { CreateAppInput } from "generated/graphql";

const BUCKET_URL = "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/";
type Props = {
  setUrl?: (url: string) => void;
  handleChange: (value: SetStateAction<CreateAppInput>) => void;
};
export default function Uploader({ setUrl, handleChange }: Props) {
  const [file, setFile] = useState<any>();
  const [uploadingStatus, setUploadingStatus] = useState<any>();
  const [_uploadedFile, setUploadedFile] = useState<any>();

  const selectFile = (file) => {
    setFile(file);
  };

  const uploadFile = async () => {
    setUploadingStatus("Uploading...");

    let { data } = await axios.post("/api/upload", {
      name: file.name,
      type: file.type,
    });

    const url = data.url;
    const fileUrl = data.fileUrl;

    await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + file.name);
    setUrl && setUrl(fileUrl);
    if (handleChange) {
      handleChange((oldValues) => {
        return { ...oldValues, icon: fileUrl };
      });
    }

    setUploadingStatus("Uploaded!");
    setFile(null);
    console.log(fileUrl);
  };
  const uploading = uploadingStatus === "Uploading...";
  const uploaded = uploadingStatus === "Uploaded!";
  type uploadUiProps = {
    uploaded: boolean;
  };

  function UploadUi({ uploaded }: uploadUiProps): JSX.Element {
    return (
      <>
        <div>
          <FileInput
            id="upload"
            accept="image/png"
            onChange={(e) => {
              selectFile(e);
              setUploadingStatus("");
            }}
            hidden
          />
          <label
            htmlFor="upload"
            className="cursor-pointer text-violet-500 text-sm"
          >
            {file ? "Change File" : "Select an icon"}
          </label>
        </div>
        {file && (
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={uploadFile}
              className=" btn flex text-xs flex-row items-center max-w-[140px] truncate  cursor-pointer  gap-2"
            >
              <Upload size={15} />
              Upload {file.name}
            </button>
          </div>
        )}

        {uploaded && (
          <Text size="xs" color={"dimmed"} className="text-center">
            Uploaded!
          </Text>
        )}
      </>
    );
  }
  const theme = useMantineTheme();
  return (
    <>
      <div className={`flex justify-between max-h-9 items-center w-60 mt-3 rounded-full bg-white/5 px-2 py-2 ${theme.colorScheme == 'light' && 'bg-slate-200/20'}`}>
        {uploaded ? (
          <>
            <UploadUi uploaded={true} />
          </>
        ) : uploading ? (
          <>
            <Loader variant="dots" color={"violet"} />
            <Text size="xs" color={"dimmed"} className="text-center">
              Uploading!
            </Text>
          </>
        ) : (
          <>
            <UploadUi uploaded={false} />
          </>
        )}
      </div>
    </>
  );
}
