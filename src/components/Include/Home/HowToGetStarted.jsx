"use client";

import React, { useState } from "react";
import Image from "next/image";

// Images
import HowToGetStartedImage02 from "../../../../public/Images/img_006.png";

// Component
import {
  DesktopHowToGetStartedSteps,
  MobileHowToGetStartedSlider,
  TabletHowToGetStartedSlider,
} from "@/components/Common/Sliders";

const HowToGetStarted = () => {
  const [hoveredStep, setHoveredStep] = useState(1);
  const [tabletSelectedStepId, setTabletSelectedStepId] = useState(1);
  const [mobileSelectedStepId, setMobileSelectedStepId] = useState(1);

  return (
    <>
      {/* Desktop View */}
      <div className="bg-[--Blue] px-[15px] pt-[70px] h-[72rem] max-maxTab:hidden">
        <div className="w-full">
          <h2 className="font-bold text-center text-[60px] px-[8px] tracking-[2px] leading-[70px] max-w-[58.375rem] mx-auto text-white">
            Express yourself freely, anytime, with those you know
          </h2>
          <div className="relative mx-auto pt-[44px] mb-14 flex items-center justify-center">
            <div className="w-[30rem] h-[25rem] rounded-[25rem] bg-[#000] opacity-20 blur-[50px] absolute" />
            <Image
              src={HowToGetStartedImage02}
              alt="HowToGetStartedImage"
              className="mx-auto z-10 max-w-[48rem]"
              width="auto"
              height={590}
            />
          </div>

          {/* Guide Steps */}
          <DesktopHowToGetStartedSteps
            hoveredStep={hoveredStep}
            setHoveredStep={setHoveredStep}
          />
          <p className="max-w-[930px] mx-auto text-white font-jetBrain font-medium text-lg pt-[60px] pb-[60px] text-center">
            {hoveredStep === 1
              ? `Start a chat session by clicking the "Open Chat" button on our site
          and receive a link. Optionally, make the chat secure by generating a
          security code.`
              : hoveredStep === 2
              ? `Share the link with others by simply clicking the Copy URL button or scanning the QR code and sending via your favorite method.`
              : hoveredStep === 3
              ? `When the link is accessed, the chat facility will appear and users can enter their handle to start chatting. The chat messages will start to automatically disappear as specified by the expiry time limit.`
              : hoveredStep === 4
              ? `The chat session is permanently terminated when every user has left by clicking the Disconnect button or simply closing their browser.`
              : `Start a chat session by clicking the "Open Chat" button on our site
            and receive a link. Optionally, make the chat secure by generating a
            security code.`}
          </p>
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-[--Blue] pt-[50px] h-[80rem] maxTab:hidden max-minTab:hidden">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-bold mb-5 text-[46px] text-center tracking-[-.5px] leading-[54px] px-[23px] max-w-[650px] mx-auto text-white">
            Express yourself freely, anytime, with those you know
          </h2>
          <div className="relative px-[15px] pt-[14px] mb-14 flex flex-col justify-center items-center w-full">
            <div className="w-[30rem] h-[30rem] rounded-[25rem] bg-[#000] opacity-20 blur-[50px] absolute" />
            <Image
              src={HowToGetStartedImage02}
              alt="How To Get Started Image"
              className="z-10 max-w-[840px] w-full"
              width="auto"
              height="auto"
            />
          </div>

          {/* Tablet Guide Steps */}
          <TabletHowToGetStartedSlider
            selectedStepId={tabletSelectedStepId}
            setSelectedStepId={setTabletSelectedStepId}
          />

          <p className="max-w-[628px] mx-auto text-white font-jetBrain font-medium text-[18px] pt-[3rem] text-center px-4">
            {tabletSelectedStepId === 1
              ? `Start a chat session by clicking the "Open Chat" button on our site
          and receive a link. Optionally, make the chat secure by generating a
          security code.`
              : tabletSelectedStepId === 2
              ? `Share the link with others by simply clicking the Copy URL button or scanning the QR code and sending via your favorite method.`
              : tabletSelectedStepId === 3
              ? `When the link is accessed, the chat facility will appear and users can enter their handle to start chatting. The chat messages will start to automatically disappear as specified by the expiry time limit.`
              : `The chat session is permanently terminated when every user has left by clicking the Disconnect button or simply closing their browser.`}
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-[--Blue] h-[53.5rem] max-mvsm:h-[52.5rem] lmvsm:h-[55.5rem] pt-[40px] pb-[60px] hidden max-minTab:block">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-bold mb-5 text-[34px] text-center tracking-[-.5px] leading-[34px] px-[23px] max-w-[368px] mx-auto !text-[#fff] z-10">
            Express yourself freely, anytime, with those you know
          </h2>
          <div className="relative mx-auto px-[15px] my-10 flex items-center justify-center">
            <div className="w-full h-[125%] rounded-full opacity-10 blur-[30px] bg-[#000] absolute" />
            <Image
              src={HowToGetStartedImage02}
              alt="How To Get Started Image"
              className="z-10"
              width="auto"
              height="auto"
            />
          </div>

          {/* Mobile Guide Steps */}
          <MobileHowToGetStartedSlider
            selectedStepId={mobileSelectedStepId}
            setSelectedStepId={setMobileSelectedStepId}
          />
          <p className="max-w-[328px] mx-auto text-white font-jetBrain font-medium text-[13px] pt-10 text-center">
            {mobileSelectedStepId === 1
              ? `Start a chat session by clicking the "Open Chat" button on our site
          and receive a link. Optionally, make the chat secure by generating a
          security code.`
              : mobileSelectedStepId === 2
              ? `Share the link with others by simply clicking the Copy URL button or scanning the QR code and sending via your favorite method.`
              : mobileSelectedStepId === 3
              ? `When the link is accessed, the chat facility will appear and users can enter their handle to start chatting. The chat messages will start to automatically disappear as specified by the expiry time limit.`
              : `The chat session is permanently terminated when every user has left by clicking the Disconnect button or simply closing their browser.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default HowToGetStarted;
