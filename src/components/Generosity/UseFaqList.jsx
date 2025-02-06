import React from "react";

export default function ({ faq, index, toggleFAQ, theme }) {
  return (
    <div>
      <div className={`faq ${faq.open ? "open" : ""} pr-0 md:pr-30 `} key={index}>
        <div
          className={`faq-question relative pr-20 transition-all duration-400`}
        >
          <h3
            className={`text-[24px] font-bold leading-[29px] mt-3 ${
              theme == "light" ? "text-[#000]" : "text-white"
            } `}
          >
            <span className={`text-[#0390A0]`}>{index + 1}.</span>{" "}
            {faq?.question}
          </h3>
          <div
            onClick={() => toggleFAQ(index)}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 w-7 h-7 transition-all duration-200 cursor-pointer`}
          >
            {faq.open ? (
              <img
                src={
                  theme == "light"
                    ? "/generosity/down.png"
                    : "/generosity/light-down.png"
                }
                className="w-40"
                alt="close.png"
                srcSet=""
              />
            ) : (
              <img
                src={
                  theme == "light"
                    ? "/generosity/up.png"
                    : "/generosity/light-up.png"
                }
                className="w-40"
                alt="close.png"
                srcSet=""
              />
            )}
          </div>
        </div>
        <div
          className={`faq-answer font-[400]  text-[18px] text-[#969696] opacity-0 max-h-0 overflow-hidden transition-all duration-200 ${
            faq.open ? "opacity-100 max-h-[1000px]" : ""
          } ${theme === "light" ? "text-[#969696]" : "text-white"}`}
        >
          <ul className={`list-disc px-5 `}>
            {faq?.list?.map((item, i) => (
              <li
                className={`${
                  theme == "light" ? "text-[#365356]" : "text-white"
                } text-[18px] w-auto   font-300 mt-5 `}
              >
                <span
                  className={`${
                    theme == "light" ? "text-[#000] " : "text-white"
                  } font-bold`}
                >
                  {" "}
                  {item?.title}
                </span>{" "}
                {item?.body}
              </li>
            ))}
          </ul>
          <p
            className={`${
              theme == "light" ? "text-[#365356]" : "text-white"
            } text-[18px] w-auto lg:w-[70%]  font-300 mt-3 `}
          >
            Once you're ready, click Post to make your campaign live for the
            community to see and contribute to.
          </p>
        </div>
      </div>
    </div>
  );
}
