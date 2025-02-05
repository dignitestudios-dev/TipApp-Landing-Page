import React, { useContext, useEffect, useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { GlobalContext } from "../context/GlobalContext";

export default function HomeSlider() {
  const { theme } = useContext(GlobalContext);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Swiper's slideTo method (1 is the second slide)
      swiperRef.current.swiper.slideTo(1);
    }
  }, []);
  const sliderData = [
    {
      description:
        "Don't have time to share usernames or make your tipper go through the hassle? Just let them scan your QR code and they’ll land directly on your profile to tip and leave a review in seconds.",
    },
    {
      description:
        "Add, withdraw, and tip, all within the app. Our secure in-app wallet ensures your transactions are fast, easy, and protected, making your tipping experience hassle-free.",
    },
    {
      description:
        "how your appreciation with just a tap! Send tips and leave reviews for service providers, all while building a community of recognition and rewards.",
    },
  ];
  return (
    <div className="w-full relative px-4 md:px-10 lg:px-18 pb-3 swiper-container">
      <div>
        <img
          src="/sphere.png"
          className="relative left-[-50px] top-[-100px]  w-[140px]"
          alt=""
          srcset=""
        />
      </div>
      <div className="absolute w-full top-[50px]">
        <h1
          className={`text-[50px] font-normal text-center leading-[63px] ${
            theme === "light" ? "text-[#000000]" : "text-white"
          }`}
        >
          What People Are Saying About{" "}
          <span className="font-semibold">Perks</span>
        </h1>
        <p
          className={`text-[22px] font-normal mt-3 text-center ${
            theme === "light" ? "text-[#365356]" : "text-white"
          }`}
        >
          Real experiences and real rewards. See how Perks is transforming
          service recognition <br /> and tipping.
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        className="mySwiper mt-20"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {sliderData.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`cardact rounded-[20px] px-10 py-4 mx-4 my-10 ${
                theme === "light"
                  ? "bg-white"
                  : "bg-[linear-gradient(193.22deg,_#002225_-6.27%,_#0D3A3F_118.98%)]"
              }`}
            >
              <img src="/bi_quote.png" className="w-15 py-3" alt="" srcSet="" />
              <p
                className={`text-[16px] leading-[25px] ${
                  theme === "light" ? "text-[#252B42]" : "text-white"
                }`}
              >
                {item?.description}
              </p>
              <img
                src="/rating-star.png"
                className="w-[100px] mt-3"
                alt="star.png"
                srcSet=""
              />
              <hr className="my-5 h-0.5 border-t-0 bg-[#0CBA701A]" />
              <div className="flex items-center gap-3 w-full">
                <div>
                  <img
                    src="/profile1.png"
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h3
                    className={`text-[16px] leading-[24px] font-bold ${
                      theme === "light" ? "text-[#252B42]" : "text-white"
                    }`}
                  >
                    John D
                  </h3>
                  <p
                    className={`text-[12px] leading-[16px] ${
                      theme === "light" ? "text-[#737373]" : "text-white"
                    }`}
                  >
                    Director, Producer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-5">
        <button className="bg-[#03C6DB] transition-all duration-500 ease-in-out cursor-pointer hover:bg-[#03c5dbd8] text-white text-[16px] w-[180px] font-400 py-2 px-4 rounded-[15px]">
          Leave A Review
        </button>
      </div>
    </div>
  );
}
