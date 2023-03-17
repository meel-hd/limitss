import { Button, Center, Modal, Text } from "@mantine/core";
import { useState } from "react";
import { Search as SearchIcon } from "tabler-icons-react";
function Search() {
  const [opened, setOpened] = useState(false);
  return (
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
    </div>
  );
}

export default Search;
