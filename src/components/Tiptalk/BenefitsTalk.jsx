import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BenefitsTalk() {
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
            theme == "light" ? "/tiptalk/benefits-talk.png" : "/tiptalk/benefits-talk-dark.png"
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
          Benefits of{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            TipTalk
          </span>
        </h3>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>1.</span> Enhanced User Engagement
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Encourages free and open expression, boosting participation across the
          app.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>2.</span> Community Building
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Strengthens bonds among users by promoting candid conversations and
          mutual support.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>3.</span> Honest Feedback and
          Insightful Discussions
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Gain unfiltered advice, learn from real experiences, and share your
          own thoughts with a community that listens.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>4.</span> A Safe Space for All
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Whether you're shy, new to the platform, or simply prefer anonymity,
          TipTalk welcomes everyone to join the conversation without hesitation.
        </p>
      </div>
    </div>
  );
}
