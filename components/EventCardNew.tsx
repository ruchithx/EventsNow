import Image from "next/image";
import React, { useState, useEffect } from "react";

import { Organization } from "@/app/admin/Type";
import { FaRegBuilding } from "react-icons/fa6";

interface eventCard {
  event: String;
  organization: String;
}

export default function EventCardNew({ event, organization }: eventCard) {
  return (
    <div>
      <div className="grid grid-cols-12  m-4 w-[250px] md:w-[500px] lg:w-[600px] h-96 sm:h-40 rounded-lg bg-[#D9D9D9] shadow-3xl">
        <div className="sm:col-span-5 col-span-full overflow-hidden rounded-lg">
          <Image
            src={"/images/event/UpcomingEvent.png"}
            alt="image2"
            width={249.64}
            height={100}
            className="shadow-xl  w-[300px] lg:w-[249.65px] md:w-[200px]"
          />
        </div>
        <div className="grid grid-rows-2 col-span-7 ms-4">
          <div className="flex flex-col  sm:mt-2 mt-4">
            <div className="w-12 sm:w-48 text-[#353535] font-sans text-2xl font-bold ms-2 sm:ms-0">
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

          <div className="flex flex-row mt-4 sm:mt-4 sm:ms-0 md:ms-4 lg:ms-0 xl:ms-0">
            <button
              onClick={() => ""}
              className="w-32 h-[30px] rounded-3xl bg-custom-green ms-2 sm:ms-0"
            >
              <div className="justify-center text-white text-sans font-medium">
                More Details
              </div>
            </button>
            <button
              onClick={() => ""}
              className="w-32 h-[30px] rounded-3xl bg-custom-blue ml-12 sm:ml-10 "
            >
              <div className="justify-center text-white text-sans font-medium ">
                Send FeedBack
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
