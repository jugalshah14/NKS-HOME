import React from "react";
import GangaWaves from "@/components/GangaWaves";
import { FadeIn, SlideUp } from "@/components/animations";
import Image from "next/image";
import Link from "next/link";

const SafetySecuritySection = () => (
  <div>
    <div className="relative p-5 overflow-hidden">
      <GangaWaves />
      <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
      <div className="relative md:px-8 lg:px-24 container  mx-auto py-5 max-md:pb-15 md:py-15">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="max-md:col-span-2 md:p-2">
            <SlideUp delay={0.4}>
              <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                Your <span className="orange-color">Safety</span> &
                <br className="max-md:hidden" />{" "}
                <span className="orange-color">Security</span>, Our
                <br className="max-md:hidden" /> Priority
              </h2>
            </SlideUp>
            <SlideUp delay={0.6}>
              <Link href="/contact-us">
                <button className="hidden md:min-h-[4rem] min-h-[3.5rem] mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden button-primary">
                  <div className="px-6 py-3 mr-20">
                    <span>Schedule a Visit</span>
                  </div>
                  <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
                    ↗
                  </span>
                </button>
              </Link>
            </SlideUp>
          </div>
          <div className="max-md:col-span-2 grid grid-cols-2 md:gap-x-20 gap-y-9 md:gap-y-12 mt-9 md:mt-6">
            <FadeIn delay={0.2} className="flex flex-col items-center">
              <Image
                height={68}
                width={68}
                src="/assets/icons/surveillance-cctv.svg"
                alt="Security Systems"
                className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
              />
              <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                24 hours security systems
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col items-center">
              <Image
                height={68}
                width={68}
                src="/assets/icons/desktop-computer.svg"
                alt="Monitoring Systems"
                className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
              />
              <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                Central monitoring systems
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="flex flex-col items-center col-span-2">
              <Image
                height={68}
                width={68}
                src="/assets/icons/security-officer-gate.svg"
                alt="Surveillance"
                className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-4"
              />
              <p className="px-1 max-md:opacity-70 text-[16px] md:text-[20px] font-satoshi font-[400] leading-6 md:leading-[28px] text-white text-center">
                24 hours surveillance
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
    <SlideUp delay={0.8}>
      <div className="flex md:hidden justify-center relative -top-7">
        <button className="inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden button-primary">
          <div className="px-6 py-3 mr-20">
            <span>Schedule a Visit</span>
          </div>
          <span className="px-6 py-3 ml-auto text-orange-500 bg-[#002F52] text-lg">
            ↗
          </span>
        </button>
      </div>
    </SlideUp>
  </div>
);

export default SafetySecuritySection; 