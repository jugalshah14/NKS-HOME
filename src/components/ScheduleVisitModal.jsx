"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be no more than 15 digits" }),
  bhk: z.string().min(1, { message: "Please select a choice" }),
  budget: z.string().min(1, { message: "Please select a budget" }),
  message: z.string().optional(),
});

const ScheduleVisitModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null); 
  const submitForm = async (payload) => {
    console.log('Sending payload to API:', payload);

    // Future API call example:
    // try {
    //   const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   const result = await response.json();
    //   console.log('API Response:', result);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, onClose]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
    console.log("Form Payload:", data);
    setIsSubmitted(true);
    reset();
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-999999 flex items-center justify-center bg-black/10"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-8 w-full max-w-2xl mx-4 relative shadow-xl"
      >
        {!isSubmitted ? (
          <>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-white bg-[#144D78] p-2 rounded-tr-lg hover:bg-[#002F52]"
            >
              <Image
                src="/assets/x.svg"
                alt="Close"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-[#22252E]">Write to us</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="Phone*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="relative">
                  <select
                    {...register("bhk")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10 outline-none"
                  >
                    <option value="">My Choice*</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="4BHK">4 BHK</option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z" />
                    </svg>
                  </div>
                  </div>
                  {errors.bhk && (
                    <p className="text-red-500 text-sm mt-1">{errors.bhk.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="relative">
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10 outline-none"
                  >
                    <option value="">My Budget*</option>
                    <option value="40-50">40-50 Lac</option>
                    <option value="50-60">50-60 Lac</option>
                    <option value="60-70">60-70 Lac</option>
                    <option value="70-100">70-1 Cr</option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z" />
                    </svg>
                  </div>
                  </div>
                  {errors.budget && (
                    <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-[#144D78] text-white py-3 md:py-4 px-6 md:px-9 rounded-md hover:bg-[#002F52] transition-colors duration-300 font-medium flex items-center justify-center"
              >
                <span className="text-left flex-grow text-[18px] md:text-[20px] font-[600]">
                  Book A Site Visit
                </span>
                <Image
                  src="/assets/form-arrow.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
            <Image
              src="/assets/tick.png"
              alt="Success"
              width={80}
              height={80}
              className="mb-4"
            />
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#22252E]">
              Thank you!
            </h2>
            <p className="text-center text-gray-700 text-lg md:text-xl max-w-[400px]">
              We have received your request, our team will contact you within
              1-2 business days.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleVisitModal;
