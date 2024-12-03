"use client";

import React, { useState } from "react";

// Component
import Header from "../Layouts/Headers/Header";
import Footer from "../Layouts/Footers/Footer";
import TermsConditonContent from "../Include/Terms-Conditions/TermsConditonContent";
import { Cookieparser, Cookiepreferences } from "../Common/Modals";

const TermsConditionPage = () => {
  const [cookiepreferences, setCookiepreferences] = useState(false);

  return (
    <>
      <Header />
      <TermsConditonContent />
      <Footer isTermsPage={true} />
      <Cookieparser setCookiepreferences={setCookiepreferences} />
      <Cookiepreferences
        cookiepreferences={cookiepreferences}
        setCookiepreferences={setCookiepreferences}
      />
      {/* <TempDown /> */}
    </>
  );
};

export default TermsConditionPage;
