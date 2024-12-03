import React from "react";
import Image from "next/image";

// Image
import MailIcon from "../../../../public/Icons/MailIcon.png";

// Component
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <div className="absolute w-full h-[450px] max-minTab:h-[400px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1]" />
      <div className="w-full mb-[4rem] p-8 max-maxTab:py-8 max-maxTab:px-4 flex items-center justify-center flex-col gap-8 maxTab:mt-[2rem] max-maxTab:mb-[2rem]">
        <div className="w-full flex items-center justify-center flex-col gap-4 max-maxTab:mb-2 maxTab:mb-2">
          <Image
            className="h-[8rem] max-maxTab:h-[5rem] w-[8rem] max-maxTab:w-[5rem]"
            alt="Mail Icon"
            src={MailIcon}
          />
          <h1 className="text-[2.5rem] max-maxTab:text-[1.5rem] font-[700] text-[--Dark] maxTab:mt-4 leading-[52.08px] maxTab:leading-normal">
            Contact Us
          </h1>
          <p className="text-[--Dark] text-center text-[1.0625rem] max-maxTab:text-[0.875rem] max-maxTab:max-w-[18.5rem] font-[500] maxTab:leading-[24px]">
            Need answers or help? We might have answered your question in our{" "}
            <a href="/faqs" className="text-[--Blue] hover:underline">
              FAQs
            </a>
            .<br />
            <br />
            Otherwise complete this form on the topic relevant to your query.
          </p>
        </div>

        <ContactUsForm />
      </div>
    </>
  );
};

export default ContactUs;
