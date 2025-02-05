import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
export default function Footer() {
  const { theme } = useContext(GlobalContext);
  return (
    <footer className="w-full mt-3 relative px-4 md:px-10 lg:px-15 pb-4 ">
      <div
        className={`mx-auto  px-4 sm:px-6 lg:px-10  rounded-[50px] h-auto lg:h-[500px] footer-bg ${
          theme == "light"
            ? "bg-[url('/public/footer-bg.png')] "
            : "bg-[url('/public/footer-dark-bg.png')] "
        } `}
      >
        {/*Grid*/}
        <div className=" py-14 grid grid-cols-1 lg:grid-cols-3 gap-y-8 max-w-sm mx-auto sm:max-w-lg md:max-w-3xl lg:max-w-full lg:gap-x-12">
          <div className="w-full lg:max-w-xs mb-10  lg:mb-0 col-span-full lg:col-span-1">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start mb-8"
            >
              <img
                src="/white-logo.png"
                className="w-50"
                alt="white-logo.png"
                srcset=""
              />
            </a>
            <span className="font-[400] text-[22px] text-white">
              Social links
            </span>
            <div className="flex items-center justify-center gap-4 mt-5">
              <img src={theme=="light"?"/fb.png":"/dark-fb.png"} alt="fb.png" className="w-15" srcset="" />
              <img
                src={theme=="light"?"/insta.png":"/dark-insta.png"}
                alt="insta.png"
                className="w-15"
                srcset=""
              />
              <img
                src={theme=="light"?"/twiter.png":"/dark-twitter.png"}
                alt="twiter.png"
                className="w-15"
                srcset=""
              />
              <img
                src={theme=="light"?"/linkedin.png":"/dark-linkedin.png"}
                alt="linkedin.png"
                className="w-15"
                srcset=""
              />
              <img
                src={theme=="light"?"/tiktok.png":"/dark-tiktok.png"}
                alt="tiktok.png"
                className="w-15"
                srcset=""
              />
            </div>
          </div>
          {/*End Col*/}
          <div className="flex items-start justify-between ">
            <div className=" md:col-span-1">
              <h4 className="text-[22px] font-[400] text-[#FFFFFF] ">
                Quick links
              </h4>
              <ul className="mt-3 transition-all duration-500">
                <li className="mb-6">
                  <NavLink className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    Home
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink className=" text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    About
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink className=" text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    Features
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink className=" text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className=" md:col-span-1">
              <h4 className="text-[22px] font-[400] text-[#FFFFFF] ">
                Contacts
              </h4>
              <ul className="mt-3 transition-all duration-500">
                <li className="mb-6">
                  <NavLink className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    support@perksapp.com
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    +1 (123) 456-7890
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                    123 Perks Lane, Suite 100, City, State, ZIP
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/*End Col*/}
          <div className=" lg:text-left col-span-full md:col-span-1 lg:w-max">
            <div className="max-w-sm mx-auto">
              <h4 className="text-[22px] font-[400] text-[#FFFFFF] ">
                Download the App
              </h4>{" "}
              <p className="text-[14px] font-[400] text-[#FFFFFF] mt-5">
                Get Perks on your device today for easy tipping, reviews, and
                much more!
              </p>
            </div>
            <div className="mt-3">
              <img
                src="/play-store.png"
                alt="play-store.png"
                className="w-40"
                srcset=""
              />
            </div>
            <div>
              <img
                src="/app-store.png"
                alt="play-store.png"
                className="w-40 mt-3"
                srcset=""
              />
            </div>
          </div>
          {/*End Col*/}
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-[#FFFFFF21]">
          <div className="flex items-center justify-between ">
            <div className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
              ©2024 Perks App. All rights reserved.
            </div>
            <ul className="mt-3 flex gap-6 items-center transition-all duration-500">
              <li className="mb-6">
                <NavLink className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink className="text-[14px] font-[400] text-[#FFFFFF] max-lg:flex">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
