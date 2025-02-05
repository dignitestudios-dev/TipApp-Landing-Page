import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function UseTipTalk() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="md:mt-30 lg:mt-0 flex  justify-between items-center flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
      <div className="w-full px-0 flex  flex-col items-center lg:pl-40">
        <div>
          <h3
            className={`${
              theme == "light" ? "text-black" : "text-white"
            } text-[52px] leading-[60px] font-400`}
          >
            How to Use <span className="text-[52px] leading-[60px] font-semibold">
              TipTalk
            </span>
          </h3>
          <h3
            className={`text-[24px] font-bold leading-[29px] mt-3 ${
              theme == "light" ? "text-[#000]" : "text-white"
            } `}
          >
            <span className={`text-[#0390A0]`}>1.</span> Creating a Post
          </h3>
          <ul className={`list-disc px-5 `}>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto   font-300 mt-5 `}
            >
              Add a description to your post to share your thoughts, ask
              questions, or provide tips.
            </li>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto   font-300 mt-1 `}
            >
              Optionally, upload an image to make your post more engaging or
              visual.{" "}
            </li>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto   font-300 mt-1 `}
            >
              Once ready, hit Publish—your post is live for the community to
              see.
            </li>
          </ul>
          <h3
            className={`text-[24px] font-bold leading-[29px] mt-3 ${
              theme == "light" ? "text-[#000]" : "text-white"
            } `}
          >
            <span className={`text-[#0390A0]`}>2.</span> Interacting with Posts
          </h3>
          <ul className={`list-disc px-5 `}>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto lg:w-[70%]  font-300 mt-5 `}
            >
              <span
                className={`${
                  theme == "light" ? "text-[#000] " : "text-white"
                } font-bold`}
              >
                {" "}
                Comment:{" "}
              </span>{" "}
              Share your perspective, answer questions, or continue the
              conversation by adding a comment—all anonymously.
            </li>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto lg:w-[70%]  font-300 mt-5 `}
            >
              <span
                className={`${
                  theme == "light" ? "text-[#000] " : "text-white"
                } font-bold`}
              >
                {" "}
                Likes:{" "}
              </span>{" "}
              Show appreciation or agreement with posts by liking them.
            </li>
          </ul>
          <h3
            className={`text-[24px] font-bold leading-[29px] mt-3 ${
              theme == "light" ? "text-[#000]" : "text-white"
            } `}
          >
            <span className={`text-[#0390A0]`}>3.</span> Engagement Made Easy
          </h3>
          <ul className={`list-disc px-5 `}>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto lg:w-[70%]  font-300 mt-5 `}
            >
              Explore trending discussions, participate in lively debates, or
              simply enjoy scrolling through authentic stories shared by the
              community.
            </li>
            <li
              className={`${
                theme == "light" ? "text-[#365356]" : "text-white"
              } text-[18px] w-auto lg:w-[70%]  font-300 mt-1 `}
            >
              Everything remains anonymous, ensuring a pressure-free environment
              for everyone.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-[60%] flex relative justify-start ">
        <img
          src="/about/rightdora.png"
          className="absolute object-cover"
          alt=""
          srcset=""
        />
        <img
          src={
            theme == "light"
              ? "/tiptalk/use-tiptalk.png"
              : "/tiptalk/use-tiptalk-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
    </div>
  );
}
