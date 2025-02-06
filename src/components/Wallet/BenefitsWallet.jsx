import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BenefitsWallet() {
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
              ? "/wallet/benefits.png"
              : "/wallet/benefits-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full mb-20 lg:pr-30">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Benefits of the   <span className="text-[52px] leading-[60px] font-semibold">
            In-App <br /> Wallet
          </span>
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
            Security & Convenience:
          </span>{" "}
          Your financial transactions are secure, and all your tipping
          activities are managed in one place.
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
            Quick Transactions:
          </span>{" "}
          Show appreciation and reward others with just a few taps by sending
          tips directly through the app.
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
          Tipping and withdrawing funds have never been faster or more reliable.
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
            Transparency:
          </span>{" "}
          Track all your tips, payments, and withdrawals, making it easy to
          manage your financial activity.
        </p>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto  font-300 mt-5 `}
        >         
          The wallet ensures that every transaction on Perks is smooth, safe,
          and hassle-free, giving you more time to engage, appreciate, and grow
          within the community.
        </p>
      </div>
    </div>
  );
}
