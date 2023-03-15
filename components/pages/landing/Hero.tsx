import { Button, Overlay, Text } from "@mantine/core";
import PrimaryBtn from "components/lib/PrimaryBtn";
import Link from "next/link";
import { MainColor } from "pages";
import { useEffect, useState } from "react";
import { ArrowDown } from "tabler-icons-react";

function HeroSection() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    "superhero.png",
    "war.png",
    "fighter.png",
    "race.png",
    "cyberpunk.png",
  ];
  const [image, setImage] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);
  return (
    <div
      style={{
        backgroundImage: `url(/images/Hero/${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Transition for the background image
        transition: "background-image 1s ease-in-out",
      }}
      className="relative flex flex-col w-full min-h-screen justify-center items-center text-white"
    >
      <Overlay
        gradient={`linear-gradient( ${MainColor}95, ${MainColor}30, ${MainColor}30, ${MainColor}30,${MainColor})`}
        opacity={0.85}
        zIndex={0}
      />
      <div className="flex flex-col justify-center te items-center w-full z-10">
        <h1 className="text-xs flex gap-5 items-center font-semibold leading-10">
          <div className="w-10 h-1 bg-white"></div>
          GAMEWORLD DISTURBUTERS
          <div className="w-10 h-1 bg-white"></div>
        </h1>

        <Text weight={"bold"}
        className="text-center text-2xl sm:text-4xl w-5/6 sm:w-1/2 mt-5"
        >
          Connecting Players & Games in a New Immersive Environment.
        </Text>
        <Link href={"/signin"}>
          <Button className="mt-20 bg-gradient-to-r min-w-[120px] from-indigo-500 to-violet-400 hover:shadow-sm h-[40px]" >
            Become a Member Today for Free
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center absolute top-[95vh]">
        Scroll down <ArrowDown size={20} strokeWidth={2} />
      </div>
    </div>
  );
}

export default HeroSection;
