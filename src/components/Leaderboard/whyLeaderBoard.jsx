import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function WhyLeaderBoard() {
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
              ? "/leaderboard/why-leader.png"
              : "/leaderboard/why-leader-dark.png"
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
          Why We Created the <br />
          <span className="text-[52px] leading-[60px] font-semibold">
            Leaderboard
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Recognition is at the heart of Perks. The Leaderboard was created to
          honor the outstanding individuals who exemplify generosity, quality
          service, and community engagement. By showcasing top performers, we
          foster a sense of friendly competition and inspire others to give,
          review, and participate actively. It’s not just about numbers—it’s
          about creating a community that values gratitude and recognition.
        </p>
      </div>
    </div>
  );
}
