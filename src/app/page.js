"use client";
import React from "react";
// Component
import LandingPage from "@/components/Pages/LandingPage";
import Script from "next/script";
const page = () => {
  return (
    <>
      <LandingPage />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>
    </>
  );
};

export default page;
