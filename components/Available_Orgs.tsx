"use client";
import Image from "next/image";

function deny() {}

import React from "react";

interface Available_Orgs {
  OrgName: String;
  image: String;
  noOfEvents: String;
  noOfMembers: String;
}

export default function Available_Orgs({
  OrgName,
  image,
  noOfEvents,
  noOfMembers,
}: Available_Orgs) {
  const value =
    OrgName.length > 10
      ? "w-[250px] md:w-[250px] lg:w-[840px]"
      : "lg:w-[840px] w-72 md:w-[250px]";
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-11 md:grid-cols-1  sm:m-6  ${value} h-auto md:h-auto lg:h-32 rounded-lg bg-[#D9D9D9] mt-6 ms-10 lg:ms-0 md:ms-20`}
    >
      <div className="col-span-full lg:col-span-3 md:col-span-full sm:overflow-hidden  rounded-lg ">
        <Image src={`/${image}`} alt="compo4" width={249.65} height={126} />
      </div>

      <div className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center sm:justify-start pl-8 sm:mt-0 md:mt-4 lg:mt-0">
        <div className=" justify-auto flex flex-col  md:justify-center lg:justify-auto ">
          <div className="flex w-full md:w-1/2  lg:w-full text-[#353535] font-sans text-2xl font-bold mt-2 leading-7  ">
            {OrgName}
          </div>
          <button
            onClick={() => deny()}
            className=" w-20 h-[30px] rounded-3xl bg-[#B63535] mt-2 ml-0 md:ml-12 lg:ml-0 "
          >
            <div className="flex justify-center text-white text-sans font-medium ">
              Deny
            </div>
          </button>
        </div>
      </div>

      <div
        className={`col-span-full md:col-span-full lg:col-span-5 mr-3 mb-3 sm:mb-0 ms-3 lg:ms-0 md:ms-0 `}
      >
        <div className="lg:w-full w-48 md:w-48 lg:h-auto h-28 md:h-28 rounded bg-[#F4F4F4] mt-2 md:mt-4 lg:mt-3.5 ml-0 md:ml-6 lg:ml-0 mb-0 md:mb-4 lg:mb-0">
          <div className="grid grid-cols-12">
            <div className="col-span-8 sm:col-span-8 m-6">
              <div className="text-[#353C4E] font-sans text-sm font-normal leading-4">
                Number of Events
              </div>
              <div className="text-[#353C4E] font-sans text-sm font-normal leading-4 mt-3">
                Number of Members
              </div>
            </div>

            <div className="col-span-4 sm:col-span-4 m-6 ">
              <div className="text-[#353C4E] font-sans text-sm font-bold leading-4 mb-8 md:mb-8 lg:mb-0">
                {noOfEvents}
              </div>
              <div className="text-[#353C4E] font-sans text-sm font-bold leading-4 mt-3">
                {noOfMembers}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
