import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function WhyGenerosity() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
      <div className="w-full lg:w-[80%] flex relative justify-end items-center bg-no-repeat">
        <img
          src="/about/dora.png"
          className="absolute h-full w-full"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light"
              ? "/generosity/generosity.png"
              : "/generosity/generosity-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full mt-0 md:mt-20">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Why We Created the <br />
          <span className="text-[52px] leading-[60px] font-semibold">
            GenerosityHub
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          At Perks, we believe that generosity should not only be about
          rewarding individuals but also about giving back to the community.
          GenerosityHub was designed to empower users to transform their
          earnings into meaningful change by donating to causes and charities
          that matter. By facilitating this process directly within the app, we
          aim to make charitable giving easier and more accessible, allowing
          users to make an impact while continuing to engage with the platform.
        </p>
      </div>
    </div>
  );
}
