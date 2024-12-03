"use client";

import React from "react";
import Link from "next/link";

// Function
import ScrollUp from "@/functions/ScrollUp";

// Data
import {
  footerNavigationLinks,
  footerSocialMediaLinks,
} from "@/data/FooterLinksAndIcons";

const Footer = ({ isAboutUsPage = false, isTermsPage = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full flex items-center justify-between flex-col gap-8 max-maxTab:bg-gradient-to-bl maxTab:bg-gradient-to-b from-[#EDEDFE] via-[#EDEDFE] to-white">
        {/* Scroll Button */}
        <ScrollUp />

        {/* Logo Image */}
        <div className="w-full flex justify-center items-center mt-[3rem]">
          <a href={"/"}>
            <svg
              width="197"
              height="46"
              viewBox="0 0 197 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.1954 15.6309V30.525H28.2032V20.6998L23.9828 30.525H21.9284L17.7081 20.6998V30.525H14.7158V15.6309H18.5789L22.978 25.925L27.3547 15.6309H31.1954Z"
                fill="#494AF8"
              />
              <path
                d="M44.0129 25.9922H35.2372C35.5945 27.399 36.7333 28.2922 38.2518 28.2922C39.3906 28.2922 40.3955 27.801 40.8644 27.0864H43.9236C43.0751 29.2971 40.8867 30.7709 38.2071 30.7709C34.7906 30.7709 32.2227 28.2922 32.2227 25.0097C32.2227 21.7272 34.7683 19.2485 38.1625 19.2485C41.5343 19.2485 44.1023 21.7272 44.1023 25.032C44.0799 25.3223 44.0799 25.7243 44.0129 25.9922ZM35.2819 23.9379H41.0654C40.7081 22.598 39.5469 21.7048 38.1625 21.7048C36.7557 21.7048 35.6615 22.598 35.2819 23.9379Z"
                fill="#494AF8"
              />
              <path
                d="M44.6602 27.2204H47.4961C47.4961 27.9126 48.2106 28.4709 49.1038 28.4709C49.8184 28.4709 50.533 28.0913 50.533 27.466C50.533 26.8408 49.8407 26.4165 48.4116 26.1039C46.0446 25.6126 44.8388 24.4514 44.8388 22.7097C44.8388 20.499 46.7815 19.2485 48.9699 19.2485C51.4038 19.2485 53.1903 20.767 53.1903 22.6427H50.3543C50.3543 22.0621 49.7737 21.5709 48.9699 21.5709C48.2776 21.5709 47.6747 21.9728 47.6747 22.5311C47.6747 23.1116 48.3446 23.5136 49.8407 23.8709C52.2301 24.4068 53.3689 25.501 53.3689 27.2204C53.3689 29.4981 51.4038 30.7932 49.0815 30.7932C46.4912 30.7709 44.6602 29.1854 44.6602 27.2204Z"
                fill="#494AF8"
              />
              <path
                d="M53.9502 27.2204H56.7861C56.7861 27.9126 57.5007 28.4709 58.3939 28.4709C59.1084 28.4709 59.823 28.0913 59.823 27.466C59.823 26.8408 59.1308 26.4165 57.7016 26.1039C55.3347 25.6126 54.1288 24.4514 54.1288 22.7097C54.1288 20.499 56.0716 19.2485 58.2599 19.2485C60.6939 19.2485 62.4803 20.767 62.4803 22.6427H59.6444C59.6444 22.0621 59.0638 21.5709 58.2599 21.5709C57.5677 21.5709 56.9648 21.9728 56.9648 22.5311C56.9648 23.1116 57.6347 23.5136 59.1308 23.8709C61.5201 24.4068 62.6589 25.501 62.6589 27.2204C62.6589 29.4981 60.6939 30.7932 58.3716 30.7932C55.8036 30.7709 53.9502 29.1854 53.9502 27.2204Z"
                fill="#494AF8"
              />
              <path
                d="M76.2571 27.8006V30.5249H75.4532C73.8901 30.5249 72.9076 29.9443 72.4833 28.8055C71.6125 30.0336 70.295 30.7928 68.6872 30.7928C65.6057 30.7928 63.3057 28.3142 63.3057 25.0317C63.3057 21.7491 65.628 19.2705 68.6872 19.2705C70.1833 19.2705 71.4115 19.9181 72.2824 20.9676V19.5161H75.096V26.8851C75.096 27.4657 75.4309 27.8229 76.0338 27.8229H76.2571V27.8006ZM72.2824 25.0093C72.2824 23.2899 70.9872 21.9724 69.2231 21.9724C67.4814 21.9724 66.1862 23.2899 66.1862 25.0093C66.1862 26.7288 67.4814 28.0462 69.2231 28.0462C70.9872 28.0462 72.2824 26.7288 72.2824 25.0093Z"
                fill="#494AF8"
              />
              <path
                d="M88.0033 19.5165V29.3417C88.0033 32.6913 85.748 34.8796 82.3315 34.8796C79.5625 34.8796 77.5528 33.4281 76.8606 31.0835H79.7635C80.1878 31.8427 81.1926 32.3116 82.3315 32.3116C84.0732 32.3116 85.1897 31.1281 85.1897 29.3194V28.8058C84.3188 29.8107 83.0907 30.4359 81.6169 30.4359C78.5354 30.4359 76.2354 28.0243 76.2354 24.8311C76.2354 21.6602 78.5577 19.2485 81.6169 19.2485C83.0907 19.2485 84.3188 19.8738 85.1897 20.8786V19.4942H88.0033V19.5165ZM85.1897 24.8311C85.1897 23.1116 83.9169 21.7942 82.1528 21.7942C80.4111 21.7942 79.1159 23.1116 79.1159 24.8311C79.1159 26.5728 80.4111 27.8903 82.1528 27.8903C83.9169 27.9126 85.1897 26.5951 85.1897 24.8311Z"
                fill="#494AF8"
              />
              <path
                d="M100.597 25.9922H91.8212C92.1785 27.399 93.3173 28.2922 94.8358 28.2922C95.9746 28.2922 96.9795 27.801 97.4484 27.0864H100.508C99.6591 29.2971 97.4707 30.7709 94.7911 30.7709C91.3746 30.7709 88.8066 28.2922 88.8066 25.0097C88.8066 21.7272 91.3523 19.2485 94.7464 19.2485C98.1183 19.2485 100.686 21.7272 100.686 25.032C100.686 25.3223 100.664 25.7243 100.597 25.9922ZM91.8659 23.9379H97.6494C97.2921 22.598 96.1309 21.7048 94.7464 21.7048C93.3396 21.7048 92.2455 22.598 91.8659 23.9379Z"
                fill="#494AF8"
              />
              <path
                d="M118.149 15.6309V30.525H115.156V20.6998L110.936 30.525H108.882L104.661 20.6998V30.525H101.669V15.6309H105.532L109.931 25.925L114.308 15.6309H118.149Z"
                fill="#494AF8"
              />
              <path
                d="M119.176 25.0097C119.176 21.7272 121.721 19.2485 125.116 19.2485C128.487 19.2485 131.055 21.7272 131.055 25.0097C131.055 28.2922 128.51 30.7709 125.116 30.7709C121.744 30.7709 119.176 28.2922 119.176 25.0097ZM128.152 25.0097C128.152 23.2903 126.88 21.9728 125.116 21.9728C123.374 21.9728 122.079 23.2903 122.079 25.0097C122.079 26.7291 123.374 28.0466 125.116 28.0466C126.857 28.0466 128.152 26.7291 128.152 25.0097Z"
                fill="#494AF8"
              />
              <path
                d="M150.505 27.801V30.5252H149.701C147.602 30.5252 146.531 29.4981 146.531 27.4883V24.2058C146.531 22.866 145.682 21.9728 144.364 21.9728C142.98 21.9728 142.042 22.8883 142.042 24.2505V30.5252H139.229V24.2058C139.229 22.866 138.358 21.9728 137.063 21.9728C135.678 21.9728 134.718 22.8883 134.718 24.2505V30.5252H131.904V19.5165H134.718V20.7893C135.522 19.7845 136.638 19.2485 137.978 19.2485C139.631 19.2485 140.881 19.9854 141.529 21.2359C142.377 19.9408 143.65 19.2485 145.28 19.2485C147.714 19.2485 149.322 20.8786 149.322 23.3573V26.8854C149.322 27.466 149.679 27.8233 150.26 27.8233H150.505V27.801Z"
                fill="#494AF8"
              />
              <path
                d="M162.496 25.9922H153.721C154.078 27.399 155.217 28.2922 156.735 28.2922C157.874 28.2922 158.879 27.801 159.348 27.0864H162.407C161.558 29.2971 159.37 30.7709 156.691 30.7709C153.274 30.7709 150.706 28.2922 150.706 25.0097C150.706 21.7272 153.252 19.2485 156.646 19.2485C160.018 19.2485 162.586 21.7272 162.586 25.032C162.586 25.3223 162.563 25.7243 162.496 25.9922ZM153.765 23.9379H159.549C159.191 22.598 158.03 21.7048 156.646 21.7048C155.239 21.7048 154.145 22.598 153.765 23.9379Z"
                fill="#494AF8"
              />
              <path
                d="M175.202 27.801V30.5252H174.399C172.299 30.5252 171.228 29.498 171.228 27.4883V24.4514C171.228 22.9553 170.267 21.9951 168.816 21.9951C167.253 21.9951 166.226 22.9777 166.226 24.4961V30.5476H163.412V19.5165H166.226V20.8786C167.074 19.8291 168.28 19.2485 169.732 19.2485C172.322 19.2485 174.041 20.9233 174.041 23.5136V26.8631C174.041 27.4437 174.376 27.801 174.979 27.801H175.202Z"
                fill="#494AF8"
              />
              <path
                d="M179.266 22.0843V26.5726C179.266 27.4435 179.802 27.9571 180.717 27.9571H181.812V30.525H180.293C177.77 30.525 176.43 29.3192 176.43 27.0415V22.0843H174.666V19.5163H175.693C176.274 19.5163 176.586 19.2037 176.586 18.6231V15.6309H179.244V19.5163H181.789V22.0843H179.266Z"
                fill="#494AF8"
              />
              <path
                d="M14.8942 46H0V0H14.8942V3.97476H3.97476V42.0252H14.8942V46Z"
                fill="#494AF8"
              />
              <path
                d="M196.505 46H181.61V42.0252H192.53V3.97476H181.61V0H196.505V46Z"
                fill="#494AF8"
              />
            </svg>
          </a>
        </div>

        {/* NavLink */}
        <ul className="flex max-maxTab:flex-col items-center justify-center w-full font-medium text-base text-[#363C4F] maxTab:gap-12 gap-2">
          {footerNavigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="maxTab:hover:text-[--Blue]">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom Footer */}
        <div className="maxTab:py-[2rem] h-[40%] w-full border-t border-opacity-10 border-t-black flex items-center maxTab:justify-between max-maxTab:flex-col max-maxTab:gap-4 max-maxTab:py-4 maxTab:px-6">
          {/* Desktop Copyright */}
          <div
            className={`flex items-center justify-start ${
              isAboutUsPage ? "marginTopFF" : ""
            } ${isTermsPage ? "marginTopFF" : ""}`}
          >
            <p className="text-[0.8125rem] text-[#555] max-maxTab:hidden">
              Copyright © {currentYear} MessageMoment. All rights reserved.
            </p>
          </div>

          <div className="flex items-center maxTab:-translate-y-[7px] translateY6px justify-center max-maxTab:mt-5 maxTab:-translate-x-[69%]">
            <ul
              className={`items-center maxTab:justify-center gap-6 flex maxTab:w-full maxTab:h-full`}
            >
              {footerSocialMediaLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className={`text-[--LightGray]`}
                    style={{
                      fontSize: `${link.size}px`,
                    }}
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-start mt-5 maxTab:hidden">
            <p className="text-[0.8125rem] text-[#555]">
              Copyright © {currentYear} MessageMoment. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-end maxTab:gap-3 gap-2 max-maxTab:-mt-[5px] max-maxTab:pb-8">
            <p
              className={`text-[0.8125rem] text-[#555] ${
                isAboutUsPage ? "marginTopFF" : ""
              } ${isTermsPage ? "marginTopFF" : ""}`}
            >
              Designed By
            </p>
            <a href="mailto:pictagroup@gmail.com" target="_blank">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-translate-y-[1px] translateY2px MACFireFoxTranslateY1px"
              >
                <path
                  d="M0 0V10.6667H5.33333V5.33333H10.6667V10.6667H5.33333V16H16V0H0Z"
                  fill="#999999"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
