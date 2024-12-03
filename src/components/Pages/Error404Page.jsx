"use client";

import React, { useEffect, useState } from "react";

// Components
import CommonHeader from "../Layouts/Headers/CommonHeader";
import CopyrightFooter from "../Layouts/Footers/CopyrightFooter";
import { Card01 } from "../Common/Card";

const Error404Page = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setIsLandscape(screenWidth > screenHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CommonHeader />
      <div
        className={`absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[9] max-maxTab:hidden`}
      />
      <div
        className={`bg-[#fff] w-full ${
          isLandscape ? "h-[150vh]" : "h-[calc(100vh-149px)]"
        } maxTab:h-[calc(100vh-150px)] flex items-center justify-center`}
      >
        <div className="w-[30.25rem] h-[30.25rem] max-minTab:w-full max-minTab:h-[50%] rounded-[25.25rem] opacity-50 bg-[--Blue] max-minTab:opacity-20 blur-[50px] absolute" />
        <Card01
          heading={"404"}
          subHeading={"The page you’re looking for doesn't exist"}
          detail={
            "Don’t panic, just click the big button below and return home."
          }
        />
      </div>
      <CopyrightFooter />
      {/* <TempDown /> */}
    </>
  );
};

export default Error404Page;
