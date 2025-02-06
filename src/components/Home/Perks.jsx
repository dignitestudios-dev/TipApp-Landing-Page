import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Perks() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full mt-[100px] relative px-4 md:px-10 lg:px-18 ">
      <div className="">
        <h1
          className={`text-[40px] mb-5 md:text-[50px] text-center leading-[63px] ${
            theme === "light" ? "text-[#000000]" : "text-white"
          }`}
        >
          Simplify Your Experience with{" "}
          <span className="font-semibold">Perks</span>
        </h1>

        <div className="relative">
          <img
            src="/sphere1.png"
            className="absolute -right-15 -top-10  w-[120px]"
            alt=""
            srcset=""
          />
        </div>
        <div
          className={`grid ${
            theme == "light" ? " bg-[#FFFFFF]" : "bg-[#1F3133]"
          }  relative z-2 rounded-[50px] shadow-md py-5 px-5  lg:h-[500px]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 `}
        >
          <div
            className={`${
              theme == "light" ? "card-bg" : "dark-card-bg "
            } rounded-[34px] pt-4 group relative overflow-hidden h-[500px] lg:h-auto`}
          >
            <div className="transform translate-y-[-100px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <img
                src="/card2anim/2.png"
                className="absolute w-60 top-0 right-0"
                alt=""
              />
            </div>
            <div className="transform translate-y-[-50px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card2anim/1.png"
                className="absolute w-70 top-0"
                alt=""
              />
              <img
                src="/card1anim/5.png"
                className="absolute w-30  top-1 -z-1 rounded-4xl -right-0"
                alt=""
              />
            </div>
            <div className="transform translate-y-[160px] translate-x-[-100px] scale-0 opacity-0 group-hover:translate-x-[0px] group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card1anim/2.png"
                className="absolute w-30    rounded-4xl "
                alt=""
              />
            </div>
            <h3 className="mt-8 text-white relative z-40 text-2xl text-center font-normal">
              Instant Access with Your <br /> QR Code
            </h3>
            <p className="text-center w-[80%] mx-auto text-white text-sm transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Don't have time to share usernames or make your tipper go through
              the hassle? Just let them scan your QR code and they’ll land
              directly on your profile to tip and leave a review in seconds.
            </p>
            <div className="transform translate-y-[190px] translate-x-[-80px] scale-0 opacity-0  group-hover:scale-50 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card1anim/3.png"
                className="absolute w-30    rounded-4xl "
                alt=""
              />
            </div>
            <div className="transform translate-y-[80px] flex justify-center opacity-0 group-hover:md:translate-y-[60px] group-hover:lg:translate-y-[12px] group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card1anim/1.png"
                className="absolute w-20 sm:w-20 md:w-20 lg:w-24"
                alt=""
              />
            </div>

            <div className="flex justify-center items-end absolute bottom-0 w-full z-40 h-[300px] sm:h-[340px] md:h-[250px] lg:h-[250px]">
              <img
                src="/anim-card1.png"
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="transform translate-y-[400px] opacity-0 group-hover:translate-y-[300px] group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card1anim/4.png"
                className="absolute w-40 bottom-0 right-0"
                alt=""
              />
            </div>
          </div>

          <div
            className={`${
              theme == "light" ? "card-bg" : "dark-card-bg "
            } rounded-[34px]  overflow-hidden h-[500px] lg:h-auto pt-4 group relative `}
          >
            <div className="transform translate-y-[-100px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <img
                src="/card2anim/2.png"
                className="absolute w-60 top-0 right-0"
                alt=""
              />
            </div>
            <div className="transform translate-y-[-50px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card2anim/1.png"
                className="absolute w-70 top-0"
                alt=""
              />
            </div>
            <h3 className="mt-8 text-white text-2xl text-center font-normal">
              Tipping and Reviews Made <br /> Easy
            </h3>
            <p className="text-center w-[80%] mx-auto text-white text-sm transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Show your appreciation with just a tap! Send tips and leave
              reviews for service providers, all while building a community of
              recognition and rewards.
            </p>
            <div className="transform opacity-0 flex justify-center  group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card2anim/dora.png"
                className="absolute w-50 top-30"
                alt=""
              />
            </div>
            <div className="flex justify-center items-end absolute bottom-0  w-full h-[250px]">
              <img
                src="/anim-card2.png"
                alt=""
                className="h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`${
              theme == "light" ? "card-bg" : "dark-card-bg "
            } rounded-[34px]  overflow-hidden h-[500px] lg:h-auto pt-4 group relative `}
          >
            <div className="transform translate-y-[-100px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <img
                src="/card2anim/2.png"
                className="absolute w-60 top-0 right-0"
                alt=""
              />
            </div>
            <div className="transform translate-y-[-50px] opacity-0 group-hover:translate-y-[-20px] group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <img
                src="/card2anim/1.png"
                className="absolute w-70 top-0"
                alt=""
              />
            </div>
            <h3 className="mt-8 text-white text-2xl text-center font-normal">
              Turn Your Feedback into <br /> Rewards with PERKS!
            </h3>
            <p className="text-center w-[80%] mx-auto text-white text-sm transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              With PERKS, reviewing isn’t just sharing, it’s gaining! Unlock
              rewards that benefit you personally and professionally. Every
              review builds your credibility, enhances your influence, and helps
              improve the services you care about. 
            </p>
            <div className="flex justify-center items-end absolute bottom-0  w-full h-[250px]">
              <img
                src="/anim-card3.png"
                alt=""
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
