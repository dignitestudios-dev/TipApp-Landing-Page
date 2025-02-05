import React from "react";
import CenteralHub from "../../components/PerksHub/CentralHub";
import Review from "../../components/PerksHub/Review";
import OnePlace from "../../components/PerksHub/OnePlace";
import Discover from "../../components/PerksHub/Discover";
import Perks from "../../components/PerksHub/Perks";
import FeedBack from "../../components/PerksHub/Feedback";

export default function PerksHub() {
  return (

  <div className="w-full relative ">
    <CenteralHub/>
    <Review/>
    <OnePlace/>
    <Discover/>
    <Perks/>
    <FeedBack/>
    </div>
    );
}
