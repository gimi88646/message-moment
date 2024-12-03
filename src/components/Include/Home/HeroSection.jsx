import React, { useEffect } from "react";

// Components
import LinkGenerationSection from "./LinkGenerationSection";

const HeroSection = ({ setIsLinkTypeSecure, scroll, setScroll }) => {
  // Scroll Start Button
  useEffect(() => {
    const handleStart = () => {
      const targetElement = document.getElementById("linkGenerate");

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        const scrollFactor = 0.001;
        const customScrollPosition =
          offsetTop + (window.innerHeight / 1) * scrollFactor;

        window.scrollTo({
          top: customScrollPosition,
          behavior: "smooth",
        });
        setScroll(false);
      }
    };

    if (scroll) {
      handleStart();
    }
  }, [scroll]);

  return (
    <>
      <div className="bg-gradient-to-b from-[#EDEDFF] via-90% to-white to-90%  border-t border-black border-opacity-5 maxTab:pt-[3.125rem] minTab:pt-[30px] pt-[25px] maxTab:px-[3.063rem] px-[15px] maxTab:mb-[3.125rem] relative">
        <div className="relative maxTab:max-w-[1320px] w-full mx-auto overflow-hidden bg-center bg-cover maxTab:pt-[16rem] minTab:pt-[20rem] pt-[3.5rem] maxTab:pb-[11.75rem] minTab:pb-[5.625rem] pb-[5.625rem] maxTab:rounded-[1.25rem] rounded-[1.5rem_1.5rem_0rem_0rem] max-minTab:bg-[url('/Images/hero-mobile.jpeg')] bg-[url(/Images/hero.jpeg)]">
          <div className="absolute inset-0 bg-black opacity-10" />
          <div className="flex flex-col items-center justify-center text-center relative max-sm:translate-y-[-60px] max-minTab:translate-y-[0px] max-minTab:gap-4">
            <h1 className="maxTab:text-[80px] minTab:text-[70px] text-[50px] text-white tracking-[2px] leading-none font-bold maxTab:mb-5 minTab:mb-[10px] px-6 maxTab:max-w-[695px] minTab:max-w-[647px] mx-auto">
              The real meaning to personal
            </h1>
            <p className="font-medium px-2 font-jetBrain max-w-[562px] maxTab:mx-auto max-minTab:mx-[20px] maxTab:text-[20px] minTab:text-[17px] maxTab:leading-[26px] mb-14 text-white">
              A reliable and trustworthy platform for discreet conversations
              between known parties
            </p>
          </div>
        </div>

        <LinkGenerationSection setIsLinkTypeSecure={setIsLinkTypeSecure} />
      </div>
    </>
  );
};

export default HeroSection;
