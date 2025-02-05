import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function OnePlace() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
      <div className="w-full lg:w-[80%] flex relative justify-end items-center bg-no-repeat">
        <img
          src="/about/dora.png"
          className="absolute object-cover"
          alt=""
          srcset=""
        />
        <img
          src={theme == "light" ? "/future/one.png" : "/future/one-dark.png"}
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full mt-20">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Everything You Need in <br /> One Place:{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            Your Go-To <br /> Menu
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Navigate the essentials with our streamlined sidebar. Everything you
          need is <br /> just one tap away.
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
            Track Your Activity:
          </span>{" "}
          Keep tabs on all tips sent and received with detailed <br /> history.
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
            Manage Your Wallet:
          </span>{" "}
          Add funds, withdraw earnings, and check balances <br /> effortlessly.
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
            Stay Organized:
          </span>{" "}
          Access all transactions in one secure place.
        </p>
      </div>
    </div>
  );
}
