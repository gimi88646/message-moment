import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Image
import MailImage from "../../../public/Icons/MailIcon.png";
import LockedSessionImage from "../../../public/Icons/LockedSession.png";
import FullSessionImage from "../../../public/Icons/FullSession.png";
import ErrorImage from "../../../public/Icons/Error.png";
import MaintenanceImage from "../../../public/Icons/maintennce.png";
import VerificationImage from "../../../public/Icons/verification.png";

// Function
import { Button02 } from "@/functions/Buttons";
import VerifyYouAreHuman from "@/functions/VerifyYouAreHuman";

const ContactUsCard = () => {
  const router = useRouter();

  const handleContactUs = () => {
    router.push("/contact-us");
  };
  return (
    <>
      {/* Desktop View */}
      <div className="w-[80%] p-4 my-8 flex items-center justify-center mb-[4rem] max-maxTab:hidden">
        <div className="w-[25.25rem] h-[25.25rem] rounded-[25.25rem] bg-[--Blue] opacity-50 blur-[50px] absolute" />
        <div
          className="w-[98rem] h-[21.875rem] rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={MailImage}
            alt="Contact Us"
            className="w-[8rem] h-[8rem] translate-y-[-135%] absolute"
          />
          <h1 className="text-[1.625rem] text-[--Blue] font-[700] mt-12 leading-normal">
            Still need help about a topic not listed?
          </h1>
          <p className="font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem]">
            A member of our team will respond to your enquiry.
          </p>
          <Button02
            Title={"Contact Us"}
            customButtonCss={` !transition-all !duration-500 !ease-in-out hover:!bg-[#4243DF]`}
            onclickFunction={handleContactUs}
          />
        </div>
      </div>

      {/* Tablet View */}
      <div className="w-full px-6 mt-[3rem] mb-[5rem] flex items-center justify-center maxTab:hidden max-minTab:hidden">
        <div className="w-[100%] h-[29.375rem] rounded-[29.375rem] bg-[--Blue] opacity-20 blur-[50px] absolute" />
        <div
          className="w-full h-[20.625rem] rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={MailImage}
            alt="Contact Us"
            className="w-[7.25rem] h-[7.25rem] -translate-y-[145%] absolute"
          />
          <h1 className="text-[1.5rem] text-center text-[--Blue] max-w-[18.125rem] font-[700] mt-10">
            Still need help about a topic not listed?
          </h1>
          <p className="font-jetBrain text-center text-[1rem] max-w-[20.875rem] font-[400] leading-[1.4375rem]">
            A member of our team will respond to your enquiry.
          </p>
          <Button02
            Title={"Contact Us"}
            customButtonCss={`!w-[50%] !h-[2.875rem]`}
            TitleCss={`!text-[0.875rem]`}
            onclickFunction={handleContactUs}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full px-4 mt-[2rem] mb-[4rem] items-center justify-center hidden max-minTab:flex">
        <div className="w-[100%] h-[29.375rem] rounded-[29.375rem] bg-[--Blue] opacity-20 blur-[50px] absolute" />
        <div
          className="w-[24.375rem] h-[20.625rem] rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={MailImage}
            alt="Contact Us"
            className="w-[6.25rem] h-[6.25rem] translate-y-[-175%] absolute"
          />
          <h1 className="text-[1.0625rem] max-w-[14.125rem] text-center text-[--Blue] font-[700] mt-8">
            Still need help about a topic not listed?
          </h1>
          <p className="max-w-[16.875rem] font-jetBrain text-center text-[0.8125rem] font-[400]">
            A member of our team will respond to your enquiry.
          </p>
          <Button02
            Title={"Contact Us"}
            customButtonCss={`!w-[85%] !h-[2.875rem]`}
            TitleCss={`!text-[0.875rem]`}
            onclickFunction={handleContactUs}
          />
        </div>
      </div>
    </>
  );
};

const Card01 = ({ expiredSession = false, heading, subHeading, detail }) => {
  const router = useRouter();

  const ReturnToHomepage = () => {
    router.push("/");
  };

  return (
    <>
      {/* Desktop View */}
      <div
        className={`max-w-[56.25rem] w-[45%] ${
          expiredSession ? "h-[27rem]" : "h-[29rem] mt-12"
        } flex items-center justify-center max-maxTab:hidden`}
      >
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-8"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={ErrorImage}
            alt="Sessions Images"
            className={`w-[8rem] h-[8rem] translate-y-[-160%] absolute ${
              expiredSession ? "translate-y-[-160%]" : "translate-y-[-175%]"
            }`}
          />
          {expiredSession ? (
            <h1 className="max-w-[29.375rem] leading-[33.85px] text-[--Blue] text-center text-[1.625rem] font-[700] mt-[3.5rem]">
              {heading}
            </h1>
          ) : (
            <h1 className="text-[--Blue] text-center text-[9.375rem] font-[700] -tracking-[0.125rem]">
              {heading}
            </h1>
          )}
          {expiredSession ? (
            <h1 className="text-[0.9375rem] leading-[19.8px] text-[--Dark] font-jetBrain font-[700] text-center -mt-[8px]">
              {subHeading}
            </h1>
          ) : (
            <h1 className="text-[1.625rem] text-[--Blue] font-[700] text-center -mt-16">
              {subHeading}
            </h1>
          )}
          <p className="font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] max-w-[90%] text-center text-[--Dark]">
            {detail}
          </p>
          <Button02
            Title={"Return to Homepage"}
            onclickFunction={ReturnToHomepage}
            customButtonCss={`!transition-all !duration-500 !ease-in-out hover:!bg-[#4243DF]`}
          />
        </div>
      </div>

      {/* Tablet View */}
      <div className="w-[70%] h-[25rem] flex items-center justify-center maxTab:hidden max-minTab:hidden">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={ErrorImage}
            alt="Sessions Images"
            className="w-[7rem] h-[7rem] translate-y-[-175%] absolute"
          />
          {expiredSession ? (
            <h1 className="max-w-[29.375rem] text-[--Blue] text-center text-[1.5rem] font-[700] px-4 mt-8">
              {heading}
            </h1>
          ) : (
            <h1 className="text-[--Blue] text-center text-[6rem] font-[700] -tracking-[0.125rem]">
              {heading}
            </h1>
          )}
          {expiredSession ? (
            <h1 className="text-[1rem] text-[--Dark] font-jetBrain font-[700] text-center px-4">
              {subHeading}
            </h1>
          ) : (
            <h1 className="text-[1.5rem] text-[--Blue] font-[700] text-center -mt-12 px-4">
              {subHeading}
            </h1>
          )}
          <p className="font-jetBrain text-[0.9rem] font-[500] leading-[1.4375rem] max-w-[90%] text-center text-[--Dark] px-4">
            {detail}
          </p>
          <Button02
            Title={"Return to Homepage"}
            onclickFunction={ReturnToHomepage}
            customButtonCss={` !transition-all !duration-500 !ease-in-out hover:!bg-[#5252c3]`}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="max-w-[24.375rem] w-[90%] h-[23.625rem] items-center justify-center hidden max-minTab:flex">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={ErrorImage}
            alt="Sessions Images"
            className="w-[6.25rem] h-[6.25rem] translate-y-[-185%] absolute"
          />
          {expiredSession ? (
            <h1 className="max-w-[21.25rem] text-[--Blue] text-center text-[1.0625rem] font-[700] mt-8 px-4">
              {heading}
            </h1>
          ) : (
            <h1 className="text-[--Blue] text-center text-[5rem] font-[700] -tracking-[0.0625rem] leading-[3.125rem] mt-[2rem]">
              {heading}
            </h1>
          )}
          {expiredSession ? (
            <h1 className="max-w-[22.25rem] text-[0.875rem] text-[--Dark] font-jetBrain font-[700] text-center break-all px-4">
              {subHeading}
            </h1>
          ) : (
            <h1 className="max-w-[13rem] text-[1.0625rem] text-[--Blue] font-[700] text-center">
              {subHeading}
            </h1>
          )}
          <p
            className={`font-jetBrain text-[0.8125rem] font-[500] ${
              expiredSession ? "max-w-[15.375rem]" : "max-w-[17.75rem]"
            } text-center text-[--Dark]`}
          >
            {detail}
          </p>
          <Button02
            Title={"Return to Homepage"}
            onclickFunction={ReturnToHomepage}
            customButtonCss={`!w-[90%]`}
            TitleCss={`!text-[0.875rem]`}
          />
        </div>
      </div>
    </>
  );
};

const Card02 = ({ lockSession = false, heading, detail }) => {
  const router = useRouter();

  const ReturnToHomepage = () => {
    router.push("/");
  };

  return (
    <>
      {/* Desktop View */}
      <div className="max-w-[56.25rem] w-[45%] h-[24rem] flex items-center justify-center max-maxTab:hidden">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-8"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={lockSession ? LockedSessionImage : FullSessionImage}
            alt="Sessions Images"
            className="w-[8rem] h-[8rem] translate-y-[-148%] absolute"
          />
          <h1 className="text-[1.625rem] text-[--Blue] font-[700] mt-[4.3rem] max-w-[29.375rem] text-center leading-[33.85px]">
            {heading}
          </h1>
          <p className="font-jetBrain text-[0.9375rem] font-[400] leading-[1.4375rem] max-w-[90%] text-center">
            {detail}
          </p>
          <Button02
            Title={"Return to Homepage"}
            onclickFunction={ReturnToHomepage}
            customButtonCss={`!transition-all !duration-500 !ease-in-out hover:!bg-[#4243DF]`}
          />
        </div>
      </div>

      {/* Tablet View */}
      <div className="w-[70%] h-[23.625rem] flex items-center justify-center maxTab:hidden max-minTab:hidden">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={lockSession ? LockedSessionImage : FullSessionImage}
            alt="Sessions Images"
            className="w-[7rem] h-[7rem] translate-y-[-175%] absolute"
          />
          <h1 className="text-[1.5rem] text-[--Blue] font-[700] mt-8 max-w-[23rem] text-center">
            {heading}
          </h1>
          <p className="font-jetBrain text-[1rem] text-[--Dark] text-center font-[500] max-w-[23rem]">
            {detail}
          </p>
          <Button02
            Title={"Return to Homepage"}
            onclickFunction={ReturnToHomepage}
            customButtonCss={`!w-[17.375rem]`}
            TitleCss={`!text-[0.875rem]`}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="max-w-[24.375rem] w-[90%] h-[20.625rem] items-center justify-center hidden max-minTab:flex">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={lockSession ? LockedSessionImage : FullSessionImage}
            alt="Sessions Images"
            className="w-[6.25rem] h-[6.25rem] translate-y-[-175%] absolute"
          />
          <h1 className="text-[1.0625rem] text-[--Blue] font-[700] mt-8 max-w-[17.75rem] text-center">
            {heading}
          </h1>
          <p className="font-jetBrain text-[0.8125rem] text-[--Dark] text-center font-[500] max-w-[17.75rem]">
            {detail}
          </p>
          <Button02
            Title={"Return to Homepage"}
            onclickFunction={ReturnToHomepage}
            customButtonCss={`!w-[90%]`}
            TitleCss={`!text-[0.875rem]`}
          />
        </div>
      </div>
    </>
  );
};

const Card03 = ({
  maintenance = false,
  heading,
  subHeading,
  detail,
  subDetail,
}) => {
  return (
    <>
      {/* Desktop View */}
      <div className="max-w-[56.25rem] w-[45%] h-[23rem] flex items-center justify-center max-maxTab:hidden">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-4"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={maintenance ? MaintenanceImage : VerificationImage}
            alt="Sessions Images"
            className="w-[8rem] h-[8rem] translate-y-[-144%] absolute"
          />
          {maintenance ? (
            <>
              <h1 className="text-[--Blue] text-center text-[1.625rem] leading-[33.85px] font-[700] mt-[3rem] px-4">
                {heading}
                <br />
                {subHeading}
              </h1>
              <h1 className="text-[--Blue] leading-[19.8px] text-center text-[1.625rem] font-[700] px-4 -mt-6 mb-2"></h1>
            </>
          ) : (
            <h1 className="text-[--Blue] leading-[33.85px] text-center text-[1.625rem] font-[700] px-4 -mt-4">
              {heading}
            </h1>
          )}
          {maintenance ? (
            <div className="flex w-full items-center justify-center flex-col gap-6">
              <p className="font-jetBrain text-[1rem] font-[400] leading-[1.625rem] max-w-[33.3125rem] text-center text-[#363C4F]">
                {detail}
              </p>
              <p className="font-jetBrain text-[1rem] font-[400] leading-[1.625rem] max-w-[33.3125rem] text-center text-[#363C4F]">
                {subDetail}
              </p>
            </div>
          ) : (
            <>
              {/* Verify You are Human */}
              <div className="w-[18.75rem] mt-4">
                <VerifyYouAreHuman />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Tablet View */}
      <div className="w-[70%] h-[25rem] flex items-center justify-center maxTab:hidden max-minTab:hidden">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={maintenance ? MaintenanceImage : VerificationImage}
            alt="Sessions Images"
            className="w-[7rem] h-[7rem] translate-y-[-175%] absolute"
          />
          {maintenance ? (
            <>
              <h1 className="text-[--Blue] text-center text-[1.5rem] font-[700] mt-8 px-4">
                {heading}
              </h1>
              <h1 className="text-[--Blue] text-center text-[1.5rem] font-[700] px-4 -mt-6">
                {subHeading}
              </h1>
            </>
          ) : (
            <h1 className="text-[--Blue] text-center text-[1.5rem] font-[700] px-8">
              {heading}
            </h1>
          )}
          {maintenance ? (
            <div className="flex w-full items-center justify-center flex-col gap-10">
              <p className="font-jetBrain text-[1rem] font-[500]  text-center text-[#363C4F] max-w-[28rem] px-4">
                {detail}
              </p>
              <p className="font-jetBrain text-[1rem] font-[500] text-center text-[#363C4F] max-w-[28rem]">
                {subDetail}
              </p>
            </div>
          ) : (
            <>
              {/* Verify You are Human */}
              <div className="w-[18.75rem] mt-4">
                <VerifyYouAreHuman />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="max-w-[24.375rem] w-[90%] h-[20.625rem] items-center justify-center hidden max-minTab:flex">
        <div
          className="w-full h-full rounded-[0.625rem] bg-[#fff] z-[10] flex flex-col items-center justify-center gap-6"
          style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
        >
          <Image
            src={maintenance ? MaintenanceImage : VerificationImage}
            alt="Sessions Images"
            className="w-[6.25rem] h-[6.25rem] translate-y-[-185%] absolute"
          />
          {maintenance ? (
            <>
              <h1 className="text-[--Blue] text-center text-[1.0625rem] font-[700] mt-8 px-4">
                {heading}
              </h1>
              <h1 className="text-[--Blue] text-center text-[1.0625rem] font-[700] px-4 -mt-6">
                {subHeading}
              </h1>
            </>
          ) : (
            <h1 className="max-w-[16rem] text-[--Blue] text-center text-[1.0625rem] font-[700] px-4">
              {heading}
            </h1>
          )}
          {maintenance ? (
            <div className="flex w-full items-center justify-center flex-col gap-10">
              <p className="font-jetBrain text-[0.8125rem] font-[500] max-w-[17.75rem] text-center text-[#363C4F]">
                {detail}
              </p>
              <p className="font-jetBrain text-[0.8125rem] font-[500] max-w-[17.75rem] text-center text-[#363C4F]">
                {subDetail}
              </p>
            </div>
          ) : (
            <>
              {/* Verify You are Human */}
              <div className="w-[18.75rem] mt-4">
                <VerifyYouAreHuman />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { ContactUsCard, Card01, Card02, Card03 };
