"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import tip from "../../public/Icons/tip.svg";

const Tooltip = ({ content, children, CustomCss, tipCss }) => {
  return (
    <div className="relative inline-block group">
      {children}

      <div
        className={`${CustomCss} hidden maxTab:group-hover:flex absolute z-20 p-2 bg-black text-white text-sm rounded-lg -mt-8 ml-4 transition-opacity duration-300 items-center justify-center font-[500] text-[0.75rem]`}
      >
        <Image src={tip} alt="tip" className={`${tipCss} absolute`} />
        {content}
      </div>
    </div>
  );
};

const Tooltip02 = ({
  content,
  children,
  CustomCss,
  CustomStyle,
  YInitial,
  YAnimate,
}) => {
  return (
    <div className="relative inline-block group">
      {children}

      <motion.div
        initial={{ y: YInitial, opacity: 0 }}
        animate={{ y: YAnimate, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`${CustomCss} flex absolute p-2 bg-black text-white text-sm rounded-md transition-opacity duration-300 items-center justify-center font-[500] text-[0.75rem]`}
        style={CustomStyle}
      >
        {content}
      </motion.div>
    </div>
  );
};

const Tooltip03 = ({
  content,
  children,
  CustomCss,
  CustomStyle,
  YInitial,
  YAnimate,
}) => {
  return (
    <div className="relative inline-block group">
      {children}

      <motion.div
        initial={{ y: YInitial }}
        animate={{ y: YAnimate }}
        transition={{ duration: 0.2 }}
        className={`${CustomCss} flex absolute p-2 bg-black text-white text-sm rounded-md transition-opacity duration-300 items-center justify-center font-[500] text-[0.75rem]`}
        style={CustomStyle}
      >
        {content}
      </motion.div>
    </div>
  );
};

const Tooltip04 = ({
  content,
  children,
  CustomCss,
  CustomStyle,
  isDisappear,
  setIsDisappear,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsDisappear(false);
    }, 1000);
  }, [setIsDisappear]);
  return (
    <div className="relative inline-block group">
      {children}
      <AnimatePresence>
        {isDisappear && (
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            transition={{ duration: 0.2 }}
            className={`${CustomCss} flex absolute p-2 bg-black text-white text-sm rounded-md transition-opacity duration-300 items-center justify-center font-[500] text-[0.75rem]`}
            style={CustomStyle}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tooltip, Tooltip02, Tooltip03, Tooltip04 };
