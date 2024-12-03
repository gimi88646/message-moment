"use client";

import React, { useState } from "react";
import Head from "next/head";

const Input = ({ onSearch }) => {
  const [isHovered, setHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <div
        className="maxTab:w-[80%] w-full h-[3.75rem] flex items-center rounded-[0.375rem] p-4 bg-[#fff]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full h-[90%] font-jetBrain text-[--Dark] p-2 focus:outline-none placeholder:text-[0.9375rem] text-[0.9375rem] max-minTab:placeholder:text-[0.8125rem] max-minTab:text-[0.8125rem] placeholder:font-[400] maxTab:placeholder:leading-[1.4375rem]"
          placeholder="Type keywords to find answers"
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="maxTab:cursor-pointer"
          style={{
            fill: isHovered ? "#494AF8" : "#CCCCCC",
          }}
        >
          <path
            d="M19.4073 17.7527L14.9969 13.3422C16.0587 11.9286 16.6319 10.208 16.63 8.44C16.63 3.92406 12.9559 0.25 8.44 0.25C3.92406 0.25 0.25 3.92406 0.25 8.44C0.25 12.9559 3.92406 16.63 8.44 16.63C10.208 16.6319 11.9286 16.0587 13.3422 14.9969L17.7527 19.4073C17.9759 19.6069 18.2671 19.7135 18.5664 19.7051C18.8658 19.6967 19.1506 19.574 19.3623 19.3623C19.574 19.1506 19.6967 18.8658 19.7051 18.5664C19.7135 18.2671 19.6069 17.9759 19.4073 17.7527ZM2.59 8.44C2.59 7.28298 2.9331 6.15194 3.5759 5.18991C4.21871 4.22789 5.13235 3.47808 6.2013 3.03531C7.27025 2.59253 8.44649 2.47668 9.58128 2.70241C10.7161 2.92813 11.7584 3.48529 12.5766 4.30343C13.3947 5.12156 13.9519 6.16393 14.1776 7.29872C14.4033 8.43351 14.2875 9.60975 13.8447 10.6787C13.4019 11.7476 12.6521 12.6613 11.6901 13.3041C10.7281 13.9469 9.59702 14.29 8.44 14.29C6.88906 14.2881 5.40217 13.6712 4.30548 12.5745C3.2088 11.4778 2.59186 9.99095 2.59 8.44Z"
            fill={isHovered ? "#494AF8" : "#CCCCCC"}
          />
        </svg>
      </div>
    </>
  );
};

export default Input;
