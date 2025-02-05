import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function WhatsLeader() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 flex-col-reverse lg:flex-row ">
      <div className="w-full mt-20 px-8 lg:px-40">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          What is the  <span className="text-[52px] leading-[60px] font-semibold">
            Leaderboard?
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
            Top Earners:
          </span>{" "}
          Celebrating those who have received the highest amount of tips,
          reflecting their exceptional service and recognition by the community.
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
            Top Contributors:
          </span>{" "}
          Honoring the most generous users who have given the highest amount of
          tips to others.
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
            Top Reviewers:
          </span>{" "}
          Featuring individuals who have provided the most reviews, helping
          others improve and shine.
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
            Top Rated:
          </span>{" "}
          Showcasing users with the highest number of positive reviews received,
          emphasizing their impact and reputation.
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
              ? "/leaderboard/what-leader.png"
              : "/leaderboard/what-leader-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
