import React from "react";

// Component
import ContactUsPage from "@/components/Pages/ContactUsPage";
import Script from "next/script";

const page = () => {
  return (
    <>
      <ContactUsPage />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>
    </>
  );
};

export default page;
