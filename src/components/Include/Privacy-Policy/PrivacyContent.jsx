import React, { useEffect } from "react";

// Data
import { PrivacyQuestions } from "@/data/PrivacyPolicy";

const PrivacyContent = () => {
  useEffect(() => {
    if (navigator.userAgent.indexOf("Mac OS") !== -1) {
      document.body.classList.add("mac-os");
    }
    return () => {
      document.body.classList.remove("mac-os");
    };
  }, []);
  return (
    <>
      {/* Desktop View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] max-maxTab:hidden" />
      <div className="w-full max-w-[84%] mx-auto flex flex-col items-baseline justify-start p-10 gap-[21px] max-maxTab:hidden">
        <h1 className="text-gray-700 text-[40px] font-bold my-4 leading-[52.08px]">
          Privacy Policy
        </h1>
        <div className="w-[190px] h-[46px] flex items-center justify-center bg-white rounded-md border border-black border-opacity-10 ">
          <span className="text-center text-gray-700 text-[15px] font-normal font-jetBrain leading-[23px]">
            January 1, 2024
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {PrivacyQuestions.map((section, index) => (
            <div key={index}>
              <div className="flex flex-col gap-8">
                <h1 className="text-justify text-indigo-600 text-[26px] font-bold leading-[33.85px]">
                  {index + 1}. {section.heading}
                </h1>

                <p className="w-full text-justify text-gray-700 text-[15px] font-normal font-jetBrain leading-[23px] max-w-[68.5rem]">
                  {section.heading !== "Contact Us" ? (
                    section.content
                  ) : (
                    <>
                      If you have any questions regarding this Privacy Policy,
                      please{" "}
                      <a
                        href="/contact-us"
                        className="text-indigo-600 text-[15px] font-normal font-jetBrain leading-[23px] hover:underline"
                      >
                        Contact Us
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-maxTab:hidden h-[90px] w-full os-specific-element" />

      {/* Tablet View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] maxTab:hidden max-minTab:hidden" />
      <div className="w-[83%] mx-auto flex flex-col items-baseline justify-start gap-[2rem] mb-[8rem] mt-[2rem] maxTab:hidden max-minTab:hidden">
        <h1 className="text-gray-700 text-[2rem] font-bold max-w-[17.5625rem]">
          Privacy Policy
        </h1>
        <div className="w-[13rem] h-[3rem] flex items-center justify-center bg-white rounded-md border border-black border-opacity-10">
          <span className="text-center text-gray-700 text-[0.8125rem] font-normal font-jetBrain">
            January 1, 2024
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {PrivacyQuestions.map((section, index) => (
            <div key={index}>
              <div className="flex flex-col gap-4">
                <h1 className="text-justify text-indigo-600 text-[1.75rem] font-bold">
                  {index + 1}. {section.heading}
                </h1>

                <p className="w-full text-gray-700 text-[1.2rem] font-normal font-jetBrain">
                  {section.heading !== "Contact Us" ? (
                    section.content
                  ) : (
                    <>
                      If you have any questions regarding this Privacy Policy,
                      please{" "}
                      <a
                        href="/contact-us"
                        className="text-indigo-600 font-normal font-jetBrain hover:underline"
                      >
                        Contact Us
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] hidden max-minTab:block" />
      <div className="w-[83%] mx-auto flex-col items-baseline justify-start gap-[2rem] mb-[8rem] mt-[2rem] hidden max-minTab:flex">
        <h1 className="text-gray-700 text-[1.5rem] font-bold max-w-[17.5625rem]">
          Privacy Policy
        </h1>
        <div className="w-[11.875rem] h-[2.875rem] flex items-center justify-center bg-white rounded-md border border-black border-opacity-10">
          <span className="text-center text-gray-700 text-[0.8125rem] font-normal font-jetBrain">
            January 1, 2024
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {PrivacyQuestions.map((section, index) => (
            <div key={index}>
              <div className="flex flex-col gap-4">
                <h1 className="text-justify text-indigo-600 text-[1.0625rem] font-bold">
                  {index + 1}. {section.heading}
                </h1>

                <p className="w-full text-gray-700 text-[0.8125rem] font-normal font-jetBrain max-w-[23rem]">
                  {section.heading !== "Contact Us" ? (
                    section.content
                  ) : (
                    <>
                      If you have any questions regarding this Privacy Policy,
                      please{" "}
                      <a
                        href="/contact-us"
                        className="text-indigo-600 font-normal font-mono hover:underline"
                      >
                        Contact Us
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyContent;
