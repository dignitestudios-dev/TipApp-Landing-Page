import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function WhatGenerosity() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between items-center flex-wrap lg:flex-nowrap px-10 lg:px-0  flex-col-reverse lg:flex-row">
      <div className="w-full px-0 flex  flex-col items-center lg:pl-40">
        <div>
          <h3
            className={`${
              theme == "light" ? "text-black" : "text-white"
            } text-[52px] leading-[60px] font-400`}
          >
            What is{" "}
            <span className="text-[52px] leading-[60px] font-semibold">
              GenerosityHub?
            </span>
          </h3>
          <p
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
          >
            GenerosityHub allows users to donate their accumulated tips or
            earnings to causes or charities directly from the app. This feature
            promotes social responsibility by making it easier to support causes
            that align with users’ values, while also enhancing the platform's
            positive image. It’s a simple, secure way to turn your tipping into
            a force for good.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[60%] flex relative justify-start ">
        <img
          src="/about/rightdora.png"
          className="absolute object-cover"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light"
              ? "/generosity/what-generosity.png"
              : "/generosity/what-generosity-dark.png"
          }
          className="w-120 object-fill relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
