import { Image } from "@mantine/core";
import Link from "next/link";

function GameCard({image, name, publisher, link}) {
    return ( <div className="bg-[#20202E80] backdrop-blur-md overflow-hidden rounded-2xl w-[270px] max-w-[90vw] h-[370px]">
        <Image className=" h-40" src={image} alt=''/>
        <div className="px-4 py-1 mt-10">
            <h3 className="text-xl font-semibold mt-4">{name}</h3>
            <p className="text-xs ml-1">{publisher}</p>
            <p className="text-xs font-semibold mt-2">
                Windows, Linux, Mac
            </p>
            <div className="flex items-center justify-between mt-8">
                <p className="text-sm">⭐ 4.5</p>
                <Link className="px-5 py-1 text-sm rounded-full bg-violet-500" href={link}>
                    Try
                </Link>
            </div>
        </div>
    </div> );
}

export default GameCard;