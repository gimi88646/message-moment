"use client";

import React, { useEffect, useState } from "react";

// Components
import Header from "../Layouts/Headers/Header";
import Footer from "../Layouts/Footers/Footer";
import HeroSection from "../Include/Home/HeroSection";
import GuideSection from "../Include/Home/GuideSection";
import HowToGetStarted from "../Include/Home/HowToGetStarted";
import MessageMomentDetailSection from "../Include/Home/MessageMomentDetailSection";
import DiscoverSection from "../Include/Home/DiscoverSection";
import { Cookieparser, Cookiepreferences } from "../Common/Modals";

const LandingPage = () => {
  const [isLinkTypeSecure, setIsLinkTypeSecure] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [cookiepreferences, setCookiepreferences] = useState(false);

  return (
    <>
      <Header isLandingPage={true} setScroll={setScroll} />
      <HeroSection
        setIsLinkTypeSecure={setIsLinkTypeSecure}
        setScroll={setScroll}
        scroll={scroll}
      />
      <GuideSection isLinkTypeSecure={isLinkTypeSecure} />
      <HowToGetStarted />
      <MessageMomentDetailSection />
      <DiscoverSection />
      <Footer />
      <Cookieparser setCookiepreferences={setCookiepreferences} />
      <Cookiepreferences
        cookiepreferences={cookiepreferences}
        setCookiepreferences={setCookiepreferences}
      />
      {/* <TempDown /> */}
    </>
  );
};

export default LandingPage;
