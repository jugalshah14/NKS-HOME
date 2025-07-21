'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
        src: '/assets/project1.png',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'The 42 Night Aerial',
        description: 'Enjoy the beauty of the lotus pond pavilion and unwind with a calming view from the tallest tower in Eastern India.',
        category: 'Luxurious Flats',
        location: 'Chowringhee, Kolkata',
    },
    {
        src: '/assets/project2.png',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'The Alcove Gloria',
        description: 'Experience comfort and community living with spacious homes, serene landscaping, and doorstep essentials.',
        category: 'Premium Residences',
        location: 'Lake Town, Kolkata',
    },
    {
        src: '/assets/project3.png',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'Flora Foundation',
        description: 'Soak in the charm of water gardens, green landscapes, and amenities crafted for a balanced lifestyle.',
        category: 'Luxury with Nature-Inspired Living',
        location: 'Topsia, Kolkata',
    },
    {
        src: '/assets/project4.png',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'The Regency',
        description: 'Live in elegance with well-planned apartments, top-notch amenities, and excellent connectivity to EM Bypass.',
        category: 'Luxurious Flats',
        location: 'Topsia, Kolkata',
    },
    {
        src: '/assets/project5.png',
        icon1: '/assets/project-icon1.svg',
        icon2: '/assets/project-icon2.svg',
        title: 'Prayag',
        description: 'A peaceful riverside community where heritage meets comfort, offering a harmonious lifestyle by the Ganges.',
        category: 'Affordable Luxury Homes',
        location: 'Serampore, Kolkata',
    },
]

const settings = {
    className: "project-swiper center",
    infinite: false,
    slidesToShow: 1.6,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                centerMode: false,
                slidesToShow: 1.2,
            }
        },
        {
            breakpoint: 926,
            settings: {
                centerMode: false,
                slidesToShow: 1.1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 1.1,
            }
        },
    ]
}
export default function PastProjectSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);
    let swiperRef = useRef(null);

    const handleNext = () => {
        if (!swiperRef) return;
        swiperRef.slickNext();
    }

    const handlePrev = () => {
        if (!swiperRef) return;
        swiperRef.slickPrev();
    }

    return (
        <>
        <div className='px-4 md:px-0 !overflow-x-hidden'>
            <div className='container mx-auto'>
            <Slider
                ref={slider => {
                    swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
            >
                {data.map((slide, index) => (
                    <div key={index} className='relative !flex justify-center flex-nowrap pt-15 w-[100%]'>
                        <div className='w-full flex md:flex-row flex-col'>
                           <div className='w-full md:w-[80%] h-[240px] md:h-[468px] relative'>
                            <Image 
                                src={slide.src} 
                                alt="slide-0" 
                                fill 
                                className="object-cover" 
                            />
                            </div>
                            <div className='w-full flex flex-col bg-[#0C162B] md:mt-[40px]'>
                                <div className='p-[16px] md:p-[36px] relative'>
                                    <div className='md:mt-[32px] absolute w-full top-[-65px] md:top-0 md:left-[-60px] flex items-start justify-start mb-[28px] left-0 bg-black/70 md:bg-transparent backdrop-filter backdrop-blur-[5px] bg-opacity-80'>
                                        <div className='w-full projectslide-title py-[20px] px-[27px] transforming-text font-[400] text-[40px] leading-[48px] whitespace-nowrap'>
                                            {slide.title}
                                        </div>        
                                    </div>

                                    <div className='pb-[28px] md:pt-[120px]'>
                                        <hr className='w-full h-1 text-white/30 mt-[10px] pb-[16px] none-md'/>
                                        <p className="text-[14px] md:text-[14px] font-satoshi font-[400] leading-5 md:leading-[20px] text-white/50 mb-1">About Project</p>
                                        <p className="text-[16px] md:text-[16px] font-satoshi font-[400] leading-6 md:leading-[20px] text-white">{slide.description}</p>
                                    </div>
                                    <div className='flex flex-row gap-4 pb-[24px]'>
                                        <div>
                                            <Image src={slide.icon1} alt="slide-0" width={28} height={28}/>
                                        </div>
                                        <div>
                                            <p className="text-[14px] md:text-[14px] font-satoshi font-[400] leading-5 md:leading-[20px] text-white/50 mb-1">Project Category</p>
                                            <p className="text-[16px] md:text-[16px] font-satoshi font-[400] leading-6 md:leading-[20px] text-white">{slide.category}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-4'>
                                        <div>
                                            <Image src={slide.icon2} alt="slide-0" width={28} height={28}/>
                                        </div>
                                        <div>
                                            <p className="text-[14px] md:text-[14px] font-satoshi font-[400] leading-5 md:leading-[20px] text-white/50 mb-1">Location</p>
                                            <p className="text-[16px] md:text-[16px] font-satoshi font-[400] leading-6 md:leading-[20px] text-white">{slide.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        <div className='w-full ietms-center justify-center flex px-4 pt-2 md:pt-0'>
                <div className="w-full relative transform bg-white flex gap-10 items-center justify-center mt-9 px-1 py-2 md:py-5 max-w-[366px]">
                    <div className="h-full flex items-center justify-center">
                        <button 
                            className={`focus:outline-none cursor-pointer transition-all duration-300 ${activeIndex === 0 ? 'opacity-30' : 'opacity-100'}`}
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                        >
                            <Image 
                                src="/assets/arrow.svg" 
                                alt="Previous" 
                                height={20} 
                                width={19} 
                                className="transform rotate-180" 
                            />
                        </button>
                    </div>
                    <div className="flex gap-2 items-center text-[20px] leading-[28px] font-[700]">{Math.ceil(activeIndex+1)} <div className="h-0.5 w-8 bg-black/30 mx-2" /><div className='text-black/30'>{data.length}</div> </div>
                    <div className="h-full flex items-center justify-center">
                        <button 
                            className={`focus:outline-none cursor-pointer transition-all duration-300 ${Math.ceil(activeIndex+1) >= data.length ? 'opacity-30' : 'opacity-100'}`}
                            onClick={handleNext}
                            disabled={Math.ceil(activeIndex+1) >= data.length}
                        >
                            <Image 
                                src="/assets/arrow.svg" 
                                alt="Next" 
                                height={20} 
                                width={19} 
                                className="" 
                            />
                        </button>
                    </div>
                </div>
            </div>
            </>
    )
};