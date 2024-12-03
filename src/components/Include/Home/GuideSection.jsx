import React from "react";
import Image from "next/image";

// Images
import GuideImage02 from "../../../../public/Images/img_005.png";

const GuideSection = ({ isLinkTypeSecure }) => {
  // Scroll Down
  const handleScroll = () => {
    const targetElement = document.getElementById("landingPageGuide");

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

  return (
    <>
      <div
        className={`bg-gradient-to-b from-[#EDEDFF] from-0% via-blue-0 via-60% to-white to-90% w-full maxTab:flex maxTab:items-center maxTab:justify-center maxTab:px-10 ${
          isLinkTypeSecure
            ? "max-maxTab:pt-[340px] max-minTab:pt-[410px]"
            : "max-maxTab:pt-[290px] max-minTab:pt-[355px]"
        }`}
      >
        {/* Scroll Arrow */}
        <svg
          className={`mx-auto z-[999999] max-mvsm:translate-y-[20px] maxTab:hidden`}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          onClick={handleScroll}
        >
          <path
            opacity="0.2"
            d="M21.588 0.541415C21.9383 0.194569 22.4113 0 22.9043 0C23.3973 0 23.8703 0.194569 24.2206 0.541415C24.3935 0.711735 24.5309 0.914754 24.6246 1.13865C24.7184 1.36256 24.7667 1.60286 24.7667 1.8456C24.7667 2.08833 24.7184 2.32864 24.6246 2.55254C24.5309 2.77645 24.3935 2.97946 24.2206 3.14978L13.701 13.4594C13.3499 13.8058 12.8765 14 12.3833 14C11.8901 14 11.4168 13.8058 11.0657 13.4594L0.546069 3.14978C0.373121 2.97946 0.235775 2.77645 0.142027 2.55254C0.0482785 2.32864 0 2.08833 0 1.8456C0 1.60286 0.0482785 1.36256 0.142027 1.13865C0.235775 0.914754 0.373121 0.711735 0.546069 0.541415C0.896367 0.194569 1.36941 0 1.86237 0C2.35533 0 2.82837 0.194569 3.17867 0.541415L12.3874 8.99641L21.588 0.541415Z"
            fill="#494AF8"
          />
        </svg>

        <div
          className="flex justify-center maxTab:items-center maxTab:gap-[60px] gap-6 max-maxTab:flex-col maxTab:pt-[162px] max-maxTab:pt-[71px] pb-[100px] max-maxTab:pb-[59px]"
          id="landingPageGuide"
        >
          {/* Descripitons -- Desktop */}
          <div className="flex justify-center items-center flex-col gap-4 max-maxTab:hidden">
            <h3
              className={`text-[60px] tracking-[2px] font-bold mx-auto text-dark max-w-[35.875rem] leading-[70px]`}
            >
              Converse with ease and assurance
            </h3>
            <p className="font-jetBrain text-[17px] font-medium max-w-[35.875rem]">
              It is said that words cannot be unspoken, but they can be
              unwritten with MessageMoment’s in-the-moment chat service that
              guarantees your conversation is history. Start chatting now and
              experience the privacy and security of MessageMoment.
            </p>
          </div>

          {/* Image -- Desktop */}
          <div className="flex justify-center items-center max-maxTab:hidden">
            <div className="w-[20rem] h-[20rem] rounded-[20rem] bg-[--Blue] opacity-50 blur-[50px] absolute" />
            <Image
              src={GuideImage02}
              className="max-w-[474px] w-full z-10"
              alt="Image"
              width={420}
              height={420}
            />
          </div>

          {/* Image -- Tablet & Mobile */}
          <div className="minTab:w-full flex justify-center items-center max-minTab:p-4 maxTab:hidden">
            <div className="w-full h-[24rem] rounded-full bg-[--Blue] opacity-10 blur-[30px] absolute" />
            <Image
              src={GuideImage02}
              className="minTab:max-w-[820px] max-w-[474px] w-full z-10"
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
              Converse with ease and assurance
            </h3>
            <p className="font-jetBrain minTab:text-[20px] text-[13px] font-medium mt-[20px] max-minTab:max-w-[538px] max-minTab:mx-auto">
              It is said that words cannot be unspoken, but they can be
              unwritten with MessageMoment’s in-the-moment chat service that
              guarantees your conversation is history. Start chatting now and
              experience the privacy and security of MessageMoment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideSection;
