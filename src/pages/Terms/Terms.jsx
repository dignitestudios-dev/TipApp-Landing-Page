import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Terms() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="lg:px-25 py-18  ">
      <h3
        className={`text-[52px] font-normal leading-[60px] ${
          theme == "light" ? "text-[#000000]" : "text-white"
        }  `}
      >
        Terms & Conditions
      </h3>
      <p className={`mt-6 ${theme=="light"?"text-[#365356]":"text-white"}  text-[18px] font-[300] `}>
        Lorem ipsum dolor sit amet consectetur. Ac feugiat lectus et adipiscing
        sed volutpat. Amet auctor purus felis volutpat aliquet mattis. Montes
        habitasse placerat id ac massa adipiscing eu quam metus. Rhoncus euismod
        lobortis tristique ac mi eget purus. Ut amet ut ac turpis eget. Sit
        tincidunt lorem viverra erat suspendisse fringilla a potenti. Nunc
        pellentesque malesuada nunc viverra consectetur vulputate ac quisque
        sit. Adipiscing viverra nunc vulputate felis pharetra. Odio condimentum
        cursus non pellentesque pharetra. Donec ultrices feugiat ac aenean
        pharetra imperdiet ante. Pharetra et gravida phasellus sit blandit
        convallis neque. Eros cursus phasellus malesuada et habitant iaculis.
        Nascetur justo ullamcorper nec nunc eleifend in netus odio. Eget tortor
        orci consequat tincidunt pharetra.
      </p>
      <p className={`mt-4 ${theme=="light"?"text-[#365356]":"text-white"}  text-[18px] font-[300] `}>
        Lorem ipsum dolor sit amet consectetur. Ac feugiat lectus et adipiscing
        sed volutpat. Amet auctor purus felis volutpat aliquet mattis. Montes
        habitasse placerat id ac massa adipiscing eu quam metus. Rhoncus euismod
        lobortis tristique ac mi eget purus. Ut amet ut ac turpis eget. Sit
        tincidunt lorem viverra erat suspendisse fringilla a potenti. Nunc
        pellentesque malesuada nunc viverra consectetur vulputate ac quisque
        sit. Adipiscing viverra nunc vulputate felis pharetra. Odio condimentum
        cursus non pellentesque pharetra. Donec ultrices feugiat ac aenean
        pharetra imperdiet ante. Pharetra et gravida phasellus sit blandit
        convallis neque. Eros cursus phasellus malesuada et habitant iaculis.
        Nascetur justo ullamcorper nec nunc eleifend in netus odio. Eget tortor
        orci consequat tincidunt pharetra.
      </p>
      <p className={`mt-4 ${theme=="light"?"text-[#365356]":"text-white"}  text-[18px] font-[300] `}>
        Lorem ipsum dolor sit amet consectetur. Ac feugiat lectus et adipiscing
        sed volutpat. Amet auctor purus felis volutpat aliquet mattis. Montes
        habitasse placerat id ac massa adipiscing eu quam metus. Rhoncus euismod
        lobortis tristique ac mi eget purus. Ut amet ut ac turpis eget. Sit
        tincidunt lorem viverra erat suspendisse fringilla a potenti. Nunc
        pellentesque malesuada nunc viverra consectetur vulputate ac quisque
        sit. Adipiscing viverra nunc vulputate felis pharetra. Odio condimentum
        cursus non pellentesque pharetra. Donec ultrices feugiat ac aenean
        pharetra imperdiet ante. Pharetra et gravida phasellus sit blandit
        convallis neque. Eros cursus phasellus malesuada et habitant iaculis.
        Nascetur justo ullamcorper nec nunc eleifend in netus odio. Eget tortor
        orci consequat tincidunt pharetra.
      </p>
      <p className={`mt-4 ${theme=="light"?"text-[#365356]":"text-white"}  text-[18px] font-[300] `}>
        Lorem ipsum dolor sit amet consectetur. Ac feugiat lectus et adipiscing
        sed volutpat. Amet auctor purus felis volutpat aliquet mattis. Montes
        habitasse placerat id ac massa adipiscing eu quam metus. Rhoncus euismod
        lobortis tristique ac mi eget purus. Ut amet ut ac turpis eget. Sit
        tincidunt lorem viverra erat suspendisse fringilla a potenti. Nunc
        pellentesque malesuada nunc viverra consectetur vulputate ac quisque
        sit. Adipiscing viverra nunc vulputate felis pharetra. Odio condimentum
        cursus non pellentesque pharetra. Donec ultrices feugiat ac aenean
        pharetra imperdiet ante. Pharetra et gravida phasellus sit blandit
        convallis neque. Eros cursus phasellus malesuada et habitant iaculis.
        Nascetur justo ullamcorper nec nunc eleifend in netus odio. Eget tortor
        orci consequat tincidunt pharetra.
      </p>
    </div>
  );
}
