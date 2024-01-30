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
      ? "sm:w-[120px] md:w-[540px] lg:w-[840px]"
      : "sm:w-[679px] w-72";
  return (
    <div
      className={`grid sm:grid-cols-11 grid-cols-1 sm:m-6  ${value} h-auto sm:h-32 rounded-lg bg-[#D9D9D9] mt-6 ms-10 sm:ms-0`}
    >
      <div className="sm:col-span-3 col-span-full sm:overflow-hidden rounded-lg ">
        <Image
          src={`/${image}`}
          alt="compo4"
          width={249.65}
          height={126}
          className="shadow-xl sm:w-[249.65px] w-full"
        />
      </div>

      <div className="col-span-full sm:col-span-3 flex justify-center sm:justify-start pl-8">
        <div className="grid grid-rows-2 ">
          <div className="w-full text-[#353535] font-sans text-2xl font-bold mt-2 leading-7 ">
            {OrgName}
          </div>
          <button
            onClick={() => deny()}
            className=" w-20 h-[30px] rounded-3xl bg-[#B63535] mt-2 "
          >
            <div className="flex justify-center sm:justify-center text-white text-sans font-medium ">
              Deny
            </div>
          </button>
        </div>
      </div>

      <div
        className={`col-span-full sm:col-span-5 mr-3 mb-3 sm:mb-0 ms-3 sm:ms-0  `}
      >
        <div className="sm:w-full w-64 sm:h-auto h-24 rounded bg-[#F4F4F4] mt-3.5">
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
              <div className="text-[#353C4E] font-sans text-sm font-bold leading-4">
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
