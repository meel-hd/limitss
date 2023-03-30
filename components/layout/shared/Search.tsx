import {
  Button,
  Center,
  Modal,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useState } from "react";
import { Search as SearchIcon } from "tabler-icons-react";
function Search({ onlySimple }: { onlySimple?: boolean }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineColorScheme();
  return (
    <>
      {!onlySimple ? (
        <div
          onClick={() => setOpened(true)}
          className="bg-white rounded-full min-w-[15vw] h-10 flex justify-between items-center pl-4 pr-1 py-1"
        >
          <Text className="select-none mr-2" size={"sm"} color="dimmed">
            Search...
          </Text>
          <Button
            w={30}
            h={30}
            p={0}
            className=" bg-gradient-to-r from-indigo-500 to-violet-400 "
          >
            <SearchIcon width={20} strokeWidth={2} />
          </Button>
        </div>
      ) : (
        <button
          className={`w-10 h-10 rounded-full ${
            theme.colorScheme == "dark" ? " bg-white/5 " : " bg-slate-600/10 "
          }`}
          onClick={() => setOpened(true)}
        >
          <SearchIcon className="mx-[auto]" width={20} strokeWidth={2} />
        </button>
      )}
      <Modal
        centered
        radius={"lg"}
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      >
        <Center>Coming Soon!</Center>
      </Modal>
    </>
  );
}

export default Search;
