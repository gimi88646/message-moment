"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Images
import CookieParserIcon from "../../../public/Icons/CookieParserIcon.png";
import CloseIcon from "../../../public/Icons/CloseIcon.svg";
import { IoClose } from "react-icons/io5";
import { FaChevronRight, FaCheck } from "react-icons/fa";
import SendContact from "../../../public/Icons/SendContactIcon.png";

// Function
import { Button02 } from "@/functions/Buttons";

const Cookieparser = ({ setCookiepreferences }) => {
  const [isLandscape, setIsLandscape] = useState(false);
  const [showCookieParser, setShowCookieParser] = useState(true);

  useEffect(() => {
    const cookiesAccepted = document.cookie.includes("cookiesAccepted=true");
    if (cookiesAccepted) {
      setShowCookieParser(false);
    }
  }, []);

  const toggleClose = () => {
    setShowCookieParser(false);
  };

  const toggleAcceptAll = () => {
    setShowCookieParser(false);
    document.cookie = "cookiesAccepted=true; path=/";
  };

  const toggleRejectAll = () => {
    setShowCookieParser(false);
  };

  const toggCookiepreferences = () => {
    setCookiepreferences(true);
    setShowCookieParser(false);
  };
  // Landscape View
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

  return (
    <>
      <AnimatePresence>
        {showCookieParser && (
          <>
            {/* Desktop View */}
            <motion.div
              className="w-[20.25rem] h-[20.25rem] rounded-[20.25rem] bg-[--Blue] opacity-50 blur-[50px] fixed bottom-[-4rem] right-[3rem] z-[9999] max-maxTab:hidden"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
            <motion.div
              className="w-[27.5rem] h-[18.125rem] rounded-[0.625rem] fixed bottom-4 right-4 bg-[#fff] z-[9999] max-maxTab:hidden"
              style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <div className="flex items-center justify-center flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Image
                    src={CookieParserIcon}
                    alt="Cookieparser"
                    className="w-[5rem] h-[5rem] translate-x-[-20px] translate-y-[-30px]"
                  />
                  <h1 className="text-[--Blue] text-center text-[1.625rem] font-[700] mr-6">
                    We use cookies!
                  </h1>
                  <Image
                    src={CloseIcon}
                    alt="close"
                    className="w-[0.9375rem] h-[0.9375rem] shrink-0 mr-8 translate-y-[-8px] cursor-pointer"
                    onClick={toggleClose}
                  />
                </div>

                <p className="max-w-[23.75rem] text-[--Dark] text-center font-jetBrain text-[0.9375rem] leading-[1.3125rem] translate-y-[-15px]">
                  Hi, this website uses essential cookies to ensure its proper
                  operation and tracking cookies to understand how you interact
                  with it. The latter will be set only after consent.{" "}
                  <i className="not-italic text-[--Dark] font-jetBrain text-[0.9375rem] font-[700] leading-[1.4375rem] cursor-pointer">
                    <span
                      className="underline text-[--Dark] font-jetBrain text-[0.9375rem] font-[700] leading-[1.4375rem]"
                      onClick={toggCookiepreferences}
                    >
                      Let me choose
                    </span>
                    .
                  </i>
                </p>

                <div className="w-[23.75rem] flex items-center justify-center gap-4">
                  <button
                    className="w-[11.25rem] h-[2.875rem] rounded-[0.375rem] bg-[--Blue] text-[#fff] text-center text-[0.9375rem] font-jetBrain font-[700]  !transition-all !duration-500 !ease-in-out hover:!bg-[--HoveredBlue]"
                    onClick={toggleAcceptAll}
                  >
                    Accept All
                  </button>
                  <button
                    className="w-[11.25rem] h-[2.875rem] rounded-[0.375rem] bg-[--MidGray] text-[--Dark] text-center text-[0.9375rem] font-jetBrain font-[700] !transition-all !duration-500 !ease-in-out hover:!bg-[#363c4f29]"
                    onClick={toggleRejectAll}
                  >
                    Reject All
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Tablet View */}
            <motion.div
              className="w-[18rem] h-[18rem] rounded-[20.25rem] bg-[--Blue] opacity-10 blur-[50px] fixed bottom-[-1rem] right-[3rem] z-[9999] maxTab:hidden max-minTab:hidden"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
            <motion.div
              className="w-[25rem] h-[18.125rem] rounded-[0.625rem] fixed bottom-4 right-4 bg-[#fff] z-[9999] maxTab:hidden max-minTab:hidden"
              style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <div className="flex items-center justify-center flex-col gap-4">
                <div className="flex items-center justify-center flex-col w-full">
                  <Image
                    src={CookieParserIcon}
                    alt="Cookieparser"
                    className={`${
                      isLandscape
                        ? "w-[4rem] h-[4rem] translate-y-[-20px]"
                        : "w-[6rem] h-[6rem] translate-y-[-48px]"
                    }`}
                  />
                  <h1
                    className={`text-[--Blue] text-center text-[1.5rem] font-[700] translate-y-[-40px] mr-[2rem] translate-x-[20px] ${
                      isLandscape ? "mt-[2rem]" : ""
                    }`}
                  >
                    We use cookies!
                  </h1>
                </div>

                <div className="w-full translate-y-[-45px] px-4">
                  <p className="max-w-[23rem] text-[--Dark] text-center font-jetBrain text-[0.8125rem] font-[500]">
                    Hi, this website uses essential cookies to ensure its proper
                    operation and tracking cookies to understand how you
                    interact with it. The latter will be set only after consent.
                    {"\n"}
                  </p>
                  <p className="max-w-[23rem] text-[--Dark] text-center font-jetBrain text-[0.8125rem] font-[700]">
                    <span
                      className="underline text-[--Dark] text-center font-jetBrain text-[0.8125rem] font-[700]"
                      onClick={toggCookiepreferences}
                    >
                      Let me choose
                    </span>
                    .
                  </p>
                </div>

                <div
                  className={`w-[90%] flex items-center justify-center gap-4 ${
                    isLandscape ? "-translate-y-[50px]" : "-translate-y-[40px]"
                  }`}
                >
                  <button
                    className="w-[11.25rem] h-[2.875rem] rounded-[0.375rem] bg-[--Blue] text-[#fff] text-center text-[0.9375rem] font-jetBrain font-[700]  !transition-all !duration-500 !ease-in-out hover:!bg-[#5252c3]"
                    onClick={toggleAcceptAll}
                  >
                    Accept All
                  </button>
                  <button
                    className="w-[11.25rem] h-[2.875rem] rounded-[0.375rem] bg-[--MidGray] text-[--Dark] text-center text-[0.9375rem] font-jetBrain font-[700]"
                    onClick={toggleRejectAll}
                  >
                    Reject All
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Mobile View */}
            <motion.div
              className="w-[20.25rem] h-[20.25rem] rounded-[20.25rem] bg-[--Blue] opacity-10 blur-[50px] fixed bottom-[-2rem] right-[2rem] left-[2rem] z-[9999] hidden max-minTab:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
            <motion.div
              className="w-[96%] h-[16.25rem] rounded-[0.625rem] fixed bottom-2 left-2 right-2 bg-[#fff] z-[9999] hidden max-minTab:block"
              style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <div className="flex items-center justify-center flex-col gap-3 vsm:gap-5">
                <div className="flex items-center justify-center flex-col w-full">
                  <Image
                    src={CookieParserIcon}
                    alt="Cookieparser"
                    className="w-[5rem] h-[5rem] translate-y-[-48px]"
                  />
                  <h1 className="text-[--Blue] text-center translate-x-[16px] text-[1.0625rem] font-[700] translate-y-[-35px] mr-[2rem]">
                    We use cookies!
                  </h1>
                </div>

                <div className="w-full flex items-center justify-center flex-col translate-y-[-45px] px-4">
                  <p className="max-w-[23rem] text-[--Dark] text-center font-jetBrain text-[0.8125rem] font-[500] leading-[17.16px]">
                    Hi, this website uses essential cookies to ensure its proper
                    operation and tracking cookies to understand how you
                    interact with it. The latter will be set only after consent.
                    {"\n"}
                  </p>
                  <p className="max-w-[23rem] text-[--Dark] text-center font-jetBrain text-[0.8125rem] font-[700]">
                    <span
                      className="underline text-[--Dark] text-center font-jetBrain text-[0.8125rem] font-[700]"
                      onClick={toggCookiepreferences}
                    >
                      Let me choose
                    </span>
                    .
                  </p>
                </div>

                <div className="w-[90%] flex items-center justify-center gap-4 -translate-y-[40px]">
                  <button
                    className="w-[11.25rem] h-[2.875rem] rounded-[0.375rem] bg-[--Blue] text-[#fff] text-center text-[0.9375rem] font-jetBrain font-[700]  !transition-all !duration-500 !ease-in-out hover:!bg-[#5252c3]"
                    onClick={toggleAcceptAll}
                  >
                    Accept All
                  </button>
                  <button
                    className="w-[11.25rem] h-[2.875rem] rounded-[0.375rem] bg-[--MidGray] text-[--Dark] text-center text-[0.9375rem] font-jetBrain font-[700]"
                    onClick={toggleRejectAll}
                  >
                    Reject All
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Cookiepreferences = ({ setCookiepreferences, cookiepreferences }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState([false, false, false]);
  const [toggleState, setToggleState] = useState([false, false, false]);
  const [isLandscape, setIsLandscape] = useState(false);

  const toggleSwitch = (index) => {
    setToggleState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const toggleClose = () => {
    setCookiepreferences(false);
  };

  const toggleAcceptAll = () => {
    setCookiepreferences(false);
    document.cookie = "cookiesAccepted=true; path=/";
  };

  const toggleRejectAll = () => {
    setCookiepreferences(false);
  };

  const toggleSaveSetting = () => {
    setCookiepreferences(false);
    document.cookie = "cookiesAccepted=true; path=/";
  };

  const toggleAccordion = (index) => {
    setIsAccordionOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // Land Scape
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

  return (
    <>
      <AnimatePresence>
        {cookiepreferences && (
          <>
            {/* Desktop View */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="w-full h-[100vh] bg-[#fff] bg-opacity-90 fixed top-0 bottom-0 z-[99999] flex items-center justify-center max-maxTab:hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ scale: 0 }}
                className="max-w-[43.125rem] w-[100%] h-[70%] max-h-[45rem] bg-[#fff] rounded-[0.625rem] flex items-center flex-col justify-between"
              >
                {/* Upper Section */}
                <div
                  className="flex items-center justify-between px-6 py-2 w-full h-[15%] border-t border-r border-l border-[rgba(0,0,0,0.10)]"
                  style={{
                    borderRadius: "0.625rem 0.625rem 0rem 0rem",
                  }}
                >
                  <Image
                    src={CookieParserIcon}
                    alt="Cookieparser"
                    className="w-[5rem] h-[5rem] absolute translate-y-[-26px]"
                  />

                  <h1 className="text-[1.625rem] font-[700] text-[--Blue] pl-[6rem]">
                    Cookie Preferences
                  </h1>

                  {/* Close Icon */}
                  <i
                    className="text-[30px] cursor-pointer"
                    onClick={toggleClose}
                  >
                    <IoClose />
                  </i>
                </div>

                {/* Middle Section */}
                <div
                  className="w-full h-[80%] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <div className="w-[98%] h-full flex justify-center overflow-y-auto custom-scrollbar02">
                    <div className="h-fit pt-4 pb-1 flex flex-col gap-3">
                      <h1 className="text-[--Blue] text-[1.0625rem] font-[500] leading-[1.5rem]">
                        Cookie Usage
                      </h1>
                      <p className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] max-w-[39.375rem]">
                        We use cookies to ensure the basic functionalities of
                        this website and to enhance your online experience. You
                        can choose for each category to opt-in/out whenever you
                        want. For more details relative to cookies and other
                        sensitive data, please read the full{" "}
                        <a
                          href="/privacy"
                          className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] underline cursor-pointer"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>

                      {/* Accordian 01 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4 mt-2`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(0)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[0] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.9375rem] font-jetBrain leading-[1.4375rem] text-[--Dark]">
                              Strictly necessary cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer bg-[#d7d7fa]`}
                          >
                            <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                            <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[0] && (
                            <motion.div
                              key="accordion1"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full pl-5"
                            >
                              <div className="font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem]">
                                These cookies are essential for the proper
                                functioning of this website. Without these
                                cookies, the website would not work properly.
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Accordian 02 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(1)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[1] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.9375rem] font-jetBrain leading-[1.4375rem] text-[--Dark]">
                              Performance and Analytics cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer`}
                            onClick={() => toggleSwitch(1)}
                            initial={{
                              backgroundColor: toggleState[1]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            animate={{
                              backgroundColor: toggleState[1]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            transition={spring}
                          >
                            {toggleState[1] ? (
                              <>
                                <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                                <IoClose className="text-[20px] text-[#fff] pl-[2px]" />
                              </>
                            )}
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[1] && (
                            <motion.div
                              key="accordion2"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full pl-5"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] flex flex-col items-center justify-center gap-4">
                                <p className="max-w-[36.875rem] font-jetBrain text-[0.9375rem] leading-[1.4375rem] text-[--Dark]">
                                  These cookies allow this website to remember
                                  the choices you have made in the past.
                                </p>

                                <div className="grid grid-cols-[1fr_1.5fr_1.5fr_2fr] w-full px-1">
                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] pb-2 border-b">
                                      Name
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        ^_ga
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        _gid
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] pb-2 border-b">
                                      Domain
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        google.com
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        google.com
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] pb-2 border-b">
                                      Expiration
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        2 years
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        1 day
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] pb-2 border-b">
                                      Description
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        description ...
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        description ...
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Accordian 03 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(2)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[2] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.9375rem] font-jetBrain leading-[1.4375rem] text-[--Dark]">
                              Advertisement and Targeting cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer`}
                            onClick={() => toggleSwitch(2)}
                            initial={{
                              backgroundColor: toggleState[2]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            animate={{
                              backgroundColor: toggleState[2]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            transition={spring}
                          >
                            {toggleState[2] ? (
                              <>
                                <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                                <IoClose className="text-[20px] text-[#fff] pl-[2px]" />
                              </>
                            )}
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[2] && (
                            <motion.div
                              key="accordion2"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full pl-5"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA]">
                                <p className="max-w-[36.875rem] font-jetBrain text-[0.9375rem] leading-[1.4375rem] text-[--Dark]">
                                  These cookies collect information about how
                                  you use this website, which pages you visited
                                  and which links you clicked on. All of the
                                  data is anonymized and cannot be used to
                                  identify you.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* More Information */}
                      <div
                        className="max-w-[39.375rem] h-[7.1875rem] rounded-[0.3125rem] p-4 flex justify-center flex-col gap-2 my-4"
                        style={{ border: "1px solid #EEE" }}
                      >
                        <h1 className="text-[--Blue] text-[1.0625rem] font-[500] leading-[1.5rem]">
                          More Information
                        </h1>
                        <p className="text-[--Dark] font-jetBrain text-[0.9375rem] leading-[1.4375rem] max-w-[36.875rem]">
                          For any queries in relation to our policy on cookies
                          and your choices, please{" "}
                          <a
                            href="/contact-us"
                            className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] underline cursor-pointer"
                            target="_blank"
                          >
                            Contact Us
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower Section */}
                <div
                  className="w-full h-[25%] max-h-[5rem] rounded-[0_0_0.625rem_0.625rem] flex items-center justify-center py-4 bg-white"
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.10)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.10)",
                    borderRadius: "0rem 0rem 0.625rem 0.625rem",
                  }}
                >
                  <div className="w-[92%] h-full  flex items-center justify-between gap-4">
                    <div className="flex items-center justify-center gap-2 max-w-[50%]">
                      <Button02
                        customButtonCss={`!w-[11.25rem] !h-[2.875rem] !transition-all !duration-500 !ease-in-out hover:!bg-[--HoveredBlue]`}
                        Title={"Accept All"}
                        onclickFunction={toggleAcceptAll}
                      />
                      <Button02
                        customButtonCss={`!w-[11.25rem] !h-[2.875rem] !bg-[--MidGray] !transition-all !duration-500 !ease-in-out hover:!bg-[#363c4f29]`}
                        TitleCss={"!text-[--Dark]"}
                        Title={"Reject All"}
                        onclickFunction={toggleRejectAll}
                      />
                    </div>
                    <div className="max-w-[50%]">
                      <Button02
                        customButtonCss={`!w-[11.25rem] !h-[2.875rem] !bg-[--MidGray] !transition-all !duration-500 !ease-in-out hover:!bg-[#363c4f29]`}
                        TitleCss={"!text-[--Dark]"}
                        Title={"Save Settings"}
                        onclickFunction={toggleSaveSetting}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Tablet View */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className={`w-full h-[calc(100vh-1px)] bg-[#fff] bg-opacity-90 fixed top-0 z-[99999] flex justify-center maxTab:hidden max-minTab:hidden ${
                isLandscape ? "items-end" : "items-center"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ scale: 0 }}
                className={`max-w-[43.125rem] w-[100%] ${
                  isLandscape ? "h-[55%] mb-[60px]" : "h-[60%]"
                } max-h-[45rem] bg-[#fff] rounded-[0.625rem] flex items-center flex-col justify-between`}
              >
                {/* Upper Section */}
                <div
                  className="flex items-center justify-between px-6 py-2 w-full h-[15%] border-t border-r border-l border-[rgba(0,0,0,0.10)]"
                  style={{
                    borderRadius: "0.625rem 0.625rem 0rem 0rem",
                  }}
                >
                  <Image
                    src={CookieParserIcon}
                    alt="Cookieparser"
                    className={`${
                      isLandscape
                        ? "w-[3.5rem] h-[3.5rem] translate-y-[-18px]"
                        : "w-[5rem] h-[5rem] translate-y-[-25px]"
                    }  absolute `}
                  />

                  <h1
                    className={`${
                      isLandscape ? "text-[1.3rem]" : "text-[1.625rem]"
                    } font-[700] text-[--Blue] pl-[6rem]`}
                  >
                    Cookie Preferences
                  </h1>

                  {/* Close Icon */}
                  <i
                    className={`${isLandscape ? "text-[25px]" : "text-[30px]"}`}
                    onClick={toggleClose}
                  >
                    <IoClose />
                  </i>
                </div>

                {/* Middle Section */}
                <div
                  className="w-full h-[80%] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <div className="w-[98%] h-full flex justify-center overflow-y-auto custom-scrollbar02">
                    <div className="h-fit pt-5 pb-1 flex flex-col gap-3">
                      <h1 className="text-[--Blue] text-[1.0625rem] font-[500] leading-[1.5rem]">
                        Cookie Usage
                      </h1>
                      <p className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] max-w-[39.375rem]">
                        We use cookies to ensure the basic functionalities of
                        this website and to enhance your online experience. You
                        can choose for each category to opt-in/out whenever you
                        want. For more details relative to cookies and other
                        sensitive data, please read the full{" "}
                        <a
                          href="/privacy"
                          className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] underline cursor-pointer"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>

                      {/* Accordian 01 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4 mt-1`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(0)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[0] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.9375rem] font-jetBrain leading-[1.4375rem] text-[--Dark]">
                              Strictly necessary cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer bg-[#d7d7fa]`}
                          >
                            <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                            <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[0] && (
                            <motion.div
                              key="accordion1"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA]">
                                <p className="max-w-[36.875rem] font-jetBrain text-[0.9375rem] leading-[1.4375rem] text-[--Dark]">
                                  These cookies are essential for the proper
                                  functioning of this website. Without these
                                  cookies, the website would not work properly.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Accordian 02 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(1)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[1] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.9375rem] font-jetBrain leading-[1.4375rem] text-[--Dark]">
                              Performance and Analytics cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer`}
                            onClick={() => toggleSwitch(1)}
                            initial={{
                              backgroundColor: toggleState[1]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            animate={{
                              backgroundColor: toggleState[1]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            transition={spring}
                          >
                            {toggleState[1] ? (
                              <>
                                <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                                <IoClose className="text-[20px] text-[#fff] pl-[2px]" />
                              </>
                            )}
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[1] && (
                            <motion.div
                              key="accordion2"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] flex flex-col items-center justify-center gap-4">
                                <p className="max-w-[36.875rem] font-jetBrain text-[0.9375rem] leading-[1.4375rem] text-[--Dark] ">
                                  These cookies allow this website to remember
                                  the choices you have made in the past.
                                </p>

                                <div className="grid grid-cols-[0.8fr_1fr_1fr_2fr] w-full px-1">
                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] pb-2 font-[500] border-b">
                                      Name
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        ^_ga
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        _gid
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] pb-2 font-[500] border-b">
                                      Domain
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        google.com
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        google.com
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] pb-2 font-[500] border-b">
                                      Expiration
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        2 years
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        1 day
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.8125rem] pb-2 font-[500] border-b">
                                      Description
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        description ...
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500]">
                                        description ...
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Accordian 03 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(2)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[2] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.9375rem] font-jetBrain leading-[1.4375rem] text-[--Dark]">
                              Advertisement and Targeting cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer`}
                            onClick={() => toggleSwitch(2)}
                            initial={{
                              backgroundColor: toggleState[2]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            animate={{
                              backgroundColor: toggleState[2]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            transition={spring}
                          >
                            {toggleState[2] ? (
                              <>
                                <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                                <IoClose className="text-[20px] text-[#fff] pl-[2px]" />
                              </>
                            )}
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[2] && (
                            <motion.div
                              key="accordion2"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA]">
                                <p className="max-w-[36.875rem] font-jetBrain text-[0.9375rem] leading-[1.4375rem] text-[--Dark]">
                                  These cookies collect information about how
                                  you use this website, which pages you visited
                                  and which links you clicked on. All of the
                                  data is anonymized and cannot be used to
                                  identify you.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* More Information */}
                      <div
                        className="max-w-[39.375rem] h-[7.1875rem] rounded-[0.3125rem] p-4 flex justify-center flex-col gap-4 my-4 py-6"
                        style={{ border: "1px solid #EEE" }}
                      >
                        <h1 className="text-[--Blue] text-[1.0625rem] font-[500] leading-[1.5rem]">
                          More Information
                        </h1>
                        <p className="text-[--Dark] font-jetBrain text-[0.9375rem] leading-[1.4375rem] max-w-[36.875rem]">
                          For any queries in relation to our policy on cookies
                          and your choices, please{" "}
                          <a
                            href="/contact-us"
                            className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] underline cursor-pointer"
                            target="_blank"
                          >
                            Contact Us
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower Section */}
                <div
                  className="w-full h-[25%] max-h-[5rem] rounded-[0_0_0.625rem_0.625rem] flex items-center justify-center py-4 bg-white"
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.10)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.10)",
                    borderRadius: "0rem 0rem 0.625rem 0.625rem",
                  }}
                >
                  <div className="w-[92%] h-full  flex items-center justify-between gap-4">
                    <div className="flex items-center justify-center gap-2 max-w-[50%]">
                      <Button02
                        customButtonCss={`!w-[11.25rem] ${
                          isLandscape ? "!h-[2rem]" : "!h-[2.875rem]"
                        }`}
                        Title={"Accept All"}
                        onclickFunction={toggleAcceptAll}
                      />
                      <Button02
                        customButtonCss={`${
                          isLandscape ? "!h-[2rem]" : "!h-[2.875rem]"
                        } !bg-[--MidGray]`}
                        TitleCss={"!text-[--Dark]"}
                        Title={"Reject All"}
                        onclickFunction={toggleRejectAll}
                      />
                    </div>
                    <div className="max-w-[50%]">
                      <Button02
                        customButtonCss={`!w-[11.25rem] !h-[2.875rem] !bg-[--MidGray]${
                          isLandscape ? "!h-[2rem]" : "!h-[2.875rem]"
                        } !bg-[--MidGray]`}
                        TitleCss={"!text-[--Dark]"}
                        Title={"Save Settings"}
                        onclickFunction={toggleRejectAll}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile View */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="w-full h-[100vh] bg-[#fff] bg-opacity-90 fixed top-0 bottom-0 z-[99999] items-center justify-center hidden max-minTab:flex"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ scale: 0 }}
                className="max-w-[24.375rem] w-[95%] h-[67%] max-h-[46rem] bg-[#fff] rounded-[0.625rem] max-mvsm:-mt-[4rem] max-vsm:-mt-[8rem] flex items-center flex-col justify-between"
              >
                {/* Upper Section */}
                <div
                  className="flex items-center justify-between px-6 py-2 w-full h-[15%] border-t border-r border-l border-[rgba(0,0,0,0.10)]"
                  style={{
                    borderRadius: "0.625rem 0.625rem 0rem 0rem",
                  }}
                >
                  <Image
                    src={CookieParserIcon}
                    alt="Cookieparser"
                    className={`w-[3.75rem] h-[3.75rem] absolute translate-y-[-20px]`}
                  />

                  <h1 className="text-[1.0625rem] font-[700] text-[--Blue] pl-[23%]">
                    Cookie Preferences
                  </h1>

                  {/* Close Icon */}
                  <i
                    className="text-[30px] cursor-pointer"
                    onClick={toggleClose}
                  >
                    <IoClose />
                  </i>
                </div>

                {/* Middle Section */}
                <div
                  className="w-full h-[80%] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <div className="w-[98%] h-full flex justify-center overflow-y-auto custom-scrollbar02">
                    <div className="h-fit pb-1  flex flex-col gap-2 px-4 mt-6">
                      <h1 className="text-[--Blue] text-[0.875rem] font-[500]">
                        Cookie Usage
                      </h1>
                      <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] max-w-[21.875rem]">
                        We use cookies to ensure the basic functionalities of
                        this website and to enhance your online experience. You
                        can choose for each category to opt-in/out whenever you
                        want. For more details relative to cookies and other
                        sensitive data, please read the full{" "}
                        <a
                          href="/privacy"
                          className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] underline"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>

                      {/* Accordian 01 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4 mt-3`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(0)}
                          >
                            <FaChevronRight
                              className={`text-[14px] ${
                                isAccordionOpen[0] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.8125rem] font-[500] font-jetBrain">
                              Strictly necessary cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer bg-[#d7d7fa]`}
                          >
                            <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                            <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[0] && (
                            <motion.div
                              key="accordion1"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full"
                            >
                              <div className="rounded-[0.3125rem] bg-[#FAFAFA]">
                                <p className="text-[0.6875rem] font-[500] max-w-[19.6875rem] font-jetBrain">
                                  These cookies are essential for the proper
                                  functioning of this website. Without these
                                  cookies, the website would not work properly.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Accordian 02 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(1)}
                          >
                            <FaChevronRight
                              className={`text-[14px] mb-5 ${
                                isAccordionOpen[1] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.8125rem] font-[500] font-jetBrain max-w-[11.5rem]">
                              Performance and Analytics cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer`}
                            onClick={() => toggleSwitch(1)}
                            initial={{
                              backgroundColor: toggleState[1]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            animate={{
                              backgroundColor: toggleState[1]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            transition={spring}
                          >
                            {toggleState[1] ? (
                              <>
                                <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                                <IoClose className="text-[20px] text-[#fff] pl-[2px]" />
                              </>
                            )}
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[1] && (
                            <motion.div
                              key="accordion2"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] flex flex-col items-center justify-center gap-4">
                                <p className="text-[0.6875rem] font-[500] max-w-[19.6875rem] font-jetBrain">
                                  These cookies allow this website to remember
                                  the choices you have made in the past.
                                </p>

                                <div className="grid grid-cols-[0.8fr_1.5fr_1.5fr_2fr]  w-full">
                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] pb-2 font-[700] border-b">
                                      Name
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        ^_ga
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        _gid
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain pb-2 text-[0.6875rem] max-mvsm:text-[0.58rem] font-[700] border-b">
                                      Domain
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        google.com
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        google.com
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain pb-2 text-[0.6875rem] max-mvsm:text-[0.58rem] font-[700] border-b">
                                      Expiration
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        2 years
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        1 day
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center flex-col gap-2">
                                    <h1 className="text-[--Dark] font-jetBrain pb-2 max-mvsm:text-[0.58rem] text-[0.6875rem] font-[700] border-b">
                                      Description
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        description ...
                                      </p>
                                      <p className="text-[--Dark] font-jetBrain text-[0.6875rem] max-mvsm:text-[0.58rem] font-[500]">
                                        description ...
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Accordian 03 */}
                      <div
                        className={`max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA] p-4 flex flex-col justify-center gap-4`}
                        style={{ border: "1px solid #EEE" }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => toggleAccordion(2)}
                          >
                            <FaChevronRight
                              className={`text-[14px] mb-5 ${
                                isAccordionOpen[2] ? "transform rotate-90" : ""
                              }`}
                            />
                            <h1 className="text-[0.8125rem] font-[500] font-jetBrain max-w-[11.5rem]">
                              Advertisement and Targeting cookies
                            </h1>
                          </div>

                          {/* Toggle Button */}
                          <motion.div
                            className={`w-[3.4375rem] h-[1.5rem] flex items-center justify-between p-[6px] rounded-[50px] cursor-pointer`}
                            onClick={() => toggleSwitch(2)}
                            initial={{
                              backgroundColor: toggleState[2]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            animate={{
                              backgroundColor: toggleState[2]
                                ? "#4B4BFA"
                                : "#848893",
                            }}
                            transition={spring}
                          >
                            {toggleState[2] ? (
                              <>
                                <FaCheck className="text-[15px] text-[#fff] pl-[2px]" />
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-[15px] h-[15px] bg-[#fff] rounded-full" />
                                <IoClose className="text-[20px] text-[#fff] pl-[2px]" />
                              </>
                            )}
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isAccordionOpen[2] && (
                            <motion.div
                              key="accordion2"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                              className="w-full"
                            >
                              <div className="max-w-[39.375rem] rounded-[0.3125rem] bg-[#FAFAFA]">
                                <p className="text-[0.6875rem] font-[500] max-w-[19.6875rem] font-jetBrain">
                                  These cookies collect information about how
                                  you use this website, which pages you visited
                                  and which links you clicked on. All of the
                                  data is anonymized and cannot be used to
                                  identify you.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* More Information */}
                      <div
                        className="max-w-[39.375rem] rounded-[0.3125rem] p-4 flex justify-center flex-col gap-4 my-4 py-4"
                        style={{ border: "1px solid #EEE" }}
                      >
                        <h1 className="text-[--Blue] text-[0.875rem] font-[500] leading-[1.5rem]">
                          More Information
                        </h1>
                        <p className="text-[--Dark] font-jetBrain text-[0.875rem] font-[500] leading-[1.4375rem] max-w-[19.375rem]">
                          For any queries in relation to our policy on cookies
                          and your choices, please{" "}
                          <a
                            href="/contact-us"
                            className="text-[--Dark] font-jetBrain text-[0.875rem] font-[500] leading-[1.4375rem] underline cursor-pointer"
                            target="_blank"
                          >
                            Contact Us
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower Section */}
                <div
                  className="w-full h-[55%] max-h-[8rem] rounded-[0_0_0.625rem_0.625rem] flex items-center justify-center py-4 bg-white"
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.10)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.10)",
                    borderRadius: "0rem 0rem 0.625rem 0.625rem",
                  }}
                >
                  <div className="w-[92%] h-full flex items-center justify-center flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 w-full">
                      <Button02
                        customButtonCss={`!w-[11.25rem] !h-[2.875rem]`}
                        Title={"Accept All"}
                        onclickFunction={toggleAcceptAll}
                      />
                      <Button02
                        customButtonCss={`!w-[11.25rem] !h-[2.875rem] !bg-[--MidGray]`}
                        TitleCss={"!text-[--Dark]"}
                        Title={"Reject All"}
                        onclickFunction={toggleRejectAll}
                      />
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <Button02
                        customButtonCss={`!w-full !h-[2.875rem] !bg-[--MidGray]`}
                        TitleCss={"!text-[--Dark]"}
                        Title={"Save Settings"}
                        onclickFunction={toggleSaveSetting}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const ConfirmedSend = ({ setSend, setCleanForm }) => {
  const [isLandscape, setIsLandscape] = useState(false);

  const toggleSend = () => {
    setCleanForm(true);
    setSend(false);
  };

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
  return (
    <>
      <div className="w-full h-[calc(100vh-1px)] bg-[#fff] bg-opacity-30 fixed top-0 z-[99999] flex items-center justify-center">
        {/* Blur Blue Background */}
        <div
          className={`maxTab:w-[25.25rem] maxTab:h-[25.25rem] minTab:w-[22.25rem] minTab:h-[22.25rem] w-[20.25rem] h-[20.25rem]  maxTab:rounded-[25.25rem] minTab:rounded-[22.25rem] rounded-[20.25rem] bg-[--Blue] opacity-50 blur-[50px] fixed z-[9999] ${
            isLandscape ? "mt-[8rem] !opacity-50" : ""
          }`}
        />
        <div
          className={`maxTab:max-w-[45rem] max-w-[24.375rem] maxTab:w-[80%] w-[90%] maxTab:h-[22rem] rounded-[0.625rem] bg-[#fff] z-[9999] flex items-center justify-center flex-col maxTab:gap-6 gap-4 ${
            isLandscape ? "h-[15.625rem] mt-[5.5rem]" : "h-[20.625rem]"
          }`}
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={SendContact}
            alt="Confirm"
            className={`maxTab:w-[8rem] maxTab:h-[8rem] absolute maxTab:-translate-y-[155px] ${
              isLandscape
                ? "w-[5rem] h-[5rem] -translate-y-[110px]"
                : "w-[6.25rem] h-[6.25rem] max-maxTab:-translate-y-[145px]"
            }`}
          />
          <h1
            className={`max-w-[29.375rem] text-[--Blue] text-center maxTab:text-[1.625rem] text-[1.0625rem] font-[700] maxTab:mt-[8rem] mt-[9.5rem]  maxTab:leading-[33.85px] ${
              isLandscape
                ? "-translate-y-[40px] !mt-[7rem]"
                : "max-maxTab:-translate-y-[60px]"
            }`}
          >
            Message Sent
          </h1>
          <p
            className={`maxTab:max-w-[32.3125rem] max-w-[19.375rem] text-[--Dark] text-center font-jetBrain text-[0.9375rem] max-maxTab:text-[0.8125rem] maxTab:font-[400] font-[500] maxTab:leading-[1.4375rem] maxTab:mb-2 max-minTab:-translate-y-[60px] ${
              isLandscape ? "-translate-y-[50px]" : "minTab:-translate-y-[60px]"
            }`}
          >
            We’ve received your message. A MessageMoment team member will be in
            contact with you soon. Thank you.
          </p>
          <Button02
            customButtonCss={`maxTab:!w-[14.75rem] !w-[90%] maxTab:hover:!bg-[--HoveredBlue] ${
              isLandscape
                ? "-translate-y-[50px]"
                : "max-maxTab:-translate-y-[50px] !h-[2.875rem]"
            }`}
            Title={"OK"}
            onclickFunction={toggleSend}
          />
        </div>
      </div>
    </>
  );
};

export { Cookieparser, Cookiepreferences, ConfirmedSend };
