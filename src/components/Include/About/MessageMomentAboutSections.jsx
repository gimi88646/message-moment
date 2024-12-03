"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Images
import AboutIcon01 from "../../../../public/Icons/AboutIcon01.png";
import AboutIcon02 from "../../../../public/Icons/AboutIcon02.png";
import AboutImg01 from "../../../../public/Images/AboutImg05.png";
import AboutImg02 from "../../../../public/Images/AboutImg08.png";
import AboutImg03 from "../../../../public/Images/AboutImg09.png";
import AboutImg04 from "../../../../public/Images/AboutImg10.png";
import AboutImg05 from "../../../../public/Images/AboutImg06.png";
import AboutImg06 from "../../../../public/Images/AboutImg07.png";

// Function
import { Button02 } from "@/functions/Buttons";
import {
  MobileAboutSlider,
  TabletAboutSlider,
} from "@/components/Common/Sliders";

const MessageMomentAboutUpperSection = () => {
  const router = useRouter();

  const TryMessageMoment = () => {
    router.push("/");
    setTimeout(scrollToElement, 1200);
  };

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

  return (
    <>
      {/* Desktop View */}
      <div className="w-full flex items-center justify-center mt-[6rem] flex-col gap-[14rem] pb-8 max-maxTab:hidden">
        <div className="flex items-center justify-center flex-col w-[90%] max-w-[82.5rem] h-[31.25rem] rounded-[1.25rem] bg-[--Blue] gap-4">
          <Image
            src={AboutIcon01}
            className="w-[8rem] h-[8rem] absolute -translate-y-[195%]"
          />
          <h1 className="max-w-[1050px] text-center text-white text-[40px] font-bold -translate-y-[25%] px-12 leading-[52px]">
            We believe that words can be a powerful tool for connection and
            communication, but it's also true that words cannot be unspoken.
          </h1>
          <p className="max-w-[750px] text-center text-white text-[17px] font-medium font-mono -translate-y-[50%] leading-normal">
            That's why we created a live chat service that lets you unwrite
            those words, with a unique chat link and a secure, in-the-moment
            chat experience.
          </p>
          <Image
            src={AboutImg01}
            className="w-[70%] max-w-[68.625rem] h-[15.125rem] rounded-[1.25rem] object-cover absolute translate-y-[110%]"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-12 px-8 mt-[-5px] mb-10">
          <p className="max-w-[60.25rem] text-center text-[17px] font-medium font-jetBrain leading-[24px]">
            Our team has developed a platform that is not only simple and easy
            to use, but also guarantees your conversation will be history. With
            no account registration necessary and a mobile-responsive design,
            you can chat on the go, without leaving a trace. It never happened!
            Our unique security features include the option to "Make Secure," by
            sharing a security code, ensuring that only those you invite can
            enter the chat.
          </p>

          <Button02
            Title={"Try MessageMoment"}
            customButtonCss={`!w-[19.6875rem] !h-[2.875rem] !rounded-[0.375rem] !transition-all !duration-500 !ease-in-out hover:!bg-[--HoveredBlue]`}
            onclickFunction={TryMessageMoment}
          />
        </div>
      </div>

      {/* Tablet View */}
      <div className="w-full flex items-center justify-center mt-[4rem] flex-col gap-[14rem] maxTab:hidden max-minTab:hidden">
        <div className="flex items-center justify-center flex-col w-[90%] max-w-[82.5rem] h-[28.25rem] rounded-[1.25rem] bg-[--Blue] gap-4 px-4">
          <Image
            src={AboutIcon01}
            className="w-[7rem] h-[7rem] absolute -translate-y-[205%]"
          />
          <h1 className="text-center text-white text-[1.5rem] font-bold -mt-[7rem]">
            We believe that words can be a powerful tool for connection and
            communication, but it's also true that words cannot be unspoken.
          </h1>
          <p className="max-w-[80%] text-center text-white text-[14px] font-medium font-mono">
            That's why we created a live chat service that lets you unwrite
            those words, with a unique chat link and a secure, in-the-moment
            chat experience.
          </p>
          <Image
            src={AboutImg01}
            className="w-[83%] max-w-[58.625rem] h-[15.25rem] rounded-[1.25rem] object-cover absolute translate-y-[90%]"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-8 px-8 -translate-y-[27%]">
          <p className="text-center text-[1rem] font-medium font-jetBrain">
            Our team has developed a platform that is not only simple and easy
            to use, but also guarantees your conversation will be history. With
            no account registration necessary and a mobile-responsive design,
            you can chat on the go, without leaving a trace. It never happened!
            Our unique security features include the option to "Make Secure," by
            sharing a security code, ensuring that only those you invite can
            enter the chat.
          </p>

          <Button02
            Title={"Try MessageMoment"}
            customButtonCss={`!w-[19.6875rem] !h-[2.875rem] !rounded-[0.375rem]`}
            onclickFunction={TryMessageMoment}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full items-center justify-center mt-[4rem] flex-col gap-[14rem] hidden max-minTab:flex">
        <div className="flex items-center justify-center flex-col w-[90%] max-w-[82.5rem] h-[30.125rem] rounded-[1.25rem] bg-[--Blue] gap-4">
          <Image
            src={AboutIcon01}
            className="w-[6.25rem] h-[6.25rem] absolute -translate-y-[240%]"
          />
          <h1 className="max-w-[19.5rem] text-center text-white text-[1.5rem] font-bold -translate-y-[8%]">
            We believe that words can be a powerful tool for connection and
            communication, but it's also true that words cannot be unspoken.
          </h1>
          <p className="max-w-[19rem] text-center text-white text-[0.8125rem] font-medium font-mono -translate-y-[29%] leading-[1.1875rem]">
            That's why we created a live chat service that lets you unwrite
            those words, with a unique chat link and a secure, in-the-moment
            chat experience.
          </p>
          <Image
            src={AboutImg01}
            className="w-[83%] max-w-[23rem] h-[11.25rem] rounded-[0.625rem] object-cover absolute translate-y-[145%]"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-8 px-8 -translate-y-[25%]">
          <p className="max-w-[21.375rem] text-center text-[0.8125rem] font-medium font-jetBrain leading-[1.1875rem]">
            Our team has developed a platform that is not only simple and easy
            to use, but also guarantees your conversation will be history. With
            no account registration necessary and a mobile-responsive design,
            you can chat on the go, without leaving a trace. It never happened!
            Our unique security features include the option to "Make Secure," by
            sharing a security code, ensuring that only those you invite can
            enter the chat.
          </p>

          <Button02
            Title={"Try MessageMoment"}
            customButtonCss={`!w-[19.6875rem] !h-[2.875rem] !rounded-[0.375rem]`}
            onclickFunction={TryMessageMoment}
          />
        </div>
      </div>
    </>
  );
};

const MessageMomentAboutMiddleSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] max-maxTab:hidden" />
      <div className="w-full flex items-center justify-center bg-[--Gradient02] bg-opacity-10 p-[7%] max-maxTab:hidden">
        <div className="w-[100%] flex items-center justify-center gap-[4rem]">
          <Image
            src={AboutImg05}
            className="w-[31.25rem] h-[18.75rem] rounded-[1.25rem] object-cover"
          />

          <div className="flex flex-col items-center gap-4">
            <h1 className="max-w-[32.625rem] text-[3.75rem] leading-[4.375rem] font-[700] text-[--Dark]">
              We take the privacy of our users seriously
            </h1>
            <p className="max-w-[32.625rem] font-jetBrain text-[1.0625rem] font-[500] text-[--Dark] leading-normal">
              We have implemented the appropriate security measures to protect
              your data. We understand the importance of having a safe and
              secure space to communicate, and MessageMoment provides just that.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] maxTab:hidden max-minTab:hidden" />
      <div className="w-full flex items-center justify-center !bg-[--Gradient02] !bg-opacity-10 px-8 py-[4rem] maxTab:hidden max-minTab:hidden">
        <div className="w-[100%] flex items-center justify-center flex-col gap-8">
          <Image
            src={AboutImg05}
            className="w-[28rem] h-[17.5rem] rounded-[1.25rem] object-cover"
          />

          <div className="flex flex-col gap-4">
            <h1 className="max-w-[28rem] text-[2.5rem] leading-[2.525rem] tracking-[-0.03125rem] font-[700] text-[--Dark]">
              We take the privacy of our users seriously
            </h1>
            <p className="max-w-[28rem] font-jetBrain text-[1rem] font-[500] text-[--Dark] leading-[1.5rem]">
              We have implemented the appropriate security measures to protect
              your data. We understand the importance of having a safe and
              secure space to communicate, and MessageMoment provides just that.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] hidden max-minTab:block" />
      <div className="w-full items-center justify-center !bg-[--Gradient02] !bg-opacity-10 px-8 py-[4rem] hidden max-minTab:flex">
        <div className="w-[100%] flex items-center justify-center flex-col gap-8">
          <Image
            src={AboutImg05}
            className="w-[23rem] h-[12.5rem] rounded-[1.25rem] object-cover"
          />

          <div className="flex flex-col gap-4">
            <h1 className="max-w-[17.5625rem] text-[2.125rem] leading-[2.125rem] tracking-[-0.03125rem] font-[700] text-[--Dark]">
              We take the privacy of our users seriously
            </h1>
            <p className="max-w-[23rem] font-jetBrain text-[0.8125rem] font-[500] text-[--Dark] leading-[1.1875rem]">
              We have implemented the appropriate security measures to protect
              your data. We understand the importance of having a safe and
              secure space to communicate, and MessageMoment provides just that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const MessageMomentAboutMiddleLowerSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] max-maxTab:hidden" />
      <div className="w-full flex items-center justify-center bg-[--Gradient02] bg-opacity-10 p-[7%] max-maxTab:hidden">
        <div className="w-[100%] flex items-center justify-center gap-[4rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="max-w-[31.625rem] text-[3.75rem] leading-[4.375rem] font-[700] text-[--Dark]">
              The solution you've been searching for
            </h1>
            <p className="max-w-[33.625rem] font-jetBrain text-[1.0625rem] font-[500] text-[--Dark] ml-8 leading-normal">
              Our mission is to provide a reliable and trustworthy platform for
              discreet conversations between known parties. Whether you're
              looking to keep a conversation private or just need a secure space
              to communicate, MessageMoment is the solution you've been
              searching for.
            </p>
          </div>

          <Image
            src={AboutImg06}
            className="w-[31.25rem] h-[18.75rem] rounded-[1.25rem] object-cover"
          />
        </div>
      </div>

      {/* Tablet View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] maxTab:hidden max-minTab:hidden" />
      <div className="w-full flex items-center justify-center !bg-[--Gradient02] !bg-opacity-10 px-8 py-[4rem] maxTab:hidden max-minTab:hidden">
        <div className="w-[100%] flex items-center justify-center flex-col gap-8">
          <Image
            src={AboutImg06}
            className="w-[28rem] h-[17.5rem] rounded-[1.25rem] object-cover"
          />

          <div className="flex flex-col gap-4">
            <h1 className="max-w-[28rem] text-[2.5rem] leading-[2.525rem] tracking-[-0.03125rem] font-[700] text-[--Dark]">
              The solution you've been searching for
            </h1>
            <p className="max-w-[28rem] font-jetBrain text-[1rem] font-[500] text-[--Dark] leading-[1.5rem]">
              Our mission is to provide a reliable and trustworthy platform for
              discreet conversations between known parties. Whether you're
              looking to keep a conversation private or just need a secure space
              to communicate, MessageMoment is the solution you've been
              searching for.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1] hidden max-minTab:block" />
      <div className="w-full items-center justify-center !bg-[--Gradient02] !bg-opacity-10 px-8 py-[4rem] hidden max-minTab:flex">
        <div className="w-[100%] flex items-center justify-center flex-col gap-8">
          <Image
            src={AboutImg06}
            className="w-[23rem] h-[12.5rem] rounded-[1.25rem] object-cover"
          />

          <div className="flex flex-col gap-4">
            <h1 className="max-w-[17.5625rem] text-[2.125rem] leading-[2.125rem] tracking-[-0.03125rem] font-[700] text-[--Dark]">
              The solution you've been searching for
            </h1>
            <p className="max-w-[23rem] font-jetBrain text-[0.8125rem] font-[500] text-[--Dark] leading-[1.1875rem]">
              Our mission is to provide a reliable and trustworthy platform for
              discreet conversations between known parties. Whether you're
              looking to keep a conversation private or just need a secure space
              to communicate, MessageMoment is the solution you've been
              searching for.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const MessageMomentAboutLowerSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="flex flex-col items-center justify-center max-maxTab:hidden">
        <Image src={AboutIcon02} className="relative w-32 h-32" />
        <div className="max-w-[82.5rem] h-[550px] flex flex-col items-center justify-center w-[90%] bg-[--Dark] rounded-[1.25rem] -mt-16">
          <div className="flex flex-col items-center justify-center gap-[25px] -mt-24">
            <h1 className="w-[820px] text-center text-white text-[40px] font-bold leading-[52px]">
              We are dedicated to delivering an unparalleled user experience and
              are always looking for ways to improve our services.
            </h1>
            <span className="w-[43.625rem] text-white text-center text-[17px] font-medium font-jetBrain leading-[22px]">
              If you have any questions, concerns, feedback or would like to
              advertise with MessageMoment, please do not hesitate to
              <a href="/contact-us" className="font-jetBrain underline pl-2">
                Contact Us
              </a>
              .
            </span>
          </div>
        </div>
        <div className="max-w-[68.625rem] w-[70%] h-[15.125rem] rounded-[1.25rem] object-cover absolute translate-y-[130%] flex items-center justify-center gap-4">
          <Image
            src={AboutImg02}
            className="w-[14.25rem] h-[13.125rem] lg:w-[16.25rem] lg:h-[15.125rem] rounded-[1.25rem] object-cover"
          />
          <Image
            src={AboutImg03}
            className="w-[31.75rem] h-[13.125rem] lg:w-[33.75rem] lg:h-[15.125rem] rounded-[1.25rem] object-cover"
          />
          <Image
            src={AboutImg04}
            className="w-[14.25rem] h-[13.125rem] lg:w-[16.25rem] lg:h-[15.125rem] rounded-[1.25rem] object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-12 p-4 max-maxTab:hidden">
        <p className="max-w-[55.1875rem] text-neutral-500 text-center text-[13px] font-medium font-jetBrain mt-[11rem] leading-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          nibh id nunc commodo scelerisque. Donec neque justo, hendrerit quis
          laoreet sed, consectetur vitae enim. Vestibulum elementum urna eu
          lectus feugiat laoreet. Donec tincidunt libero et urna laoreet
          accumsan. Curabitur at porta lectus, eget maximus neque. Nulla
          pellentesque nunc turpis, id interdum lacus consequat non. Donec nec
          placerat augue, nec vehicula metus.
        </p>
      </div>
      <div className="max-maxTab:hidden !h-[85px] ffheight85px w-full" />

      {/* Tablet View */}
      <div className="flex flex-col items-center justify-center pb-44 maxTab:hidden max-minTab:hidden">
        <Image
          src={AboutIcon02}
          className="w-[6.5rem] h-[6.5rem] translate-y-[50%]"
        />
        <div className="max-w-[72.5rem] h-[28.125rem] flex flex-col items-center justify-center w-[90%] bg-[--Dark] rounded-[1.25rem]">
          <div className="flex flex-col items-center justify-center gap-[25px] px-8">
            <h1 className="max-w-[45.875rem] text-center text-white text-[1.5rem] font-bold">
              We are dedicated to delivering an unparalleled user experience and
              are always looking for ways to improve our services.
            </h1>
            <span className="max-w-[34rem] text-white text-center text-[0.8125rem] font-medium font-jetBrain leading-[1.5rem]">
              If you have any questions, concerns, feedback or would like to
              advertise with MessageMoment, please do not hesitate to
              <a href="/contact-us" className="font-jetBrain underline pl-2">
                Contact Us
              </a>
              .
            </span>
          </div>
        </div>

        {/* Image Swiper */}
        <TabletAboutSlider />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-12 p-4 mb-20 maxTab:hidden max-minTab:hidden">
        <p className="max-w-[50rem] text-neutral-500 text-center text-[1rem] font-medium font-jetBrain">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          nibh id nunc commodo scelerisque. Donec neque justo, hendrerit quis
          laoreet sed, consectetur vitae enim. Vestibulum elementum urna eu
          lectus feugiat laoreet. Donec tincidunt libero et urna laoreet
          accumsan. Curabitur at porta lectus, eget maximus neque. Nulla
          pellentesque nunc turpis, id interdum lacus consequat non. Donec nec
          placerat augue, nec vehicula metus.
        </p>
      </div>

      {/* Mobile View */}
      <div className="flex-col items-center justify-center pb-44 hidden max-minTab:flex">
        <Image
          src={AboutIcon02}
          className="w-[5rem] h-[5rem] translate-y-[50%]"
        />
        <div className="max-w-[24.875rem] h-[28.125rem] flex flex-col items-center justify-center w-[90%] bg-[--Dark] rounded-[1.25rem]">
          <div className="flex flex-col items-center justify-center gap-[25px]">
            <h1 className="w-[21.875rem] text-center text-white text-[1.5rem] font-bold">
              We are dedicated to delivering an unparalleled user experience and
              are always looking for ways to improve our services.
            </h1>
            <span className="w-[18rem] text-white text-center text-[0.8125rem] font-medium font-jetBrain leading-[1.1875rem]">
              If you have any questions, concerns, feedback or would like to
              advertise with MessageMoment, please do not hesitate to
              <a href="/contact-us" className="font-jetBrain underline pl-2">
                Contact Us
              </a>
              .
            </span>
          </div>
        </div>

        {/* Image Swiper */}
        <MobileAboutSlider />
      </div>
      <div className="w-full flex-col items-center justify-center gap-12 p-4 mb-20 hidden max-minTab:flex">
        {/* Text Will Be Change */}
        <p className=" max-w-[22.1875rem] text-neutral-500 text-center text-[0.6875rem] font-medium font-jetBrain">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          nibh id nunc commodo scelerisque. Donec neque justo, hendrerit quis
          laoreet sed, consectetur vitae enim. Vestibulum elementum urna eu
          lectus feugiat laoreet. Donec tincidunt libero et urna laoreet
          accumsan. Curabitur at porta lectus, eget maximus neque. Nulla
          pellentesque nunc turpis, id interdum lacus consequat non. Donec nec
          placerat augue, nec vehicula metus.
        </p>
      </div>
    </>
  );
};

export {
  MessageMomentAboutUpperSection,
  MessageMomentAboutMiddleSection,
  MessageMomentAboutMiddleLowerSection,
  MessageMomentAboutLowerSection,
};
