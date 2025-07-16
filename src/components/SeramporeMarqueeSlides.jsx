import Image from 'next/image';
import React from 'react';

export default function SeramporeMarqueeSlides() {
    return (
        <div className='marquee'>
            <div className="gap-10 py-4 md:pt-10 flex justify-between marquee-content">
                {[...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                        <div className="min-w-[30px] h-[30px] relative">
                            <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                        </div>
                        <div className="flex items-center">
                            <p className="text-[20px ]md:text-[24px] font-satoshi font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">New Town • 56 min</p>
                        </div>

                        <div className="min-w-[30px] h-[30px] relative">
                            <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                        </div>
                        <div className="flex items-center">
                            <p className="text-[20px ]md:text-[24px] font-satoshi font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Esplanade • 50 min</p>
                        </div>

                        <div className="min-w-[30px] h-[30px] relative">
                            <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                        </div>
                        <div className="flex items-center">
                            <p className="text-[20px ]md:text-[24px] font-satoshi font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Sector V • 56 min</p>
                        </div>

                        <div className="min-w-[30px] h-[30px] relative">
                            <Image src="/assets/icons/DividerVector.svg" alt="Arrow" fill />
                        </div>
                        <div className="flex items-center">
                            <p className="text-[20px ]md:text-[24px] font-satoshi font-[400] leading-7 md:leading-[33px] text-[#FFFFFF] opacity-50 whitespace-nowrap">Dakshineshwar • 37 min</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
