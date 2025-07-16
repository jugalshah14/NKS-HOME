'use client';
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

export default function WhyRiversideFloatingButton() {
    return (
        <ScrollLink
            activeClass="spy-link-active"
            to="section-Amenities"
            spy={true}
            className="default-theme-text-color-1"
            smooth={true}
            offset={-100}
            duration={500}
            id="amenities"
        >
            <div className="cursor-pointer inset-center absolute backdrop-blur-[20px] -bottom-[150px] md:bottom-[-60px] z-10 md:right-8 bg-[#FFFFFF33] rounded-full w-[133px] h-[133px] flex flex-col items-center justify-center">
                <p className="text-white text-[16px] font-satoshi font-bold leading-[20px] text-center max-w-[93px]">
                    Why Riverside Living?
                </p>
            </div>
        </ScrollLink>
    )
}
