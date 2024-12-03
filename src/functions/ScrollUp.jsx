import React from "react";
import Image from "next/image";

import scrollImg from "../../public/Icons/scroll.svg";

const ScrollUp = ({ ImgCss }) => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {/* Desktop View */}
      <div
        className={`absolute cursor-pointer flex items-center justify-center right-[3%] ${ImgCss} translate-y-[-42px] w-[5rem] h-[5rem] rounded-full bg-[--Blue] hover:bg-[#4243df] transition-all ease-in-out duration-500 border-[#fff] border-[3px] max-maxTab:hidden`}
        onClick={scrollTop}
      >
        <svg
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-[6px]"
        >
          <path
            d="M3.412 13.4586C3.0617 13.8054 2.58867 14 2.09571 14C1.60275 14 1.12971 13.8054 0.779407 13.4586C0.606459 13.2883 0.469112 13.0852 0.375364 12.8613C0.281616 12.6374 0.233339 12.3971 0.233339 12.1544C0.233339 11.9117 0.281616 11.6714 0.375364 11.4475C0.469112 11.2236 0.606458 11.0205 0.779407 10.8502L11.299 0.540561C11.6501 0.194196 12.1235 1.1257e-06 12.6167 1.08259e-06C13.1099 1.03947e-06 13.5832 0.194196 13.9343 0.540561L24.4539 10.8502C24.6269 11.0205 24.7642 11.2236 24.858 11.4475C24.9517 11.6714 25 11.9117 25 12.1544C25 12.3971 24.9517 12.6374 24.858 12.8613C24.7642 13.0852 24.6269 13.2883 24.4539 13.4586C24.1036 13.8054 23.6306 14 23.1376 14C22.6447 14 22.1716 13.8054 21.8213 13.4586L12.6126 5.00359L3.412 13.4586Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Mobile and Tablet View */}
      <Image
        src={scrollImg}
        alt="Scroll Up"
        className={`absolute cursor-pointer right-[3%] ${ImgCss} translate-y-[-40px] w-[5rem] h-[5rem] maxTab:hidden`}
        onClick={scrollTop}
        width="auto"
        height="auto"
      />
    </>
  );
};

export default ScrollUp;
