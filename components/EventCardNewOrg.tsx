import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface eventorg {
  event: String;
  date: String;
  time: String;
  location: String;
}

export default function EventCardNewOrg({
  event,
  date,
  time,
  location,
}: eventorg) {
  return (
    <div>
      <div className="grid grid-cols-12  m-4 w-[250px] md:w-[500px] lg:w-[600px] h-96 sm:h-40 rounded-lg bg-[#D9D9D9] shadow-3xl">
        <div className="sm:col-span-5 h-40 col-span-full overflow-hidden rounded-lg">
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
            <div className="flex flex-row">
              <div className="w-12 sm:w-48 text-[#353535] font-sans text-2xl font-bold ms-2 sm:ms-0">
                {event}
              </div>
              <button
                onClick={() => ""}
                className="w-32 h-[30px] rounded-3xl bg-custom-orange ml-12 sm:ml-2 "
              >
                <div className="justify-center text-white text-sans font-medium ">
                  Visit Page
                </div>
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row gap-4 mt-2">
                <div className="mt-1">
                  <SlCalender />
                </div>
                <div className="justify-center  text-gray-700 text-sans font-medium">
                  {date}
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <div className="mt-1">
                  <FaClock />
                </div>
                <div className="justify-center  text-gray-700 text-sans font-medium">
                  {time}
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <div className="mt-1">
                  <FaLocationDot />
                </div>
                <div className="justify-center  text-gray-700 text-sans font-medium">
                  {location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
