import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function UsPart() {
  const {theme}=useContext(GlobalContext);
  return (
    <div className="w-full mt-[7  0px] lg:mt-[200px] relative px-4 md:px-10 lg:px-18 pb-3 ">
      <div>
        <h1
          className={`text-[50px] text-center leading-[63px] ${
            theme === "light" ? "text-[#365356]" : "text-white"
          }`}
        >
          What Sets Us Apart
        </h1>
        <p
          className={`text-center text-[18px] leading-[28px] mt-3 md:w-[70%] mx-auto ${
            theme === "light" ? "text-[#365356]" : "text-white"
          }`}
        >
          At Perks, We’ve reimagined the tipping experience, bringing gratuity
          into the digital age. With features like instant tipping, seamless
          reviews, and a secure in-app wallet, Perks makes showing appreciation
          faster, easier, and more rewarding than ever before. We believe in the
          power of recognition and are committed to creating a space where both
          service providers and customers can thrive.
        </p>
        <div className="flex items-center justify-center">
          <img src={theme=="light"?"/tap-img.png":"dark-tipapp.png"} className="w-[550px]" alt="" />
        </div>
        <p
          className={`text-center text-[18px] leading-[28px] md:w-[70%] mx-auto ${
            theme === "light" ? "text-[#365356]" : "text-white"
          }`}
        >
          Our platform fosters a strong sense of community where everyone has
          the chance to shine. By giving users the tools to easily reward
          exceptional service, we encourage a culture of appreciation and mutual
          respect. At Perks, tipping and reviews aren’t just about transactions;
          they’re about building relationships, supporting others, and making
          sure great service doesn’t go unnoticed. We’ve innovated gratuity,
          creating a space where recognition and reward are always at your
          fingertips.
        </p>
      </div>
    </div>
  );
}
