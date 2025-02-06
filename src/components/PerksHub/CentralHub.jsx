import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function CenteralHub() {
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
              ? "/future/central.png"
              : "/future/central-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full mt-0 md:mt-20">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          }  text-[42px] md:text-[52px] leading-[52px] md:leading-[60px] font-400`}
        >
          Explore Your{" "}
          <span className="font-semibold">
            Central Hub
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Your Perks home screen is your command center, designed to put
          everything you need at your fingertips. From tracking your tips to
          connecting with others, it’s all here.
        </p>
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[24px] leading-[60px] font-bold`}
        >
          Innovation and Simplicity
        </h3>
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
            Instant Tip Tracking:
          </span>{" "}
          See your total tips sent and received, making it easy to <br /> stay
          on top of your activity.
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
            Clickable Connections:
          </span>{" "}
          Access recent tippers or recipients and explore their <br /> profiles
          with a tap.
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
            Effortless Searching:
          </span>{" "}
          Quickly find users by their username, business name, or <br /> phone
          number.
        </p>
      </div>
    </div>
  );
}
