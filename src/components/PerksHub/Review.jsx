import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Review() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="flex justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 md:mt-30 lg:mt-0 flex-col-reverse lg:flex-row">
      <div className="w-full mt-20  px-8 lg:px-30">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Take Action Fast:{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            Tip and <br /> Review with Ease
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto   font-300 mt-3 `}
        >
          No time for extra clicks? The{" "}
          <span
            className={`${
              theme == "light" ? "text-[#000]" : "text-white"
            } font-bold`}
          >
            {" "}
            Tip Now{" "}
          </span>{" "}
          and{" "}
          <span
            className={`${
              theme == "light" ? "text-[#000]" : "text-white"
            } font-bold`}
          >
            {" "}
            Review Now
          </span>{" "}
          buttons make showing gratitude quicker than ever.
        </p>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto  font-300 mt-3 `}
        >
          <span
            className={`${
              theme == "light" ? "text-[#000]" : "text-white"
            } font-semibold `}
          >
            Instant Tipping:
          </span>{" "}
          Search for a user and send a tip directly, no need to visit their
          profile.
        </p>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto  font-300 mt-3 `}
        >
          <span
            className={`${
              theme == "light" ? "text-[#000]" : "text-white"
            } font-semibold `}
          >
            Effortless Reviews:
          </span>{" "}
          Share your experience by reviewing someone in seconds.
        </p>
      </div>
      <div className="w-full lg:w-[80%] flex relative justify-end items-center bg-no-repeat">
        <img
          src="/about/rightdora.png"
          className="absolute h-full w-full"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light" ? "/future/review.png" : "/future/review-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
