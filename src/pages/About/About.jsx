import React from "react";
import Hero from "../../components/About/Hero";
import OurMission from "../../components/About/OurMission";
import CoreValues from "../../components/About/CoreValues";
import OurFuture from "../../components/About/OurFuture";
import SocialRes from "../../components/About/SocialRes";

export default function About() {
  return (
    <div className="w-full relative ">
        <Hero/>
        <OurMission/>
        <CoreValues/>
        <OurFuture/>
        <SocialRes/>
    </div>
  );
}
