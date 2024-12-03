import React from "react";
import Image from "next/image";

// Data
import { AboutImages } from "@/data/About";

const MessageMomentIntroductionSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] mt-96 max-maxTab:hidden" />
      <div className="flex flex-col items-center justify-center gap-8 mt-10 max-maxTab:hidden">
        <h1 className="text-center text-gray-700 text-[3.75rem] font-bold font-dm leading-[4.375rem]">
          Welcome to MessageMoment
        </h1>
        <p className="max-w-[36.625rem] text-center text-[--Blue] text-[1.0625rem] font-medium leading-[1.5rem]">
          The untraceable live chat service that allows you to have a private,
          discreet and secure conversation with anyone, anywhere.
        </p>

        {/* Images */}
        <div className="w-full flex items-center justify-center gap-x-8 mt-[20px] px-4">
          {AboutImages.map((imageData, i) => (
            <div className="w-[14.25rem] h-[13.125rem] lg:w-[16.25rem] lg:h-[15.125rem] rounded-[1.25rem] overflow-hidden">
              {i === 0 ? (
                <Image
                  key={imageData.id}
                  src={imageData.img}
                  className="scale-[1.6] -translate-x-9"
                  height="auto"
                  width="auto"
                />
              ) : i === 1 ? (
                <Image
                  key={imageData.id}
                  src={imageData.img}
                  className="scale-[1.8] translate-x-7"
                  height="auto"
                  width="auto"
                />
              ) : i === 2 ? (
                <Image
                  key={imageData.id}
                  src={imageData.img}
                  className="scale-125 -translate-y-11"
                  height="auto"
                  width="auto"
                />
              ) : (
                <Image
                  key={imageData.id}
                  src={imageData.img}
                  className="-translate-y-24"
                  height="auto"
                  width="auto"
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="flex items-center justify-center my-[2rem]">
          <h1 className="max-w-[56.75rem] text-center text-gray-700 text-[1.0625rem] font-medium font-jetBrain">
            It is said that words cannot be unspoken, but they can be unwritten
            with MessageMoment’s in-the-moment chat service that guarantees your
            conversation is history. Start chatting now and experience the
            privacy and security of MessageMoment.
          </h1>
        </div>
      </div>

      {/* Tablet View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] mt-[22rem] maxTab:hidden max-minTab:hidden" />
      <div className="flex flex-col items-center justify-center gap-8 mt-10 px-8 maxTab:hidden max-minTab:hidden">
        <h1 className="text-center text-[--Dark] text-[3rem] font-bold tracking-[-0.03125rem] leading-[3.125rem]">
          Welcome to MessageMoment
        </h1>
        <p className="max-w-[36.625rem] text-center text-[--Blue] text-[1.3rem] font-medium">
          The untraceable live chat service that allows you to have a private,
          discreet and secure conversation with anyone, anywhere.
        </p>

        {/* Images */}
        <div className="grid grid-cols-2 gap-[12px] gap-y-4 px-8">
          {AboutImages.map((imageData) => (
            <Image
              key={imageData.id}
              src={imageData.img}
              className="w-[15.25rem] h-[13.375rem] rounded-[1.25rem] object-cover"
              height="auto"
              width="auto"
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="flex items-center justify-center mb-[2rem] px-8">
          <h1 className="max-w-[46.75rem] text-center text-gray-700 text-[1.3rem] font-medium font-jetBrain">
            It is said that words cannot be unspoken, but they can be unwritten
            with MessageMoment’s in-the-moment chat service that guarantees your
            conversation is history. Start chatting now and experience the
            privacy and security of MessageMoment.
          </h1>
        </div>
      </div>

      {/* Mobile View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] mt-[19rem] hidden max-minTab:block" />
      <div className="flex-col items-center justify-center gap-8 mt-10 hidden max-minTab:flex">
        <h1 className="text-center text-[--Dark] text-[2.125rem] font-bold tracking-[-0.03125rem] leading-[2.125rem] max-w-[20.3125rem]">
          Welcome to MessageMoment
        </h1>
        <p className="max-w-[19.3125rem] text-center text-[--Blue] text-[0.875rem] font-medium">
          The untraceable live chat service that allows you to have a private,
          discreet and secure conversation with anyone, anywhere.
        </p>

        {/* Images */}
        <div className="grid grid-cols-2 gap-[12px] gap-y-4 px-8">
          {AboutImages.map((imageData) => (
            <Image
              key={imageData.id}
              src={imageData.img}
              className="w-[11.25rem] h-[9.375rem] rounded-[1.25rem] object-cover"
              height="auto"
              width="auto"
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="flex items-center justify-center mb-[2rem]">
          <h1 className="max-w-[21.875rem] text-center text-gray-700 text-[0.8125rem] font-medium font-jetBrain leading-[1.1875rem]">
            It is said that words cannot be unspoken, but they can be unwritten
            with MessageMoment’s in-the-moment chat service that guarantees your
            conversation is history. Start chatting now and experience the
            privacy and security of MessageMoment.
          </h1>
        </div>
      </div>
    </>
  );
};

export default MessageMomentIntroductionSection;
