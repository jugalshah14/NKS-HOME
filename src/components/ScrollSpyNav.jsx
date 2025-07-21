'use client';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';

const SCROLL_AREA = {
    "amenities": 0,
    "projects": 30,
    "ganga": 70,
    "why-serampore": 200
}

export default function ScrollSpyNav() {

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const container = document.getElementById('scroll-spy');
            const element = document.getElementsByClassName('spy-link-active')?.[0];

            if (element) {
                container.scroll({
                    left: SCROLL_AREA[element.id],
                    behavior: "smooth",
                });
            }
        })
        return () => {
            window.removeEventListener('scroll', () => 0);
        }
    }, []);

    return (
        <div className="max-md:w-[100%] overflow-hidden sticky z-999 top-0 bg-white flex gap-2 space-x-5 border-t border-b border-[#22252e19] py-6 pb-6 md:py-5 md:pb-5 px-4 md:px-0" id="scroll-spy">
            <div className='!flex items-center ml-auto justify-center'>
                <ScrollLink
                    activeClass="spy-link-active"
                    to="section-Amenities"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    id="amenities"
                >
                    <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-satoshi font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0 hover:text-[#22252e] transition-all duration-300">
                        Amenities
                        <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                    </div>
                </ScrollLink>
            </div>
            <div className='!w-fit !flex items-center justify-center min-w-[10px] min-h-[10px]'><Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" /></div>
            <div className='!w-fit !flex items-center justify-center'>
                <ScrollLink
                    activeClass="spy-link-active"
                    to="section-Plans"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    id="projects"
                >

                    <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-satoshi font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0 hover:text-[#22252e] transition-all duration-300">
                        Project Plans
                        <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                    </div>
                </ScrollLink>
            </div>
            <div className='!w-fit !flex items-center justify-center min-w-[10px] min-h-[10px]'><Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" /></div>
            <div className='!w-fit !flex items-center justify-center'>
                <ScrollLink
                    activeClass="spy-link-active"
                    to="section-Ganga"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    id="ganga"
                >

                    <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-satoshi font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0 hover:text-[#22252e] transition-all duration-300">
                        Ganga
                        <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                    </div>
                </ScrollLink>
            </div>
            <div className='!w-fit !flex items-center justify-center min-w-[10px] min-h-[10px]'><Image src="/assets/icons/rectangle_divider.svg" alt="Arrow" width={10} height={10} className="m-0" /></div>
            <div className='!w-fit !flex items-center justify-center mr-auto'>
                <ScrollLink
                    activeClass="spy-link-active"
                    to="section-WhySerampore"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    id="why-serampore"
                >
                    <div className="spy-label py-2 cursor-pointer flex flex-col justify-center items-center gap-2 text-[16px] md:text-[20px] font-satoshi font-[700] whitespace-nowrap leading-6 md:leading-[27px] text-[#22252e7f] relative m-0 hover:text-[#22252e] transition-all duration-300">
                        Why Serampore?
                        <div className="hidden bottom-line absolute bottom-0 w-[38px] h-1 bg-[#4f70af]"></div>
                    </div>
                </ScrollLink>
            </div>
        </div>
    )
}