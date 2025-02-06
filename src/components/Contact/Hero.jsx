import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import Form from "./Form";

export default function Hero() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="mt-20 mb-10 relative px-4 md:px-10 lg:px-15 pb-3">
      <div
        className={`rounded-[50px] relative z-4 h-auto  ${
          theme == "light"
            ? "bg-gradient-to-br from-[#0390A0] via-[#03C6DB] to-[#03C6DB]"
            : "bg-gradient-to-br from-[#002225] via-[#0D3A3F] to-[#0D3A3F]"
        }`}
      >
        <img
          src="/sphere1.png"
          className="absolute -right-5 z-4 -top-10 w-30"
          alt=""
        />
        <div>
          <img
            src="/about/shade1.png"
            className="absolute top-0 w-[240px] md:w-[70%] left-0"
            alt=""
          />
          <img
            src="/about/shade2.png"
            className="absolute top-0 w-[190px] md:w-[60%]  right-0"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 gap-10 relative z-4 lg:grid-cols-2 px-4 lg:px-15 h-full">
          <div className="text-white w-full  py-10 order-2 lg:order-1">
            <h3 className="text-[28px] md:text-[42px] leading-[40px] md:leading-[63px] font-semibold">
              Get in Touch with Us
            </h3>
            <p className="font-[300] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] w-full ">
              Have questions, feedback, or need assistance? We're here to help!
              Reach out and let’s connect
            </p>
            <div className="flex flex-wrap sm:flex-nowrap justify-between gap-6 lg:block" >
            <div className="w-[100%]" >
              <h3 className="text-[22px] md:text-[26px] leading-[21px] md:leading-[31px] font-semibold mt-5">
                Contact Information
              </h3>
              <div className="mt-4">
                <div className="flex items-center gap-6">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <CiMail size={25} color={"#0390A0"} />
                  </button>
                  <NavLink
                    className={"font-semibold text-[18px]"}
                    to={"mailto:support@perksapp.com"}
                  >
                    support@perksapp.com
                  </NavLink>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <MdOutlinePhone size={25} color={"#0390A0"} />
                  </button>
                  <NavLink
                    className={"font-semibold text-[18px]"}
                    to={"tel:(123) 456-7890"}
                  >
                    (123) 456-7890
                  </NavLink>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <SlLocationPin size={25} color={"#0390A0"} />
                  </button>
                  <p className={"font-semibold text-[18px]"}>
                    123 App Avenue, Suite 456, City, State, 12345
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%]" >
              <h3 className="text-[22px] md:text-[26px] leading-[21px] md:leading-[31px] font-semibold mt-5">
                Social Links
              </h3>
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="flex items-center gap-6">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <FaFacebook size={25} color={"#0390A0"} />
                  </button>
                  <NavLink className={"font-semibold text-[18px]"} to={""}>
                    Facebook
                  </NavLink>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <FaXTwitter size={25} color={"#0390A0"} />
                  </button>
                  <NavLink className={"font-semibold text-[18px]"} to={""}>
                    Twitter X
                  </NavLink>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <FaInstagram size={25} color={"#0390A0"} />
                  </button>
                  <NavLink className={"font-semibold text-[18px]"} to={""}>
                    Instagram
                  </NavLink>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <button
                    className={`w-[50px] h-[50px] flex justify-center items-center rounded-[20px] ${
                      theme == "light" ? "bg-[#FFFFFF]" : "bg-[#1F3133]"
                    } `}
                  >
                    <TiSocialLinkedin size={25} color={"#0390A0"} />
                  </button>
                  <NavLink className={"font-semibold text-[18px]"} to={""}>
                    LinkedIn
                  </NavLink>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="text-white w-full  py-10 order-1 lg:order-2">
            <Form />
          </div>
        </div>
      </div>
      <img
        src="/sphere.png"
        className="absolute left-[10px]  bottom-[-45px] w-30"
        alt=""
      />
    </div>
  );
}
