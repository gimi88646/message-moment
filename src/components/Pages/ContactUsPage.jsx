"use client";

import React, { useState } from "react";

// Components
import Header from "../Layouts/Headers/Header";
import Footer from "../Layouts/Footers/Footer";
import ContactUs from "../Include/Contact-Us/ContactUs";
import { Cookieparser, Cookiepreferences } from "../Common/Modals";

const ContactUsPage = () => {
  const [cookiepreferences, setCookiepreferences] = useState(false);

  return (
    <>
      <Header isContactPage={true} />
      <ContactUs />
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

export default ContactUsPage;
