"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    src: "/assets/riverside1.png",
    title:
      "Offering residents a visual feast that is both inspiring and soothing.",
  },
  {
    src: "/assets/riverside2.png",
    title:
      "Proximity to water bodies can lead to cooler air and better air quality, as the water absorbs and dissipates heat.",
  },
  {
    src: "/assets/riverside3.png",
    title:
      "Properties located near rivers often have higher market values due to their scenic appeal and recreational opportunities.",
  },
];

const settings = {
  className: "riverside-swiper center",
  infinite: true,
  slidesToShow: 1.05,
  speed: 600,
  dots: false,
  arrows: false,
  initialSlide: 0,
};

export default function RiversideLivingSwiper() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [translateWidth, setTranslateWidth] = useState(0);

  useEffect(() => {
    const calculateTranslateWidth = () => {
      if (cardsContainerRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 600; // Width of each card
        const gap = 20; // Gap between cards

        // Calculate total content width
        const contentWidth = (cardWidth + gap) * data.length - gap;

        // Calculate translation needed (how much extra space we have to scroll)
        const translateX = Math.max(0, contentWidth - containerWidth);

        setTranslateWidth(-translateX);
      }
    };

    calculateTranslateWidth();
    window.addEventListener("resize", calculateTranslateWidth);

    return () => {
      window.removeEventListener("resize", calculateTranslateWidth);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, translateWidth - 160], {
    ease: easeInOut,
  });

  const renderCard = (slide, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center md:!min-w-[600px]"
    >
      <span className="absolute -top-13 md:-top-20 text-[#DE804B] font-cormorant font-[400] text-[58px] md:text-[90px] z-1 left-10 md:left-15">
        {index + 1}
      </span>
      <div className={`relative h-[195px] md:h-[300px] w-full`}>
        <div className="plans_slider_backdrop z-1 h-[100%] w-[100%] absolute top-0 left-0" />
        <Image src={slide.src} alt="slide-0" fill className="object-cover" />
      </div>
      <div className="relative h-[140px] top-[-30px] left-7 md:left-0 w-[90%] md:w-[80%] p-4.5 md:p-7 bg-[#FFFFFFB2] z-1 backdrop-filter backdrop-blur-[50px] bg-opacity-80 bg-clip-padding">
        {slide.title}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative md:h-[170vh] md:mt-10">
      {/* Desktop Scroll Animation */}
      <div className="hidden md:block md:sticky md:top-20 lg:top-50">
        <div className="overflow-hidden pl-20">
          <motion.div
            ref={cardsContainerRef}
            style={{ x }}
            className="md:pt-10 flex gap-5 transition-transform duration-100"
          >
            {data.map(renderCard)}
          </motion.div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden pt-10 px-4 overflow-hidden">
        <Slider {...settings}>{data.map(renderCard)}</Slider>
      </div>
    </div>
  );
}
