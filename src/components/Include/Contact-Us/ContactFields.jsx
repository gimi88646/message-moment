"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Functions
import VerifyYouAreHuman from "@/functions/VerifyYouAreHuman";

const ContactFields = ({ setSend, setCleanForm, cleanForm }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedTopic: "Select",
    query: "",
  });
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    selectedTopic: "Select",
    query: "",
  };
  const [validationStates, setValidationStates] = useState({
    firstName: false,
    lastName: false,
    email: false,
    selectedTopic: false,
    query: false,
  });
  const initialValidationStates = {
    firstName: false,
    lastName: false,
    email: false,
    selectedTopic: false,
    query: false,
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const dropdownRef = useRef(null);

  // Reset Whole Form
  useEffect(() => {
    if (cleanForm) {
      setFormValues(initialFormState);
      setValidationStates(initialValidationStates);
      setDropdownOpen(false);
      setCleanForm(false);
    }
  }, [cleanForm]);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  // Close Dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Handle Dropdown
  const handleDropdownSelect = (topic) => {
    setFormValues((prevValues) => ({ ...prevValues, selectedTopic: topic }));
    toggleDropdown();
    setValidationStates((prevValidationStates) => ({
      ...prevValidationStates,
      selectedTopic: false,
    }));
  };

  // Handle keydown event
  const handleKeyDown = (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(document.activeElement)
      ) {
        toggleDropdown();
      }
    }
  };

  // Handle Email
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(inputValue);

    setFormValues((prevValues) => ({
      ...prevValues,
      email: inputValue,
    }));

    setValidationStates((prevValidationStates) => ({
      ...prevValidationStates,
      email: !isValidEmail,
    }));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Verify if Cloudflare is success
  // const handleVerificationSuccess = () => {
  //   setActiveButton(true);
  // };

  // Text Area Change
  const handleTextareaChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 1500) {
      setFormValues((prevValues) => ({ ...prevValues, query: inputText }));
      const isEmpty = inputText.trim() === "";
      setValidationStates((prevValidationStates) => ({
        ...prevValidationStates,
        query: isEmpty,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        query: inputText.slice(0, 1500),
      }));
    }
  };
  const remainingCharacters = 1500 - formValues.query.length;

  // Set Active Button True
  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    const allFieldsValid = Object.values(validationStates).every(
      (valid) => !valid
    );
    setActiveButton(allFieldsFilled && allFieldsValid);
  }, [formValues, validationStates]);

  // Handle Submit
  const handleSubmit = () => {
    setSend(true);
  };
  return (
    <>
      <div className="maxTab:w-[80%] w-full flex items-center justify-between gap-6 max-maxTab:flex-col">
        {/* First Name */}
        <div className="flex flex-col justify-center gap-2 w-full">
          {/* Label */}
          <p className="text-[--Dark] text-[1.0625rem] max-minTab:text-[0.875rem] font-[500] leading-[1.5rem]">
            First Name*
          </p>

          {/* Input */}
          <input
            className={`h-[3.75rem] rounded-[0.375rem] bg-[#fff] text-[--Dark] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] p-4 placeholder:text-[0.9375rem] max-minTab:placeholder:text-[0.8125rem] placeholder:leading-[1.4375rem] placeholder:font-jetBrain outline-none border-t-[1px] border-l-[1px] border-r-[1px] border-[#000] border-opacity-10 ${
              validationStates.firstName
                ? "placeholder:text-[--Red] !border-b-[2px] !border-b-[--Red] !rounded-b-none"
                : "placeholder:opacity-30 placeholder:text-[--Dark] border-b-[1px]"
            }`}
            placeholder="Enter your first name"
            value={formValues.firstName}
            onChange={(e) => {
              const inputValue = e.target.value;
              setFormValues((prevValues) => ({
                ...prevValues,
                firstName: inputValue,
              }));
              const isEmpty = inputValue.trim() === "";
              setValidationStates((prevValidationStates) => ({
                ...prevValidationStates,
                firstName: isEmpty,
              }));
            }}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col justify-center gap-2 w-full">
          {/* Label */}
          <p className="text-[--Dark] text-[1.0625rem] max-minTab:text-[0.875rem] font-[500] leading-[1.5rem]">
            Last Name*
          </p>

          {/* Input */}
          <input
            className={`h-[3.75rem] rounded-[0.375rem] bg-[#fff] text-[--Dark] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] p-4 placeholder:text-[0.9375rem] max-minTab:placeholder:text-[0.8125rem] placeholder:leading-[1.4375rem] placeholder:font-jetBrain outline-none border-t-[1px] border-l-[1px] border-r-[1px] border-[#000] border-opacity-10 ${
              validationStates.lastName
                ? "placeholder:text-[--Red] !border-b-[2px] !border-b-[--Red] !rounded-b-none"
                : "placeholder:opacity-30 placeholder:text-[--Dark] border-b-[1px]"
            }`}
            placeholder="Enter your Last name"
            value={formValues.lastName}
            onChange={(e) => {
              const inputValue = e.target.value;
              setFormValues((prevValues) => ({
                ...prevValues,
                lastName: inputValue,
              }));
              const isEmpty = inputValue.trim() === "";
              setValidationStates((prevValidationStates) => ({
                ...prevValidationStates,
                lastName: isEmpty,
              }));
            }}
          />
        </div>
      </div>

      {/* Email */}
      <div className="maxTab:w-[80%] w-full flex justify-center flex-col gap-2">
        <p className="text-[--Dark] text-[1.0625rem] max-minTab:text-[0.875rem] font-[500] leading-[1.5rem]">
          Email Address*
        </p>
        <input
          className={`h-[3.75rem] rounded-[0.375rem] bg-[#fff] text-[--Dark] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] p-4 placeholder:text-[0.9375rem] max-minTab:placeholder:text-[0.8125rem] placeholder:leading-[1.4375rem] placeholder:font-jetBrain outline-none border-t-[1px] border-l-[1px] border-r-[1px] border-[#000] border-opacity-10 ${
            validationStates.email
              ? "placeholder:text-[--Red] !border-b-[2px] !border-b-[--Red] !rounded-b-none"
              : "placeholder:opacity-30 placeholder:text-[--Dark] border-b-[1px]"
          }`}
          placeholder="Enter your email address"
          value={formValues.email}
          onChange={handleEmailChange}
        />
      </div>

      {/* Select Dropdown */}
      <div
        className="maxTab:w-[80%] w-full flex justify-center flex-col gap-2 relative"
        ref={dropdownRef}
        onKeyDown={handleKeyDown}
      >
        <p className="text-[--Dark] text-[1.0625rem] max-minTab:text-[0.875rem] font-[500] leading-[1.5rem]">
          Select a topic*
        </p>
        <div
          tabIndex={0}
          className={`h-[3.75rem] rounded-[0.375rem] bg-[#fff] p-4 border-t-[1px] border-l-[1px] border-r-[1px] border-[#000] border-opacity-10 cursor-pointer flex items-center justify-between ${
            validationStates.selectedTopic
              ? "!border-b-2 !border-b-[--Red]"
              : "border-b-[1px]"
          }`}
          onClick={toggleDropdown}
        >
          <p
            className={`${
              validationStates.selectedTopic ? "text-[--Red]" : "text-[--Dark]"
            } font-jetBrain text-[0.9375rem] max-maxTab:text-[0.8125rem] font-[400] leading-[1.4375rem]`}
          >
            {formValues.selectedTopic}
          </p>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Dropdown Options */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ y: -8, opacity: 0 }}
              className="absolute w-[100%] bg-white rounded-[0.375rem] shadow-lg top-[6rem] z-[9999]"
            >
              <div className="w-full rounded-[0.375rem] px-2 bg-white border-2">
                <div className="flex flex-col w-full bg-[white] max-h-[17.8rem] overflow-y-auto custom-scrollbar02 py-2">
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() => handleDropdownSelect("General Query")}
                  >
                    General Query
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() => handleDropdownSelect("Support")}
                  >
                    Support
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() =>
                      handleDropdownSelect("Feedback / Suggestions")
                    }
                  >
                    Feedback / Suggestions
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() =>
                      handleDropdownSelect("Data Privacy Concerns")
                    }
                  >
                    Data Privacy Concerns
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() => handleDropdownSelect("Legal Query")}
                  >
                    Legal Query
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() =>
                      handleDropdownSelect(
                        "Advertising / Sponsorship Inquiries"
                      )
                    }
                  >
                    Advertising / Sponsorship Inquiries
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] border-b border-[#ddddd] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() => handleDropdownSelect("Press Inquiries")}
                  >
                    Press Inquiries
                  </div>
                  <div
                    className="text-[--Dark] w-[98%] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] p-4 maxTab:cursor-pointer maxTab:hover:text-[--Blue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500"
                    onClick={() => handleDropdownSelect("Other Query")}
                  >
                    Other Query
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Query */}
      <div className="maxTab:w-[80%] w-full flex justify-center flex-col gap-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-[--Dark] text-[1.0625rem] max-minTab:text-[0.875rem] font-[500] leading-[1.5rem]">
            Query*
          </p>

          <p
            className={`${
              remainingCharacters === 0
                ? "text-[#EB5757]"
                : "text-[--Dark] opacity-30"
            } text-[0.8125rem] max-minTab:text-[0.6875rem] font-[500] font-jetBrain`}
          >
            {remainingCharacters} characters left
          </p>
        </div>

        <textarea
          className={`h-[12.5rem] rounded-[0.375rem] bg-[#fff] text-[--Dark] font-jetBrain text-[0.9375rem] max-minTab:text-[0.8125rem] font-[400] leading-[1.4375rem] p-4 placeholder:text-[0.9375rem] max-minTab:placeholder:placeholder:text-[0.8125rem] placeholder:leading-[1.4375rem] placeholder:font-jetBrain outline-none border-t-[1px] border-l-[1px] border-r-[1px] border-[#000] border-opacity-10 custom-scrollbar ${
            validationStates.query
              ? "placeholder:text-[--Red] !border-b-[2px] !border-b-[--Red] !rounded-b-none"
              : "placeholder:opacity-30 placeholder:text-[--Dark] border-b-[1px]"
          }`}
          placeholder="Enter your query here"
          value={formValues.query}
          onChange={handleTextareaChange}
        />
      </div>

      {/* Send Button & Cloud Tensil */}
      <div className="maxTab:w-[80%] w-full flex maxTab:justify-between justify-center items-center max-maxTab:flex-col max-maxTab:gap-8">
        <div className="w-[300px]">
          <VerifyYouAreHuman
          // onVerificationSuccess={handleVerificationSuccess}
          />
        </div>

        <button
          className={`bg-white h-[2.875rem] maxTab:w-[14.75rem] w-full rounded-[0.375rem] ${
            activeButton
              ? "text-white !bg-[--Blue] maxTab:hover:!bg-[--HoveredBlue] maxTab:transition-all maxTab:ease-in-out maxTab:duration-500 maxTab:cursor-pointer"
              : "!text-[#fff] !bg-[#cccccc]"
          } font-jetBrain font-bold rounded-md text-[0.9375rem] flex items-center justify-center`}
          disabled={activeButton ? false : true}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ContactFields;
