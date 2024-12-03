"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Icons & Images
import Logo from "../../../../public/Logos/logo.svg";
import LogoWhite from "../../../../public/Logos/logo-white.svg";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import DesignerLogo from "../../../../public/Icons/designerLogo.svg";

// Functions
import { Button01 } from "@/functions/Buttons";

// Data
import {
  desktopNavigationLinks,
  desktopSocialMediaLinks,
  landscapeMobileAndTabletMediaLinks,
  mobileAndTabletMediaLinks,
  mobileAndTabletNavigationLinks,
} from "@/data/HeaderLinksAndIcons";

const Header = ({
  isLandingPage = false,
  isContactPage = false,
  setScroll,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamOpen, setHamOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLandingPage) {
      window.addEventListener("popstate", handleStart);
      return () => {
        window.removeEventListener("popstate", handleStart);
      };
    }
  }, [isLandingPage, router]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setIsLandscape(screenWidth > screenHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hamburger Open
  const toggleHamOpen = () => {
    setHamOpen((prevState) => !prevState);
  };

  // Scroll Functionalities
  const scrollToElement = () => {
    const targetElement = document.getElementById("linkGenerate");

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      const scrollFactor = 0.001;
      const customScrollPosition =
        offsetTop + (window.innerHeight / 2) * scrollFactor;

      window.scrollTo({
        top: customScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleStart = () => {
    if (isLandingPage) {
      scrollToElement();
    } else {
      router.push("/");
      setTimeout(scrollToElement, 1200);
    }
  };

  const handleContactStart = () => {
    window.location.href = "/";
  };

  const HandleScroll = () => {
    setHamOpen(false);
    if (isLandingPage) {
      setScroll(true);
    } else {
      router.push("/");
      setTimeout(scrollToElement, 1200);
    }
  };

  const HandleContactStart = () => {
    setHamOpen(false);
    window.location.href = "/";
    setTimeout(scrollToElement, 1200);
  };

  return (
    <>
      <div className="w-full h-[5px] bg-[--Blue] border-none sticky top-[0px] z-[99999]" />
      <div
        className={`w-[100%] transition-all ease-in-out duration-300 sticky top-[5px] z-[99999] overflow-hidden ${
          hamOpen
            ? "bg-[--Blue] h-[calc(100vh-1px)]"
            : "bg-[--White] outline outline-[1px] outline-[#0000000D] h-[5rem]"
        }`}
      >
        {hamOpen ? (
          <>
            <div className="border-b-[#fff] border-b border-opacity-10 w-full p-[1.56rem] items-center h-[5rem] flex justify-between">
              {/* Left Side */}
              <a href={"/"}>
                <Image
                  src={LogoWhite}
                  alt="MessageMomment"
                  className="w-[10.5615rem] h-[2.5rem]"
                />
              </a>

              {/* Right Side */}
              <Button01
                ButtonStyle={{
                  width: "2.875rem",
                  height: "2.875rem",
                }}
                customButtonClass={`rounded-[0.375rem] bg-[--Blue]`}
                icon={<IoClose />}
                customIconClass={`text-[--White] text-[24px]`}
                onClick={toggleHamOpen}
              />
            </div>

            {/* Bottom Part */}
            <div className="w-full h-full flex flex-col justify-between text-[--White] pb-[5rem]">
              <div className="py-0">
                {/* Navigation Links */}
                <div className="w-full flex items-center justify-center">
                  <ul
                    className={`items-center flex  ${
                      isLandscape
                        ? "justify-between pt-8 pb-4 w-[70%]"
                        : "flex-col justify-center mt-12 gap-[0.69rem] px-8"
                    }`}
                  >
                    {mobileAndTabletNavigationLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className={`font-[0.875rem] text-base`}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Line Breaker */}
                <div
                  className={` bg-[#fff] bg-opacity-10 h-[1px] ${
                    isLandscape ? "mx-[13%] my-4" : "mx-6 my-12"
                  }`}
                />

                {/* Start Button */}
                <div className="w-full flex items-center justify-center">
                  <Button01
                    text={"Start"}
                    ButtonStyle={{
                      width: `${isLandscape ? "60%" : "90%"}`,
                      height: "2.875rem",
                    }}
                    customButtonClass={`rounded-[0.375rem] bg-[--White] text-[--Blue] text-[0.875rem] font-[700] font-jetBrain flex`}
                    onClick={isContactPage ? HandleContactStart : HandleScroll}
                  />
                </div>
              </div>
              <div className="p-4">
                {/* Line Breaker */}
                <div
                  className={`${
                    isLandscape ? "mx-[30%]" : "mx-6"
                  } bg-[#fff] bg-opacity-10 h-[1px]`}
                />

                {/* Social Media Icons */}
                {isLandscape ? (
                  <>
                    <ul
                      className={`items-center gap-6 flex justify-center my-4`}
                    >
                      {landscapeMobileAndTabletMediaLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            target="_blank"
                            className={`text-[#fff]`}
                            style={{ fontSize: `${link.size}px` }}
                          >
                            {React.createElement(link.icon)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <ul
                      className={`items-center gap-6 flex justify-center my-6`}
                    >
                      {mobileAndTabletMediaLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            target="_blank"
                            className={`text-[#fff]`}
                            style={{ fontSize: `${link.size}px` }}
                          >
                            {React.createElement(link.icon)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Bottom Texts */}
                <p className="text-[0.6875rem] font-500 text-center mb-2">
                  Copyright © 2023 MessageMoment. All rights reserved.
                </p>
                <div className="text-[0.6875rem] font-500 text-center mb-4 flex gap-2 justify-center items-center">
                  Designed By
                  <a href="mailto:pictagroup@gmail.com" target="_blank">
                    <Image
                      src={DesignerLogo}
                      alt="Designer Logo"
                      width="auto"
                      height="auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-full flex items-center justify-between maxTab:p-4 max-maxTab:p-[1.56rem]">
              {/* Left Side */}
              <div className="maxTab:flex maxTab:items-center maxTab:gap-4 maxTab:p-8">
                <a href={"/"}>
                  <Image
                    src={hamOpen ? LogoWhite : Logo}
                    alt="MessageMomment"
                    className="maxTab:w-[12.28156rem] w-[10.5615rem] maxTab:h-[2.875rem] h-[2.5rem] maxTab:cursor-pointer"
                    priority
                  />
                </a>

                <ul
                  className={`gap-[30px] pl-[30px] items-center flex max-maxTab:hidden`}
                >
                  {desktopNavigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={`font-medium text-base text-[--Black] leading-normal hover:text-[--Blue]`}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side */}
              <div
                div
                className="flex items-center gap-7 p-8 max-maxTab:hidden"
              >
                <ul className={`h-5 items-center gap-4 flex`}>
                  {desktopSocialMediaLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        className={`text-[--LightGray] mb-7`}
                      >
                        {link.icon}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Start Button */}
                <Button01
                  text={"Start"}
                  ButtonStyle={{ width: "9.375rem", height: "2.875rem" }}
                  customButtonClass={`rounded-md bg-[--Blue] text-[--White] text-[1rem] font-[800] font-jetBrain transition-all duration-500 ease-in-out flex hover:bg-[#4243DF]`}
                  onClick={isContactPage ? handleContactStart : handleStart}
                />
              </div>

              {/* Hamburger Button */}
              <Button01
                ButtonStyle={{
                  width: "2.875rem",
                  height: "2.875rem",
                }}
                customButtonClass={`rounded-[0.375rem] bg-[--Blue] maxTab:hidden`}
                icon={hamOpen ? <IoClose /> : <RxHamburgerMenu />}
                customIconClass={`text-[--White] text-[24px]`}
                onClick={toggleHamOpen}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
