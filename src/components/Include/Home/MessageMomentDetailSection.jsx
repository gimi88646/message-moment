import React from "react";
import Image from "next/image";

// Images
import MessageMommentDetailImage02 from "../../../../public/Images/img_004.png";

const MessageMomentDetailSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#EDEDFF] from-0% via-blue-0 via-60% to-white to-90% w-full maxTab:flex maxTab:items-center maxTab:justify-center maxTab:px-10">
        <div className="flex justify-center maxTab:items-center maxTab:gap-[60px] gap-6 max-maxTab:flex-col maxTab:pt-[100px] max-maxTab:pt-[30px] pb-[100px] max-maxTab:pb-[59px]">
          {/* Image -- Desktop */}
          <div className="flex justify-center items-center max-maxTab:hidden">
            <div className="w-[20rem] h-[20rem] rounded-[20rem] bg-[--Blue] opacity-50 blur-[50px] absolute" />
            <Image
              src={MessageMommentDetailImage02}
              className="max-w-[426px] w-full z-10"
              alt="Image"
              width="auto"
              height="auto"
            />
          </div>

          {/* Descripitons -- Desktop */}
          <div className="flex justify-left items-left flex-col max-maxTab:hidden">
            <h3
              className={`text-[60px] tracking-[2px] font-bold mx-auto text-dark max-w-[543px] leading-[70px] pr-1`}
            >
              Your message only lasts a moment
            </h3>
            <p className="font-jetBrain text-[17px] font-medium mt-[20px] mx-auto max-w-[538px] mr-[7px]">
              We believe that words can be a powerful tool for connection and
              communication, but it's also true that words cannot be unspoken.
              That's why we created a live chat service that lets you unwrite
              those words, with a unique chat link and a secure, in-the-moment
              chat experience.
            </p>
          </div>

          {/* Image -- Tablet & Mobile */}
          <div className="minTab:w-full flex justify-center items-center max-minTab:p-4 maxTab:hidden">
            <div className="w-full h-[24rem] rounded-full bg-[--Blue] opacity-10 blur-[30px] absolute" />
            <Image
              src={MessageMommentDetailImage02}
              className="minTab:max-w-[850px] max-w-[474px] w-full z-10"
              alt="Image"
              width="auto"
              height="auto"
            />
          </div>

          {/* Description -- Tablet & Mobile */}
          <div className="minTab:w-full flex justify-center minTab:items-start items-center flex-col px-8 maxTab:hidden">
            <h3
              className={`minTab:text-[50px] text-[34px] max-minTab:mx-auto font-bold text-dark minTab:leading-[58px] leading-[38px] max-minTab:max-w-[625px]`}
            >
              Your message only lasts a moment
            </h3>
            <p className="font-jetBrain minTab:text-[20px] text-[13px] font-medium mt-[20px] max-minTab:max-w-[538px] max-minTab:mx-auto">
              We believe that words can be a powerful tool for connection and
              communication, but it's also true that words cannot be unspoken.
              That's why we created a live chat service that lets you unwrite
              those words, with a unique chat link and a secure, in-the-moment
              chat experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageMomentDetailSection;
