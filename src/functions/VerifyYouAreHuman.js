"use client";

import { useEffect } from "react";

const VerifyYouAreHuman = ({ onVerificationSuccess }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.javascriptCallback = () => {
        onVerificationSuccess();
      };

      return () => {
        delete window.javascriptCallback;
      };
    }
  }, []);

  return (
    <>
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAAAPPHnnkIO9AxS6O"
        data-theme="light"
        data-callback="javascriptCallback"
      ></div>
    </>
  );
};

export default VerifyYouAreHuman;
