import React from "react";

// Components
import MessageMommentsPlatforms from "@/components/Common/MessageMommentsPlatforms";
import {
  DesktopDiscoverSlider,
  MobileDiscoverSlider,
  TabletDiscoverSlider,
} from "@/components/Common/Sliders";

const DiscoverSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="bg-dark px-[15px] max-maxTab:hidden">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-bold font-dm text-center text-[60px] tracking-[2px] max-w-[934px] mx-auto text-white pt-[70px] pb-10 leading-[70px]">
            Discover more from MessageMoment
          </h2>

          {/* Discover Slider */}
          <DesktopDiscoverSlider />

          <p className="text-white text-[26px] font-semibold text-center mt-[60px] mb-8 leading-[33.85px]">
            Use MessageMoment on any device via Browser
            <sup className="text-[60%]">1</sup>
          </p>

          {/* Platforms */}
          <MessageMommentsPlatforms />

          <div className="max-w-[1096px] mx-auto pt-4 py-8 mt-4 border-t border-t-white border-opacity-20 text-center">
            <p className="text-white text-[13px] font-medium">
              <sup className="text-[60%]">1</sup>Disclaimer: Compatibility may
              vary across different devices and operating systems.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-dark maxTab:hidden max-minTab:hidden">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-bold font-dm px-[15px] text-[50px] text-center tracking-[-.5px] max-w-[500px] mx-auto text-white pt-14 pb-12 leading-tight">
            Discover more from MessageMoment
          </h2>

          {/* Discover Slider */}
          <TabletDiscoverSlider />

          <p className="text-white text-[20px] px-[75px] font-semibold text-center mt-10 mb-12">
            Use MessageMoment on any device via Browser
            <sup className="text-[60%]">1</sup>
          </p>

          {/* Platforms */}
          <MessageMommentsPlatforms />

          <div className="pt-5 px-[15px] border-t border-t-white border-opacity-20 pb-9 flex items-center justify-center">
            <p className="text-[16px] text-white font-medium w-[65%] text-center">
              <sup className="text-[60%]">1</sup>Disclaimer: Compatibility may
              vary across different devices and operating systems.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-dark hidden max-minTab:block">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-bold font-dm px-[15px] text-[34px] text-center tracking-[-.5px] sm:max-w-[450px] mx-auto text-white pt-14 pb-8 leading-tight">
            Discover more from MessageMoment
          </h2>

          {/* Discover Slider */}
          <MobileDiscoverSlider />

          <p className="text-white text-[18px] px-[75px] font-semibold text-center mt-10 mb-14">
            Use MessageMoment on any device via Browser
            <sup className="text-[60%]">1</sup>
          </p>

          {/* Platforms */}
          <MessageMommentsPlatforms />

          <div className="pt-5 px-[15px] border-t border-t-white border-opacity-20 pb-9 flex items-center justify-center">
            <p className="text-[11px] text-white font-medium w-[65%] text-center">
              <sup className="text-[60%]">1</sup>Disclaimer: Compatibility may
              vary across different devices and operating systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverSection;
