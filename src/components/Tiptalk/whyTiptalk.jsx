import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function WhyTiptalk() {
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
              ? "/tiptalk/why-tip.png"
              : "/tiptalk/why-tip-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full mt-0 md:mt-20">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Why We Created the <br />
          <span className="text-[52px] leading-[60px] font-semibold">
            TipTalk
          </span>
        </h3>
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[24px] leading-[29px] mt-4 font-bold`}
        >
          Connect, Share, and Learn Anonymously
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          In a world where personal identities can sometimes create barriers to
          honest communication, we wanted to provide a safe, judgment-free space
          where users can share their experiences, express their thoughts, and
          connect with others openly—without fear of bias or judgment. TipTalk
          was created to inspire meaningful discussions, foster community
          connections, and empower everyone to share their voice anonymously.
        </p>
      </div>
    </div>
  );
}
