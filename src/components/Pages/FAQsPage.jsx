"use client";

import React, { useState } from "react";

// Components
import Header from "../Layouts/Headers/Header";
import Footer from "../Layouts/Footers/Footer";
import FrequentlyAskedQuestions from "../Include/FAQ/FrequentlyAskedQuestions";
import { Cookieparser, Cookiepreferences } from "../Common/Modals";

const FAQsPage = () => {
  const [cookiepreferences, setCookiepreferences] = useState(false);

  return (
    <>
      <Header />
      <FrequentlyAskedQuestions />
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

export default FAQsPage;
