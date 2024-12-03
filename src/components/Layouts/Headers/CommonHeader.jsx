import React from "react";
import Image from "next/image";

// Images
import Logo from "../../../../public/Logos/logo.svg";

const CommonHeader = () => {
  return (
    <>
      <div className="w-full h-[5px] bg-[--Blue]" />
      <div
        className={`w-full h-[5rem] flex items-center justify-center bg-[#fff] outline outline-[1] outline-[#0000000D]`}
      >
        <a href="/">
          <Image
            src={Logo}
            alt="MessageMomment"
            className="w-[12.28156rem] h-[2.875rem] max-minTab:w-[10.5615rem] max-minTab:h-[2.5rem] cursor-pointer"
          />
        </a>
      </div>
    </>
  );
};

export default CommonHeader;
