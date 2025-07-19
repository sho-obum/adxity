
'use client';
import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";

export const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[120px] relative overflow-hidden">
      <div className="absolute h-[600px] w-[180vw] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <a
              href="#"
              className="border py-1 px-2 rounded-lg border-white/30 inline-flex items-center gap-3"
            >
              <span className="bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] text-transparent bg-clip-text">
                Dummy text will
              </span>
              <span className="inline-flex items-center gap-2 ">
                <span className="text-white/70">come here </span>
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex relative">
              <div
                className="flex flex-col text-center
              "
              >
                
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  Driven by Mobile.
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Delivered Anywhere.
                </h1>
              </div>
              <Image
                src={cursorImage}
                alt=""
                height="200"
                width="200"
                className="absolute right-[290px] md:right-[526px] -bottom-[50px] scale-[.4]"
              />
              <Image
                src={messageImage}
                alt=""
                className="absolute left-[476px] bottom-[0px] scale-[.5]"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium mb-2">
              Get for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
