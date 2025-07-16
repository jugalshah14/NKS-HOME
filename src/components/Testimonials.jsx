'use client';
import React from 'react'
import Image from 'next/image';
import { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        videoUrl: 'https://www.youtube.com/embed/ud9WxxZ4Ns4', // before time
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        videoUrl: 'https://www.youtube.com/embed/9QBa840b6ik', // ganga view
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        videoUrl: 'https://www.youtube.com/embed/UTXy2taEo2w', // brand trust
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        videoUrl: 'https://www.youtube.com/embed/diVORAg3Sp0', // handover testimonial
    },
    {
        src: '/assets/user1.png',
        name: 'Raman Singh',
        position: 'Owner of flat in Serenity',
        videoUrl: 'https://www.youtube.com/embed/uy6JwmlsYGI', // customer testimonial
    },
];

const settings = {
    className: "project-overview-swiper center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
};

export default function Testimonials() {
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
        <div className="relative max-md:mt-7 md:my-12">
            <Slider
                ref={slider => {
                    swiperRef = slider;
                }}
                {...settings}
                afterChange={(current) => setActiveIndex(current)}
            >
                {data.map((slide, index) => (
                    <div key={index} className='relative max-md:flex max-md:justify-center items-start pt-7'>
                        <div className='testimonials-qt-center absolute md:top-10 md:left-0 h-[140px] w-[108] md:h-[241px] md:w-[186px] overflow-hidden'>
                            <Image src={"/assets/icons/qt.svg"} alt="Quote" fill className='object-cover' />
                        </div>

                        <div className="flex items-center md:items-start max-md:flex-col md:ml-32 max-md:px-5 relative z-10">
                            {/* <div className='max-md:mb-2 relative min-h-[40px] min-w-[40px] md:min-h-[84px] md:min-w-[84px] overflow-hidden rounded-full md:mr-6'>
                                <Image src={slide.src} alt={slide.name} fill className='object-cover' />
                            </div> */}
                            <div className='max-md:flex max-md:flex-col max-md:items-center w-full'>
                                {/* <h3 className="max-md:text-center text-[16px] md:text-[24px] font-satoshi font-[500] leading-6 md:leading-[33px] text-[#22252e] mb-1">{slide.name}</h3>
                                <p className="max-md:text-center text-[12px] md:text-[16px] font-satoshi font-[500] leading-5 md:leading-[22px] text-[#22252e99] mb-6">{slide.position}</p> */}
                                <div className="max-md:flex max-md:justify-center w-full">
                                    <iframe
                                        width="100%"
                                        height="550"
                                        src={slide.videoUrl}
                                        title={slide.name + ' testimonial'}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full md:h-[550px] h-[350px]"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="relative transform bg-white flex gap-10 items-center justify-around md:justify-end mt-9 px-1 py-5">
                <div className="h-full flex items-center justify-center">
                    <button className="focus:outline-none  cursor-pointer" onClick={handlePrev}>
                        <Image src="/assets/icons/arrow-right.svg" alt="Previous" height={20} width={19} className="transform rotate-180" />
                    </button>
                </div>
                <div className="flex gap-2 items-center">{activeIndex + 1} <div className="h-0.5 w-8 bg-[#D9D9D9]" /> {data.length}</div>
                <div className="h-full flex items-center justify-center">
                    <button className="focus:outline-none cursor-pointer" onClick={handleNext}>
                        <Image src="/assets/icons/arrow-right.svg" alt="Next" height={20} width={19} className="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

