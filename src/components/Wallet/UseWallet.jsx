import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function UseWallet() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 flex-col-reverse lg:flex-row ">
    <div className="w-full mt-0 md:mt-20 px-8 lg:px-40">
      <h3
        className={`${
          theme == "light" ? "text-black" : "text-white"
        } text-[52px] leading-[60px] font-400`}
      >
        How to Use the   <span className="text-[52px] leading-[60px] font-semibold">
        In-App Wallet
        </span>
      </h3>

      <p
        className={`${
          theme == "light" ? "text-[#365356]" : "text-white"
        } text-[18px] w-auto   font-300 mt-3 `}
      >
       The wallet is designed for seamless functionality. You can
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
         Add Funds:
        </span>{" "}
         Top up your wallet using a variety of secure external payment methods, such as PayPal, Apple Pay, Google Pay, Venmo, or CashApp.
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
          Send Tips:
        </span>{" "}
         Show appreciation and reward others with just a few taps by sending tips directly through the app.
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
           Withdraw Funds:
        </span>{" "}
        When you're ready, withdraw your funds easily to your linked payment method. It's fast and simple.
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
           Transaction History: 
        </span>{" "}
      View a complete history of your tipping activity, including received tips and sent tips.
      </p>
      
    </div>
    <div className="w-full lg:w-[70%] flex relative justify-start items-center bg-no-repeat">
      <img
        src="/about/rightdora.png"
        className="absolute h-full w-full"
        alt=""
        srcset=""
      />
      <img
        src={
          theme == "light"
            ? "/wallet/use.png"
            : "/wallet/use-dark.png"
        }
        className="w-120 relative z-4 "
        alt=""
      />
    </div>
  </div>
  );
}
