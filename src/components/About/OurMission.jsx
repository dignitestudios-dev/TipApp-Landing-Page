import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function OurMission() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-20 flex items-center justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
      <div className="w-[60%] flex relative justify-center items-center bg-no-repeat">
        <img src="/about/dora.png" className="absolute" alt="" srcset="" />
        <img
          src={
            theme == "light" ? "/about/mission.png" : "/about/dark-mission.png"
          }
          className="w-130 relative z-4 mt-10"
          alt=""
        />
      </div>
      <div className="w-full">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Our{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            Mission
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          At Perks, we’re on a mission to transform the way people give and
          receive gratitude. We believe in the power of tipping and reviews to
          shape a more positive, connected world. Our platform is designed to
          make expressing appreciation effortless, ensuring that every tip,
          review, and kind word has a lasting impact. Whether you're a service
          provider or a customer, we want to make sure that your contributions
          are recognized and celebrated.
        </p>
      </div>
    </div>
  );
}
