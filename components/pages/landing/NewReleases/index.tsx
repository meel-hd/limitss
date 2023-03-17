import { MainColor } from "pages";
import GameCard from "./GameCard";

function NewReleases() {
  return (
    <section
      style={{
        // image for background
        backgroundImage: "url(/images/Hero/Tunel.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen relative mt-40 pb-14 sm:pb-0 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-bold mt-10 sm:mt-0 text-center z-40">
        Newly Released Games
      </h1>
      <div className="flex flex-col sm:flex-row items-center sm:flex-wrap justify-center mt-20 z-40 gap-20">
        <GameCard
          image={"images/Games/HelloRun.png"}
          name={"HelloRun"}
          publisher="HELLOENJOY"
          link="https://www.helloenjoy.com/hellorun"
        />
        <GameCard
          image={"images/Games/CoastalWorld.png"}
          name={"Coastal World"}
          publisher="Coastal World"
          link={"https://coastalworld.com/"}
        />
        <GameCard
          image={"images/Games/KidDisco.png"}
          name={"Kid Disco"}
          publisher="A Small Game Studio"
          link={"http://kiddisco.asmallgame.com/"}
        />
      </div>
    </section>
  );
}

export default NewReleases;
