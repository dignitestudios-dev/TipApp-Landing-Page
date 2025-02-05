import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Hero() {
  const {theme}=useContext(GlobalContext)
  return (
    <>
      <div className="w-full mt-3 relative px-4 md:px-10 lg:px-18  h-[850px] lg:h-[1150px]  xl:h-[1250px] ">
        <div className={`h-full  hero-bg ${theme=="light"?"bg-[url('/public/hero-bg.png')] ":"bg-[url('/public/dark-theme-hero.png')] "}  relative z-5`}>
        <div className="h-full flex justify-center flex-col md:h-auto md:block md:justify-start">
            <h3 className="pt-5 text-center text-[42px] md:text-[52px] lg:text-[62px] text-[#FCFCFE]">
              <span className="font-normal">Empowering Gratitude</span>
              ,
              <br />
              <span className="font-semibold">One Tip at a Time</span>
            </h3>
            <p className="font-normal text-lg leading-[28px] text-white text-center">
              Recognize excellence, reward hard work, and rise together as a
              community built on gratitude and growth.
            </p>
            <div className="flex items-center justify-center flex-wrap mt-3 gap-10">
              <img
                src="/play-store.png"
                className="w-[200px] "
                alt=""
                srcset=""
              />
              <img
                src="/app-store.png"
                className="w-[200px] "
                alt=""
                srcset=""
              />
            </div>
          </div>
          
          <div className="hidden md:flex  relative w-[98vw] md:w-[96vw] lg:w-[94vw] xl:w-[95vw]  md:-top-[120px] xl:-top-[200px]">
            <img src={theme=="light"?"/hero-bg-2.png":"/dark-hero-phone.png"} alt="" />
          </div>
          
          {/* <div className="grid grid-cols-3 w-screen relative -top-[20px] ">
            <div>
              <img
                src="/pngegg-2.png"
                alt=""
                className="relative  left-[80px] top-[200px]"
              />
            </div>
            <div className="flex justify-center w-[500px]">
              <img
                src="/hero-phone-13-fr.png"
                className="relative -top-[5px] left-[30%] z-5"
                alt=""
              />
              <img
                src="/hero-phon-13.png"
                className="relative right-[25%] z-4"
                alt=""
              />
            </div>
            <div>
              <img
                src="/pngegg-1.png"
                className="-left-[20px] -top-[180px] relative"
                alt=""
              />
            </div>
          </div> */}
        </div>
        <div className="relative -left-[20px] bottom-[50px] z-1" >
            <img src="/sphere.png" alt=""  className="w-[70px]" />
          </div>
      </div>
    </>
  );
}
