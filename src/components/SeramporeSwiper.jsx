"use client";
import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatedSection } from "./animations";
import MobileSwiperNavigation from "./MobileSwiperNavigation";

const settings = {
  className: "serampore-swiper overflow-x-visible",
  infinite: false,
  slidesToShow: 3.1,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
  swipeToSlide: true,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 3.1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};

export default function SeramporeSwiper({ data }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  let swiperRef = useRef(null);

  const handleNext = () => {
    if (!swiperRef) return;
    setIsTransitioning(true);
    swiperRef.slickNext();
  };

  const handlePrev = () => {
    if (!swiperRef) return;
    setIsTransitioning(true);
    swiperRef.slickPrev();
  };

  const handleSlideClick = (index) => {
    if (!swiperRef || isTransitioning) return;
    setIsTransitioning(true);
    swiperRef.slickGoTo(index);
  };

  return (
    <><AnimatedSection className="container mx-auto relative certification-section !bg-white mt-7">
      <div className="md:h-[286px] md:w-full h-[150px] w-[90%] z-1" />
      <Image
        src={data[activeIndex - 1].backgroundImage}
        fill
        className={`object-contain md:block transition-opacity duration-100 ${isTransitioning ? "opacity-80" : "opacity-100"}`}
        alt="serampore map" />
    </AnimatedSection>
      <div className=" container mx-auto px-4 md:px-0">
        <Slider
          ref={(slider) => {
            swiperRef = slider;
          } }
          {...settings}
          afterChange={() => {
            const slides = document.querySelectorAll(
              ".serampore-swiper .slick-slide"
            );

            for (let i = 0; i < slides.length; i++) {
              if (slides[i].classList.contains("slick-current")) {
                setActiveIndex(i + 1);
                break;
              }
            }
              setIsTransitioning(false);
          } }
        >
          {data.map((slide, index) => (
            <div
              key={index}
              className="relative !flex justify-center flex-nowrap pt-15 cursor-pointer"
              onClick={() => handleSlideClick(index)}
            >
              <Image
                src={slide.src}
                alt="slide-0"
                height={132}
                width={132}
                className="relative !h-[100px] !w-[100px] md:!h-[132px] md:!w-[132px] z-1" />
              <div
                className={`w-full relative flex flex-col md:p-4 md:pb-0 p-2 pt-10 md:pt-12 `}
              >
                <div className="location-slide bg-[#F8F8F8] top-6 -left-[70px] min-w-[140%] h-[100%] absolute back-active" />
                <Image
                  src={slide.icon}
                  height={48}
                  width={48}
                  alt="icon"
                  className={`max-md:!h-[33px] max-md:!w-[33px] image z-1`} />
                <p
                  className={`md:!w-full text-[14px] md:text-[20px] text-[#22252E] font-[700] z-1 leading-5 md:leading-[28px] title`}
                >
                  {slide.title}
                </p>
                <p
                  className={`z-1 text-[12px] md:text-[16px] text-[#22252E] opacity-60 font-[400] leading-4 md:leading-[20px] description`}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <MobileSwiperNavigation
          currentIndex={activeIndex - 1}
          totalSlides={data.length}
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={activeIndex === 1}
          isNextDisabled={activeIndex === data.length}
          className="relative transform bg-white flex gap-10 items-center justify-center mt-9 px-1 py-5 mb-20"
        />
      </div></>
  );
}
