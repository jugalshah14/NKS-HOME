'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { AnimatedSection } from "./animations";
import ScheduleVisitModal from './ScheduleVisitModal';
import MobileSwiperNavigation from './MobileSwiperNavigation';

export default function PlansSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openInfoIndex, setOpenInfoIndex] = useState(null);
    const swiperRef = useRef(null);

    // Card data
    const cards = [
      {
        img: '/assets/serenity.png',
        title: 'Sangam Serenity',
        bhk: '1,2,3',
        area: '567 - 1039 sq. ft.',
        price: '1234',
        link: '/contact-us',
        imgtype: 'Actual Image'
      },
      {
        img: '/assets/suite.png',
        title: 'Sangam Suite',
        bhk: '3,4',
        area: '1440 - 2085 sq. ft.',
        price: '1234',
        link: '/contact-us',
        imgtype: 'Actual Image'
      },
      {
        img: '/assets/signature.png',
        title: 'Sangam Signature',
        bhk: '1,2,3',
        area: '567 - 1039 sq. ft.',
        price: '1234',
        link: '/contact-us',
        imgtype: 'Actual Image'
      },
    ];

    const handleNext = () => {
      if (!swiperRef.current) return;
      swiperRef.current.slickNext();
    };
    const handlePrev = () => {
      if (!swiperRef.current) return;
      swiperRef.current.slickPrev();
    };
    const handleKnowPriceClick = (e) => {
      e.preventDefault();
      setIsModalOpen(true);
    };

    const handleInfoClick = (index) => {
      setOpenInfoIndex(openInfoIndex === index ? null : index);
    };

    // Arrow states for mobile
    const mobileIndex = Math.ceil(activeIndex);
    const isMobilePrevDisabled = mobileIndex === 0;
    const isMobileNextDisabled = mobileIndex >= cards.length - 1;

    // Swiper settings for mobile
    const mobileSettings = {
      className: "plans-swiper-mobile",
      infinite: false,
      slidesToShow: 1.1,
      speed: 600,
      dots: false,
      arrows: false,
      initialSlide: 0,
      afterChange: (current) => setActiveIndex(current),
    };

    return (
      <AnimatedSection>
        {/* Mobile Swiper */}
        <div className="md:hidden w-full">
          <Slider ref={swiperRef} {...mobileSettings}>
            {cards.map((card, idx) => (
              <div key={idx} className={`w-full flex flex-col relative pl-[16px]`}>
                <div className={`absolute ${idx === cards.length - 1 ? 'right-6' : 'right-2'} top-2 cursor-pointer flex flex-row items-center rounded-xl bg-black/20`}>
                  <div className="overflow-hidden">
                    <div className={`text-[12px] text-white whitespace-nowrap transition-all duration-300 ease-in-out ${
                      openInfoIndex === idx ? 'opacity-100 max-w-[100px] translate-x-0 px-2' : 'opacity-0 max-w-0 translate-x-2'
                    }`}>
                      {card.imgtype}
                    </div>
                  </div>
                  <Image 
                    src="/assets/info.svg" 
                    alt="info" 
                    width={20} 
                    height={20} 
                    className="" 
                    onClick={() => handleInfoClick(idx)}
                  />
                </div>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={392}
                  height={240}
                  className="object-cover w-full  h-[240px]"
                />
                <div className="bg-white p-[20px] mx-[20px] flex flex-col !mt-[-20px] relative">
                  <h1 className="text-[24px] leading-[28px] font-[700] font-satoshi pb-[10px]">{card.title}</h1>
                  <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">BHK Type</p>
                  <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">{card.bhk}</p>
                  <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">Carpet Area</p>
                  <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">{card.area}</p>
                  <div className="pb-[10px]">
                    <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 mb-1">Price</p>
                    <div className="flex items-center">
                      <p className="hidden md:inline text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black shadow-lg mr-2 blur-[6.5px]">{card.price}</p>
                      <button
                        onClick={handleKnowPriceClick}
                        className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] underline"
                      >
                        Know price
                      </button>
                    </div>
                  </div>
                  {/* <Link
                    href={card.link}
                    className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] flex flex-row gap-2 whitespace-nowrap"
                  >
                    Let's Discuss Your Requirements <Image src="/assets/blue-arrow.svg" alt="arrow" width={30} height={10}/>
                  </Link> */}
                </div>
              </div>
            ))}
          </Slider>
          {/* Mobile Arrows and Pagination */}
          <MobileSwiperNavigation
            currentIndex={mobileIndex}
            totalSlides={cards.length}
            onPrev={handlePrev}
            onNext={handleNext}
            isPrevDisabled={isMobilePrevDisabled}
            isNextDisabled={isMobileNextDisabled}
            className="mt-[44px]"
          />
        </div>
        {/* Desktop Cards */}
        <div className="hidden md:flex w-full flex-row gap-[32px]">
          {/* Card 1 */}
          <div className="w-full flex flex-col relative">
            <div className="group absolute right-3 top-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20">
              <div className="overflow-hidden">
                <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 translate-x-2 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                Actual Image
                </div>
              </div>
              <Image src="/assets/info.svg" alt="info" width={20} height={20} className="" />
            </div>
            <Image
              src="/assets/serenity.png"
              alt="serenity"
              width={392}
              height={240}
              className="object-cover w-full  h-[240px]"
            />
            <div className="bg-white p-[28px] mx-[20px] flex flex-col mt-[-20px]">
              <h1 className="text-[24px] leading-[28px] font-[700] font-satoshi pb-[10px]">Sangam Serenity</h1>
              <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">BHK Type</p>
              <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">1,2,3</p>
              <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">Super Built-up Area</p>
              <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">567 - 1039 sq. ft.</p>
              <div className="pb-[10px]">
                <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 mb-1">Price</p>
                <div className="flex items-center">
                  <p className="hidden md:inline text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black shadow-lg mr-2 blur-[6.5px]">1234</p>
                  <button
                    onClick={handleKnowPriceClick}
                    className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] underline"
                  >
                    Know price
                  </button>
                </div>
              </div>
              {/* <Link
                href="/contact-us"
                className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] flex flex-row gap-2"
              >
                Let's Discuss Your Requirements <Image src="/assets/blue-arrow.svg" alt="arrow" width={40} height={10}/>
              </Link> */}
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full flex flex-col relative">
            <div className="group absolute right-3 top-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20">
              <div className="overflow-hidden">
                <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 translate-x-2 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                Actual Image
                </div>
              </div>
              <Image src="/assets/info.svg" alt="info" width={20} height={20} className="" />
            </div>
            <Image
              src="/assets/suite.png"
              alt="serenity"
              width={392}
              height={240}
              className="object-cover w-full  h-[240px]"
            />
            <div className="bg-white p-[28px] mx-[20px] flex flex-col mt-[-20px]">
              <h1 className="text-[24px] leading-[28px] font-[700] font-satoshi pb-[10px]">Sangam Suite</h1>
              <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">BHK Type</p>
              <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">3,4</p>
              <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">Super Built-up Area</p>
              <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">1400 - 2085 sq. ft.</p>
              <div className="pb-[10px]">
                <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 mb-1">Price</p>
                <div className="flex items-center">
                  <p className="hidden md:inline text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black shadow-lg mr-2 blur-[6.5px]">1234</p>
                  <button
                    onClick={handleKnowPriceClick}
                    className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] underline"
                  >
                    Know price
                  </button>
                </div>
              </div>
              {/* <Link
                href="/contact-us"
                className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] flex flex-row gap-2"
              >
                Let's Discuss Your Requirements <Image src="/assets/blue-arrow.svg" alt="arrow" width={40} height={10}/>
              </Link> */}
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full flex flex-col relative">
            <div className="group absolute right-3 top-3 cursor-pointer flex flex-row items-center rounded-xl bg-black/20">
              <div className="overflow-hidden">
                <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 translate-x-2 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                Actual Image
                </div>
              </div>
              <Image src="/assets/info.svg" alt="info" width={20} height={20} className="" />
            </div>
            <Image
              src="/assets/signature.png"
              alt="serenity"
              width={392}
              height={240}
              className="object-cover w-full  h-[240px]"
            />
            <div className="bg-white p-[28px] mx-[20px] flex flex-col mt-[-20px]">
              <h1 className="text-[24px] leading-[28px] font-[700] font-satoshi pb-[10px]">Sangam Signature</h1>
              <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">BHK Type</p>
              <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">2,3</p>
              <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 pb-[4px]">Super Built-up Area</p>
              <p className="text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black pb-[20px]">887 - 1039 sq. ft.</p>
              <div className="pb-[10px]">
                <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-black/50 mb-1">Price</p>
                <div className="flex items-center">
                  <p className="hidden md:inline text-[20px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-black shadow-lg mr-2 blur-[6.5px]">1234</p>
                  <button
                    onClick={handleKnowPriceClick}
                    className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] underline"
                  >
                    Know price
                  </button>
                </div>
              </div>
              {/* <Link
                href="/contact-us"
                className="cursor-pointer text-[14px] font-satoshi font-bold leading-[19px] text-[#134c78] flex flex-row gap-2"
              >
                Let's Discuss Your Requirements <Image src="/assets/blue-arrow.svg" alt="arrow" width={40} height={10}/>
              </Link> */}
            </div>
          </div>
        </div>
        <ScheduleVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </AnimatedSection>
    )
}
