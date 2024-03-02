import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { z } from "zod";

interface eventorg {
  event: String;
  date: String;
  time: String;
  location: String;
  eventCover: String;
}

export default function EventCardNewOrg({
  event,
  date,
  time,
  location,
  eventCover,
}: eventorg) {
  return (
    <div className=" bg-[#D9D9D9] my-4 ml-4 mr-12 rounded-xl border-spacing-1 shadow-lg grid lg:grid-cols-3 overflow-hidden">
      <div
        className="lg:rounded-l-xl overflow-hidden bg-no-repeat bg-cover bg-center h-40 "
        style={{ backgroundImage: `url(${eventCover as string})` }}
      ></div>
      <div className="lg:col-span-2 rounded-r-xl pt-1">
        <div className="  flex justify-between px-6">
          <div className=" my-2 text-[#353535] font-semibold sm:font-bold text-lg sm:text-24">
            {event}
          </div>
          <div className="flex max-sm:hidden content-center">
            <button className=" text-center  bg-[#4E8171] text-white rounded-2xl px-2 my-auto py-1 ml-4 font-IBM ">
              send notification
            </button>
            <button className=" text-center bg-[#4E8171] text-white rounded-2xl px-2 py-1 my-auto ml-4 font-IBM ">
              details
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 mb-4">
          <div className="ml-4 flex">
            <Image
              src="/images/admin/Pin_fill_blue.svg"
              alt="calendar"
              width={35}
              height={40}
            />
            <div className="ml-2 my-auto font-mono text-[#353C4E] text-sm font-medium">
              {location}
            </div>
          </div>
          <div className="flex ml-4 sm:ml-0">
            <Image
              src="/images/admin/Clock_fill_blue.svg"
              alt="calendar"
              width={31}
              height={40}
            />
            <div className="ml-2 my-auto font-mono text-[#353C4E] text-sm font-medium">
              {time}
            </div>
          </div>
          <div className="ml-4 flex">
            <Image
              src="/images/admin/Date_range_light_blue.svg"
              alt="calendar"
              width={35}
              height={40}
            />
            <div className=" ml-2 my-auto font-mono text-[#353C4E] text-sm font-medium">
              {date.substring(0, 10)}
            </div>
          </div>
          {/* <div className="flex">
            <Image
              src="/images/admin/Line_up_blue.svg"
              alt="calendar"
              width={35}
              height={40}
            />
            <div className="my-auto font-mono text-[#353C4E] text-sm font-medium">
              {}
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex sm:hidden content-center mb-6">
        <button className=" text-center  bg-[#4E8171] text-white text-sm rounded-2xl px-2 my-auto py-1 ml-4 font-IBM ">
          send notification
        </button>
        <button className=" text-center bg-[#4E8171] text-white text-sm rounded-2xl px-2 py-1 my-auto ml-4 font-IBM ">
          details
        </button>
      </div>
    </div>
  );
}
