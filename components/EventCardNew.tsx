import Image from "next/image";
import React, { useState, useEffect } from "react";

// import { Organization } from "@/app/admin/Type";
import { FaRegBuilding } from "react-icons/fa6";

interface eventCard {
  event: String;
  organization: String;
}

export default function EventCardNew({ event, organization }: eventCard) {
  return (
    <div>
      {/*  fgffjfjsbhfh khdkhddkb kds.h.fhhhhhhhhhhhh */}
      <div className="m-4 bg-[#D9D9D9] rounded-2xl shadow-xl max-w-sm  w-[250px] md:w-[500px] lg:w-[600px] lg:max-w-full lg:flex text-wrap">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: `url(${"/images/event/UpcomingEvent.png"})`,
          }}
          title="Woman holding a mug"
        ></div>
        <div className="p-2 flex flex-col justify-between leading-normal">
          <div className=" flex flex-col ">
            <div className="flex flex-col  sm:mt-2 mt-4">
              <div className="w-12 sm:w-48 text-[#353535] font-sans text-2xl font-bold ms-2 sm:ms-0 ">
                {event}
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <div className="mt-1">
                  <FaRegBuilding />
                </div>
                <div className="justify-center  text-gray-700 text-sans font-medium">
                  {organization}
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-4 sm:mt-4 sm:ms-0 md:ms-4 lg:ms-0 xl:ms-0 whitespace-nowrap ">
              <button
                onClick={() => ""}
                className="w-32 h-[30px] rounded-3xl bg-custom-green ms-2 sm:ms-0 md:mr-4 justify-start "
              >
                <div className="justify-center text-white text-sans  ">
                  More Details
                </div>
              </button>
              <button
                onClick={() => ""}
                className="w-32 h-[30px] rounded-3xl bg-custom-blue ml-2 sm:ml-4 md:ml-12 justify-end"
              >
                <div className="justify-center text-white text-sans ">
                  Send Feedback
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
