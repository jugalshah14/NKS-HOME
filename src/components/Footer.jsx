"use client";

import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { showSuccessToast } from "./CustomToast";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  requirements: z.string().optional(),
});

export default function Footer() {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    const requestData = {
      Leads: [
        {
          FName: data.name,
          LName: data.name,
          Phone: data.phoneNumber,
          City: "Kolkata",
          project: "NEW KOLKATA - SANGAM",
          Email: data.email,
          Campaign: "G_Generic_WB_08-Feb-2023",
          Source: "google",
          Medium: "s",
          Content: "",
          Term: data.requirements || "",
        },
      ],
    };
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://alcoverealty.my.salesforce-sites.com/websitehook/services/apexrest/hookinlandingPage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
      showSuccessToast();
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (pathname === "/contact-us") return "";

  return (
    <div className="relative">
      <div className="container mx-auto px-4 lg:px-8 lg:px-24 bg-white relative pt-[1px] md:pt-[80px]">
        <div className="grid grid-cols-2 lg:gap-30">
          <div className="max-lg:col-span-2 order-2 lg:order-1">
            <h2 className="hidden lg:block project-overview-title text-[56px] !text-[#22252E] mb-8">
              <span className="orange-color">Contact </span>Us
            </h2>
            <p className="hidden lg:block font-[400] text-[14px] leading-5 !text-[#5C5F68]">
              Whether you're interested in creating a custom space, or want to
              learn more about what New Kolkata can do for you, we would love to
              chat.
            </p>

            <h2 className="max-lg:text-center text-[18px] leading-6 font-stoshi font-[700] lg:leading-7 lg:text-[24px] !text-[#22252E] mt-12 mb-4">
              Alcove Realty
            </h2>
            <p className="max-lg:text-center font-[400]  text-[14px] leading-5 !text-[#5C5F68]">
              Ganapati 68/2, Harish Mukherjee Road, Bhowanipore, Kolkata, West
              Bengal 700025
            </p>
            <Link
              href={"tel:+9182874 00700"}
              className="flex items-center gap-4 px-4 py-3 border border-[#EDEDED] mt-8 cursor-pointer"
            >
              <div className="relative h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] overflow-hidden">
                <Image
                  src="/assets/icons/call.svg"
                  fill
                  alt="call"
                  className="object-center"
                />
              </div>
              <span className="font-[700] text-[16px] leading-5 text-[#22252E]">
                Call Us
              </span>
              <span className="text-[17px] leading-5 ml-auto font-[400] lg:text-[20px] lg:leading-7 text-[#144D78]">
                +91 82874 00700
              </span>
            </Link>
            <Link
              href={"mailto:marketing@alcoverealty.in"}
              className="flex items-center gap-4 px-4 py-3 border border-[#EDEDED] mt-4 cursor-pointer"
            >
              <div className="relative h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] overflow-hidden">
                <Image
                  src="/assets/icons/email.svg"
                  fill
                  alt="e-mail"
                  className="object-center"
                />
              </div>
              <span className="font-[700] text-[16px] leading-5 text-[#22252E]">
                Mail Us
              </span>
              <span className="text-[17px] leading-5 ml-auto font-[400] lg:text-[20px] lg:leading-7 text-[#144D78]">
              marketing@alcoverealty.in
              </span>
            </Link>
          </div>
          <div className="max-lg:col-span-2 order-1 lg:order-2">
            <p className="hidden lg:block text-[#222222] font-[700] text-[20px] leading-7 mb-7">
              Write to us
            </p>
            <h2 className="block lg:hidden project-overview-title font-[400] text-[36px] !text-[#22252E] mb-8 text-center">
              <span className="orange-color">Contact </span>Us
            </h2>


            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <div className="grid grid-cols-2 gap-4 md:gap-7">
                <div className="max-lg:col-span-2">
                  <label htmlFor="name" className="form-label px-4 py-2">
                    <input
                      className={`form-input mt-2 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      id="name"
                      placeholder="Name"
                      {...register("name")}
                    />
                    <span className="truncate">Your Name</span>
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="max-lg:col-span-2">
                  <label htmlFor="company" className="form-label px-4 py-2">
                    <input
                      className="form-input mt-2"
                      type="text"
                      id="company"
                      placeholder="Company Name"
                      {...register("company")}
                    />
                    <span className="truncate">Company Name</span>
                  </label>
                </div>
                <div className="max-lg:col-span-2">
                  <label htmlFor="email" className="form-label px-4 py-2">
                    <input
                      className={`form-input mt-2 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                      {...register("email")}
                    />
                    <span className="truncate">Your Email Address</span>
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="max-lg:col-span-2">
                  <label htmlFor="phoneNumber" className="form-label px-4 py-2">
                    <input
                      className={`form-input mt-2 ${
                        errors.phoneNumber ? "border-red-500" : ""
                      }`}
                      type="tel"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      {...register("phoneNumber")}
                    />
                    <span className="truncate">Phone Number</span>
                  </label>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="requirements"
                    className="form-label !h-auto px-4 py-2"
                  >
                    <textarea
                      rows={3}
                      className={`form-input mt-2 ${
                        errors.requirements ? "border-red-500" : ""
                      }`}
                      id="requirements"
                      placeholder="Your Requirements"
                      {...register("requirements")}
                    />
                    <span className="truncate">Your Requirements</span>
                  </label>
                  {errors.requirements && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.requirements.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`md:min-h-[4rem] min-h-[3.5rem] h-full max-lg:mx-auto w-[70%] mt-5 md:mt-10 relative bg-[#144D78] button-primary transition-all duration-300 rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <div className="px-6 py-3 mr-20">
                  <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                </div>
                <span className="px-6 flex items-center justify-center md:min-h-[4rem] min-h-[3.5rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
                  ↗
                </span>
              </button>
            </form>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-[36px] md:pt-[128px] gap-[36px] md:gap-0">
            <div className="flex flex-row gap-[20px]">
              <a className="cursor-pointer" href="/testimonials">
                <div className="text-[14px] leading-[20px] font-satoshi font-[400] text-[#5C5F68]">
                  Testimonials
                </div>
              </a>
              <a className="cursor-pointer" href="/faqs">
                <div className="text-[14px] leading-[20px] font-satoshi font-[400] text-[#5C5F68]">
                  FAQs
                </div>
              </a>
              <a className="cursor-pointer" href="">
                <div className="text-[14px] leading-[20px] font-satoshi font-[400] text-[#5C5F68]">
                  Privacy Policy
                </div>
              </a>
              <a className="cursor-pointer" href="">
                <div className="text-[14px] leading-[20px] font-satoshi font-[400] text-[#5C5F68]">
                  T&C
                </div>
              </a>
            </div>
            <div className="text-[14px] leading-[20px] font-satoshi font-[400] text-[#5C5F68] hidden md:inline">
              All rights reserved © Alcove Realty
            </div>
            <div className="flex flex-row gap-[48px] md:gap-[24px]">
              <a
                className="cursor-pointer"
                href="https://www.youtube.com/@NewKolkatasangam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/youtube.svg"
                  alt="you-tube icon"
                  width={24}
                  height={24}
                  className=""
                />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.facebook.com/NewKolkata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/fb.svg"
                  alt="facebook icon"
                  width={24}
                  height={24}
                  className=""
                />
              </a>
              <a
                className="cursor-pointer"
                href="https://x.com/new_kolkata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/twitter.svg"
                  alt="twitter icon"
                  width={24}
                  height={24}
                  className=""
                />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.instagram.com/new_kolkata/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/insta.svg"
                  alt="insta icon"
                  width={24}
                  height={24}
                  className=""
                />
              </a>
            </div>
            <div className="text-[14px] leading-[20px] font-satoshi font-[400] text-[#5C5F68] pb-[80px] inline md:hidden">
              All rights reserved © Alcove Realty
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/contact-waves.svg"
        alt="waves"
        width={100}
        height={100}
        className="w-full"
      />
    </div>
  );
}
