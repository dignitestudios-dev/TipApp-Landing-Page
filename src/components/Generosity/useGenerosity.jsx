import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import UseFaqList from "./UseFaqList";

export default function UseGenerosity() {
  const { theme } = useContext(GlobalContext);
  const [faqs, setFaqs] = useState([
    {
      question: "Creating a Donation Post",
      list: [
        {
          title: "Project Title",
          body: "Choose a short and impactful title that captures the essence of your cause.",
        },
        {
          title: "Project Tagline:",
          body: "Add a tagline that encapsulates your mission or the goal of your charity project.",
        },
        {
          title: "Project Description: ",
          body: "Upload images or videos that illustrate your cause, connecting emotionally with potential donors and showing how their contribution will make a difference.",
        },
        {
          title: "Funding Goal: ",
          body: "Set a clear funding goal, breaking down the costs to provide transparency to your supporters.",
        },
        {
          title: "Timeframe (Optional): ",
          body: "Set a deadline for your fundraising campaign to create a sense of urgency and encourage timely donations.",
        },
      ],
      description:
        "Once you're ready, click Post to make your campaign live for the community to see and contribute to.",
      open: true,
    },
    {
      question: "Donating to a Cause",
      list: [
        {
          title: "Project Title",
          body: "Choose a short and impactful title that captures the essence of your cause.",
        },
        {
          title: "Project Tagline:",
          body: "Add a tagline that encapsulates your mission or the goal of your charity project.",
        },
        {
          title: "Project Description: ",
          body: "Upload images or videos that illustrate your cause, connecting emotionally with potential donors and showing how their contribution will make a difference.",
        },
        {
          title: "Funding Goal: ",
          body: "Set a clear funding goal, breaking down the costs to provide transparency to your supporters.",
        },
        {
          title: "Timeframe (Optional): ",
          body: "Set a deadline for your fundraising campaign to create a sense of urgency and encourage timely donations.",
        },
      ],
      description:
        "Once you're ready, click Post to make your campaign live for the community to see and contribute to.",
      open: false,
    },
    {
      question: "View Your Donation Insights",
      list: [
        {
          title: "Project Title",
          body: "Choose a short and impactful title that captures the essence of your cause.",
        },
        {
          title: "Project Tagline:",
          body: "Add a tagline that encapsulates your mission or the goal of your charity project.",
        },
        {
          title: "Project Description: ",
          body: "Upload images or videos that illustrate your cause, connecting emotionally with potential donors and showing how their contribution will make a difference.",
        },
        {
          title: "Funding Goal: ",
          body: "Set a clear funding goal, breaking down the costs to provide transparency to your supporters.",
        },
        {
          title: "Timeframe (Optional): ",
          body: "Set a deadline for your fundraising campaign to create a sense of urgency and encourage timely donations.",
        },
      ],
      description:
        "Once you're ready, click Post to make your campaign live for the community to see and contribute to.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="md:mt-30 lg:mt-0 flex items-center justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0  ">
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
              ? "/generosity/use-generosity.png"
              : "/generosity/use-generosity-dark.png"
          }
          className="w-120 relative z-4 "
          alt=""
        />
      </div>
      <div className="w-full ">
        <h3
          className={`${
            theme == "light" ? "text-black" : "text-white"
          } text-[52px] leading-[60px] font-400`}
        >
          How to Use{" "}
          <span className="text-[52px] leading-[60px] font-semibold">
            GenerosityHub
          </span>
        </h3>
        <div className="faqs mt-10">
          {faqs.map((faq, index) => (
            <>
              <UseFaqList
                faq={faq}
                index={index}
                key={index}
                theme={theme}
                toggleFAQ={toggleFAQ}
              />
              <hr class="h-px my-5 bg-[#365356] border-0"></hr>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
