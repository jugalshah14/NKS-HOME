import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const awards = [
  {
    delay: 0.2,
    img: "/assets/award/1.png",
    alt: "award",
    title: "Indian Green Building Council",
    desc: "IGBC Platinum  ",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/2.png",
    alt: "PMAY- Affordable Housing Awards 2025",
    title: "PMAY- Affordable Housing Awards 2025",
    desc: "Best Mid-Range Housing Projects in West Bengal by Private Developers",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/3.png",
    alt: "17th Realty+ Conclave Excellence Awards 2025",
    title: "17th Realty+ Conclave Excellence Awards 2025",
    desc: "Young Achiever of the Year",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/3.png",
    alt: "17th Realty+ Conclave Excellence Awards 2025",
    title: "17th Realty+ Conclave Excellence Awards 2025",
    desc: "Landscape Project of the Year- Residential",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/3.png",
    alt: "17th Realty+ Conclave Excellence Awards 2025",
    title: "17th Realty+ Conclave Excellence Awards 2025",
    desc: "Most Popular Project of the Year",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/4.png",
    alt: "Economic Times Real Estate Award ( National Edition)",
    title: "Economic Times Real Estate Award ( National Edition)",
    desc: "Residential Project-Mixed Use (Ongoing: East) Alcove Realty New Kolkata",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/4.png",
    alt: "Economic Times Real Estate Award ( National Edition)",
    title: "Economic Times Real Estate Award ( National Edition)",
    desc: "Excellence in Customer Service",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/5.png",
    alt: "Realty+INDIA",
    title: "Realty+INDIA",
    desc: "Best Sales Technology Implementation",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/6.png",
    alt: "Realty+INDIA",
    title: "Realty+INDIA",
    desc: "Excellence in Brand Customer Experience",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/7.png",
    alt: "Realty+INDIA",
    title: "Realty+INDIA",
    desc: "Marketer of the Year",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/8.png",
    alt: "Realty+INDIA",
    title: "Realty+INDIA",
    desc: "Best Consumer Engagement Initiative- Funfair at New Kolkata Sangam",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award/4.png",
    alt: "The Economic Times",
    title: "The Economic Times",
    desc: "Residential Project - Mid Segment (East : Ongoing)",
    year: "2024",
  },
  {
    delay: 0.2,
    img: "/assets/award/9.png",
    alt: "The Economic Times",
    title: "The Economic Times",
    desc: "Residential Project - Mixed Use (East: Ongoing) Alcove Realty for",
    year: "2024",
  },
  {
    delay: 0.2,
    img: "/assets/award/10.png",
    alt: "Credai Howrah- Hooghly",
    title: "Credai Howrah- Hooghly",
    desc: "Best Ongoing Residential Project",
    year: "2023",
  },
  {
    delay: 0.2,
    img: "/assets/award/3.png",
    alt: "Realty+ CONCLAVE & Excellence Awards",
    title: "Realty+ CONCLAVE & Excellence Awards",
    desc: "Architectural Design of the year-Residential",
    year: "2023",
  },
  {
    delay: 0.2,
    img: "/assets/award/3.png",
    alt: "Realty+ CONCLAVE & Excellence Awards",
    title: "Realty+ CONCLAVE & Excellence Awards",
    desc: "Residential Complex of the year",
    year: "2023",
  },
  {
    delay: 0.2,
    img: "/assets/award/11.png",
    alt: "The Economic Times Real Estate Conclave",
    title: "The Economic Times Real Estate Conclave",
    desc: "Environmental Friendly Residential Project",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/12.png",
    alt: "CREDAI Realty Awards",
    title: "CREDAI Realty Awards",
    desc: "Best Concept & Desing Designed Residential Project in Howrah & Hooghly",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/13.png",
    alt: "CREDAI Realty Awards",
    title: "CREDAI Realty Awards",
    desc: "Best Completed Residential Project in Hooghly Above 1 lakh sq. Ft",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/14.png",
    alt: "The Economic Times Real Estate Conclave",
    title: "The Economic Times Real Estate Conclave",
    desc: "Marketer of the Year",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/15.png",
    alt: "REAL ESTATE CONCLAVE",
    title: "REAL ESTATE CONCLAVE",
    desc: "Certificate of Excellence",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/16.png",
    alt: "The Economic Times Real Estate Conclave",
    title: "The Economic Times Real Estate Conclave",
    desc: "Residential Project - Developer (Metro)",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/17.png",
    alt: "PMAY",
    title: "PMAY",
    desc: "Best Affordable EWS/LIG Housing Project",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award/18.png",
    alt: "INDIAN GREEN BUILDING COUNCIL",
    title: "INDIAN GREEN BUILDING COUNCIL",
    desc: "IGBC Green Affordable Housing Rating System",
    year: "2021",
  },
  {
    delay: 0.2,
    img: "/assets/award/19.png",
    alt: "Realty+ CONCLAVE EXCELLENCE",
    title: "Realty+ CONCLAVE EXCELLENCE",
    desc: "Real Estate Destination of the year for Alcove",
    year: "2021",
  },
  {
    delay: 0.2,
    img: "/assets/award/20.png",
    alt: "Realty+ CONCLAVE EXCELLENCE",
    title: "Realty+ CONCLAVE EXCELLENCE",
    desc: "Most Environment Friendly Residential Space",
    year: "2021",
  },
  {
    delay: 0.2,
    img: "/assets/award/3.png",
    alt: "Realty+",
    title: "Realty+",
    desc: "Affordable Housing Project of the Year",
    year: "2020",
  },
  {
    delay: 0.2,
    img: "/assets/award/21.png",
    alt: "Realty+",
    title: "Realty+",
    desc: "Affordable Housing Project of the Year",
    year: "2020",
  },
];

export default function CertificationSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(5.4);
  const swiperRef = React.useRef(null);

  const settings = {
    className: "awards-swiper !overflow-visible center",
    infinite: false,
    centerPadding: "30px",
    slidesToShow: 5.4,
    speed: 600,
    dots: false,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  React.useEffect(() => {
    function updateSlidesToShow() {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setSlidesToShow(1.5);
        } else if (window.innerWidth < 1024) {
          setSlidesToShow(2.5);
        } else {
          setSlidesToShow(5.4);
        }
      }
    }
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handleNext = () => {
    swiperRef.current?.slickNext();
  };
  const handlePrev = () => {
    swiperRef.current?.slickPrev();
  };
  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= awards.length - slidesToShow;

  return (
    <section className=" bg-[#EFF3F6] relative pb-10">
      <div className="relative bg-[#002F52] pt-20 pb-30">
        <Image
          src="/assets/Rectangle_home_l.png"
          width={80}
          height={307}
          alt="Rectangle_left"
          className="absolute top-0 h-[100%] left-0"
        />
        <Image
          src="/assets/Rectangle_home.png"
          width={80}
          height={307}
          alt="Rectangle_left"
          className="absolute top-0 h-[100%] right-0"
        />
        <div className="relative  container mx-auto px-6">
          <div className="text-center">
            <SlideUp delay={0.4}>
              <h2 className="project-overview-title text-center !text-white !max-sm:font-cormorant">
                <span className="orange-color">Certified</span> by
              </h2>
            </SlideUp>
          </div>
        </div>
      </div>
      <div className="relative md:top-[-85px] -top-[100px] md:pl-20 pl-0 mx-auto !overflow-x-visible">
        <Slider
          ref={swiperRef}
          {...settings}
          afterChange={(current) => setActiveIndex(current)}
        >
          {awards.map((award, idx) => (
            <div key={idx} className="px-2">
              <SlideUp
                delay={award.delay}
                className="flex flex-col items-center"
              >
                <div className="text-white text-[20px] leading-7 font-satoshi font-bold pb-4">
                  {award.year}
                </div>
                <div className="relative w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center mb-4">
                  <Image
                    src={award.img}
                    fill
                    alt={award.alt}
                    className="object-scale-down"
                  />
                </div>
                <h3 className="text-[20px] font-satoshi font-bold leading-[28px] text-[#22252e] mt-auto-2 text-center">
                  {award.title}
                </h3>
                <p className="text-[14px] leading-5 font-satoshi font-normal text-[#5C5F68] mt-2 text-center">
                  {award.desc}
                </p>
              </SlideUp>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full">
        <div className="flex items-center gap-15 bg-[#f2f5f8] px-6 py-6">
          <button
            className={`focus:outline-none cursor-pointer ${
              isPrevDisabled ? "opacity-30 pointer-events-none" : ""
            }`}
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            <Image
              src="/assets/arrow-main.svg"
              alt="Previous"
              height={24}
              width={24}
              className="transform rotate-180"
            />
          </button>
          <button
            className={`focus:outline-none cursor-pointer ${
              isNextDisabled ? "opacity-30 pointer-events-none" : ""
            }`}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <Image
              src="/assets/arrow-main.svg"
              alt="Next"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
