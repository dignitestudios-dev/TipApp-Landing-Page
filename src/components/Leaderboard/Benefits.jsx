import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Benefits() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 flex-col-reverse lg:flex-row ">
      <div className="w-full mt-20 px-8 lg:px-40">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Purpose and Benefits of <br />{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            the Leaderboard
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto   font-300 mt-3 `}
        >
          The Perks Leaderboard is a dynamic feature that highlights the top 10
          users across four categories:
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
            Recognition:
          </span>{" "}
          The Leaderboard is a public acknowledgment of your efforts,
          generosity, and reputation within the community.
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
            Motivation:
          </span>{" "}
          It inspires users to engage more with tipping and reviewing, making
          the platform more active and connected.
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
            Community Building:
          </span>{" "}
          By celebrating achievements, the Leaderboard fosters a positive and
          inclusive environment.
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
            Inspiration:
          </span>{" "}
          Seeing others’ success can motivate users to participate and improve,
          creating a culture of excellence.
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
              ? "/leaderboard/benefits.png"
              : "/leaderboard/benefits-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
