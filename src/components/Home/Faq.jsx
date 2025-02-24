import  { useContext, useState } from "react";
import FAQList from "./FaqList";
import { GlobalContext } from "../../context/GlobalContext";

export default function Faq() {
  const { theme } = useContext(GlobalContext);
  const [faqs, setFaqs] = useState([
    {
      question: "What is Perks, and how does it work?",
      answer:
        "Perks is a platform that enables users to express gratitude through tips and reviews. Users can create profiles, showcase their skills, and receive recognition for quality work. With features like anonymous tipping, profile search, and customizable privacy settings, Perks makes it easy to connect, appreciate, and build a professional reputation.",
      open: true,
    },
    {
      question: "How do I create a profile on Perks?",
      answer:
        "Signing up is simple! Download the app, enter your personal details, and customize your profile with a picture, job title, and optional CV or portfolio. Your profile will include a unique QR code, making it easy for others to tip or review you directly.",
      open: false,
    },
    {
      question: "Can I tip someone who isn’t on Perks yet?",
      answer:
        "Yes! Perks allows you to send tips to individuals who haven’t joined the platform. They’ll receive an invitation to sign up and claim the tip, encouraging new users to join the community.",
      open: false,
    },
    {
      question: "Is tipping anonymous?",
      answer:
        "You can choose to tip anonymously or reveal your identity. Anonymous tipping allows you to give freely without disclosing your details, making it ideal for users who value privacy or wish to avoid attention.",
      open: false,
    },
    {
      question: "How Do I Send and Receive Tips?",
      answer:
        "Sending and receiving tips on Perks is easy and secure. You can use the in-app wallet to send tips directly to others or receive tips for your service, all within the app. Simply top up your wallet with funds, and you can quickly tip others or withdraw your earnings whenever you like. For added convenience, we also support external payment options such as Venmo, PayPal, CashApp, Google Pay, and Apple Pay. Whether you’re adding funds, tipping others, or withdrawing your earnings, the process is quick, seamless, and secure.",
      open: false,
    },
    {
      question: "Can I control what’s visible on my profile?",
      answer:
        "Absolutely! Perks offers robust privacy controls, allowing you to choose what sections—like tips received, tips sent, or reviews—you want to display. You can also delete any negative or false reviews to maintain a positive image.",
      open: false,
    },
    {
      question: "What happens if I receive a false review?",
      answer:
        "You have the option to delete negative or false reviews on your profile. This ensures a fair representation of your expertise and protects your reputation.",
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
    <div className="w-full mt-30 relative px-4 md:px-10 lg:px-18 pb-3">
      <div>
        <p
          className={`text-center text-[22px] text-[#0390A0]`}
        >
          FAQs
        </p>
        <h3
          className={`text-center font-[500] text-[50px] leading-[52px] ${
            theme === "light" ? "text-[#000000]" : "text-white"
          }`}
        >
          We&apos;re here to answer all <br /> your questions.
        </h3>
        <div className="faqs mt-10">
          {faqs.map((faq, index) => (
            <FAQList
              faq={faq}
              index={index}
              key={index}
              theme={theme}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
