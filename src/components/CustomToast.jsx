"use client";

import React from "react";
import toast from "react-hot-toast";

const CustomToast = () => {
  return (
    <div className="flex items-start space-x-3 relative bg-white p-4 rounded-lg shadow-lg border border-gray-100">
      {/* Success Icon */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-green-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          You're all set!
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Thank you for expressing interest. Our expert will get in touch with you shortly.
        </p>
      </div>
      
      {/* Close Button */}
      <button
        onClick={() => toast.dismiss()}
        className="flex-shrink-0 cursor-pointer w-5 h-5 text-gray-400 hover:text-gray-600 absolute top-3 right-0"
      >
        <svg 
          className="w-full h-full" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
      
      {/* Progress Bar */}
      <div className="absolute -bottom-0 left-0 right-0 h-0.5 bg-gray-200 rounded-b-lg overflow-hidden">
        <div 
          className="h-full bg-green-500 animate-progress"
          style={{
            animation: 'progress 5s linear forwards'
          }}
        ></div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

// Helper function to show success toast
export const showSuccessToast = () => {
  toast.custom(<CustomToast />, { duration: 5000 });
};

export default CustomToast;
