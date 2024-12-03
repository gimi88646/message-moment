import React from "react";

// Component
import VerificationPage from "@/components/Pages/VerificationPage";
import Script from "next/script";

const page = () => {
  return (
    <>
      <VerificationPage />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>
    </>
  );
};

export default page;
