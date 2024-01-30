"use client";

import Image from "next/image";
import React from "react";

interface Best_Event {
  img: String;
  eventname: String;
  year: String;
  description: String;
}

export default function ({ img, eventname, year, description }: Best_Event) {
  return (
    <div className="w-[20rem]  bg-[#F9EBE9] ml-12 mt-12 shadow-xl">
      <div className="mt-8 ml-8">
        <div className="h-[365px] w-[260px] bg-[#AC736D]  bg-cover bg-center">
          <div className="ml-2.5  overflow-hidden  h-[350px] w-[350px] ">
            <Image src={`/${img}`} height={300} width={250} alt="bestevent" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-4">
        <div className='ml-16 flex-auto w-[20rem] h-[5rem] text-[#AC736D] font-["JetBrains Mono"] text-lg font-bold'>
          {eventname}
        </div>

        <div>
          <button
            onClick={() => print()}
            className="w-[3.9rem] h-[1.5rem] rounded-full bg-[#AC736D] ml-6"
          >
            <div className=' text-white font-["JetBrains Mono"] '>{year}</div>
          </button>
        </div>
      </div>

      <div className='ml-8 mb-8 -mt-8 flex-auto w-[17rem] justify-center text-black font-["Roboto"] text-base font-light '>
        {description}
      </div>
    </div>
  );
}
