"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileSwiperNavigation from "./MobileSwiperNavigation";

const data = [
  {
    src: "/assets/amenities-slides-0.png",
    info: "Actual Image",
  },
  {
    src: "/assets/amenities-slides-1.png",
    info: "Actual Image",
  },
  {
    src: "/assets/amenities-slides-2.png",
    info: "Actual Image",
  },
  {
    src: "/assets/amenities-slides-3.png",
    info: "Actual Image",
  },
  {
    src: "/assets/amenities-slides-4.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-5.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-6.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-7.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-8.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-9.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-10.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-11.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-12.png",
    info: "Artist impression",
  },
  {
    src: "/assets/amenities-slides-13.png",
    info: "Artist impression",
  },
];

const settings = {
  className: "amenities-swiper !overflow-visible center",
  infinite: false,
  centerPadding: "30px",
  slidesToShow: 4.5,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 425,
      settings: {
        centerMode: false,
        slidesToShow: 1.7,
      },
    },
  ],
};
export default function AmenitiesSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperRef = useRef(null);

  const handleNext = () => {
    if (!swiperRef) return;
    swiperRef.slickNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    swiperRef.slickPrev();
  };

  // Desktop navigation logic
  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= data.length - settings.slidesToShow;

  // Mobile navigation logic - calculate proper display index
  const getMobileDisplayIndex = () => {
    // For mobile, we show 1.7 slides at once, so we need to calculate the actual slide being viewed
    const mobileSlidesToShow = 1.7;
    const maxIndex = data.length - mobileSlidesToShow;
    
    if (activeIndex >= maxIndex) {
      return data.length; // Show total slides when at the end
    }
    return Math.floor(activeIndex + 1); // Show current slide number
  };

  const mobileDisplayIndex = getMobileDisplayIndex();
  const isMobileNextDisabled = activeIndex >= data.length - 1.7;

  return (
    <div className="relative max-md:-top-15 overflow-hidden">
      <div className="container mx-auto relative md:mb-16">
        <div className="grid grid-cols-4 gap-0">
          <div className="hidden md:block bg-white z-2 after-box pr-10 md:col-span-2 lg:col-span-1">
            <h2 className="text-left project-overview-title text-[48px]">
              <span className="font-[700] text-[112px] ">65+</span> World-class
              Amenities
            </h2>
            <div className="relative max-w-[190px] border border-[rgba(0,0,0,0.2)] z-11 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding flex items-center justify-around mt-9 px-1 py-5">
              <div className="h-full flex items-center justify-center">
                <button
                  id="amenities-swiper-prev-button"
                  className={`focus:outline-none cursor-pointer ${
                    isPrevDisabled ? "opacity-30" : ""
                  }`}
                  onClick={handlePrev}
                  disabled={isPrevDisabled}
                >
                  <Image
                    src="/assets/arrow-main.svg"
                    alt="Previous"
                    height={20}
                    width={19}
                    className="transform rotate-180"
                  />
                </button>
              </div>
              <div className="h-full flex items-center justify-center">
                <button
                  id="amenities-swiper-next-button"
                  className={`focus:outline-none cursor-pointer ${
                    isNextDisabled ? "opacity-30" : ""
                  }`}
                  onClick={handleNext}
                  disabled={isNextDisabled}
                >
                  <Image
                    src="/assets/arrow-main.svg"
                    alt="Next"
                    height={20}
                    width={19}
                    className=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <div>
              <Slider
                ref={(slider) => {
                  swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
              >
                {data.map((slide, i) => (
                  <div key={i} className="mx-2 !w-[209px] !overflow-hidden">
                    <div className="relative !w-[209px] h-[380px]">
                      <div className="group inset-0">
                        <div className={"absolute top-3 right-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group"}>
                          <div className="overflow-hidden">
                            <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                              {slide.info}
                            </div>
                          </div>
                          <Image src="/assets/icons/info.svg" alt="info" width={20} height={20} className="" />
                        </div>
                      </div>
                      <Image
                        src={slide.src}
                        alt="slide-0"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <MobileSwiperNavigation
        currentIndex={mobileDisplayIndex - 1}
        totalSlides={data.length}
        onPrev={handlePrev}
        onNext={handleNext}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={isMobileNextDisabled}
        className="md:hidden relative -top-3 transform bg-[#FFFFFF33] backdrop-filter backdrop-blur-[14px] bg-opacity-80 bg-clip-padding"
      />
    </div>
  );
}
