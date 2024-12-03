import React from "react";

const TermsAndConditionLinks = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="flex justify-center flex-col gap-6 -mt-[8px] max-maxTab:hidden">
        <h1 className="text-[--Blue] text-[1.625rem] font-[700]">Credits</h1>
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-[--Dark] font-jetBrain text-[ 0.9375rem] font-[400] leading-[1.4375rem]">
              https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard
            </p>
            <p className="text-[#999] font-jetBrain text-[ 0.9375rem] font-[400] leading-[1.4375rem]">
              Under Flaticon License
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2">
            <p className="max-w-[68.5rem] text-[--Dark] font-jetBrain text-[ 0.9375rem] font-[400] leading-[1.4375rem]">
              https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais"
            </p>
            <p className="text-[#999] font-jetBrain text-[ 0.9375rem] font-[400] leading-[1.4375rem]">
              Image by rawpixel.com on Freepik
            </p>
          </div>
        </div>
      </div>
      <div className="max-maxTab:hidden !h-[85px] ffheight84px w-full" />

      {/* Tablet View */}
      <div className="flex justify-center flex-col gap-6 -mt-[8px] maxTab:hidden max-minTab:hidden">
        <h1 className="text-[--Blue] text-[1.4rem] font-[700]">Credits</h1>
        <div className="flex flex-col justify-center gap-8">
          <div className="w-full flex flex-col justify-center gap-2">
            <p className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[500] max-w-[68.5rem] break-all">
              https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard
            </p>
            <p className="text-[#999] font-jetBrain text-[0.9375rem] font-[500]">
              Under Flaticon License
            </p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p className="text-[--Dark] font-jetBrain text-[0.9375rem] font-[500] max-w-[68.5rem] break-all">
              https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais"
            </p>
            <p className="text-[#999] font-jetBrain text-[0.9375rem] font-[500]">
              Image by rawpixel.com on Freepik
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="justify-center flex-col gap-6 -mt-[8px] hidden max-minTab:flex">
        <h1 className="text-[--Blue] text-[1.0625rem] font-[700]">Credits</h1>
        <div className="flex flex-col justify-center gap-8">
          <div className="w-full flex flex-col justify-center gap-2">
            <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] max-w-[23rem] break-all">
              https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard
            </p>
            <p className="text-[#999] font-jetBrain text-[0.8125rem] font-[500]">
              Under Flaticon License
            </p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p className="text-[--Dark] font-jetBrain text-[0.8125rem] font-[500] max-w-[23rem] break-all">
              https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais"
            </p>
            <p className="text-[#999] font-jetBrain text-[0.8125rem] font-[500]">
              Image by rawpixel.com on Freepik
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionLinks;
