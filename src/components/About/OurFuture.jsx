import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function OurFuture() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="mt-30 lg:mt-20 flex items-center justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
      <div className="w-full px-8 lg:px-30">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Our Vision for
          <span className="text-[52px] leading-[60px] font-semibold">
            the Future
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] w-auto   font-300 mt-3 `}
        >
          At Perks, we promise to continually evolve and improve the way users
          interact with our platform. We have exciting new features and
          experiences in the works that will make expressing gratitude even
          easier, more rewarding, and more connected. We are committed to making
          Perks the go-to platform for recognition, and we have big plans to
          make the app even more valuable for both users and service providers.
          The future is bright, and we can't wait to share more with you soon!
          Stay tuned for what’s next.
        </p>
      </div>
      <div className="w-full lg:w-[80%] flex relative justify-center items-center bg-no-repeat">
        <img src="/about/rightdora.png" className="absolute" alt="" srcset="" />
        <img
          src={
            theme == "light" ? "/about/mission.png" : "/about/dark-mission.png"
          }
          className="w-130 relative z-4 mt-10"
          alt=""
        />
      </div>
    </div>
  );
}
