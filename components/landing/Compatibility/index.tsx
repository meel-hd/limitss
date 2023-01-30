import Bubble from "./Icons/Bubble";
import Shopify from "./Icons/Shopify";
import Squarespace from "./Icons/Squarespace";
import Webflow from "./Icons/Webflow";
import Wix from "./Icons/Wix";
import Wordpress from "./Icons/Wordpress";
import { Text } from "@mantine/core";
import Laravel from "./Icons/Laravel";
import React from "./Icons/React";
import Python from "./Icons/Python";
import Vue from "./Icons/Vue";
import Php from "./Icons/Php";
import Angular from "./Icons/Angular";

function Compatibility() {
  const smoothanimation = "hover:scale-110 transition-transform duration-700";
  return (
    <section className="w-full min-h-screen mt-10 flex flex-col overflow-hidden items-center">
      <h1 className="font-bold mb-14 "> Compatible With </h1>
      <Text
        size="xl"
        mb={20}
        color={"dimmed"}
        className="font-semibold "
        mt={10}
      >
        <span className="underline font-bold">All</span> website builders.
      </Text>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto">
        <Shopify className={smoothanimation} />
        <Wordpress className={smoothanimation} />
        <Webflow className={smoothanimation} />
        <Bubble className={smoothanimation} />
        <Wix className={smoothanimation} />
        <Squarespace className={smoothanimation} />
      </div>
      <Text
        size="xl"
        mb={20}
        color={"dimmed"}
        className="font-semibold "
        mt={30}
      >
        <span className="underline font-bold">Any</span> tech stack.
      </Text>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto">
        <Laravel className={smoothanimation} />
        <React className={smoothanimation} />
        <Python className={smoothanimation} />
        <Vue className={smoothanimation} />
        <Php className={smoothanimation} />
        <Angular className={smoothanimation} />
      </div>
      <Text mx={20} size={15} color={"dimmed"} mt={20}>
        Compatible with any tech stack or integration. If it works with a web
        browser, it works with <span className="font-semibold">Limitss</span>.
      </Text>
    </section>
  );
}

export default Compatibility;
