import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import React from "react";
import { Toaster } from "react-hot-toast";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const Satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-BoldItalic.woff",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Italic.woff",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-MediumItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "New Kolkata",
  description:
    "Alcove Realty presents New Kolkata Sangam a riverside project where the beauty of nature meets the artistry of modern architecture. Your dream home awaits by the riverside. Explore now!",
  keywords:
    "Apartments/Flat In Serampore New Kolkata, Serampore Flats For Sale, Serampore Flat Price | Serampore Flat - New Kolkata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.className} ${Satoshi.className} antialiased`}
      >
        <React.Suspense fallback={<div>Loading......</div>}>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="top-center"
            containerStyle={{
              top: '110px',
            }}
            toastOptions={{
              duration: 5000,
              style: {
                background: 'white !important',
                backgroundColor: 'white !important',
                color: '#22252E',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                padding: '24px',
                fontSize: '14px',
                minWidth: '450px',
                maxWidth: '550px',
                border: '1px solid rgba(0, 0, 0, 0.05)',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
                style: {
                  background: 'white !important',
                  backgroundColor: 'white !important',
                  color: '#22252E',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  padding: '24px',
                  fontSize: '14px',
                  minWidth: '450px',
                  maxWidth: '550px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                },
              },
            }}
          />
        </React.Suspense>
      </body>
    </html>
  );
}
