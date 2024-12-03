import React from "react";
import Image from "next/image";

import { platforms } from "@/data/Discover";

const MessageMommentsPlatforms = () => {
  return (
    <div className="flex justify-center items-center pb-10 gap-6 maxTab:gap-12 px-[4px]">
      {platforms.map((platform, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image src={platform.icon} alt={platform.name} />
          <h1 className="font-jetBrain text-[0.8125rem] maxTab:text-[0.9375rem] font-[400] leading-[1.4375rem] text-[#fff] max-vsm:text-[0.6125rem]">
            {platform.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default MessageMommentsPlatforms;
