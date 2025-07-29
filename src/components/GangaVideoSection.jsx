"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatedSection, SlideUp } from "./animations";
import Image from "next/image";
import ScheduleVisitModal from "./ScheduleVisitModal";

const GangaVideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const playerRefs = useRef([]);
  const youtubeVideoId = "Rw1QbHsvS0I";
  const [playerError, setPlayerError] = useState(false);
  const youtubeContainerRefs = useRef([]);
  const [isModalOpens, setIsModalOpens] = useState(false);
  const handleScheduleVisit = (e) => {
    e.preventDefault();
    setIsModalOpens(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const initYouTubePlayers = () => {
    try {
      youtubeContainerRefs.current.forEach((container, index) => {
        if (!container) return;

        playerRefs.current[index] = new window.YT.Player(container, {
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            loop: 1,
            modestbranding: 1,
            playlist: youtubeVideoId,
            playsinline: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            fs: 0,
            cc_load_policy: 0,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo().catch((error) => {
                console.error(`Playback failed for player ${index}:`, error);
                setPlayerError(true);
              });
            },
            onError: () => setPlayerError(true),
          },
        });
      });
    } catch (error) {
      console.error("Player initialization failed:", error);
      setPlayerError(true);
    }
  };

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = () => setPlayerError(true);
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = initYouTubePlayers;

    return () => {
      playerRefs.current.forEach((player) => {
        if (player && player.destroy) {
          player.destroy();
        }
      });
    };
  }, [youtubeVideoId]);

  // Add ref to our collection
  const addContainerRef = (el) => {
    if (el && !youtubeContainerRefs.current.includes(el)) {
      youtubeContainerRefs.current.push(el);
    }
  };

  return (
    <>
      <div className="hidden md:block ">
        <AnimatedSection className="flex justify-center items-end p-10 relative h-[90vh] honouring_component">
          <div className="absolute inset-0 overflow-hidden">
            {playerError ? (
              // Fallback content if YouTube player fails
              <div className="w-full h-full bg-black flex items-center justify-center">
                <p className="text-white">Video unavailable</p>
              </div>
            ) : (
              <>
                <div
                  ref={addContainerRef}
                  className="w-screen h-full scale-x-[135%] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
              </>
            )}
          </div>
          <div className="honouring-lightbox-overlay h-[100%] w-[100%] absolute top-0 left-0" />
          <div className="relative z-1 flex justify-center items-center flex-col">
            <h2 className="w-[100%] !text-center project-overview-title max-md:!text-[36px] max-md:!leading-11 font-cormorant text-[56px] !text-white">
              <span className="orange-color">Honouring Ganga,</span>
              <br />
              The mother of mankind
            </h2>
          </div>
          <div
            className="absolute backdrop-blur-[20px] bottom-[35px] z-10 right-8 bg-[#FFFFFF33] rounded-full w-[79px] h-[79px] flex flex-col items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
            aria-label="Play Video"
            onClick={toggleModal}
          >
            <Image
              src="/assets/icons/play.svg"
              height={13.2}
              width={11.43}
              className=""
              alt="play"
            />
          </div>
        </AnimatedSection>
      </div>
      <div className="relative flex flex-col md:hidden">
        <div className="relative">
          <AnimatedSection className="flex w-full h-[280px] justify-center relative honouring_component">
            {playerError ? (
              // Fallback content if YouTube player fails
              <div className="w-full h-full bg-black flex items-center justify-center">
                <p className="text-white">Video unavailable</p>
              </div>
            ) : (
              <>
                <div
                  ref={addContainerRef}
                  className="w-screen h-full scale-y-[135%] yt-background"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
              </>
            )}
            <div className="honouring-lightbox-overlay-m h-[100%] w-[100%] absolute top-0 left-0" />
          </AnimatedSection>
          <div
            className="absolute backdrop-blur-[20px] -bottom-6 z-100 right-8 bg-[#FFFFFF33] rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
            aria-label="Play Video"
            onClick={toggleModal}
          >
            <Image
              src="/assets/icons/play.svg"
              height={8}
              width={8}
              className=""
              alt="play"
            />
          </div>
        </div>

        <div className="bg-[#020C22] py-8">
          <div className="h-[100%] flex flex-col justify-center items-center inset-0 w-[100%]">
            <SlideUp
              delay={0.4}
              className="flex justify-center items-center w-full"
            >
              <h2 className="w-[90%] text-center project-overview-title !text-white !text-[36px] !leading-11 font-[400] !font-cormorant">
                <span className="orange-color">Honouring Ganga</span> The mother
                of mankind
              </h2>
            </SlideUp>
          </div>
          <div className="mt-14 flex justify-center items-center">
            <hr className="border-[#FFFFFF] w-[100%] opacity-20 absolute" />
          </div>
          <SlideUp delay={0.8}>
            <p className="did-you-know-m w-[85%] mx-auto text-center font-[400] text-[24px] leading-7 mb-4 pt-4">
            Feel the divine aura of Banaras now in Serampore! Own a Home Where You’re Blessed by Ganga Aarti, Every Single Day We’re proud to be India’s only riverside township where the sacred Ganga Aarti happens daily
            </p>
          </SlideUp>
        </div>
        <SlideUp delay={1} className="flex justify-center items-center w-full">
          <button onClick={handleScheduleVisit} className="md:min-h-[4.75rem] min-h-[3.5rem] h-full -top-9 mx-auto relative bg-[#144D78] hover:bg-blue-800 transition text-white font-medium inline-flex items-center gap-2 overflow-hidden rounded-md">
            <div className="px-6 py-3 mr-20">Schedule a Visit</div>
            <span className="px-6 flex items-center justify-center md:min-h-[4.75rem] min-h-[3.5rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
              ↗
            </span>
          </button>
        </SlideUp>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-9991 flex items-center justify-center p-4 bg-black/50 bg-opacity-75">
          <div className="relative w-full max-w-4xl">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video in modal */}
            <div className="aspect-w-16 aspect-h-9">
              {playerError ? (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <p className="text-white">Video playback failed</p>
                </div>
              ) : (
                <iframe
                  className="w-full h-[50dvh] md:h-[80dvh] rounded-xl"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&controls=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
      <ScheduleVisitModal
        isOpen={isModalOpens}
        onClose={() => setIsModalOpens(false)} />
    </>
  );
};

export default GangaVideoSection;
