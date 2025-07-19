"use client"
import React from "react";
import MagicBento from '../blocks/Components/MagicBento/MagicBento'

const VideoHero = () => {
  return (
    <div className="relative bg-black text-white py-16 px-4 overflow-hidden min-h-[500px]">
      {/* Background Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className=" relative top-40 inset-0 w-[1200px] md:w-[800px] lg:w-[1200px] h-80 object-cover md:top-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.start.io/wp-content/uploads/2023/05/STR_2023_Homepage-1300x300_2-1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* First Stat */}
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#CD9FFF] mb-2">
              Thousands
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              of Publishers
              <br />
              Trust Start.io
            </div>
          </div>

          {/* Second Stat */}
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#CD9FFF] mb-2">
              30B
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Software Downloads
              <br />
              (SDK)
            </div>
          </div>

          {/* Third Stat */}
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#CD9FFF] mb-2">
              2.5B
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Monthly Active Users
              <br />
              (MAUs)
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default VideoHero;
