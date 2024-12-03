"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Images and Icons
import tip from "../../../../public/Icons/tip.svg";
import NotGeneratedLinkIcon from "../../../../public/Icons/NotGeneratedLinkIcon.svg";
import GeneratedLinkIcon from "../../../../public/Icons/GeneratedLinkIcon.svg";
import NotGeneratedQRCodeIcon from "../../../../public/Icons/NotGeneratedQRCodeIcon.svg";
import GeneratedQRCodeIcon from "../../../../public/Icons/GeneratedQRCodeIcon.svg";
import NotGeneratedCopyIcon from "../../../../public/Icons/NotGeneratedCopyIcon.svg";
import GeneratedCopyIcon from "../../../../public/Icons/GeneratedCopyIcon.svg";

// Fuctions
import SecurityCode from "@/components/Common/SecurityCode";
import {
  generateStandardLink,
  generateSecureLink,
} from "@/functions/LinksGenerator";
import VerificationCodeGenerator from "@/functions/VerificationCodeGenerator";
import { Tooltip, Tooltip03, Tooltip04 } from "@/functions/Tooltips";
import { Button03 } from "@/functions/Buttons";
import QRCodeGenerator from "@/functions/QRCodeGenerator";
import VerifyYouAreHuman from "@/functions/VerifyYouAreHuman";
import {
  ChatTypeDropdown,
  QRCodeGeneratorDropdown,
} from "@/components/Common/DropDowns";

const LinkGenerationSection = ({ setIsLinkTypeSecure }) => {
  const [linkType, setLinkType] = useState("standard");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isTabletDropdownOpen, setTabletDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isQrScannerOpen, setQrScannerOpen] = useState(false);
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);
  const [isCoppied, setIsCoppied] = useState(false);
  const [isRegenrated, setIsRegenerated] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const [middleSmallScreens, setMiddleSmallScreens] = useState(true);

  const dropdownRef = useRef(null);

  // Toggle Functions
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const toggleTabletDropdown = () => {
    setQrScannerOpen(false);
    setTabletDropdownOpen((prevState) => !prevState);
  };

  const toggleMobileDropdown = () => {
    setQrScannerOpen(false);
    setMobileDropdownOpen((prevState) => !prevState);
  };

  const toggleQrScanner = () => {
    setTabletDropdownOpen(false);
    setMobileDropdownOpen(false);
    setQrScannerOpen(!isQrScannerOpen);
  };

  const toggleCopy = () => {
    setIsCoppied(true);
    setTimeout(() => {
      setIsCoppied(false);
    }, 1000);
  };

  const toggleGenerate = () => {
    setIsRegenerated(true);
    setTimeout(() => {
      setIsRegenerated(false);
    }, 1000);
  };

  // Select Link Type
  const handleLinkTypeChange = (newType) => {
    setLinkType(newType);
    setDropdownOpen(false);
    setTabletDropdownOpen(false);
    setMobileDropdownOpen(false);
    setGeneratedLink("");
    setSecurityCode("");
    setIsLinkGenerated(false);

    if (newType == "standard") {
      setIsLinkTypeSecure(false);
    } else {
      setIsLinkTypeSecure(true);
    }
  };

  // Generate Link
  const generateLink = () => {
    const link =
      linkType === "standard" ? generateStandardLink() : generateSecureLink();

    setGeneratedLink(link);
    setIsLinkGenerated(true);

    if (linkType === "secure") {
      setSecurityCode(VerificationCodeGenerator());
    }
  };

  // Open Chat
  const openChat = () => {};

  // Copy to Clipboard Function
  const handleCopyToClipboard = () => {
    if (generatedLink) {
      const textArea = document.createElement("textarea");

      let copyText = generatedLink;

      if (linkType === "secure" && securityCode) {
        copyText += `\nSecurity Code: ${securityCode}`;
      }

      textArea.value = copyText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      toggleCopy();
    }
  };

  // Verify if Cloudflare is success
  const handleVerificationSuccess = () => {
    console.log("HANDLING VERIFICATION SUCCESS");
    setActiveButton(true);
  };

  // UseEffects
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("#regenerateButton") &&
        isQrScannerOpen
      ) {
        setQrScannerOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isQrScannerOpen]);

  useEffect(() => {
    if (window.innerWidth >= 980) {
      setMiddleSmallScreens(false);
    } else {
      setMiddleSmallScreens(true);
    }
  }, []);

  // Responsive Functions
  const handleDropdown = () => {
    if (window.innerWidth >= 980) {
      toggleDropdown();
    } else if (window.innerWidth >= 550) {
      toggleTabletDropdown();
    } else {
      toggleMobileDropdown();
    }
  };

  // USEEFFECT FOR MAC CHROME CLASSES
  useEffect(() => {
    if (navigator.userAgent.indexOf("Mac OS") !== -1) {
      document.body.classList.add("mac-os");
    }
    return () => {
      document.body.classList.remove("mac-os");
    };
  }, []);

  // USEEFFECT FOR MAC FIREFOX CLASSES
  useEffect(() => {
    if (navigator.userAgent.indexOf("Mac OS") !== -1) {
      document.body.classList.add("mac-os-firefox");
    }
    return () => {
      document.body.classList.remove("mac-os-firefox");
    };
  }, []);

  return (
    <>
      <div
        id="linkGenerate"
        className={`bg-[--Blue] max-w-[1096px] maxTab:w-[75%] rounded-[20px] absolute z-50 maxTab:bottom-[-18%] maxTab:right-auto right-[15px] maxTab:left-1/2 left-[15px] mx-auto maxTab:transform maxTab:-translate-x-1/2 ${
          linkType === "secure"
            ? "minTab:-bottom-[43%] -bottom-[81.8%] max-mvsm:-bottom-[82%]"
            : "minTab:-bottom-[35.9%] -bottom-[71.1%] max-mvsm:-bottom-[71.7%]"
        }`}
      >
        {/* Top Text */}
        <p className="maxTab:py-7 py-4 minTab:px-8 font-medium maxTab:text-[17px] minTab:text-[15px] text-[14px] max-minTab:max-w-[261px] mx-auto text-white text-center maxTab:px-6 maxTab:leading-[24px]">
          Click the button below to receive your random link that you can share
          with your friends any way you like!
        </p>

        <div className="bg-black bg-opacity-[8%] rounded-[0_0_20px_20px] maxTab:px-[30px] px-4 maxTab:pt-[35px] pt-[18px] pb-[15px]">
          <div className="overflow-visible bg-transparent rounded-none">
            <div className="w-full">
              <div className="w-full max-maxTab:bg-[#fff] max-maxTab:rounded-[0.3125rem] maxTab:flex">
                {/* Link Generator Output Box */}
                <div
                  className={`flex w-full h-[3.125rem] bg-[#fff] max-maxTab:rounded-[0.3125rem_0.3125rem_0rem_0rem] max-maxTab:border-b-[1px] border-b-[#DDDD] ${
                    isDropdownOpen
                      ? "maxTab:rounded-[0.3125rem_0.3125rem_0.3125rem_0rem]"
                      : "maxTab:rounded-[0.3125rem]"
                  }`}
                >
                  {/* Right Select Link Section */}
                  <div
                    ref={dropdownRef}
                    className={`flex items-center minTab:max-w-[8.75rem] max-minTab:max-w-[3.8125rem] w-full maxTab:cursor-pointer justify-between px-3 gap-0 border-r-[1px] border-r-[#DDDD] ${
                      linkType === "standard" ? "MACFireFoxPaddingTop1px" : ""
                    }`}
                    onClick={handleDropdown}
                  >
                    {/* Standard And Secure Icon */}
                    <span className="minTab:mr-[10px]">
                      {linkType === "standard" ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="scale-[0.98] scale0 mb2px"
                        >
                          <path
                            d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z"
                            fill="#CCCCCC"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="13"
                          height="16"
                          viewBox="0 0 13 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="translate-x-[2px] maxTab:mb-[2px] mb1px scale-[0.98] scale0"
                        >
                          <path
                            d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z"
                            fill="#CCCCCC"
                          />
                        </svg>
                      )}
                    </span>

                    {/* Link Type Display */}
                    <p
                      className={`-translate-x-[10%] ${
                        linkType === "standard"
                          ? "minTab:mt-[1px] marginTopStandard maxTab:ml-[2px] ml3px MACFireFoxMarginLeft1px FireFoxMarginLeft1px"
                          : "-translate-x-[12px] minTab:mt-[1px] MACFireFoxMargintTop1px FireFoxMarginTop0px FireFoxTranslateX13px ml1px"
                      } maxTab:text-[17px] minTab:text-[15px] max-minTab:hidden`}
                    >
                      {linkType === "standard" ? "Standard" : "Secure"}
                    </p>

                    {/* Dropdown Icon */}
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-[5.2px] w-[9.2px] ${
                          isDropdownOpen ||
                          isTabletDropdownOpen ||
                          isMobileDropdownOpen
                            ? "max-maxTab:rotate-180"
                            : "maxTab:rotate-180"
                        } ${
                          linkType === "standard"
                            ? "translate-x-[-2px] FireFoxTranslateX3px"
                            : "maxTab:ml-[3px] maxTab:translate-x-[-2px] FireFoxMarginTop1px FireFoxTranslateX3px"
                        }`}
                      >
                        <path
                          d="M1.17936 5.00199C1.04922 5.13084 0.873489 5.20312 0.690356 5.20312C0.507223 5.20312 0.331491 5.13084 0.201356 5.00199C0.137106 4.93872 0.0860825 4.8633 0.0512553 4.78012C0.016428 4.69694 -0.00150675 4.60767 -0.00150675 4.51749C-0.00150674 4.42732 0.0164281 4.33804 0.0512553 4.25486C0.0860825 4.17168 0.137106 4.09626 0.201356 4.03299L4.10936 0.202991C4.23979 0.0743175 4.41564 0.00217491 4.59886 0.00217493C4.78207 0.00217494 4.95793 0.0743176 5.08836 0.202991L8.99636 4.03299C9.06061 4.09626 9.11163 4.17169 9.14646 4.25486C9.18128 4.33804 9.19922 4.42732 9.19922 4.51749C9.19922 4.60767 9.18128 4.69694 9.14646 4.78012C9.11163 4.8633 9.06061 4.93872 8.99636 5.00199C8.86622 5.13084 8.69049 5.20312 8.50736 5.20312C8.32422 5.20312 8.14849 5.13084 8.01836 5.00199L4.59736 1.86099L1.17936 5.00199Z"
                          fill="#363C4F"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Left Output Section */}
                  <div className="maxTab:flex-1 maxTab:w-[full] maxTab:flex max-minTab:flex max-minTab:items-center max-minTab:justify-center h-full max-sm:w-[77%] max-minTab:ml-2">
                    <div
                      className={`maxTab:flex-[2] maxTab:pt-[3px] marginTopFF minTab:px-4 flex items-center font-jetBrain text-[#363C4F] text-[15px] max-minTab:text-[14px] font-bold h-full maxTab:px-4 leading-[19.8px] maxTab:pl-4 max-maxTab:overflow-x-scroll max-maxTab:sliders`}
                      onClick={handleCopyToClipboard}
                    >
                      {generatedLink}
                    </div>
                    {/* Security Code -- Desktop */}
                    {linkType === "secure" && (
                      <SecurityCode
                        code={securityCode}
                        classes={`max-w-[13.75rem] w-full flex items-center px-5 rounded-[0_5px_5px_0] font-jetBrain bg-white font-bold text-[15px] border-l border-[#ddd] gap-4 max-maxTab:hidden`}
                      />
                    )}
                  </div>
                </div>

                {/* Right Side Buttons -- Desktop */}
                <div className="flex gap-2 pl-2 items-center max-maxTab:hidden">
                  {/* Regenrate Button -- Desktop */}
                  <Tooltip
                    content={`${isRegenrated ? "Regenerated" : "Regenerate"}`}
                    CustomCss={`!w-[6.875rem] !h-[2.375rem] top-[-20px] right-[-30px] !font-jetBrain ${
                      isQrScannerOpen ? "!hidden hover:!hidden" : ""
                    }`}
                    tipCss={`top-[34px] left-[50px] w-[10px] h-[10px] transform rotate-180`}
                  >
                    <Button03
                      onclickFunction={() => {
                        toggleGenerate();
                        generateLink();
                      }}
                      SVG={
                        isLinkGenerated
                          ? GeneratedLinkIcon
                          : NotGeneratedLinkIcon
                      }
                      customButtonCss={`border-[2px] border-white rounded-[5px] tansition-all duration-500 ease-in-out ${
                        isLinkGenerated === false
                          ? "border-white border-opacity-20 bg-white bg-opacity-20"
                          : "bg-blue hover:!bg-dark hover:!bg-opacity-50 cursor-pointer"
                      }`}
                      buttonDisabled={isLinkGenerated ? false : true}
                      ButtonId={`regenerateButton`}
                    />
                  </Tooltip>

                  {/* QR Code Button -- Desktop */}
                  <Tooltip
                    content={`Scan QR Code`}
                    CustomCss={`!w-[8.375rem] !h-[2.375rem] top-[-20px] right-[-42px] !font-jetBrain ${
                      isQrScannerOpen ? "!hidden hover:!hidden" : ""
                    }`}
                    tipCss={`w-[10px] h-[10px] top-[34px] left-[62px] transform rotate-180`}
                  >
                    <Button03
                      SVG={
                        isLinkGenerated
                          ? GeneratedQRCodeIcon
                          : NotGeneratedQRCodeIcon
                      }
                      customButtonCss={`border-[2px] border-white rounded-[5px] tansition-all duration-500 ease-in-out ${
                        isLinkGenerated === false
                          ? "bg-white"
                          : "bg-white cursor-pointer"
                      }`}
                      onclickFunction={toggleQrScanner}
                      buttonDisabled={isLinkGenerated ? false : true}
                    />
                  </Tooltip>

                  {/* Copy To Clipboard -- Desktop */}
                  <Tooltip
                    content={`${
                      isCoppied ? "Link copied to clipboard" : "Copy URL"
                    }`}
                    CustomCss={`!font-jetBrain ${
                      isCoppied
                        ? "!w-[14.75rem] !h-[2.375rem] top-[-20px] right-[-88px]"
                        : `!w-[6.25rem] !h-[2.375rem] top-[-20px] right-[-23px] ${
                            isQrScannerOpen ? "!hidden hover:!hidden" : ""
                          }`
                    }`}
                    tipCss={`${
                      isCoppied
                        ? "top-[34px] left-[117px]"
                        : "top-[34px] left-[46px]"
                    } w-[10px] h-[10px] transform rotate-180`}
                  >
                    <Button03
                      SVG={
                        isLinkGenerated
                          ? GeneratedCopyIcon
                          : NotGeneratedCopyIcon
                      }
                      customButtonCss={`border-[2px] border-white rounded-[5px] tansition-all duration-500 ease-in-out ${
                        isLinkGenerated === false
                          ? "bg-white"
                          : "bg-white cursor-pointer"
                      }`}
                      buttonDisabled={isLinkGenerated ? false : true}
                      onclickFunction={handleCopyToClipboard}
                    />
                  </Tooltip>
                </div>

                {/* Security Code -- Tablet & Mobile */}
                {linkType === "secure" && (
                  <SecurityCode
                    code={securityCode}
                    classes={`w-full justify-center flex items-center font-jetBrain bg-white font-bold text-sm h-[3.125rem] gap-2 maxTab:hidden bg-[#fff] border-b-[1px] border-b-[#DDDD] `}
                  />
                )}

                {/* Cloudflare -- Mobile and Tablet */}
                <div
                  className={`flex items-center w-full h-[6.5625rem] justify-center mb-3 maxTab:hidden ${
                    linkType === "secure" ? "" : ""
                  }`}
                >
                  <div className="w-[300px]">
                    <VerifyYouAreHuman
                      onVerificationSuccess={handleVerificationSuccess}
                    />
                  </div>
                </div>
              </div>
              {/* DropDown -- Desktop */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    exit={{ opacity: 0 }}
                    className="absolute w-[8.75rem] h-[94px] bg-white rounded-[0px_0px_6px_6px] shadow-lg max-maxTab:hidden"
                  >
                    <div
                      className="h-1/2 text-[17px] border-t border-b border-[--LightGray] flex items-center gap-[10px] cursor-pointer transition-all duration-500 ease-in-out pl-[12px]"
                      onClick={() => handleLinkTypeChange("standard")}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all ease-in-out duration-500 mb-[0.05rem] scale-[0.98] scale0 marginBottomStandard top2px"
                      >
                        <path
                          d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z"
                          fill="#CCCCCC"
                        />
                      </svg>

                      <p
                        className={`${
                          linkType === "standard"
                            ? "maxTab:-translate-x-[2px] pb1px FireFoxTranslateX3px"
                            : "maxTab:-translate-x-[2px] top1px FireFoxTranslateX3px"
                        } `}
                      >
                        Standard
                      </p>
                    </div>
                    <div
                      className="h-1/2 flex text-[17px] items-center gap-[9px] cursor-pointer transition-all duration-500 ease-in-out pl-[16px]"
                      onClick={() => handleLinkTypeChange("secure")}
                    >
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`-translate-x-[2px] mb-[1px] scale-[0.98] scale0 marginBottomSecure top2px`}
                      >
                        <path
                          d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z"
                          fill="#CCCCCC"
                        />
                      </svg>
                      <p
                        className={`${
                          linkType === "standard"
                            ? "maxTab:-translate-x-[2px] pb1px FireFoxTranslateX3px"
                            : "maxTab:-translate-x-[2px] top1px FireFoxTranslateX3px"
                        }`}
                      >
                        Secure
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cloudflare & Generate Button -- Desktop */}
              <div className="flex flex-row items-center gap-5 mt-4 max-maxTab:hidden">
                <div className="w-[300px]">
                  <VerifyYouAreHuman
                    onVerificationSuccess={handleVerificationSuccess}
                  />
                </div>

                {/* Generate / Open Link Button */}
                <div className="grow w-full flex gap-[10px] max-maxTab:hidden">
                  {!isLinkGenerated ? (
                    <button
                      onClick={() => {
                        generateLink();
                        setIsLinkGenerated(true);
                      }}
                      className={`bg-white h-[65px] ${
                        activeButton
                          ? "text-blue hover:text-[#4848a4] cursor-pointer"
                          : "text-[#ccc]"
                      } grow font-jetBrain font-bold rounded-md text-[15px] flex items-center justify-center w-full leading-[19.8px]`}
                      disabled={!activeButton}
                    >
                      Generate Link
                    </button>
                  ) : (
                    <button
                      onClick={openChat}
                      className="bg-white h-[65px] text-blue hover:text-[#4848a4] grow font-jetBrain font-bold rounded-md text-[15px] flex items-center justify-center w-full leading-[19.8px]"
                    >
                      Open Chat
                    </button>
                  )}
                </div>
              </div>

              {/* Buttons -- Tablet & Mobile */}
              <div className="w-full flex gap-2 maxTab:hidden">
                {/* Regenrate Button */}
                <Tooltip04
                  content={`Regenerated`}
                  CustomCss={`minTab:!w-[15rem] !w-[12.375rem] !h-[45px] minTab:right-[calc(100vw-65%)] right-[calc(100vw-76%)] !fixed bottom-[18px] minTab:!text-[15px]`}
                  isDisappear={isRegenrated}
                  setIsDisappear={setIsRegenerated}
                >
                  <Button03
                    onclickFunction={() => {
                      toggleGenerate();
                      generateLink();
                    }}
                    SVG={
                      isLinkGenerated ? GeneratedLinkIcon : NotGeneratedLinkIcon
                    }
                    customButtonCss={`border-[2px] border-white rounded-[5px] tansition-all duration-500 ease-in-out ${
                      isLinkGenerated === false
                        ? "border-white border-opacity-20 bg-white bg-opacity-20"
                        : "bg-blue"
                    }`}
                    buttonDisabled={isLinkGenerated ? false : true}
                  />
                </Tooltip04>

                {/* QR Code Button */}
                <Button03
                  SVG={
                    isLinkGenerated
                      ? GeneratedQRCodeIcon
                      : NotGeneratedQRCodeIcon
                  }
                  customButtonCss={`border-[2px] border-white rounded-[5px] tansition-all duration-500 ease-in-out bg-white`}
                  onclickFunction={toggleQrScanner}
                  buttonDisabled={isLinkGenerated ? false : true}
                />

                {/* Copy to Clipboard Button */}
                <Tooltip04
                  content={`Link copied to clipboard`}
                  CustomCss={`minTab:!w-[17.75rem] !w-[15.75rem] !h-[2.8125rem] minTab:right-[calc(100vw-68%)] right-[calc(100vw-84%)] !fixed bottom-[18px] minTab:!text-[16px]`}
                  isDisappear={isCoppied}
                  setIsDisappear={setIsCoppied}
                >
                  <Button03
                    SVG={
                      isLinkGenerated ? GeneratedCopyIcon : NotGeneratedCopyIcon
                    }
                    customButtonCss={`border-[2px] border-white rounded-[5px] tansition-all duration-500 ease-in-out bg-white`}
                    buttonDisabled={isLinkGenerated ? false : true}
                    onclickFunction={handleCopyToClipboard}
                  />
                </Tooltip04>

                {/* Open / Generate Link Chat */}
                {!isLinkGenerated ? (
                  <button
                    onClick={() => {
                      generateLink();
                      setIsLinkGenerated(true);
                    }}
                    className={`bg-white h-[50px] ${
                      activeButton ? "text-blue" : "text-[#ccc]"
                    } grow font-jetBrain font-bold rounded-md text-[15px] flex items-center justify-center`}
                    disabled={activeButton ? false : true}
                  >
                    Generate Link
                  </button>
                ) : (
                  <button
                    onClick={openChat}
                    className="bg-white h-[50px] text-blue grow font-jetBrain font-bold rounded-md text-[15px] flex items-center justify-center"
                  >
                    Open Chat
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="w-full flex items-center justify-center">
            <p className="maxTab:text-[13px] text-[0.6875rem] font-medium text-white text-center maxTab:mt-[13px] maxTab:mb-[10px] minTab:mt-[10px] minTab:px-6 max-minTab:pb-2 max-minTab:pt-6 max-minTab:px-6 max-minTab:max-w-[22rem] max-minTab:leading-[14px]">
              By starting this chat session, you agree to our{" "}
              <Link href={`/terms`} className="underline" target="_blank">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href={`/privacy`} className="underline" target="_blank">
                Privacy Policy
              </Link>
              , and that you and everybody you share the chat link with is above
              16 years of age.
            </p>
          </div>
        </div>

        {/* QR Code Generator Component */}
        {middleSmallScreens ? (
          <>
            {/* Tablet & Mobile */}
            {isQrScannerOpen && (
              <QRCodeGeneratorDropdown
                toggleQrScanner={toggleQrScanner}
                generatedLink={generatedLink}
              />
            )}
          </>
        ) : (
          <>
            {/* Desktop */}
            {isQrScannerOpen && (
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                id="qrScannerComponent"
                className="absolute top-[-178px] right-[-27px] items-center justify-center max-maxTab:hidden"
              >
                <QRCodeGenerator
                  generatedLink={generatedLink}
                  classes="p-4 rounded-[20px] w-[full] bg-[black] bg-cover bg-no-repeat p-[10px] w-full"
                />
                <Image
                  src={tip}
                  alt="tip"
                  className="absolute top-[271.0px] right-[135px] w-[10px] h-[20px] transform rotate-180"
                  width="auto"
                  height="auto"
                />
              </motion.div>
            )}
          </>
        )}

        {/* Select Link DropDown Tablet & Mobile*/}
        {isTabletDropdownOpen && (
          <ChatTypeDropdown
            toggleDropdown={toggleTabletDropdown}
            handleLinkTypeChange={handleLinkTypeChange}
          />
        )}

        {isMobileDropdownOpen && (
          <ChatTypeDropdown
            toggleDropdown={toggleMobileDropdown}
            handleLinkTypeChange={handleLinkTypeChange}
          />
        )}
      </div>
    </>
  );
};

export default LinkGenerationSection;
