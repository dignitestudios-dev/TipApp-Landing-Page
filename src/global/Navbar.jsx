import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink as Link } from "../constent/NavbarLink";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdClose,
  MdKeyboardArrowRight,
  MdOutlineLeaderboard,
} from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const location = useLocation();
  const { theme, setTheme } = useContext(GlobalContext);
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsDrop(isOpen && false);
    setIsOpen(!isOpen);
  };
  const [imgPath, setImgPath] = useState("/whiteglass.png");

  const handleMouseEnter = () => {
    setImgPath("/hatglas.png");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDrop(false);
    }
  };

  // Adding event listener for click outside when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseLeave = () => {
    setImgPath("/whiteglass.png");
  };
  const cardContent = [
    {
      title: "Perks Hub",
      description:
        "Your Central Space for Tipping, Reviews, and Building Connections.",
      linkText: "View Details",
      icon: (
        <GoHome
          className="text-white transition-all duration-300 group-hover:text-[#0390A0]"
          size={25}
        />
      ),
      iconClass:
        "text-white transition-all duration-300 group-hover:text-[#0390A0]",
      to: "/future/perkshub",
    },
    {
      title: "Leaderboard",
      description:
        "Spotlight on Excellence: Celebrating Top Contributors, Earners, and Reviewers.",
      linkText: "View Details",
      icon: (
        <MdOutlineLeaderboard
          className="text-white transition-all duration-300 group-hover:text-[#0390A0]"
          size={25}
        />
      ),
      iconClass:
        "text-white transition-all duration-300 group-hover:text-[#0390A0]",
      to: "/future/leaderboard",
    },
    {
      title: "Tiptalk",
      description: "Authentic Connections Without the Pressure of Identity.",
      linkText: "View Details",
      icon: (
        <img
          className="transition-all w-8 duration-300 "
          src={imgPath}
          alt="Hat Glass"
        />
      ),
      iconClass: "transition-all w-8 duration-300 ",
      to: "/future/tiptalk",
    },
    {
      title: "Generosity Hub",
      description:
        "Support Meaningful Causes and Make a Difference with Every Contribution.",
      linkText: "View Details",
      icon: (
        <FaHandHoldingDollar
          className="text-white transition-all duration-300 group-hover:text-[#0390A0]"
          size={25}
        />
      ),
      iconClass:
        "text-white transition-all duration-300 group-hover:text-[#0390A0]",
      to: "/future/generosity",
    },
    {
      title: "Wallet",
      description:
        "Manage your funds, tip with ease, and track your transactions—all in one place.",
      linkText: "View Details",
      icon: (
        <IoWalletOutline
          className="text-white transition-all duration-300 group-hover:text-[#0390A0]"
          size={25}
        />
      ),
      iconClass:
        "text-white transition-all duration-300 group-hover:text-[#0390A0]",
      to: "/future/wallet",
    },
  ];

  return (
    <div className="bg-transparent relative text-white flex flex-col items-center pt-5  ">
      <nav className="flex items-center justify-between w-full px-4 md:px-10 lg:px-18 text-sm">
        <div className="hidden md:flex items-center gap-10 w-full ">
          <img
            src={theme == "light" ? "/dark-white-logo.png" : "/dark-white-logo.png"}
            alt="Logo"
            className="h-10 md:h-15 md:w-20"
          />
          <ul
            className={`flex space-x-8 ${
              theme === "dark" ? "text-white" : "text-black"
            } font-normal`}
          >
            {Link?.map((item, i) =>
              item.to == "" ? (
                <li
                  key={i}
                  className={`cursor-pointer font-normal text-lg leading-[21px] ${
                    theme === "light" ? "text-[#565656]" : "text-white"
                  } ${
                    location?.pathname.includes("future") ? "active-link" : ""
                  }`}
                >
                  <button
                    onClick={() => setIsDrop(!isDrop)}
                    className="cursor-pointer flex items-center gap-2"
                  >
                    {item.link}{" "}
                    <IoIosArrowDown color="#0390A0" className="mt-1" />
                  </button>
                </li>
              ) : (
                <li
                  key={i}
                  className={`cursor-pointer font-normal text-lg leading-[21px] ${
                    theme === "light" ? "text-[#565656]" : "text-white"
                  } ${item.to == location?.pathname ? "active-link" : ""}`}
                >
                  <NavLink to={item.to}>{item.link}</NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex gap-3 me-5 justify-between md:justify-end w-full md:w-[50%] items-center">
          <button
            aria-label="button"
            name="theme-toggle"
            type="button"
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            className={`${
              theme == "light" ? "bg-[#71FFFF]" : "bg-[#005050]"
            } rounded-full overflow-hidden transition-all duration-300 w-[60px] cursor-pointer lg:w-[70px] h-[30px] lg:h-[37.5px] p-[4px] flex justify-between items-center`}
          >
            {theme == "light" && (
              <img
                src={"/light-solar.png"}
                alt="light"
                className={`transition-transform duration-300 transform translate-x-[calc(0%)] w-[30px] `}
              />
            )}

            <span
              className={`h-6 w-6 lg:h-8 lg:w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
                theme == "light"
                  ? "translate-x-0 bg-white"
                  : "translate-x-[calc(100%-100%)] lg:translate-x-[calc(5%-3%)] bg-white"
              } `}
            ></span>

            {theme != "light" && (
              <img
                src={"/dark-solar.png"}
                alt="light"
                className={`transition-transform duration-300 transform translate-x-[calc(100%-80%)] lg:translate-x-[calc(15%-3%)] w-[30px]`}
              />
            )}
          </button>

          <button
            aria-label="button"
            type="button"
            name="menu-toggle"
            onClick={() => toggleMenu()}
            className="flex md:hidden cursor-pointer lg:hidden h-4 lg:h-auto"
          >
            {!isOpen ? (
              <RxHamburgerMenu
                size={25}
                className={`${
                  theme == "light" ? "text-[#03C6DB]" : "text-white"
                } `}
              />
            ) : (
              <MdClose
                size={25}
                className={`${
                  theme == "light" ? "text-[#03C6DB]" : "text-white"
                } `}
              />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="w-[50%] absolute z-10 top-10 right-0 h-screen px-5">
          <div
            className={` ${
              theme == "light"
                ? "bg-gradient-to-br h-auto from-[#0390A0] via-[#03C6DB] to-[#03C6DB]"
                : "bg-gradient-to-br from-[#002225] via-[#0D3A3F] to-[#0D3A3F]"
            } md:hidden rounded-[20px] ${
              isDrop ? "animate-slide-left" : "animate-slide-right"
            } bg-[#03C6DB] mt-4  text-white w-full `}
          >
            <ul className="flex flex-col space-y-4 px-5 py-5 justify-center uppercase">
              {Link?.map((item, i) => (
                <li
                  key={i}
                  className={`cursor-pointer font-normal text-lg leading-[21px] text-white ${
                    item.to == location.pathname ? "" : ""
                  } `}
                >
                  {item.to == "" ? (
                    <button
                      onClick={() => setIsDrop(!isDrop)}
                      className="cursor-pointer flex items-center gap-2"
                    >
                      {item.link}{" "}
                      <IoIosArrowDown color="white" className="mt-1" />{" "}
                    </button>
                  ) : (
                    <NavLink to={item.to}>{item.link}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isDrop && (
        <div
          ref={dropdownRef}
          className="px-4 md:px-10 lg:px-18 w-full text-black absolute z-50 top-60 md:top-20"
        >
          <div
            className={`${
              theme == "light" ? "bg-white" : "bg-[#1F3133]"
            } shadow-2xl rounded-[20px] w-full overflow-auto mt-6 py-4 px-4 transition-transform duration-500 ease-out transform translate-y-0 ${
              isDrop ? "animate-slide-down" : "animate-slide-up"
            }`}
          >
            {/* Wrap this container with horizontal scroll */}
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {cardContent.map((card, index) => (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className={`group py-4 px-4 rounded-[30px] transition-all duration-300 ${
                    theme == "light"
                      ? "bg-[#F9FAFA] hover:bg-[linear-gradient(287.64deg,_#0390A0_0%,_#03C6DB_120.13%)]"
                      : "bg-[#002428] hover:bg-[linear-gradient(193.22deg,_#002225_-6.27%,_#0D3A3F_118.98%)]"
                  } min-w-[200px]`}
                >
                  <button
                    className={`bg-gradient-to-r p-3 rounded-[15px] from-[#0390A0] to-[#03C6DB] transition-all duration-300 group-hover:text-white ${
                      theme == "light"
                        ? "group-hover:from-white group-hover:to-white"
                        : "group-hover:from-[#1F3133] group-hover:to-[#1F3133]"
                    }`}
                  >
                    {card.icon}
                  </button>

                  <h3
                    className={`${
                      theme == "light" ? "text-[#365356]" : "text-white"
                    } mt-3 text-[24px] transition-all duration-300 group-hover:text-white`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`${
                      theme == "light" ? "text-[#365356]" : "text-white"
                    } text-[14px] opacity-0 max-h-0 group-hover:text-white group-hover:opacity-100 group-hover:max-h-[200px] group-hover:translate-y-0 translate-y-[-20px] overflow-hidden transition-all duration-300`}
                  >
                    {card.description}
                  </p>

                  <NavLink
                    to={card?.to}
                    onClick={() => setIsDrop(false)}
                    className={`${
                      theme == "light" ? "text-[#365356]" : "text-white"
                    } mt-4 flex text-[14px] items-center gap-1 transition-all duration-300 group-hover:text-white`}
                  >
                    {card.linkText}
                    <MdKeyboardArrowRight
                      size={25}
                      className="text-[#0390A0] group-hover:text-white"
                    />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
