"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

// Icons and Image
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import FAQsMainImg from "../../../../public/Icons/FAQsMain.png";

// Data
import FAQs from "@/data/FAQs";

// Component
import { ContactUsCard } from "@/components/Common/Card";

// Function
import Input from "@/functions/Input";

const FrequentlyAskedQuestions = () => {
  const [openQuestions, setOpenQuestions] = useState([]);
  const [filteredFAQs, setFilteredFAQs] = useState(FAQs);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = (id) => {
    setOpenQuestions((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const handleSearch = (searchQuery) => {
    const filtered = FAQs.filter(
      (faq) =>
        faq.Question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.Answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFAQs(filtered);
    setSearchQuery(searchQuery);
    const matchingIds = filtered.map((faq) => faq.id);
    setOpenQuestions(matchingIds);
  };

  const highlightKeyword = (answer) => {
    if (!searchQuery) return { __html: answer };

    const regex = new RegExp(`(${searchQuery})`, "gi");

    if (/<[a-z][\s\S]*>/i.test(answer)) {
      const parts = answer.split(/(<[^>]+>)/);
      const highlightedParts = parts.map((part) => {
        if (part.startsWith("<")) {
          return part;
        } else {
          return part.replace(regex, '<span class="highlight">$1</span>');
        }
      });

      return { __html: highlightedParts.join("") };
    } else {
      const highlightedAnswer = answer.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
      );

      return { __html: highlightedAnswer };
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      setOpenQuestions([]);
    }
  }, [searchQuery]);

  return (
    <>
      {/* Upper Section */}
      <div className="absolute w-full maxTab:h-[450px] h-[400px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1]" />
      <div className="w-full maxTab:p-8 max-maxTab:py-8 max-maxTab:px-4 flex items-center justify-center flex-col gap-8">
        <div className="w-full flex items-center justify-center flex-col gap-4 mb-2">
          <Image
            className="maxTab:h-[8rem] maxTab:w-[8rem] minTab:h-[6.5rem] minTab:w-[6.5rem] h-[5rem] w-[5rem]"
            alt="FAQs Main"
            src={FAQsMainImg}
          />

          {/* Heading */}
          <h1 className="maxTab:text-[2.5rem] minTab:text-[2rem] text-[1.5rem] font-[700] text-[--Dark] maxTab:mt-4 maxTab:leading-[52.08px]">
            How can we help you?
          </h1>
        </div>

        {/* Search Input */}
        <Input onSearch={handleSearch} />

        {/* Bottom Text */}
        <p className="text-[--Blue] maxTab:text-[1.0625rem] minTab:text-[1rem] text-[0.875rem] font-[500] leading-[1.5rem] max-maxTab:text-center max-minTab:max-w-[16.5625rem]">
          You can also browse the topics below to find what you are looking for:
        </p>
      </div>

      {/* Bottom Section */}
      <div className="absolute w-full maxTab:h-[450px] h-[400px] opacity-10 bg-gradient-to-b from-indigo-600 to-indigo-50 z-[-1]" />
      <div className="w-full maxTab:p-4 max-maxTab:py-4 max-maxTab:px-2 flex maxTab:items-center justify-center flex-col maxTab:gap-[8rem] gap-[4rem] bg-[--Gradient02] bg-opacity-10 mb-[4rem]">
        <div className="maxTab:w-[80%] p-4 flex flex-col maxTab:gap-8 gap-4 maxTab:mt-6">
          <h1 className="text-[--Dark] maxTab:text-[2.5rem] minTab:text-[2rem] text-[1.5rem] font-[700] maxTab:leading-[52.08px] max-maxTab:ml-1">
            Frequently Asked Questions
          </h1>
          <h1
            className={`text-[--Blue] maxTab:text-[1.625rem] minTab:text-[1.5rem] text-[1.0625rem] font-[700] maxTab:-mb-4 maxTab:leading-[33.85px] max-maxTab:ml-1 ${
              searchQuery.length && !filteredFAQs.length ? "hidden" : ""
            }`}
          >
            General
          </h1>

          {/* Output Question and Answers */}
          {searchQuery.length && !filteredFAQs.length ? (
            <div className="w-full justify-center items-center py-4 flex">
              <div
                className="bg-[#fff] w-full h-[200px] rounded-[10px] flex items-center justify-center flex-col gap-4 px-12"
                style={{ border: "1px solid rgba(0, 0, 0, 0.10" }}
              >
                <h1 className="text-[26px] max-minTab:text-[17px] font-[700] text-[--Blue] leading-normal">
                  No results found
                </h1>
                <p className="text-[--Dark] text-center font-jetBrain text-[15px] font-[400] leading-[23px] max-minTab:max-w-[298px]">
                  We couldn’t find a match for “{searchQuery}”. Please try
                  another keyword.
                </p>
              </div>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="w-full flex flex-col items-center maxTab:gap-6 gap-2 text-[--Dark] border-b-[0.0625rem] maxTab:py-4 minTab:py-4 max-minTab:pb-4 maxTab:-mb-8"
              >
                {/* Question */}
                <div
                  className={`w-full flex gap-2 maxTab:items-center transition-all ease-in-out duration-300 ${
                    openQuestions.includes(faq.id) ? "text-[--Blue]" : ""
                  }`}
                  onClick={() => toggleDropdown(faq.id)}
                >
                  {openQuestions.includes(faq.id) ? (
                    <FaChevronDown className="maxTab:text-[12px] text-[14px] max-maxTab:mt-1 max-maxTab:ml-1" />
                  ) : (
                    <FaChevronRight className="maxTab:text-[12px] text-[14px] max-maxTab:mt-1 max-maxTab:ml-1" />
                  )}
                  <p className="w-full font-jetBrain maxTab:text-[1.125rem] font-[500] maxTab:hover:text-[--Blue] minTab:text-[1rem] text-[0.9375rem] maxTab:cursor-pointer">
                    {faq.Question}
                  </p>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openQuestions.includes(faq.id) && (
                    <motion.div
                      key={faq.id}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ ease: "easeInOut", duration: 0.1 }}
                      className="w-full maxTab:pl-5 pl-[26px]"
                    >
                      <div
                        className="font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] cursor-default"
                        dangerouslySetInnerHTML={highlightKeyword(faq.Answer)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}

          <hr
            className={`w-full h-[0.15rem] bg-[#000] opacity-10 ${
              searchQuery.length && !filteredFAQs.length ? "" : "hidden"
            }`}
          />
        </div>

        <ContactUsCard />
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
