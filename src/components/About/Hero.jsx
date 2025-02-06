import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Hero() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="mt-20 mb-10 relative px-4 md:px-10 lg:px-15 pb-3">
      <div
        className={`rounded-[50px] relative z-4 h-auto lg:h-[370px] ${
          theme == "light"
            ? "bg-gradient-to-br from-[#0390A0] via-[#03C6DB] to-[#03C6DB]"
            : "bg-gradient-to-br from-[#002225] via-[#0D3A3F] to-[#0D3A3F]"
        }`}
      >
        <img src="/sphere1.png" className="absolute -right-5 z-4 -top-10 w-30" alt="" />
        <div>
          <img
            src="/about/shade1.png"
            className="absolute top-0 w-[240px] md:w-[70%] left-0"
            alt=""
          />
          <img
            src="/about/shade2.png"
            className="absolute top-0 w-[190px] md:w-[60%]  right-0"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center lg:justify-between flex-wrap px-4 lg:px-15 h-full">
          <div className="text-white w-full md:w-1/2 py-10">
            <span className="text-[22px] font-normal">About Us</span>
            <h3 className="text-[28px] md:text-[42px] leading-[40px] md:leading-[63px] font-semibold">
              Why We Built Perks
            </h3>
            <p className="font-[300] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] w-full ">
              We created Perks with a simple yet powerful mission: to make
              expressing gratitude effortless, meaningful, and impactful.
              Imagine a world where acknowledging great service or talent is as
              easy as a tap, and where professionals from all walks of life can
              showcase their expertise, receive recognition, and thrive within a
              supportive community.
            </p>
          </div>
          <div className="h-full flex relative  w-full md:w-1/2 flex-wrap justify-center items-center md:justify-end">
            <img
              src={
                theme == "light"
                  ? "/about/phone-light.png"
                  : "/about/phone-dark.png"
              }
              className="w-[200px] h-[250px] lg:h-auto lg:w-[350px] z-4 xl:w-[400px] left-20 lg:left-30 xl:left-40 lg:-top-8 xl:-top-18 static lg:absolute"
              alt=""
            />
            <img
              src={
                theme == "light"
                  ? "/about/phone-light1.png"
                  : "/about/phone-dark1.png"
              }
              className="w-[200px] h-[250px] lg:h-auto lg:w-[370px] xl:w-[420px] left-20 lg:left-60 xl:left-80 lg:-top-15 xl:-top-25 static lg:absolute"
              alt=""
            />
          </div>
        </div>
      </div>
      <img src="/sphere.png" className="absolute left-[10px]  bottom-[-45px] w-30" alt="" />
    </div>
  );
}