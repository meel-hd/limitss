import { Button } from "@mantine/core";
import {
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";

interface PrimaryBtnProps {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
    loading?: boolean;
    props?: any;
}

function PrimaryBtn({ children, props, loading }: PrimaryBtnProps) {
    return (
        <Button
            styles={{
                root: {
                    ":disabled": {
                        backgroundColor: "rgb(99, 102 ,241)",
                        color: "#fff",
                    },
                },
            }}
            {...props}
            className=" bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]"
        >
            {children}
        </Button>
    );
}

export default PrimaryBtn;
