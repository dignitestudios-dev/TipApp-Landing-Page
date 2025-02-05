import { useContext } from "react";

const FAQList = ({ faq, index, toggleFAQ,theme }) => {

  return (
    <div
      className={`faq ${faq.open ? "open" : ""} ${
        theme === "light" ? "bg-[#FFFFFF]" : "bg-[var(--popup-bg,_#1F3133)]"
      } p-4 mb-4 rounded-[30px] px-10 py-4 shadow-md`}
      key={index}
    >
      <div
        className={`faq-question font-[400] text-[18px] relative pr-20 transition-all duration-400 ${
          theme === "light" ? "text-[#000000]" : "text-white"
        }`}
      >
        {faq.question}
        <div
          onClick={() => toggleFAQ(index)}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 w-7 h-7 transition-all duration-200 cursor-pointer`}
        >
          {faq.open ? (
            <img src="/close.png" className="w-40" alt="close.png" srcSet="" />
          ) : (
            <h3 className="text-[30px] text-[#0390A0]">+</h3>
          )}
        </div>
      </div>
      <div
        className={`faq-answer font-[400] mt-3 text-[18px] text-[#969696] opacity-0 max-h-0 overflow-hidden transition-all duration-200 ${
          faq.open ? "opacity-100 max-h-[1000px]" : ""
        } ${theme === "light" ? "text-[#969696]" : "text-white"}`}
      >
        {faq.answer}
      </div>
    </div>
  );
};

export default FAQList;
