"use client";

import React, { useState } from "react";

// Components
import Header from "../Layouts/Headers/Header";
import Footer from "../Layouts/Footers/Footer";
import MessageMomentIntroductionSection from "../Include/About/MessageMomentIntroductionSection";
import {
  MessageMomentAboutLowerSection,
  MessageMomentAboutMiddleLowerSection,
  MessageMomentAboutMiddleSection,
  MessageMomentAboutUpperSection,
} from "../Include/About/MessageMomentAboutSections";
import { Cookieparser, Cookiepreferences } from "../Common/Modals";

const AboutPage = () => {
  const [cookiepreferences, setCookiepreferences] = useState(false);

  return (
    <>
      <Header />
      <MessageMomentIntroductionSection />
      <MessageMomentAboutUpperSection />
      <MessageMomentAboutMiddleSection />
      <MessageMomentAboutMiddleLowerSection />
      <MessageMomentAboutLowerSection />
      <Footer isAboutUsPage={true} />
      <Cookieparser setCookiepreferences={setCookiepreferences} />
      <Cookiepreferences
        cookiepreferences={cookiepreferences}
        setCookiepreferences={setCookiepreferences}
      />
      {/* <TempDown /> */}
    </>
  );
};

export default AboutPage;
