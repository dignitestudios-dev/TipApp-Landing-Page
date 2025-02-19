import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BuiltPerks() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="w-full mt-3 lg:mt-30 relative px-4 md:px-10 lg:px-15 pb-3">
      <div
        className={`flex items-center relative  mx-auto ${
          theme === "light"
            ? "bg-white"
            : "bg-[linear-gradient(193.22deg,_#002225_-6.27%,_#0D3A3F_118.98%)]"
        } md:w-[950px] p-10 custom-shadow rounded-[50px]`}
      >
        <div>
          <img
            src="/left-shadow.png "
            className="absolute w-screen -left-[400px] -top-60"
            alt=""
            srcset=""
          />
          <img
            src={theme == "light" ? "/perk-phone.png" : "iPhone-13-dark.png"}
            alt=""
            className="absolute  hidden lg:flex w-[350px] -left-[140px] -top-[5px]"
            srcset=""
          />
        </div>
        <div className="text-center w-auto lg:w-[70%] mx-auto">
          <h1
            className={`text-[40px] lg:text-[50px] ${
              theme === "light" ? "text-[#365356]" : "text-white"
            }`}
          >
            Why We Built <span className="font-semibold">Perks</span>
          </h1>
          <p
            className={`font-light mt-3 text-[12px] lg:text-[12px] ${
              theme === "light" ? "text-[#365356]" : "text-white"
            }`}
          >
            We created Perks with a simple yet powerful mission: to make
            expressing gratitude effortless, meaningful, and impactful. Imagine
            a world where acknowledging great service or talent is as easy as a
            tap, and where professionals from all walks of life can showcase
            their expertise, receive recognition, and thrive within a supportive
            community.
          </p>
          <p
            className={`font-light mt-3 text-[12px] ${
              theme === "light" ? "text-[#365356]" : "text-white"
            }`}
          >
            Perks bridges the gap between appreciation and opportunity. Whether
            it’s a standout barista, a helpful colleague, or an exceptional
            experience, we’ve built a platform that empowers you to recognize
            and reward excellence with ease.
          </p>
          <p
            className={`font-light mt-3 text-[12px] ${
              theme === "light" ? "text-[#365356]" : "text-white"
            }`}
          >
            At its heart, Perks is about building connections, celebrating
            achievements, and creating an environment where gratitude drives
            growth and recognition opens doors. One tip and review at a time,
            we’re creating a community that uplifts and inspires.
          </p>
        </div>
        <div>
          <img
            src="/right-shadow.png "
            className="absolute w-screen  hidden lg:flex lg:-right-[400px] lg:-bottom-[40%]"
            alt=""
            srcset=""
          />
          <img
            src={theme == "light" ? "/perk-phone-2.png" : "dark-ph.png"}
            className="absolute w-[350px]  hidden lg:flex -right-[220px] -top-70"
            alt=""
            srcset=""
          />
          <img
            src="/sphere1.png"
            className="absolute w-[120px] hidden lg:flex -right-[80px] top-70"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
