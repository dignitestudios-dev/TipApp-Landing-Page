import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Perks() {
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
          src={
            theme == "light" ? "/future/perks.png" : "/future/perks-dark.png"
          }
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
          Tipping Through   <span className="text-[52px] leading-[60px] font-semibold">
            Perks
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Tipping through Perks is modernized, seamless, and secure.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>1.</span> In-App Wallet
        </h3>
        <ul className={`list-disc px-5 `}>
          <li
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-5 `}
          >
            Add funds quickly and safely.
          </li>
          <li
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-1 `}
          >
            Send tips directly from your wallet without hassle
          </li>
          <li
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-1 `}
          >
            Withdraw earnings whenever you like with ease.
          </li>
        </ul>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>2.</span> External Payments
        </h3>
        <ul className={`list-disc px-5 `}>
          <li
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-5 `}
          >
            Use Venmo, PayPal, CashApp, Google Pay, or Apple Pay for flexible{" "}
            <br />
            transactions.
          </li>
          <li
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-1 `}
          >
            Connected to user profiles for instant tipping options.
          </li>
        </ul>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          Stay Updated
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Real-time notifications ensure you’re always updated on your tipping
          activity.
        </p>
      </div>
    </div>
  );
}
