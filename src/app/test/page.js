"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    if (navigator.userAgent.indexOf("Mac OS") !== -1) {
      document.body.classList.add("mac-os-firefox");
    }
    return () => {
      document.body.classList.remove("mac-os-firefox");
    };
  }, []);

  return (
    <>
      <h1 className="fz100px">lorem</h1>
    </>
  );
};

export default Page;
