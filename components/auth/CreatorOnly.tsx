import { Center } from "@mantine/core";
import { ROLE } from "@prisma/client";

function CreatorOnly({ children, user }) {
  return (
    <>
      {user?.role == ROLE.CREATOR ? (
        children
      ) : (
        <Center className="mt-20 flex-col">
          <h1 className="text-2xl font-bold">You are not a creator</h1>
          <p className="text-gray-500 text-xs">Request Access</p>
        </Center>
      )}
    </>
  );
}

export default CreatorOnly;
