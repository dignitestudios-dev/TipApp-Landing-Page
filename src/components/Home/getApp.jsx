import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function GetApp() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full mt-50 lg:mt-100 relative px-4 md:px-10 lg:px-18 pb-3">
      <div
        className={`py-4 px-4 md:h-[350px] lg:h-[550px] rounded-[50px] ${
          theme === "light"
            ? "bg-gradient-to-r from-[#0390A0] via-[#03C6DB] to-[#03C6DB]"
            : "bg-[linear-gradient(193.22deg,_#002225_-6.27%,_#0D3A3F_118.98%)]"
        }`}
      >
        <div className="grid lg:grid-cols-3 sm:px-10">
          <div>
            <img
              src={theme == "light" ? "/left-cell.png" : "/left-cell-dark.png"}
              className="w-140 absolute hidden lg:flex z-4 -top-49 left-20 "
              alt="left-mob-coin.png"
              srcset=""
            />
            <img
              src="/left-coin.png"
              className="absolute left-0 hidden lg:flex -top-10 z-1 w-80"
              alt="left-mob-coin.png"
              srcset=""
            />
          </div>
          <div className="text-center mt-5">
            <h4>
              <span className="font-[400] text-[22px] text-white ">
                {" "}
                Get the app
                <br />
              </span>{" "}
              <span className="font-400  text-[42px] text-white ">
                Start Earning Tips and
              </span>{" "}
              <br />
              <span className="font-semibold  text-[42px] text-white ">
                Recognition Today!
              </span>
            </h4>
            <p className="text-[16px]  text-[#FCFCFE] ">
              Download the Perks app now and unlock a world of opportunities to
              get rewarded for your hard work. Whether you're offering
              exceptional service, sharing valuable insights, or simply being
              recognized by others, Perks makes it easy to earn tips and build
              your reputation. Receive real-time tips, leave reviews, and see
              your professional recognition grow, all in one app. Don’t wait,
              start earning and getting appreciated today!
            </p>
            <div className="flex items-center gap-3 justify-center mt-3">
              <img src="/play-store.png" className="w-30 lg:w-50" alt="" />
              <img src="/app-store.png" className="w-30 lg:w-50" alt="" />
            </div>
          </div>
          <div>
            {/* <img
              src="/left-cell.png"
              className="w-140 absolute z-4 -top-49 left-20 "
              alt="left-mob-coin.png"
              srcset=""
            /> */}
            <img
              src={
                theme == "light"
                  ? "/right-mob-coin.png"
                  : "/right-cell-dark.png"
              }
              className="absolute right-0 -top-14 z-1 hidden lg:flex   lg:w-130"
              alt="left-mob-coin.png"
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
