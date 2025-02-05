import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function PerAction() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full mt-3 relative px-4 md:px-10 lg:px-18 pb-3">
      <div className={`bg-perk-image ${theme=="light"?"bg-[url('/public/bg-img.png')] ":"bg-[url('/public/dark-theme-card.png')] "} py-10`}>
        <div className="text-center text-white">
          <h3 className="font-[400] text-[50px] leading-[60px]">
            See Perks in Action
          </h3>
          <p className="font-[300] text-[22px] leading-[25px] mt-3">
            Watch how easy it is to give recognition, show appreciation, and be
            part of a thriving community.
          </p>
        </div>
        <div className="relative">
          <img
            src={"/video-section-bg.png"}
            className="w-[80%] mx-auto mt-10"
            alt="video-section-bg.png"
          />
          <button className="absolute cursor-pointer bg-transparent border-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/play-button.png" className="w-30" alt="Play Button" />
          </button>
        </div>
      </div>
    </div>
  );
}
