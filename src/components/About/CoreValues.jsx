import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
export default function CoreValues() {
  const { theme } = useContext(GlobalContext);
  const GridList = [
    {
      title: "Gratitude Above All",
      body: "Every interaction on Perks is rooted in appreciation. We believe that a simple thank you, paired with a tip or review, can go a long way in making someone's day.",
    },
    {
      title: "Community-Driven",
      body: "Perks thrives on the support of its users. Whether you’re leaving a review or tipping someone for their work, every action helps build a stronger, more positive community.",
    },
    {
      title: "Innovation and Simplicity",
      body: "We value honesty and openness in every transaction. Users can feel secure knowing that their experience on Perks is built on trust and integrity.",
    },
    {
      title: "Transparency and Integrity",
      body: "We value honesty and openness in every transaction. Users can feel secure knowing that their experience on Perks is built on trust and integrity.",
    },
    {
      title: "Inclusivity",
      body: "We’re for everyone. No matter who you are or where you come from, Perks is a platform where every contribution counts, and every user is valued.",
    },
  ];
  return (
    <div className="flex items-center justify-between flex-wrap lg:flex-nowrap px-10 lg:px-18  ">
      <div className=" items-center flex justify-center bg-no-repeat">
        <img
          src={theme == "light" ? "/about/core.png" : "/about/dark-core.png"}
          className="w-full mt-10"
          alt=""
        />
      </div>
      <div className="w-full">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          Core{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            Values
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6">
          {GridList?.map((item) => (
            <div>
              <h3 className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[22px] leading-[27px] font-bold`} >{item?.title}</h3>
          <p className={`${
            theme == "light" ? "text-[#365356]" : "text-white"
          } text-[16px]  font-300 mt-3 `}>{item?.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
