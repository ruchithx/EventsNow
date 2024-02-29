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
      <div className=" m-4 bg-[#D9D9D9] rounded-2xl shadow-xl max-w-sm  w-[250px] md:w-[500px] lg:w-[600px] lg:max-w-full lg:flex text-wrap">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: `url(${"/images/event/UpcomingEvent.png"})`,
          }}
          title="Woman holding a mug"
        ></div>
        <div className="p-2 flex flex-col justify-between leading-normal">
          <div className="m-1 flex flex-col ">
            <div className="flex flex-row  lg:gap-44 md:gap-44 ">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {event}
              </div>
              <button
                onClick={() => ""}
                className="w-full sm:w-36 h-[30px]  rounded-3xl bg-custom-orange  sm:ml-2 ml-12  justify-end"
              >
                <div className="justify-center whitespace-nowrap text-center text-white text-sans font-medium">
                  Visit Page
                </div>
              </button>
            </div>
            <div className="flex flex-col mt-5 ">
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
