import React from "react";

const CopyrightFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        className={`w-full h-[4rem] flex items-center justify-center bg-[#fff] max-minTab:text-[--Dark] text-[#555] max-minTab:text-[0.6875rem] text-[0.8125rem] font-[500] maxTab:leading-normal`}
      >
        {`Copyright © ${currentYear} MessageMoment. All rights reserved.`}
      </div>
    </>
  );
};

export default CopyrightFooter;
