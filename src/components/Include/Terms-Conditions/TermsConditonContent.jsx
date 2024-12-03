import React from "react";

// Component
import TermsAndConditionLinks from "./TermsAndConditionLinks";

// Data
import TermsAndConditionData from "@/data/TermsAndConditionData";

const TermsConditonContent = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] max-maxTab:hidden" />
      <div className="w-full max-w-[84%] mx-auto flex flex-col items-baseline justify-start p-10 gap-[21px] max-maxTab:hidden">
        <h1 className="text-gray-700 text-[40px] font-bold my-4 leading-[52.08px]">
          Terms and Conditions of Use
        </h1>
        <div className="w-[190px] h-[46px] flex items-center justify-center bg-white rounded-md border border-black border-opacity-10">
          <span className="text-center text-gray-700 text-[15px] font-normal font-jetBrain leading-[23px]">
            January 1, 2024
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {TermsAndConditionData.map((section) => (
            <div key={section.id}>
              <div className="flex flex-col gap-8">
                <h1 className="text-justify text-indigo-600 text-[26px] font-bold leading-[33.85px]">
                  {section.HeadingNo}. {section.Heading}
                </h1>

                <p className="w-full text-justify text-gray-700 text-[15px] font-normal font-jetBrain leading-[23px] max-w-[68.5rem]">
                  {section.Detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[68.5rem] w-full h-px opacity-10 bg-black" />

        {/* Credites */}
        <TermsAndConditionLinks />
      </div>

      {/* Tablet View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] maxTab:hidden max-minTab:hidden" />
      <div className="w-[83%] mx-auto flex flex-col items-baseline justify-start gap-[2rem] mb-[8rem] mt-[2rem] maxTab:hidden max-minTab:hidden">
        <h1 className="text-gray-700 text-[2rem] font-bold">
          Terms and Conditions of Use
        </h1>
        <div className="w-[11.875rem] h-[2.875rem] flex items-center justify-center bg-white rounded-md border border-black border-opacity-10">
          <span className="text-center text-gray-700 text-[0.9375rem] font-normal font-jetBrain">
            January 1, 2024
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {TermsAndConditionData.map((section) => (
            <div key={section.id}>
              <div className="flex flex-col gap-4">
                <h1 className="text-indigo-600 text-[1.4rem] font-bold">
                  {section.HeadingNo}. {section.Heading}
                </h1>

                <p className="w-full text-gray-700 text-[0.9375rem] font-normal font-jetBrain max-w-[68.5rem]">
                  {section.Detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[68.5rem] w-full h-px opacity-10 bg-black" />

        {/* Credites */}
        <TermsAndConditionLinks />
      </div>

      {/* Mobile View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] hidden max-minTab:block" />
      <div className="w-[83%] mx-auto flex-col items-baseline justify-start gap-[2rem] mb-[8rem] mt-[2rem] hidden max-minTab:flex">
        <h1 className="text-gray-700 text-[1.5rem] font-bold">
          Terms and Conditions of Use
        </h1>
        <div className="w-[11.875rem] h-[2.875rem] flex items-center justify-center bg-white rounded-md border border-black border-opacity-10">
          <span className="text-center text-gray-700 text-[0.8125rem] font-normal font-jetBrain">
            January 1, 2024
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {TermsAndConditionData.map((section) => (
            <div key={section.id}>
              <div className="flex flex-col gap-4">
                <h1 className="text-indigo-600 text-[1.0625rem] font-bold">
                  {section.HeadingNo}. {section.Heading}
                </h1>

                <p className="w-full text-gray-700 text-[0.8125rem] font-normal font-jetBrain max-w-[23rem]">
                  {section.Detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[23rem] w-full h-px opacity-10 bg-black" />

        {/* Credites */}
        <TermsAndConditionLinks />
      </div>
    </>
  );
};

export default TermsConditonContent;
