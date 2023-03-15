import { Text } from "@mantine/core";
import Feature from "./Feature";

function Features() {
  return (
    <div className="mt-32 text-center">
      <Text weight={"bold"} className="text-2xl px-1">
        Meeting the needs of players across the world
      </Text>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-24">
        <Feature
          title={"Video Game Suppliers"}
          color="#61ffda"
          description={
            "List of carefully selected, verified, high quality suppliers in different categories."
          }
          image="images/Features/VideoGameSuppliers.png"
        />
        <Feature
          title={"Wholesale Marketplace"}
          color="#7B61FF"
          description={
            "Find wholesale prices and suppliers of video games, genres, and game accessories."
          }
          image="images/Features/WholesaleMarket.png"
        />
        <Feature
          title={"Future Releases"}
          color="#9B444E"
          description={
            "Release dates and information on upcoming or recently released video games."
          }
          image="images/Features/FutureReleases.png"
        />
      </div>
    </div>
  );
}

export default Features;
