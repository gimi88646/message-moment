"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
import { HowToGetStartedStepsData } from "@/data/HowToGetStarted";
import { desktopDiscoverSteps, mobileDiscoverSteps } from "@/data/Discover";

// Images and Icons
import LeftGrayIcon from "../../../public/Icons/leftIcon.svg";
import RightGrayIcon from "../../../public/Icons/rightIcon.svg";
import LeftWhiteIcon from "../../../public/Icons/leftWhiteIcon02.svg";
import RightWhiteIcon from "../../../public/Icons/rightWhiteIcon02.svg";
import ExtraIcon from "../../../public/Icons/ExtraIcon03.svg";
import AboutImg02 from "../../../public/Images/AboutImg08.png";
import AboutImg03 from "../../../public/Images/AboutImg09.png";
import AboutImg04 from "../../../public/Images/AboutImg10.png";

const DesktopHowToGetStartedSteps = ({ hoveredStep, setHoveredStep }) => {
  const handleMouseEnter = (id) => {
    setHoveredStep(id);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <>
      <div className="w-full items-center justify-center gap-4 flex px-6">
        {/* Steps */}
        {HowToGetStartedStepsData.map((step) => (
          <div
            key={step.id}
            className={`w-[16.25rem] h-[15.125rem] max-lg:h-[14.125rem] rounded-[1.25rem] cursor-pointer transition-all ease-in-out duration-500 ${
              hoveredStep === step.id
                ? "bg-[#fff] w-[29.75rem]"
                : "bg-[#fff] bg-opacity-20"
            }`}
            onMouseEnter={() => handleMouseEnter(step.id)}
            onMouseLeave={handleMouseLeave}
          >
            <h1
              className={`text-[3.75rem] max-lg:text-[2.75rem] font-[700] ml-8 h-[70px] leading-[70px] mt-2 ${
                hoveredStep === step.id
                  ? "text-[--Blue]"
                  : "text-[#fff] text-opacity-20"
              }`}
            >
              {step.id}
            </h1>
            <div
              className={`flex flex-col justify-center transition-all ease-in-out duration-500 items-center ${
                hoveredStep === step.id ? "-translate-x-[7rem]" : ""
              }`}
            >
              <Image
                src={step.img}
                alt="guide"
                className={`transition-all ease-in-out duration-500 ${
                  hoveredStep === step.id ? "ml-[4rem]" : ""
                } w-[70px] `}
              />
              <div
                className={`flex justify-start flex-col mt-4 transition-all ease-in-out duration-500  ${
                  hoveredStep === step.id && step.id === 1
                    ? "translate-x-0"
                    : hoveredStep === step.id && step.id === 2
                    ? "-translate-x-[2.5rem]"
                    : hoveredStep === step.id && step.id === 3
                    ? "-translate-x-[1.5rem]"
                    : hoveredStep === step.id && step.id === 4
                    ? "-translate-x-[0.9rem]"
                    : "items-center"
                }`}
              >
                <p
                  className={`text-[0.8125rem] font-jetBrain font-[500] leading-[17.16px] mb-[2px] ${
                    hoveredStep === step.id ? "text-[#555]" : "text-[white]"
                  }`}
                >
                  {step.step}
                </p>
                <p
                  className={`text-[1.625rem] font-[700] translate-y-[-3px] leading-[33.85px] ${
                    hoveredStep === step.id ? "text-[--Blue]" : "text-white"
                  }`}
                >
                  {step.stepName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const MobileHowToGetStartedSlider = ({ setSelectedStepId, selectedStepId }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef();

  const handleScroll = (direction) => {
    const scrollAmount = 155;

    if (direction === "left") {
      carouselRef.current.scrollLeft -= scrollAmount;
      setScrollLeft((prevScrollLeft) =>
        Math.max(0, prevScrollLeft - scrollAmount)
      );
      setSelectedStepId((prevId) => Math.max(1, prevId - 1));
    } else {
      carouselRef.current.scrollLeft += scrollAmount;
      setScrollLeft((prevScrollLeft) => prevScrollLeft + scrollAmount);
      setSelectedStepId((prevId) =>
        Math.min(HowToGetStartedStepsData.length, prevId + 1)
      );
    }

    updateScrollbar();
  };

  const updateScrollbar = () => {
    const container = carouselRef.current;
    const scrollbar = document.querySelector(".scrollbar");

    if (container && scrollbar) {
      const scrollPercentage =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        450;

      const maxScrollbarWidth = 7 * 20;
      const scrollbarWidth =
        (container.clientWidth / container.scrollWidth) * maxScrollbarWidth;

      scrollbar.style.width = `${scrollbarWidth}px`;
      scrollbar.style.transform = `translateX(${scrollPercentage}%)`;
    }
  };

  const handleStepClick = (stepId) => {
    setSelectedStepId(stepId);
    scrollToStepId(stepId);
  };

  const scrollToStepId = (stepId) => {
    const container = carouselRef.current;
    const totalSteps = HowToGetStartedStepsData.length;
    const stepIndex = HowToGetStartedStepsData.findIndex(
      (step) => step.id === stepId
    );

    const scrollPercentage = (stepIndex / (totalSteps - 1)) * 100;

    container.scrollTo({
      left:
        (scrollPercentage / 100) *
        (container.scrollWidth - container.clientWidth),
      behavior: "smooth",
    });

    updateScrollbar();
  };

  return (
    <>
      <div className="flex flex-col gap-8 relative">
        {/* Containers */}
        <div
          id="carousel"
          ref={carouselRef}
          className="sliders gap-[10px] overflow-x-scroll scroll-smooth px-[55px] flex"
          onScroll={updateScrollbar}
        >
          {HowToGetStartedStepsData.map((step) => (
            <div
              key={step.id}
              className={`bg-[#fff] rounded-[20px] min-w-[180px] relative py-2 cursor-pointer ${
                selectedStepId === step.id ? "" : "bg-opacity-20"
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              <h1
                className={`text-[2.125rem] font-[700] ml-5 ${
                  selectedStepId === step.id
                    ? "text-[--Blue]"
                    : "text-[#fff] text-opacity-20"
                }`}
              >
                {step.id}
              </h1>

              <div className={"flex flex-col justify-center items-center"}>
                <Image
                  src={step.img}
                  alt="guide"
                  className="w-[3.75rem] h-[3.75rem]"
                />
                <div
                  className={`flex justify-start flex-col my-4 ${
                    selectedStepId === step.id
                      ? `items-left ${
                          step.id === 1
                            ? "-translate-x-2"
                            : step.id === 2
                            ? "-translate-x-8"
                            : step.id === 3
                            ? "-translate-x-6"
                            : "-translate-x-4"
                        }`
                      : "items-center"
                  }`}
                >
                  <p
                    className={`text-[0.8125rem] font-jetBrain font-[500] ${
                      selectedStepId === step.id
                        ? "text-[#555]"
                        : "text-[white]"
                    }`}
                  >
                    {step.step}
                  </p>
                  <p
                    className={`text-[1.0625rem] font-[700] ${
                      selectedStepId === step.id
                        ? "text-[--Blue]"
                        : "text-white"
                    }`}
                  >
                    {step.stepName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedStepId == 1 ? (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`left-2 absolute translate-y-[80px] text-white`}
            onClick={() => handleScroll("left")}
          >
            <path
              opacity="0.2"
              d="M13.4586 21.588C13.8054 21.9383 14 22.4113 14 22.9043C14 23.3973 13.8054 23.8703 13.4586 24.2206C13.2883 24.3935 13.0852 24.5309 12.8613 24.6246C12.6374 24.7184 12.3971 24.7667 12.1544 24.7667C11.9117 24.7667 11.6714 24.7184 11.4475 24.6246C11.2236 24.5309 11.0205 24.3935 10.8502 24.2206L0.54056 13.701C0.194194 13.3499 -5.7283e-07 12.8765 -5.51272e-07 12.3833C-5.29714e-07 11.8901 0.194194 11.4168 0.54056 11.0657L10.8502 0.546069C11.0205 0.37312 11.2236 0.235775 11.4475 0.142027C11.6714 0.0482784 11.9117 -9.1284e-08 12.1544 -8.06737e-08C12.3971 -7.00634e-08 12.6374 0.0482785 12.8613 0.142027C13.0852 0.235775 13.2883 0.373121 13.4586 0.546069C13.8054 0.896367 14 1.36941 14 1.86237C14 2.35533 13.8054 2.82837 13.4586 3.17867L5.00359 12.3874L13.4586 21.588Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`left-2 absolute translate-y-[80px] text-white drop-shadow-md`}
            onClick={() => handleScroll("left")}
          >
            <path
              d="M13.4586 21.588C13.8054 21.9383 14 22.4113 14 22.9043C14 23.3973 13.8054 23.8703 13.4586 24.2206C13.2883 24.3935 13.0852 24.5309 12.8613 24.6246C12.6374 24.7184 12.3971 24.7667 12.1544 24.7667C11.9117 24.7667 11.6714 24.7184 11.4475 24.6246C11.2236 24.5309 11.0205 24.3935 10.8502 24.2206L0.540559 13.701C0.194194 13.3499 -5.62851e-07 12.8765 -5.41293e-07 12.3833C-5.19735e-07 11.8901 0.194194 11.4168 0.540559 11.0657L10.8502 0.546069C11.0205 0.373121 11.2236 0.235775 11.4475 0.142027C11.6714 0.0482784 11.9117 -9.1284e-08 12.1544 -8.06737e-08C12.3971 -7.00634e-08 12.6374 0.0482785 12.8613 0.142027C13.0852 0.235775 13.2883 0.373121 13.4586 0.546069C13.8054 0.896367 14 1.36941 14 1.86237C14 2.35533 13.8054 2.82837 13.4586 3.17867L5.00359 12.3874L13.4586 21.588Z"
              fill="white"
            />
          </svg>
        )}

        {selectedStepId == 4 ? (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right-2 absolute translate-y-[80px]"
            onClick={() => handleScroll("right")}
          >
            <path
              opacity="0.2"
              d="M0.541416 21.588C0.19457 21.9383 9.7963e-07 22.4113 1.00118e-06 22.9043C1.02273e-06 23.3973 0.19457 23.8703 0.541416 24.2206C0.711736 24.3935 0.914755 24.5309 1.13866 24.6246C1.36256 24.7184 1.60287 24.7667 1.8456 24.7667C2.08834 24.7667 2.32865 24.7184 2.55255 24.6246C2.77645 24.5309 2.97947 24.3935 3.14979 24.2206L13.4594 13.701C13.8058 13.3499 14 12.8765 14 12.3833C14 11.8901 13.8058 11.4168 13.4594 11.0657L3.14978 0.546069C2.97946 0.373121 2.77645 0.235775 2.55254 0.142027C2.32864 0.0482784 2.08833 -9.1284e-08 1.8456 -8.06737e-08C1.60286 -7.00634e-08 1.36256 0.0482785 1.13865 0.142027C0.914754 0.235775 0.711735 0.373121 0.541415 0.546069C0.194569 0.896367 5.98587e-08 1.36941 8.14067e-08 1.86237C1.02955e-07 2.35533 0.194569 2.82837 0.541415 3.17867L8.99641 12.3874L0.541416 21.588Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right-2 absolute translate-y-[80px] drop-shadow-md"
            onClick={() => handleScroll("right")}
          >
            <path
              d="M0.541416 21.588C0.19457 21.9383 9.7963e-07 22.4113 1.00118e-06 22.9043C1.02273e-06 23.3973 0.19457 23.8703 0.541416 24.2206C0.711736 24.3935 0.914755 24.5309 1.13866 24.6246C1.36256 24.7184 1.60287 24.7667 1.8456 24.7667C2.08834 24.7667 2.32865 24.7184 2.55255 24.6246C2.77645 24.5309 2.97947 24.3935 3.14979 24.2206L13.4594 13.701C13.8058 13.3499 14 12.8765 14 12.3833C14 11.8901 13.8058 11.4168 13.4594 11.0657L3.14978 0.546069C2.97946 0.373121 2.77645 0.235775 2.55254 0.142027C2.32864 0.0482784 2.08833 -9.1284e-08 1.8456 -8.06737e-08C1.60286 -7.00634e-08 1.36256 0.0482785 1.13865 0.142027C0.914754 0.235775 0.711735 0.373121 0.541415 0.546069C0.194569 0.896367 5.98587e-08 1.36941 8.14067e-08 1.86237C1.02955e-07 2.35533 0.194569 2.82837 0.541415 3.17867L8.99641 12.3874L0.541416 21.588Z"
              fill="white"
            />
          </svg>
        )}

        {/* Slider */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[90%] h-[0.25rem] rounded-[1.25rem] bg-[#fff] bg-opacity-20 flex items-center">
            <div className="scrollbar h-[0.25rem] bg-white w-[4rem] rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

const TabletHowToGetStartedSlider = ({ setSelectedStepId, selectedStepId }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef();

  const handleScroll = (direction) => {
    const scrollAmount = 360;

    if (direction === "left") {
      carouselRef.current.scrollLeft -= scrollAmount;
      setScrollLeft((prevScrollLeft) =>
        Math.max(0, prevScrollLeft - scrollAmount)
      );
      setSelectedStepId((prevId) => Math.max(1, prevId - 1));
    } else {
      carouselRef.current.scrollLeft += scrollAmount;
      setScrollLeft((prevScrollLeft) => prevScrollLeft + scrollAmount);
      setSelectedStepId((prevId) =>
        Math.min(HowToGetStartedStepsData.length, prevId + 1)
      );
    }

    updateScrollbar();
  };

  const updateScrollbar = () => {
    const container = carouselRef.current;
    const scrollbar = document.querySelector(".scrollbar02");

    if (container && scrollbar) {
      const scrollPercentage =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        350;

      const maxScrollbarWidth = 12 * 28;
      const scrollbarWidth =
        (container.clientWidth / container.scrollWidth) * maxScrollbarWidth;

      scrollbar.style.width = `${scrollbarWidth}px`;
      scrollbar.style.transform = `translateX(${scrollPercentage}%)`;
    }
  };

  const handleStepClick = (stepId) => {
    setSelectedStepId(stepId);
    scrollToStepId(stepId);
  };

  const scrollToStepId = (stepId) => {
    const container = carouselRef.current;
    const totalSteps = HowToGetStartedStepsData.length;
    const stepIndex = HowToGetStartedStepsData.findIndex(
      (step) => step.id === stepId
    );

    const scrollPercentage = (stepIndex / (totalSteps - 1)) * 100;

    container.scrollTo({
      left:
        (scrollPercentage / 100) *
        (container.scrollWidth - container.clientWidth),
      behavior: "smooth",
    });

    updateScrollbar();
  };

  return (
    <>
      <div className="flex flex-col gap-8 relative">
        {/* Containers */}
        <div
          id="carousel"
          ref={carouselRef}
          className="sliders gap-[15px] overflow-x-scroll scroll-smooth px-[95px] flex"
          onScroll={updateScrollbar}
        >
          {HowToGetStartedStepsData.map((step) => (
            <div
              key={step.id}
              className={`bg-[#fff] rounded-[20px] min-w-[360px] relative py-2 cursor-pointer ${
                selectedStepId === step.id ? "" : "bg-opacity-20"
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              <h1
                className={`text-[4.125rem] font-[700] ml-10 ${
                  selectedStepId === step.id
                    ? "text-[--Blue]"
                    : "text-[#fff] text-opacity-20"
                }`}
              >
                {step.id}
              </h1>

              <div className={"flex flex-col justify-center items-center"}>
                <Image
                  src={step.img}
                  alt="guide"
                  className="w-[5.75rem] h-[5.75rem]"
                />
                <div
                  className={`flex justify-start flex-col my-4 ${
                    selectedStepId === step.id
                      ? `items-left ${
                          step.id === 1
                            ? "-translate-x-6"
                            : step.id === 2
                            ? "-translate-x-[4.6rem]"
                            : step.id === 3
                            ? "-translate-x-14"
                            : "-translate-x-[2.7rem]"
                        }`
                      : "items-center"
                  }`}
                >
                  <p
                    className={`text-[1.8125rem] font-jetBrain font-[500] ${
                      selectedStepId === step.id
                        ? "text-[#555]"
                        : "text-[white]"
                    }`}
                  >
                    {step.step}
                  </p>
                  <p
                    className={`text-[2.0625rem] font-[700] ${
                      selectedStepId === step.id
                        ? "text-[--Blue]"
                        : "text-white"
                    }`}
                  >
                    {step.stepName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <Image
          src={selectedStepId == 1 ? LeftGrayIcon : LeftWhiteIcon}
          alt="Left"
          className="left-2 absolute translate-y-[150px] h-[3rem] w-[3rem]"
          onClick={() => handleScroll("left")}
        />
        <Image
          src={selectedStepId == 4 ? RightGrayIcon : RightWhiteIcon}
          alt="Right"
          className="right-2 absolute translate-y-[150px] h-[3rem] w-[3rem]"
          onClick={() => handleScroll("right")}
        />

        {/* Slider */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[90%] h-[8px] rounded-[1.25rem] bg-[#fff] bg-opacity-20 flex items-center">
            <div className="scrollbar02 h-[8px] rounded-[1.25rem] bg-white w-[10rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopDiscoverSlider = () => {
  const swiperRef = useRef();

  return (
    <div className="w-full items-center justify-center gap-5 flex px-6">
      <Image
        src={LeftWhiteIcon}
        alt="Left"
        className="cursor-pointer"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />

      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        breakpoints={{
          1260: {
            slidesPerView: 4,
          },
          980: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={50}
        modules={[]}
        loop={true}
        className="w-full"
      >
        {desktopDiscoverSteps.map((step) => (
          <SwiperSlide key={step.id}>
            <div className="!w-[16.25rem] !h-[15.125rem] rounded-[1.25rem] bg-[#fff] !flex !flex-col !items-center !justify-center gap-4 cursor-pointer swiper">
              {step.extraIcon == true && (
                <div className="w-full flex items-center justify-end h-[10px] px-4">
                  <svg
                    width="68"
                    height="50"
                    viewBox="0 0 68 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.1"
                      cx="43"
                      cy="25"
                      r="25"
                      fill="#4DB5FF"
                    />
                    <path
                      d="M41.2298 9.99227C37.9483 9.99227 35.0328 12.1053 34.0166 15.2242C32.9737 15.4392 31.9886 15.8738 31.1267 16.4991C30.2649 17.1245 29.5461 17.9262 29.0183 18.851C27.3725 21.6955 27.7483 25.2715 29.9531 27.7097C29.2724 29.7518 29.5061 31.9866 30.5932 33.8358C32.2289 36.6904 35.5202 38.1534 38.7409 37.4726C39.4461 38.2685 40.3128 38.9049 41.2834 39.3393C42.2539 39.7738 43.3059 39.9963 44.3692 39.9921C47.6507 39.9921 50.5662 37.8791 51.5824 34.7602C53.6955 34.3232 55.5141 33.0024 56.5706 31.1334C58.2265 28.2889 57.8507 24.7129 55.6462 22.2747V22.2646C55.9825 21.2552 56.0993 20.1856 55.989 19.1274C55.8786 18.0692 55.5435 17.0468 55.0062 16.1285C53.3701 13.2839 50.0784 11.8206 46.8682 12.5013C46.1597 11.7075 45.2907 11.0734 44.3187 10.6408C43.3466 10.2082 42.2937 9.98718 41.2298 9.99227ZM41.2298 11.943L41.2197 11.9531C42.5405 11.9531 43.8105 12.4102 44.8264 13.2537C44.7857 13.2738 44.7043 13.3246 44.6435 13.3552L38.67 16.7991C38.3651 16.9719 38.1822 17.2969 38.1822 17.6526V25.7392L35.612 24.256V17.5713C35.6114 16.0801 36.2028 14.6498 37.2561 13.5944C38.3095 12.539 39.7387 11.9453 41.2298 11.943ZM48.4258 14.2973C49.4157 14.2954 50.3886 14.5548 51.246 15.0494C52.1035 15.544 52.8152 16.2562 53.3092 17.1141C53.9594 18.252 54.2031 19.5828 53.9795 20.873C53.9388 20.8424 53.8579 20.8021 53.8067 20.7715L47.8333 17.3171C47.683 17.2321 47.5133 17.1875 47.3406 17.1875C47.168 17.1875 46.9983 17.2321 46.848 17.3171L39.8482 21.3604V18.3938L45.6288 15.0514C46.4787 14.5587 47.4434 14.2984 48.4258 14.2969V14.2973ZM33.6512 17.3679V24.4692C33.6512 24.8248 33.8341 25.1398 34.139 25.3227L41.1283 29.3559L38.5476 30.849L32.7772 27.5167C31.4876 26.7694 30.5473 25.5409 30.1626 24.1009C29.7779 22.6609 29.9803 21.1271 30.7253 19.8362C31.3825 18.697 32.4176 17.824 33.6512 17.3679ZM47.0409 19.1253L52.8215 22.4576C55.5138 24.012 56.4277 27.4458 54.8734 30.1381L54.8834 30.1482C54.2232 31.2861 53.1869 32.1597 51.9575 32.6068V25.5052C51.9575 25.1495 51.7747 24.8245 51.4698 24.652L44.4703 20.6084L47.0409 19.1253ZM42.7943 21.5738L45.7407 23.2805V26.6837L42.7943 28.3904L39.8482 26.6837V23.2805L42.7943 21.5738ZM47.4268 24.256L49.9971 25.7392V32.4139C49.9971 35.5226 47.4776 38.0421 44.3793 38.0421V38.032C43.0686 38.032 41.7885 37.5749 40.7827 36.7318C40.8234 36.7116 40.9148 36.6605 40.9656 36.6299L46.9391 33.186C47.244 33.0132 47.4369 32.6882 47.4265 32.3325L47.4268 24.256ZM45.7504 28.6244V31.5906L39.9699 34.9229C37.2776 36.4672 33.8438 35.5529 32.2894 32.8707H32.2995C31.6393 31.7429 31.4053 30.402 31.6288 29.1118C31.6695 29.1424 31.7509 29.1827 31.8016 29.2133L37.7751 32.6677C37.9254 32.7526 38.0951 32.7973 38.2677 32.7973C38.4404 32.7973 38.6101 32.7526 38.7604 32.6677L45.7504 28.6244Z"
                      fill="#4DB5FF"
                    />
                    <path
                      d="M0 26.28V23.498H4.888V19H7.722V23.498H12.584V26.28H7.722V30.778H4.888V26.28H0Z"
                      fill="#4DB5FF"
                    />
                  </svg>
                </div>
              )}

              <Image
                src={step.img}
                alt="img"
                className={`h-[5rem] w-[5rem] -translate-y-2 ${
                  step.extraIcon == true ? "mt-4" : "mt-10"
                }`}
                unoptimized={true}
              />

              <h1 className="text-[1.625rem] font-[700] text-[--Dark] leading-[33.85px] translate-y-2">
                {step.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={RightWhiteIcon}
        alt="Right"
        className="cursor-pointer"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />
    </div>
  );
};

const TabletDiscoverSlider = () => {
  const swiperRef = useRef();

  return (
    <div className="w-full items-center justify-center gap-5 flex px-6">
      <Image
        src={LeftWhiteIcon}
        alt="Left"
        className="cursor-pointer"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />

      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        breakpoints={{
          910: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={50}
        modules={[]}
        loop={true}
        className="w-full"
      >
        {desktopDiscoverSteps.map((step) => (
          <SwiperSlide key={step.id}>
            <div className="max-sm:!w-[14.25rem] max-sm:!h-[13.125rem] !w-[16.25rem] !h-[15.125rem] rounded-[1.25rem] bg-[#fff] !flex !flex-col !items-center !justify-center gap-4 cursor-pointer swiper">
              {step.extraIcon == true && (
                <div className="w-full flex items-center justify-end h-[10px] px-4">
                  <Image src={ExtraIcon} alt="ChatGPT" />
                </div>
              )}

              <Image
                src={step.img}
                alt="img"
                className={`h-[5rem] w-[5rem] ${
                  step.extraIcon == true ? "mt-4" : "mt-10"
                }`}
              />
              <h1 className="text-[1.625rem] font-[700] text-[--Dark]">
                {step.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={RightWhiteIcon}
        alt="Right"
        className="cursor-pointer"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />
    </div>
  );
};

const MobileDiscoverSlider = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedStepId, setSelectedStepId] = useState(1);

  const carouselRef = useRef();

  const handleScroll = (direction) => {
    const scrollAmount = 155;

    if (direction === "left") {
      carouselRef.current.scrollLeft -= scrollAmount;
      setScrollLeft((prevScrollLeft) =>
        Math.max(0, prevScrollLeft - scrollAmount)
      );
      setSelectedStepId((prevId) => Math.max(1, prevId - 1));
    } else {
      carouselRef.current.scrollLeft += scrollAmount;
      setScrollLeft((prevScrollLeft) => prevScrollLeft + scrollAmount);
      setSelectedStepId((prevId) =>
        Math.min(mobileDiscoverSteps.length, prevId + 1)
      );
    }

    updateScrollbar();
  };

  const updateScrollbar = () => {
    const container = carouselRef.current;
    const scrollbar = document.querySelector(".scrollbar002");

    if (container && scrollbar) {
      const scrollPercentage =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        460;

      const maxScrollbarWidth = 7 * 20;
      const scrollbarWidth =
        (container.clientWidth / container.scrollWidth) * maxScrollbarWidth;

      scrollbar.style.width = `${scrollbarWidth}px`;
      scrollbar.style.transform = `translateX(${scrollPercentage}%)`;
    }
  };

  const handleStepClick = (stepId) => {
    setSelectedStepId(stepId);
    scrollToStepId(stepId);
  };

  const scrollToStepId = (stepId) => {
    const container = carouselRef.current;
    const totalSteps = HowToGetStartedStepsData.length;
    const stepIndex = HowToGetStartedStepsData.findIndex(
      (step) => step.id === stepId
    );

    const scrollPercentage = (stepIndex / (totalSteps - 1)) * 100;

    container.scrollTo({
      left:
        (scrollPercentage / 100) *
        (container.scrollWidth - container.clientWidth),
      behavior: "smooth",
    });

    updateScrollbar();
  };

  return (
    <>
      <div className="flex flex-col gap-8 relative">
        {/* Containers */}
        <div
          id="carousel"
          ref={carouselRef}
          className="sliders gap-[15px] overflow-x-scroll scroll-smooth px-[55px] flex"
          onScroll={updateScrollbar}
        >
          {mobileDiscoverSteps.map((step) => (
            <div
              key={step.id}
              className={`bg-[#fff] rounded-[20px] min-w-[180px] relative py-8 flex flex-col items-center justify-center gap-4`}
              onClick={() => handleStepClick(step.id)}
            >
              {step.extraIcon == true && (
                <div className="w-full flex items-center justify-end !mt-[-56px] pt-8 px-2">
                  <Image src={ExtraIcon} alt="ChatGPT" />
                </div>
              )}

              <Image
                src={step.img}
                alt="guide"
                className={`w-[3.75rem] h-[3.75rem] ${
                  step.extraIcon == true ? "-mt-4" : "mt-4"
                }`}
              />
              <p className={`text-[1.0625rem] font-[700] text-[#363C4F]`}>
                {step.name}
              </p>
            </div>
          ))}
        </div>

        {selectedStepId == 1 ? (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`left-2 absolute translate-y-[80px] text-white`}
            onClick={() => handleScroll("left")}
          >
            <path
              opacity="0.2"
              d="M13.4586 21.588C13.8054 21.9383 14 22.4113 14 22.9043C14 23.3973 13.8054 23.8703 13.4586 24.2206C13.2883 24.3935 13.0852 24.5309 12.8613 24.6246C12.6374 24.7184 12.3971 24.7667 12.1544 24.7667C11.9117 24.7667 11.6714 24.7184 11.4475 24.6246C11.2236 24.5309 11.0205 24.3935 10.8502 24.2206L0.54056 13.701C0.194194 13.3499 -5.7283e-07 12.8765 -5.51272e-07 12.3833C-5.29714e-07 11.8901 0.194194 11.4168 0.54056 11.0657L10.8502 0.546069C11.0205 0.37312 11.2236 0.235775 11.4475 0.142027C11.6714 0.0482784 11.9117 -9.1284e-08 12.1544 -8.06737e-08C12.3971 -7.00634e-08 12.6374 0.0482785 12.8613 0.142027C13.0852 0.235775 13.2883 0.373121 13.4586 0.546069C13.8054 0.896367 14 1.36941 14 1.86237C14 2.35533 13.8054 2.82837 13.4586 3.17867L5.00359 12.3874L13.4586 21.588Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`left-2 absolute translate-y-[80px] text-white drop-shadow-md`}
            onClick={() => handleScroll("left")}
          >
            <path
              d="M13.4586 21.588C13.8054 21.9383 14 22.4113 14 22.9043C14 23.3973 13.8054 23.8703 13.4586 24.2206C13.2883 24.3935 13.0852 24.5309 12.8613 24.6246C12.6374 24.7184 12.3971 24.7667 12.1544 24.7667C11.9117 24.7667 11.6714 24.7184 11.4475 24.6246C11.2236 24.5309 11.0205 24.3935 10.8502 24.2206L0.540559 13.701C0.194194 13.3499 -5.62851e-07 12.8765 -5.41293e-07 12.3833C-5.19735e-07 11.8901 0.194194 11.4168 0.540559 11.0657L10.8502 0.546069C11.0205 0.373121 11.2236 0.235775 11.4475 0.142027C11.6714 0.0482784 11.9117 -9.1284e-08 12.1544 -8.06737e-08C12.3971 -7.00634e-08 12.6374 0.0482785 12.8613 0.142027C13.0852 0.235775 13.2883 0.373121 13.4586 0.546069C13.8054 0.896367 14 1.36941 14 1.86237C14 2.35533 13.8054 2.82837 13.4586 3.17867L5.00359 12.3874L13.4586 21.588Z"
              fill="white"
            />
          </svg>
        )}
        {selectedStepId == 4 ? (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right-2 absolute translate-y-[80px]"
            onClick={() => handleScroll("right")}
          >
            <path
              opacity="0.2"
              d="M0.541416 21.588C0.19457 21.9383 9.7963e-07 22.4113 1.00118e-06 22.9043C1.02273e-06 23.3973 0.19457 23.8703 0.541416 24.2206C0.711736 24.3935 0.914755 24.5309 1.13866 24.6246C1.36256 24.7184 1.60287 24.7667 1.8456 24.7667C2.08834 24.7667 2.32865 24.7184 2.55255 24.6246C2.77645 24.5309 2.97947 24.3935 3.14979 24.2206L13.4594 13.701C13.8058 13.3499 14 12.8765 14 12.3833C14 11.8901 13.8058 11.4168 13.4594 11.0657L3.14978 0.546069C2.97946 0.373121 2.77645 0.235775 2.55254 0.142027C2.32864 0.0482784 2.08833 -9.1284e-08 1.8456 -8.06737e-08C1.60286 -7.00634e-08 1.36256 0.0482785 1.13865 0.142027C0.914754 0.235775 0.711735 0.373121 0.541415 0.546069C0.194569 0.896367 5.98587e-08 1.36941 8.14067e-08 1.86237C1.02955e-07 2.35533 0.194569 2.82837 0.541415 3.17867L8.99641 12.3874L0.541416 21.588Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right-2 absolute translate-y-[80px] drop-shadow-md"
            onClick={() => handleScroll("right")}
          >
            <path
              d="M0.541416 21.588C0.19457 21.9383 9.7963e-07 22.4113 1.00118e-06 22.9043C1.02273e-06 23.3973 0.19457 23.8703 0.541416 24.2206C0.711736 24.3935 0.914755 24.5309 1.13866 24.6246C1.36256 24.7184 1.60287 24.7667 1.8456 24.7667C2.08834 24.7667 2.32865 24.7184 2.55255 24.6246C2.77645 24.5309 2.97947 24.3935 3.14979 24.2206L13.4594 13.701C13.8058 13.3499 14 12.8765 14 12.3833C14 11.8901 13.8058 11.4168 13.4594 11.0657L3.14978 0.546069C2.97946 0.373121 2.77645 0.235775 2.55254 0.142027C2.32864 0.0482784 2.08833 -9.1284e-08 1.8456 -8.06737e-08C1.60286 -7.00634e-08 1.36256 0.0482785 1.13865 0.142027C0.914754 0.235775 0.711735 0.373121 0.541415 0.546069C0.194569 0.896367 5.98587e-08 1.36941 8.14067e-08 1.86237C1.02955e-07 2.35533 0.194569 2.82837 0.541415 3.17867L8.99641 12.3874L0.541416 21.588Z"
              fill="white"
            />
          </svg>
        )}

        {/* Slider */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[90%] h-[0.25rem] rounded-[1.25rem] bg-[#fff] bg-opacity-20 flex items-center">
            <div className="scrollbar002 h-[0.25rem] bg-white w-[4rem] rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

const TabletAboutSlider = () => {
  const [selectedImage, setSelectedImage] = useState(2);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const selectedImageElement =
        sliderRef.current.children[selectedImage - 1];
      const scrollX =
        selectedImageElement.offsetLeft -
        (sliderRef.current.offsetWidth - selectedImageElement.offsetWidth) / 2;
      sliderRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    }
  }, [selectedImage]);

  const handleImageClick = (index) => {
    setSelectedImage(index + 1);
  };

  return (
    <>
      <div
        className="w-full h-[15.125rem] absolute translate-y-[140%] flex gap-4 sliders overflow-x-scroll scroll-smooth px-[38px]"
        ref={sliderRef}
      >
        <Image
          src={AboutImg02}
          className={`w-[14.07231rem] h-[13.125rem] rounded-[10px] object-cover ${
            selectedImage === 1 ? "selected" : ""
          }`}
          onClick={() => handleImageClick(0)}
        />
        <Image
          src={AboutImg03}
          className={`w-[31.75rem] h-[13.125rem] rounded-[0.625rem] object-cover ${
            selectedImage === 2 ? "selected" : ""
          }`}
          onClick={() => handleImageClick(1)}
        />
        <Image
          src={AboutImg04}
          className={`w-[14.07231rem] h-[13.125rem] rounded-[10px] object-cover ${
            selectedImage === 3 ? "selected" : ""
          }`}
          onClick={() => handleImageClick(2)}
        />
      </div>
    </>
  );
};

const MobileAboutSlider = () => {
  const [selectedImage, setSelectedImage] = useState(2);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const selectedImageElement =
        sliderRef.current.children[selectedImage - 1];
      const scrollX =
        selectedImageElement.offsetLeft -
        (sliderRef.current.offsetWidth - selectedImageElement.offsetWidth) / 2;
      sliderRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    }
  }, [selectedImage]);

  const handleImageClick = (index) => {
    setSelectedImage(index + 1);
  };

  return (
    <>
      <div
        className="w-full h-[15.125rem] absolute translate-y-[140%] flex gap-4 sliders overflow-x-scroll scroll-smooth px-[19px]"
        ref={sliderRef}
      >
        <Image
          src={AboutImg02}
          className={`w-[14.07231rem] h-[12.5rem] rounded-[10px] object-cover ${
            selectedImage === 1 ? "selected" : ""
          }`}
          onClick={() => handleImageClick(0)}
        />
        <Image
          src={AboutImg03}
          className={`w-[20.91944rem] h-[12.5rem] rounded-[0.625rem] object-cover ${
            selectedImage === 2 ? "selected" : ""
          }`}
          onClick={() => handleImageClick(1)}
        />
        <Image
          src={AboutImg04}
          className={`w-[14.07231rem] h-[12.5rem] rounded-[10px] object-cover ${
            selectedImage === 3 ? "selected" : ""
          }`}
          onClick={() => handleImageClick(2)}
        />
      </div>
    </>
  );
};

export {
  DesktopHowToGetStartedSteps,
  TabletHowToGetStartedSlider,
  MobileHowToGetStartedSlider,
  DesktopDiscoverSlider,
  TabletDiscoverSlider,
  MobileDiscoverSlider,
  TabletAboutSlider,
  MobileAboutSlider,
};
