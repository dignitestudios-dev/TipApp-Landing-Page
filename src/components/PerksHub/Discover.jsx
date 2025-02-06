import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Discover() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 flex-col-reverse lg:flex-row ">
      <div className="w-full mt-20 px-8 lg:px-40">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[35px] md:text-[52px] leading-[52px] md:leading-[60px] font-400`}
        >
          Discover More About <br />
          <span className=" font-semibold">
            Others
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto   font-300 mt-3 `}
        >
          Discover and showcase individuality with detailed user profiles.
        </p>
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[24px] leading-[60px] font-bold`}
        >
          What Makes Profiles Stand Out
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
            Easy Access with QR Codes:
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
            Professional Highlights:
          </span>{" "}
          Share your occupation, certifications, and app progress.
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
            Social Proof:
          </span>{" "}
          See reviews, tips sent, and tips received all in one place.
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
            Personalized Touch:
          </span>{" "}
          Add a profile picture and share your unique story.
        </p>
      </div>
      <div className="w-full lg:w-[80%] flex relative justify-start items-center bg-no-repeat">
        <img
          src="/about/rightdora.png"
          className="absolute h-full w-full"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light" ? "/future/discover.png" : "/future/discover-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
