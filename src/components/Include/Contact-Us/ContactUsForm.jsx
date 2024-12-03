"use client";
import React, { useState } from "react";

// Functions
import { ConfirmedSend } from "@/components/Common/Modals";
import ContactFields from "./ContactFields";

const ContactUsForm = () => {
  const [send, setSend] = useState(false);
  const [cleanForm, setCleanForm] = useState(false);

  return (
    <>
      <div
        className="matTab:w-[80%] w-[98%] flex items-center justify-center flex-col rounded-[0.625rem] px-4 bg-[#fff] gap-8 maxTab:py-[3rem] py-[2rem] max-maxTab:mb-12 maxTab:-mt-3"
        style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
      >
        <ContactFields
          cleanForm={cleanForm}
          setCleanForm={setCleanForm}
          setSend={setSend}
        />
      </div>

      {send && <ConfirmedSend setSend={setSend} setCleanForm={setCleanForm} />}
    </>
  );
};

export default ContactUsForm;
