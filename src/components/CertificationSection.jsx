import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const awards = [
  {
    delay: 0.2,
    img: "/assets/realty.png",
    alt: "award",
    title: "REALTY +",
    desc: "Affordable Housing Project of the Year",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award2.png",
    alt: "Platinum Award ",
    title: "Platinum Award ",
    desc: "Best Affordable EWS/LIG Housing Project",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award3.png",
    alt: "Industry-Leading Innovation Award",
    title: "Industry-Leading Innovation Award",
    desc: "Recognized for Best Sales Technology in Real Estate",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award4.png",
    alt: "PMAY",
    title: "PMAY",
    desc: "Affordable Housing Awards",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award5.png",
    alt: "The Economic Times",
    title: "The Economic Times",
    desc: "Excellence in Customer Service",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award6.png",
    alt: "The Economic Times Real Estate Conclave",
    title: "The Economic Times Real Estate Conclave",
    desc: "Residential Project - Affordable Housing",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/realty.png",
    alt: "REALTY +",
    title: "REALTY +",
    desc: "Young Achiever of the Year Yashasi Shroff Executive & Marketing Director",
    year: "2025",
  },
  {
    delay: 0.2,
    img: "/assets/award5.png",
    alt: "The Economic Times",
    title: "The Economic Times",
    desc: "Residential Project - Mid Segment (East : Ongoing)",
    year: "2024",
  },
  {
    delay: 0.2,
    img: "/assets/award7.png",
    alt: "The Economic Times",
    title: "The Economic Times",
    desc: "Residential Project - Mixed Use (East : Ongoing)",
    year: "2024",
  },
  {
    delay: 0.2,
    img: "/assets/award8.png",
    alt: "Sangam by Alcove Developers LLP",
    title: "Sangam by Alcove Developers LLP",
    desc: "Best Ongoing Residential Project",
    year: "2023",
  },
  {
    delay: 0.2,
    img: "/assets/award6.png",
    alt: "award",
    title: "The Economic Times Real Estate Conclave",
    desc: "Residential Project - Developer (Metro)",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award9.png",
    alt: "Credai Howrah- Hooghly",
    title: "Credai Howrah- Hooghly",
    desc: "Best Ongoing Residential Project (Above 2 lakh sq.ft)",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award10.png",
    alt: "Realty Awards",
    title: "Realty Awards",
    desc: "Best Completed Residential Project in Hooghly Above 1 Lakh sq.ft",
    year: "2022",
  },
  {
    delay: 0.2,
    img: "/assets/award6.png",
    alt: "award",
    title: "The Economic Times Real Estate Conclave",
    desc: "Marketer of the Year",
    year: "2022",
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
