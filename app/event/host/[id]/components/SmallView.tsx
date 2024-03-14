import React from "react";
import Image from "next/image";
import PostTab from "./PostTab";

interface SmallView {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
}

export default function SmallView({
  EventName,
  Location,
  Time,
  Date,
}: SmallView) {
  return (
    <div>
      <div className=' text-center text-[#454545cc] text-4xl font-normal pt-8 font-["Roboto"]'>
        {EventName}
      </div>

      <div className="text-left mx-12 text-[#455273] text-2xl font-bold mt-8 ">
        QUICK FACTS
      </div>

      <div className="grid grid-rows-3 gap-6  text-left mt-8 mx-16">
        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/reusableComponents/Pin_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-xl  align-top -mt-8 font-['Roboto'] ml-12">
            {Location}
          </div>
        </div>

        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/reusableComponents/Date_org.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-xl font-['Roboto'] align-top -mt-8 ml-12">
            {Date}
          </div>
        </div>

        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/reusableComponents/Clock_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-xl  font-['Roboto'] align-top -mt-8 ml-12">
            {Time}
          </div>
        </div>

        <div className="flex xl:pt-24 md:pt-14 items-center ">
          <button className="flex w-32 h-16  bg-[#D47151] rounded-l-2xl items-center px-4  ">
            <div className=" w-10 h-10 mt-4">
              <Image
                src="/images/event/HostPage/Check_fill.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="font-medium text-md text-white text-left leading-tight ml-4">
              Buy tickets
            </div>
          </button>

          <button className="flex w-36 h-16 bg-[#455273] rounded-r-2xl items-center px-4">
            <div className=" w-10 h-10 mt-4 px-1">
              <Image
                src="/images/event/HostPage/Paper_fill.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="font-medium text-md text-white text-left leading-tight mx-2">
              Add to Wish List
            </div>
          </button>
        </div>
      </div>

      <div className="text-center text-[#455273] text-2xl font-bold mt-12 ">
        COMMUNITY
      </div>

      <div className="flex items-center justify-center">
        <PostTab />
      </div>
    </div>
  );
}
