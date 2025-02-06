import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function SocialRes() {
  const { theme } = useContext(GlobalContext);
  let para = [
    "At Perks, we believe that gratitude goes beyond just saying thank you. It’s about giving back and making a positive impact whether through tipping, reviews, or supporting meaningful causes. Gratuity is a powerful way to recognize and appreciate others, and we are committed to making it easier for our users to express that gratitude.",
    "Our donation feature allows users to contribute their tips or accumulated earnings to causes they care about. This makes it simple for users to share their success and support those in need, whether it’s a charity, a local community, or initiatives driving social change. We believe in the power of small acts of generosity and we aim to foster a community that thrives on kindness and appreciation.",
    "By integrating gratuity into the core of our platform, we create an ecosystem where showing gratitude isn’t just about rewarding service. It’s about lifting each other up and creating lasting, positive change. Whether it's tipping a hard-working individual, leaving a review to recognize excellent service, or donating to a cause, Perks enables users to spread gratitude in meaningful ways.",
    "We are more than just an app for tipping and reviews. We’re a platform that encourages giving back and making a difference one act of gratitude at a time.",
  ];
  return (
    <div className="flex justify-between mb-10 lg:h-[600px]">
      {/* Left Image */}
      <div className="w-[20%] hidden md:block">
        <img
          src={theme == "light" ? "/about/light-left.png" : "/about/dark-left.png"}
          className="w-30"
          alt=""
          srcset=""
        />
      </div>

      {/* Main Content */}
      <div className="text-center px-5 md:px-0 w-full">
        <p
          className={`${
            theme == "light" ? "text-[#0390A0]" : "text-white"
          } text-[22px] font-medium`}
        >
          Social Responsibility
        </p>
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          }  text-[32px] md:text-[42px] leading-[43px] lg:leading-[63px] font-400`}
        >
          Giving Back and Making a{" "}
          <span className=" font-semibold">
            Positive Impact
          </span>
        </h3>

        <p
          className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[18px] font-medium leading-[25px] mt-3`}
        >
          At Perks, we believe that gratitude goes beyond just saying thank you.
          It’s about giving back and making a positive impact whether through
          tipping, reviews, or supporting meaningful causes. Gratuity is a
          powerful way to recognize and appreciate others, and we are committed
          to making it easier for our users to express that gratitude.
          <br />
          <br />
          Our donation feature allows users to contribute their tips or
          accumulated earnings to causes they care about. This makes it simple
          for users to share their success and support those in need, whether
          it’s a charity, a local community, or initiatives driving social
          change. We believe in the power of small acts of generosity and we aim
          to foster a community that thrives on kindness and appreciation.
          <br />
          <br />
          By integrating gratuity into the core of our platform, we create an
          ecosystem where showing gratitude isn’t just about rewarding service.
          It’s about lifting each other up and creating lasting, positive
          change. Whether it's tipping a hard-working individual, leaving a
          review to recognize excellent service, or donating to a cause, Perks
          enables users to spread gratitude in meaningful ways.
          <br />
          <br />
          We are more than just an app for tipping and reviews. We’re a platform
          that encourages giving back and making a difference one act of
          gratitude at a time.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-[20%] justify-end items-end hidden md:flex">
        <img
          src={theme == "light" ? "/about/light-right.png" : "/about/dark-right.png"}
          className="w-20 h-110"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}
