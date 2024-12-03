"use client";

import React, { useState } from "react";

// Components
import Header from "../Layouts/Headers/Header";
import Footer from "../Layouts/Footers/Footer";
import PrivacyContent from "../Include/Privacy-Policy/PrivacyContent";
import { Cookieparser, Cookiepreferences } from "../Common/Modals";

const PrivacyPolicyPage = () => {
  const [cookiepreferences, setCookiepreferences] = useState(false);

  return (
    <>
      <Header />
      <PrivacyContent />
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

export default PrivacyPolicyPage;
