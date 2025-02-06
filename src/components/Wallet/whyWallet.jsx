import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function WhyWallet() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex items-center justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
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
              ? "/wallet/why.png"
              : "/wallet/why-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full mb-20">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Why We Created the <br />
          <span className="text-[52px] leading-[60px] font-semibold">
            In-App Wallet
          </span>
        </h3>
       

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          We created the in-app wallet to streamline your experience on Perks.
          Whether you're sending a tip, receiving a payment, or keeping track of
          your funds, everything is now accessible within the app, making your
          transactions simple, secure, and quick.
        </p>
      </div>
    </div>
  );
}
