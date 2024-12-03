"use client";

import React, { useEffect, useState } from "react";

// Components
import CommonHeader from "../Layouts/Headers/CommonHeader";
import CopyrightFooter from "../Layouts/Footers/CopyrightFooter";
import { Card02 } from "../Common/Card";

const LockedSessionPage = () => {
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
      <div className={`absolute w-full h-[450px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[9] max-maxTab:hidden`} />
      <div
        className={`bg-[#fff] w-full ${
          isLandscape ? "h-[150vh]" : "h-[calc(100vh-149px)]"
        } maxTab:h-[calc(100vh-150px)] flex items-center justify-center`}
      >
        <div className="w-[30.25rem] h-[30.25rem] max-minTab:w-full max-minTab:h-[50%] rounded-[25.25rem] opacity-50 bg-[--Blue] max-minTab:opacity-20 blur-[50px] absolute" />
        <Card02
          lockSession={true}
          heading={"The chat session is locked"}
          detail={
            "Unfortunately you are unable to enter the chat at this time."
          }
        />
      </div>
      <CopyrightFooter />
      {/* <TempDown /> */}
    </>
  );
};

export default LockedSessionPage;
