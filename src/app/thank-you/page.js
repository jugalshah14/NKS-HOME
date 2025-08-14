/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
     <main className="min-h-screen bg-white flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            {/* Checkmark Icon */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-[#144D78] rounded-full flex items-center justify-center mx-auto">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-semibold text-[#22252E] mb-3">
              You're all set!
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg font-medium text-[#144D78] mb-4">
              Greetings from Alcove Realty
            </h2>

            {/* Message */}
            <p className="text-base text-[#22252E] leading-relaxed mb-8">
              Thank you for expressing interest on our website. Our expert will get in touch with you shortly.
            </p>

            {/* Go Back to Home Button */}
            <Link 
              href="/"
              className="md:min-h-[4rem] min-h-[3.5rem] h-full bg-[#144D78] hover:bg-blue-800 transition rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden button-primary"
            >
              <div className="px-6 py-3">
                <span>GO BACK TO HOME</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
