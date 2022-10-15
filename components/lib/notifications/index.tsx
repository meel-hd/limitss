import { Notification as MantineNotification } from "@mantine/core";

export interface notificationProps {
    color: string;
    title: string;
    message: string;
}

function Notification({ color, title, message }: notificationProps) {
    return (
        <MantineNotification
            styles={{
                root:{}
            }}
            className="absolute bottom-4 right-3 max-w-full w-72 sm:w-96"
            disallowClose
            color={color}
            radius={"md"}
            title={title}
        >
            {message}
        </MantineNotification>
    );
}

export default Notification;
