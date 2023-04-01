import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { PublishGameInput } from "generated/graphql";
import { PublishGame } from "lib/gql.client";
import { Check } from "tabler-icons-react";

function Publish({
  description,
  icon,
  license,
  linuxInstaller,
  macInstaller,
  name,
  version,
  windowsInstaller,
  sourceAppId,
}: PublishGameInput) {
  const { isLoading, mutateAsync } = useMutation({
    mutationKey: ["publish"],
    mutationFn: () =>
      PublishGame({
        args: {
          description,
          icon,
          license,
          linuxInstaller,
          macInstaller,
          name,
          version,
          windowsInstaller,
          sourceAppId,
        },
      }),
    onSuccess: () => {
      showNotification({
        title: "Published!",
        message: "Your game has been published!",
        color: "green",
        icon: <Check />,
      });
    },
    onError: (err) => {
      showNotification({
        title: "Error",
        // @ts-ignore
        message: err.response.errors[0].message,
        color: "red",
      });
    },
  });
  return (
    <Button
      className="bg-violet-500 hover:bg-violet-500"
      onClick={() => mutateAsync().catch((err) => null)}
      loading={isLoading}
    >
      Publish
    </Button>
  );
}

export default Publish;
