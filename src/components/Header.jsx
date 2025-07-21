"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ScheduleVisitModal from "./ScheduleVisitModal";

const headerClass = {
  "/": "home-page-header",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeClass, setActiveClass] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleScheduleVisit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setActiveClass(headerClass[pathname] || "");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } bg-white ${activeClass} ${
          activeClass &&
          isScrolled &&
          "!bg-white !backdrop-blur-sm has-scrolled"
        }`}
      >
        <div className="container mx-auto py-4 md:grid md:grid-cols-2 md:items-center flex justify-between items-center max-md:px-5 max-md:py-2 max-md:gap-3">
          <div className="md:h-[48px] md:w-[260px] w-[95px] h-[44px] relative">
            {" "}
            <Link href="/">
              <Image
                className="invert-100 logo-image"
                src="/assets/logo.svg"
                alt="logo"
                fill
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 md:justify-end">
            <button
              onClick={handleScheduleVisit}
              className="max-md:hidden h-[40px] w-[100px] md:h-[48px] md:w-[123px] border-1 border-b-4 hover:bg-white transition-all duration-300 cursor-pointer group/header-btn relative rounded-md action-button flex items-center justify-center"
            >
              <p className="font-satoshi font-bold leading-6 text-[12px] md:text-[14px] md:leading-[19px] text-[#22252E] group-hover/header-btn:!text-[#010b22]">
                Schedule Visit
              </p>
            </button>
            <div className="h-[40px] w-[100px] md:h-[48px] md:w-[123px] border-1 border-b-4 hover:bg-white transition-all duration-300 cursor-pointer group/header-btn relative rounded-md action-button flex items-center justify-center">
              <p className="font-satoshi font-bold leading-6 text-[12px] md:text-[14px] md:leading-[19px] text-[#22252E] group-hover/header-btn:!text-[#010b22]">
                Call Now
              </p>
            </div>
            <button className="text-[#22252E]">
              <Image
                src="/assets/icons/menu.svg"
                height={24}
                width={24}
                alt="menu"
                className="invert-100 menu-button"
              />
            </button>
          </div>
        </div>
      </header>
      {/*Drawer */}
      <div
        className={`block md:hidden !overflow-hidden z-99999 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white shadow-lg
                transition-transform transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="w-[60px] h-[30px] relative">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                className=" invert-100 object-contain"
                priority
              />
            </Link>
          </div>
          <button
            onClick={toggleDrawer}
            className="text-gray-600"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/why-alcove"
                className="text-gray-800 hover:text-blue-500"
              >
                Why Alcove
              </Link>
            </li>
            <li>
              <Link
                href="/master-plan"
                className="text-gray-800 hover:text-blue-500"
              >
                Master Plans
              </Link>
            </li>
            <li>
              <Link
                href="/amenities"
                className="text-gray-800 hover:text-blue-500"
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href="/location"
                className="text-gray-800 hover:text-blue-500"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/life-@-alcove"
                className="text-gray-800 hover:text-blue-500"
              >
                Life @Alcove
              </Link>
            </li>
            <li>
              <Link
                href="/triveni"
                className="text-gray-800 hover:text-blue-500"
              >
                Triveni Omniplex
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-800 hover:text-blue-500">
                Blogs
              </Link>
            </li>
            <li>
              <button
                onClick={handleScheduleVisit}
                className="text-gray-800 hover:text-blue-500"
              >
                Schedule Visit
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ScheduleVisitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
