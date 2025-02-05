import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Shine() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between items-center flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
      <div className="w-full lg:w-[80%] flex relative justify-end items-center bg-no-repeat">
        <img
          src="/about/dora.png"
          className="absolute object-cover"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light"
              ? "/leaderboard/part-leader.png"
              : "/leaderboard/part-leader-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full lg:mb-20  lg:pr-20">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          A Place for Everyone to <br />
          <span className="text-[52px] leading-[60px] font-semibold">
            Shine
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
        >
          Whether you’re tipping, earning, reviewing, or receiving praise, the
          Leaderboard offers an opportunity for everyone to be recognized and
          appreciated. It’s not just a list—it’s a celebration of the amazing
          community we’re building together.
        </p>
      </div>
    </div>
  );
}
