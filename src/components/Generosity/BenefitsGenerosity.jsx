import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BenefitsGenerosity() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex items-center justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  flex-col-reverse lg:flex-row">
      <div className="w-full px-0 lg:pl-40">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Benefits of{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            GenerosityHub
          </span>
        </h3>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>1.</span> Positive Brand Image
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Promotes social responsibility and gives back to the community,
          enhancing the app's reputation as a force for good.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>2.</span> Increased User Engagement
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Encourages users to interact more with the app by enabling them to
          support causes they care about, fostering a deeper emotional
          connection.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>3.</span> Attracts Influencers
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Public figures and influencers may be drawn to this feature as a way
          to visibly support causes, increasing visibility for both the app and
          the charitable causes involved.
        </p>
        <h3
          className={`text-[24px] font-bold leading-[29px] mt-3 ${
            theme == "light" ? "text-[#000]" : "text-white"
          } `}
        >
          <span className={`text-[#0390A0]`}>4.</span> Make a Meaningful Impact
        </h3>
        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          By donating your tips and earnings, you’re contributing to something
          greater than just individual success—you’re helping to create lasting
          change in the world.
        </p>
      </div>
      <div className="w-full lg:w-[60%] flex relative justify-start ">
        <img
          src="/about/rightdora.png"
          className="absolute object-cover"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light"
              ? "/generosity/benefits.png"
              : "/generosity/benefits-dark.png"
          }
          className="w-120 object-fill relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
