import GameCard from "./Games/GameCard";

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
          links={{
            linux:
              "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Hello-run/hello-run_1.0.0_amd64.deb",
            mac: "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Hello-run/hello-run_1.0.0_x64.dmg",
            windows:
              "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Hello-run/hello-run_1.0.0_x64_en-US.msi",
          }}
        />
        <GameCard
          image={"images/Games/CoastalWorld.png"}
          name={"Coastal World"}
          publisher="Coastal World"
          links={{
            linux:
              "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Coastal-world/coastal-world_1.0.0_amd64.deb",
            mac: "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Coastal-world/coastal-world_1.0.0_x64.dmg",
            windows:
              "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Coastal-world/Coastal-world.msi",
          }}
        />
        <GameCard
          image={"images/Games/KidDisco.png"}
          name={"Kid Disco"}
          publisher="A Small Game Studio"
          links={{
            linux:
              "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Kid-disco/kid-disco_1.0.0_amd64.deb",
            mac: "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Kid-disco/kid-disco_1.0.0_x64.dmg",
            windows:
              "https://limitss-v1.s3.ap-southeast-1.amazonaws.com/GameFiles/Kid-disco/kid-disco_1.0.0_x64_en-US.msi",
          }}
        />
      </div>
    </section>
  );
}

export default NewReleases;
