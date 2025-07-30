"use client";

import AmenitiesSwiper from "@/components/AmenitiesSwiper";
import { AnimatedSection, SlideIn, SlideUp } from "@/components/animations";
import GangaVideoSection from "@/components/GangaVideoSection";
import GangaWaves from "@/components/GangaWaves";
import HeroSectionWaves from "@/components/HeroSectionWaves";
import PlansSection from "@/components/PlansSection";
import ProjectViewSlides from "@/components/ProjectViewSlides";
import RiversideLivingSwiper from "@/components/RiversideLivingSwiper";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SeramporeMarqueeSlides from "@/components/SeramporeMarqueeSlides";
import SeramporeSwiper from "@/components/SeramporeSwiper";
import Testimonials from "@/components/Testimonials";
import WhyRiversideFloatingButton from "@/components/WhyRiversideFloatingButton";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import SafetySecuritySection from "@/components/SafetySecuritySection";
// import CertificationSection from "@/components/CertificationSection";
import PastProjectSwiper from "@/components/PastProjectSwiper";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";
import { useState } from "react";

const seramporeData = [
  {
    src: "/assets/collage.png",
    icon: "/assets/icons/graduation-hat.svg",
    title: "Serampore College",
    description: "1.85km away",
    backgroundImage: "/assets/SRP-College.png",
  },
  {
    src: "/assets/hospital.png",
    icon: "/assets/icons/hospital-building.svg",
    title: "Serampore Hospital",
    description: "3.1km away",
    backgroundImage: "/assets/hospital-bg.png",
  },
  {
    src: "/assets/railwaystation.png",
    icon: "/assets/icons/railway.svg",
    title: "Serampore Railway Station",
    description: "2.5km away",
    backgroundImage: "/assets/railway-bg.png",
  },
  {
    src: "/assets/court.png",
    icon: "/assets/icons/court.svg",
    title: "Serampore Court",
    description: "2km away",
    backgroundImage: "/assets/court-bg.png",
  },
  {
    src: "/assets/temple.png",
    icon: "/assets/icons/temple.svg",
    title: "Mahesh Temple",
    description: "350mtr away",
    backgroundImage: "/assets/mahesh-temple.png",
  },
];

export default function Home () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleScheduleVisit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <><main>
      {/* Hero Section */}
      <section id="Hero_Section" className="relative h-screen">
        <Image
          className="max-md:hidden inset-0 object-[50%_25%] w-full h-full object-cover"
          src="/assets/Riverview.png"
          alt="Riverside Luxury Residences"
          layout="fill"
          priority />
        <Image
          className="md:hidden inset-0 w-full h-full object-fill"
          src="/assets/Riverviewmobile.png"
          alt="Riverside Luxury Residences"
          layout="fill"
          priority />
        <div className="md:hidden hero-section-bg h-[100%] w-[100%] top-0 left-0" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto">
            <SlideUp delay={0.4}>
              <h1 className="max-md:px-9 max-md:text-center hero-section-title text-white leading-13 text-[48px] md:text-[100px] font-[400] md:leading-[100px] md:max-w-[635px]">
                Affordable Luxury by the Riverside
              </h1>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className=" mt-6 max-md:text-center font-satoshi text-[#FFFFFF] font-[400] text-[14px] leading-5">
                HIRA/P/HOO/2019/000635 &nbsp; | &nbsp;<Link href="https://www.rera.wb.gov.in" target="_blank" className="text-[#FFFFFF]">www.rera.wb.gov.in</Link>
              </p>
            </SlideUp>
          </div>
        </div>
        <WhyRiversideFloatingButton />
      </section>
      <section className="relative">
        <HeroSectionWaves />
      </section>

      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="md:max-w-[35%] md:text-[56px] text-[36px] max-md:text-center font-normal md:leading-[72px] leading-[44px] text-black font-cormorant max-md:p-5">
            <span class="text-[#DE804B]">Fill the form</span> to book a
            visit to the site
          </div>
          <div class="bg-white p-8 w-full max-w-2xl md:mx-4 relative box-shadow">
            <h2 class="text-2xl font-bold mb-6 text-[#22252E]">Write to us</h2>

            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md outline-none" />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md outline-none" />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone*"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md outline-none" />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="relative">
                  <select class="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10 outline-none">
                    <option value="">My Choice*</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="4BHK">4 BHK</option>
                  </select>
                  <div class="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z" />
                    </svg>
                  </div>
                </div>

                <div class="relative">
                  <select class="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10 outline-none">
                    <option value="">My Budget*</option>
                    <option value="40-50">40-50 Lac</option>
                    <option value="50-60">50-60 Lac</option>
                    <option value="60-70">60-70 Lac</option>
                    <option value="70-100">70-1 Cr</option>
                  </select>
                  <div class="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="cursor-pointer w-full bg-[#144D78] text-white rounded-md hover:bg-[#002F52] transition-colors duration-300 font-medium flex items-center justify-center"
              >
                <span class="text-left py-3 md:py-4 px-6 md:px-9 flex-grow text-[18px] md:text-[20px] font-[600]">
                  Book A Site Visit
                </span>
                <span className="px-6 py-4 flex items-center justify-center rounded-r-md h-full text-orange-500 bg-[#002F52] text-lg">
                  ↗
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="pb-2 pt-16 md:py-16 bg-white">
        <div className="container  mx-auto px-6">
          <div className="text-center mb-7 md:mb-10">
            <SlideUp delay={0.4}>
              <h2 className="project-overview-title max-md:!text-[36px] max-md:!leading-11 max-md:font-[400] text-center">
                Project
                <span className="orange-color"> Overview</span>
              </h2>
            </SlideUp>
          </div>
        </div>
        <AnimatedSection className="container overflow-visible  mx-auto relative mb-16">
          <div className="relative max-md:pt-5">
            <ProjectViewSlides />
          </div>
        </AnimatedSection>

        <div className="container py-7 px-4 lg:px-10 mx-auto grid grid-cols-2 xl:grid-cols-4 gap-8 md:py-20 bg-white">
          <SlideUp delay={0.2} className="order-1 flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image
                src="/assets/icons/connectivity.svg"
                width={68}
                height={68}
                alt="Connectivity"
                className="" />
            </div>
            <h3 className="block md:text-[40px] text-[28px] font-satoshi font-[400] leading-[34px] md:leading-[54px] text-[#22252e] mb-1">
              3 way
            </h3>
            <p className="block md:text-[20px] text-[16px]  font-satoshi font-[400] leading-[27px] md:leading-[28px] text-[#22252e] text-center">
              Connectivity
            </p>
          </SlideUp>

          <SlideUp delay={0.4} className="order-2 flex flex-col items-center">
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image
                src="/assets/icons/residential.svg"
                width={68}
                height={68}
                alt="Clubhouse"
                className="" />
            </div>
            <h3 className="block max-md:text-center md:text-[40px] text-[28px] font-satoshi font-[400] leading-[34px] md:leading-[54px] text-[#22252e] mb-1">
              56,000 sq.ft.
            </h3>
            <p className="block md:text-[20px] text-[16px]  font-satoshi font-[400] leading-[27px] md:leading-[28px] text-[#22252e] text-center">{`Hooghly's largest Residential Clubhouse`}</p>
          </SlideUp>

          <SlideUp
            delay={0.6}
            className="order-3 flex flex-col items-center"
          >
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image
                src="/assets/icons/19 acres.svg"
                width={68}
                height={68}
                alt="Project Area"
                className="" />
            </div>
            <h3 className="block md:text-[40px] text-[28px] font-satoshi font-[400] leading-[34px] md:leading-[54px] text-[#22252e] mb-1">
              19 acres
            </h3>
            <p className="block md:text-[20px] text-[16px]  font-satoshi font-[400] leading-[27px] md:leading-[28px] text-[#22252e] text-center">
              Area of Project
            </p>
          </SlideUp>

          <SlideUp
            delay={0.8}
            className="order-4 flex flex-col items-center"
          >
            <div className="flex justify-center items-center h-[68px] w-[68px] mb-4">
              <Image
                src="/assets/icons/Family.svg"
                width={68}
                height={68}
                alt="Garden and Ghat"
                className="" />
            </div>
            <h3 className="block md:text-[40px] text-[28px] font-satoshi font-[400] leading-[34px] md:leading-[54px] text-[#22252e] mb-1">
              3500+
            </h3>
            <p className="block md:text-[20px] text-[16px]  font-satoshi font-[400] leading-[27px] md:leading-[28px] text-[#22252e] text-center">
              Families Booked
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Certification Information */}
      {/* <CertificationSection /> */}

      <section className="relative">
        {/* Subnav with scroll spy*/}
        <ScrollSpyNav />

        <Element name="section-Amenities" id="Amenities">
          {/* Amenities */}
          <section className="container  mx-auto mt-5">
            <div className="container mx-auto !w-[100%] relative md:mb-16">
              <div className="flex flex-col justify-center items-center pb-5 max-md:px-5">
                <SlideUp delay={0.4}>
                  <h2 className="w-full md:mt-10 text-center text-black md:text-[56px] text-[36px] font-cormorant md:leading-[72px] leading-[44px] font-[400]">
                    Elevate to{" "}
                    <span className="orange-color">Award winning </span>
                    Architectural Brilliance
                  </h2>
                </SlideUp>
              </div>
              <AnimatedSection className="block relative">
                <div
                  className={"absolute top-5 right-5 cursor-pointer flex flex-row items-center rounded-xl bg-black/20 z-10 group"}
                >
                  <div className="overflow-hidden">
                    <div className="text-[12px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:px-2 group-hover:opacity-100 group-hover:max-w-[100px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                      {"Actual Image"}
                    </div>
                  </div>
                  <Image
                    alt=""
                    src="/assets/icons/info.svg"
                    height={25}
                    width={25}
                    className="" />
                </div>
                <div className="flex w-full h-[167px] md:h-[558px] justify-center relative">
                  <Image
                    fill
                    src="/assets/bitmap.png"
                    alt="Aerial view of Riverside Residences"
                    className=" object-cover" />
                </div>
              </AnimatedSection>
              <div className="block md:hidden relative">
                <div className="h-[160px] bg-[#061026]">
                  <div className="flex justify-center items-center">
                    <hr className="border-[#FFFFFF] w-[100%] opacity-20 absolute" />
                    <SlideUp delay={0.6}>
                      <p className="p-2 z-1 bg-[#061026] font-satoshi text-[16px] font-[700] leading-6 text-center text-white">
                        65+ <br />
                        World-class <br />
                        Amenities
                      </p>
                    </SlideUp>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <AmenitiesSwiper />
        </Element>

        <Element name="section-Plans">
          {/* Plans Section */}
          <div className="bg-[#F5F8FA]">
            <section className="container  mx-auto">
              <div className="relative md:py-[80px]">
                <div className="flex text-center flex-col justify-center items-center max-md:px-5">
                  <SlideUp
                    delay={0.4}
                    className="flex justify-center items-center"
                  >
                    <h2 className="max-w-[600px] w-[100%] lg:w-[100%] project-overview-title !font-[300] text-center pb-[48px] pt-[60px] md:pt-0">
                      The perfect sangam of{" "}
                      <span className="orange-color">life </span>
                      and <span className="orange-color">lifestyle</span>
                    </h2>
                  </SlideUp>
                </div>
                <PlansSection />
              </div>
            </section>
          </div>

          {/* Plans Types */}
          <section className="bg-white">
            <div className=" container mx-auto relative certification-section !bg-white md:pt-20 pt-10">
              <div className="md:grid md:grid-cols-2 gap-10 justify-baseline">
                <div className="">
                  <SlideUp delay={0.4}>
                    <h2 className="project-overview-title text-[56px] text-center md:text-left max-md:px-5">
                      Comfortable Living, Simplified — Discover Yourself by the{" "}
                      <span className="orange-color">Sacred</span> and{" "}
                      <span className="orange-color">Tranquil Rhythms</span> of
                      the Ganges
                    </h2>
                  </SlideUp>
                </div>
                <div className="hidden md:flex items-baseline">
                  <SlideUp delay={0.6}>
                    <p className="text-[20px] text-[#22252E] font-[400]">
                      Riverside living offers a tranquil environment with
                      picturesque views alongside soothing sounds of flowing
                      water and chirping birds, which, supported by scientific
                      evidence, promotes relaxation, rejuvenation, and overall
                      well-being for the mind, body, and soul. By embracing the
                      healing power of nature, riverside living provides a
                      harmonious lifestyle.
                    </p>
                  </SlideUp>
                </div>
              </div>
            </div>
            <RiversideLivingSwiper />
            <AnimatedSection className="md:container  mx-auto relative flex flex-col items-center max-md:py-10 max-md:mt-7 max-md:bg-[#DE804B17]">
              <div className="hidden md:block relative px-10 lg:px-17 pt-9 pb-16 mt-4">
                <div className="absolute -left-[4.5%] top-0 w-[60%] h-[100%] lg:w-[80%] lg:h-[100%] bg-[#DE804B] -skew-x-12"></div>
                <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-[#020C22] skew-x-12"></div>
                <p className="relative text-[36px] lg:text-[40px] font-[400] transforming-text text-center">
                  Take the 1st step to transforming your life
                </p>
              </div>
              <p className="enough-reasons-text block md:hidden font-[400] text-[24px] leading-8 w-[85%] text-center mb-8">
              Take the 1st step to transforming your life
              </p>
                <button onClick={handleScheduleVisit} className="md:min-h-[4rem] min-h-[3.5rem] h-full relative md:-top-7 bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary">
                  <div className="px-6 py-3 mr-20">
                    <span>Schedule a Visit</span>
                  </div>
                  <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full text-orange-500 bg-[#002F52] text-lg">
                    ↗
                  </span>
                </button>
            </AnimatedSection>
          </section>
        </Element>

        <Element name="section-Ganga">
          {/* Ganga Video */}
          <div className="md:mt-10">
            <GangaVideoSection />

            <div className="hidden md:block relative p-5 overflow-hidden">
              <GangaWaves />
              <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
              <div className="relative container  mx-auto py-15">
                <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 ">
                  <div className="col-span-2 p-2">
                    <SlideUp delay={0.4}>
                      <div className="text-[20px] font-[700] leading-[28px] text-white mb-4">Did you know?</div>
                      <p className="w-[90%] transforming-text font-[300] text-[56px] leading-[72px] lg:text-[40px] lg:leading-[48px]">
                        {`Feel the divine aura of Banaras now in Serampore! Own a Home Where You’re Blessed by Ganga Aarti, Every Single Day We’re proud to be India’s only riverside township where the sacred Ganga Aarti happens daily`}
                      </p>
                    </SlideUp>
                  </div>
                  <div className="max-lg:col-span-2 p-2 flex gap-10 items-center">
                    <div className="flex gap-14 items-center">
                      <div className="flex flex-col gap-3">
                        <Image
                          src={"/assets/icons/verticalwaves.svg"}
                          width={15}
                          height={15}
                          alt="verticalwaves"
                          className="opacity-[0.15]" />
                        <Image
                          src={"/assets/icons/verticalwaves.svg"}
                          width={15}
                          height={15}
                          alt="verticalwaves"
                          className="opacity-[0.15]" />
                      </div>
                      <div className="flex flex-col">
                        <SlideUp delay={0.6}>
                          <p className="text-[20px] font-satoshi font-[700] text-white mb-6">
                            Want to Dive into Riverside Bliss?
                          </p>
                        </SlideUp>
                        <SlideUp delay={0.8} className="w-full">
                            <button onClick={handleScheduleVisit} className="w-full md:min-h-[4rem] min-h-[3.5rem] h-full relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary">
                              <div className="px-6 py-3">
                                <span>Schedule a Visit</span>
                              </div>
                              <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
                                ↗
                              </span>
                            </button>
                        </SlideUp>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

        {/* Why Serampore */}
        <Element name="section-WhySerampore">
          <>
            <section className="bg-white overflow-x-hidden">
              <div className="container  mx-auto relative certification-section !bg-white pt-10 md:pt-20">
                <div className="grid grid-cols-2 gap-10 md:px-8 lg:px-24">
                  <div className="max-md:col-span-2">
                    <SlideUp delay={0.4}>
                      <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px]">
                        Why 
                        <span className="orange-color"> Serampore?</span>
                      </h2>
                    </SlideUp>
                  </div>
                  <div className="hidden md:flex items-end">
                    <SlideUp delay={0.6}>
                      <p className="text-[20px] text-[#22252E] font-[400]">
                        Serampore is situated about 20 kilometers north of
                        Kolkata, providing easy access to urban amenities, job
                        opportunities, and transportation networks.
                      </p>
                    </SlideUp>
                  </div>
                </div>
              </div>

              <SeramporeSwiper data={seramporeData} />
            </section>
            {/* Connectivity */}
            <div>
              <div className="relative md:p-5 overflow-hidden max-md:pb-5">
                <GangaWaves />
                <div className="absolute w-[100%] h-[100%] top-0 left-0 waves-linear-bg" />
                <div className="max-md:px-5">
                  <div className="relative md:px-8 lg:px-24 container  mx-auto max-md:pt-10 md:py-15">
                    <div className="grid grid-cols-2 gap-4 ">
                      <div className="max-md:col-span-2 md:p-2">
                        <SlideUp delay={0.4}>
                          <h2 className="project-overview-title !text-[36px] max-md:!leading-11 max-md:font-[400] max-md:text-center md:!text-[56px] !text-white">
                            Serampore, next <br className="max-md:hidden" />
                            <span className="orange-color">Investment hub</span>
                          </h2>
                        </SlideUp>
                        <SlideUp delay={0.6}>
                          <Link href="/location">
                            <button className="hidden md:min-h-[4rem] min-h-[3.5rem] mt-10 relative bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium md:inline-flex items-center gap-2 overflow-hidden button-primary">
                              <div className="px-6 py-3 mr-20">Learn More</div>
                              <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
                                ↗
                              </span>
                            </button>
                          </Link>
                        </SlideUp>
                      </div>
                      <div className="max-md:mt-5 max-md:col-span-2 md:p-2 flex max-md:px-7 gap-10 items-center max-md:pb-10">
                        <div>
                          <div className="space-y-11">
                            <SlideIn
                              delay={0.2}
                              direction="right"
                              className="flex items-center gap-9"
                            >
                              <div className="relative w-[48px] h-[48px]">
                                <Image
                                  src="/assets/icons/railroad-metro.svg"
                                  alt="metro"
                                  fill
                                  className="object-cover" />
                              </div>
                              <div>
                                <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                                  Nearest Metro-station
                                </p>
                                <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                                  Dakshineshwar • 37 min
                                </p>
                              </div>
                            </SlideIn>

                            <SlideIn
                              delay={0.4}
                              direction="right"
                              className="flex items-center gap-9"
                            >
                              <div className="relative w-[48px] h-[48px]">
                                <Image
                                  src="/assets/icons/airport-road.svg"
                                  alt="metro"
                                  fill
                                  className="object-cover" />
                              </div>
                              <div>
                                <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                                  Nearest Airport
                                </p>
                                <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                                  Airport • 45 min
                                </p>
                              </div>
                            </SlideIn>

                            <SlideIn
                              delay={0.8}
                              direction="right"
                              className="flex items-center gap-9"
                            >
                              <div className="relative w-[48px] h-[48px]">
                                <Image
                                  src="/assets/icons/railroad-train.svg"
                                  alt="metro"
                                  fill
                                  className="object-cover" />
                              </div>
                              <div>
                                <p className="text-[12px] md:text-[16px] font-satoshi font-[400] leading-5 md:leading-[22px] text-white/50 mb-1">
                                  Nearest Railway Station
                                </p>
                                <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                                  Rishra • 11 min
                                </p>
                                <p className="text-[16px] md:text-[24px] font-satoshi font-[400] leading-6 md:leading-[33px] text-white">
                                  Serampore • 13 min
                                </p>
                              </div>
                            </SlideIn>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-[#FFFFFF] opacity-10" />
                <SeramporeMarqueeSlides />
              </div>
              <SlideUp delay={0.8}>
                <div className="flex md:hidden justify-center relative -top-7">
                  <button
                    onClick={handleScheduleVisit}
                    className="md:min-h-[4rem] min-h-[3.5rem] h-full inline-flex relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium md:hidden items-center gap-2 overflow-hidden button-primary"
                  >
                    <div className="px-6 py-3 mr-20">
                      <span>Schedule a Visit</span>
                    </div>
                    <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
                      ↗
                    </span>
                  </button>
                </div>
              </SlideUp>
            </div>
          </>
        </Element>
      </section>

      <section className="md:overflow-x-hidden overflow-hidden md:py-20 max-md:pb-10">
        <div className="relative">
          <div className="text-center w-full">
            <SlideUp delay={0.4} className="project-overview-title text-center pt-4">
              <span className="orange-color">Past</span> Projects
            </SlideUp>
          </div>
          <div className="bg-[#F5F8FA] w-full absolute h-[230px] top-115"></div>
        </div>
        <AnimatedSection>
          <PastProjectSwiper />
        </AnimatedSection>
      </section>

      {/* Plans */}
      <SafetySecuritySection />
    </main>
      <ScheduleVisitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} /></>
  );
}
