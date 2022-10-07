import { Button } from "@mantine/core";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

interface PrimaryBtnProps {
    children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
    onClick: () => void
}   

function PrimaryBtn({ children, onClick }: PrimaryBtnProps) {
    return ( 
        
        <Button onClick={() => onClick()} className=" bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-0xl h-[40px]">{children}</Button>
     );
}

export default PrimaryBtn;