import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";

function Hero() {
  return (
    <section className="flex items-start overflow-hidden c-space min-h-screen justify-center md:items-start md:justify-start">
      <HeroText />
      <ParallaxBg />
    </section>
  );
}

export default Hero;
