"use client";
import Image from "next/image";

function info() {}

import React from "react";

interface Upcoming_Events {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
  Ratings: String;
  image: String;
  buttonDesc: String;
}

export default function Upcoming_Events({
  EventName,
  Location,
  Time,
  Date,
  Ratings,
  image,
  buttonDesc,
}: Upcoming_Events) {
  const margin = EventName.length > 14 ? "mt-4" : " mt-0";

  return (
    <div className="grid grid-cols-3 w-[1192px] h-[12.15rem] rounded-lg bg-[#D9D9D9]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`/images/event/${image}`}
          alt="hay"
          width={410}
          height={200}
        />
      </div>

      <div className="grid grid-rows-3 ml-6 h-[194.5px]">
        <div className="grid grid-cols-2 pt-6 item-center">
          <div className="font-sans text-2xl font-bold leading-7 text-[#353535] pt-2">
            {EventName}
          </div>

          <div className="pt-2">
            <button
              onClick={() => info()}
              className="w-20 h-7 rounded-3xl bg-[#D47151] shrink-0 flex"
            >
              <div className="py-0.5 pl-1.5 pt-1">
                <Image
                  src={"/images/reusableComponents/Sendfill.svg"}
                  alt="info"
                  width={80}
                  height={80}
                />
              </div>
              <div className="w-40 h-4 text-white text-xs font-medium py-1.5 pl-0 mr-2 ">
                {buttonDesc}
              </div>
            </button>
          </div>
        </div>

        <div className={`flex items-center h-auto ${margin}`}>
          <div className="w-8 h-8">
            <Image
              src="/images/reusableComponents/location.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
            {Location}
          </div>
        </div>

        <div className={`flex ${margin}`}>
          <div className="w-8 h-8">
            <Image
              src="/images/reusableComponents/eventCalander.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 pt-2 ">
            {Date}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 h-[194.5px]">
        <div className="flex items-center"></div>

        <div className={`flex items-center ${margin}`}>
          <div className="w-8 h-8">
            <Image
              src="/images/reusableComponents/Time.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
            {Time}
          </div>
        </div>

        <div className={`flex ${margin}`}>
          <div className="w-8 h-8">
            <Image
              src="/images/reusableComponents/Lineup.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 pt-2">
            {Ratings}
          </div>
        </div>
      </div>
    </div>
  );
}
