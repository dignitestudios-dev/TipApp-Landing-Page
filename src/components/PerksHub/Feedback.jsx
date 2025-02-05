import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function FeedBack() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 flex-col-reverse lg:flex-row ">
      <div className="w-full mt-30 px-8 lg:px-40">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Feedback That Builds a <br />
          <span className="text-[52px] leading-[60px] font-semibold">
            Community
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto   font-300 mt-3 `}
        >
          Your feedback helps others shine. Use reviews to elevate the community
          <br /> and ensure recognition is deserved.
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
            Quick Star Ratings:
          </span>{" "}
          Skip the search, scan a QR code to view profiles instantly.
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
            Thoughtful Feedback:
          </span>{" "}
          Share your occupation, certifications, and app progress.
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
              ? "/future/feedback.png"
              : "/future/feedback-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
