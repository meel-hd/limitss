import { ActionIcon, Tooltip, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { Trash } from "tabler-icons-react";
import { DeleteApp as DeleteAppMutation } from "lib/gql.client";

function DeleteApp({
  id,
  handleRefetch,
}: {
  id: number;
  handleRefetch: () => void;
}) {
  const { mutateAsync , isError, isSuccess} = useMutation({
    mutationKey: ["deleteApp", id],
    mutationFn: () => DeleteAppMutation({ appId: id }),
    onSuccess: (data) => {
      showNotification({
        title: "App Deleted",
        message: `The app ${data.deleteApp.name} has been deleted`,
        color: "lime",
      });
    },
    onError: () => {
      showNotification({
        title: "Error",
        message: "There was an error deleting the app",
        color: "red",
      });
    },
    onMutate: () => {
        showNotification({
            title: "Deleting App",
            message: "The app is being deleted",
            color: "violet",
            loading: true,
        })}
  });
  const modals = useModals();
  const deleteConfirm = () => {
    modals.openConfirmModal({
      title: "Confirm Delete",
      style: {
        zIndex: "9999",
      },
      radius: "lg",
      classNames: {
        close: "rounded-full",
        body: "rounded-lg",
        title:'font-semibold ',
      },
      overlayOpacity: 0,
      overlayBlur:1,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this tournament? everything will be
          lost.
        </Text>
      ),
      labels: { confirm: "Yes Delete", cancel: "No don't" },
      confirmProps: {
        color: "red",
        className: "bg-red-500",
      },
      onConfirm: () =>
        mutateAsync()
          .then(() => handleRefetch())
          .catch((err) => console.log(err)),
    });
  };
  return (
    <Tooltip label="Delete" radius={999} position="top">
      <ActionIcon
        onClick={() => {
          deleteConfirm();
        }}
        radius={999}
      >
        <Trash size={20} color="red" />
      </ActionIcon>
    </Tooltip>
  );
}

export default DeleteApp;
