import React from "react";
import Image from "next/image";

interface EventCardDisabled {
  name: string;
  img: string;
  location: string;
  date: string;
}

export default function EventCardDisabled({
  name,
  img,
  location,
  date,
}: EventCardDisabled) {
  return (
    <div>
      <div className=" saturate-0  text-neutral-50  bg-[#959595] rounded-[9px] w-64 shrink-0 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]  m-10">
        <div className=" styleQ h-[301px] overflow-hidden">
          <Image
            className="rounded-t-[9px] 	"
            src={`${img}`}
            alt={"event-img"}
            width={256}
            height={301}
          />
        </div>

        <div className="grid grid-cols-3 ">
          <div className="text ml-5 col-span-2  text-xl font-mono  font-extrabold ">
            {name}
          </div>
        </div>
        <div>
          <hr className="w-52 ml-5 mt-1"></hr>
        </div>

        <div className=" grid grid-cols-12 ">
          <div className="flex col-span-5">
            <Image
              className="mt-1"
              src={"/images/organization/location1.svg"}
              alt={"pin-fill"}
              width={47}
              height={47}
            />
            <div className="text-xs font-khand font-semibold my-auto ">
              {location}
            </div>
          </div>
          <div className="col-span-1 ml-4 border-r-[1px] border-solid border-white h-10 w-1"></div>
          <div className=" ml-1 flex col-span-6">
            <Image
              src={"/images/reusableComponents/Date.svg"}
              alt={"time-fill"}
              width={30}
              height={24}
            />
            <div className="flex flex-col mr-auto my-auto ml-3 text-xs font-khand font-semibold">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
