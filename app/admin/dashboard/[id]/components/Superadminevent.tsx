import React from "react";
import Image from "next/image";
function info() {}

interface Upcoming_Events {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
  Ratings: String;
  image: String;
}

export default function Upcoming_Events({
  EventName,
  Location,
  Time,
  Date,
  Ratings,
  image,
}: Upcoming_Events) {
  const margin = EventName.length > 14 ? "mt-4" : " mt-0";

  return (
    <div className="bg-[#D9D9D9] h-[450px] my-6 mx-2 rounded-lg md:grid md:grid-cols-2 sm:grid-cols-2 w-[300px] md:w-[480px] lg:w-[800px] md:h-[13.5rem] xl:grid-cols-12 xl:h-[13.5rem] shadow-3xl">
      <div className="pt-4 mx-4 my-4 md:mx-0 md:my-0 md:pt-0 rounded-lg overflow-hidden h-[12.15rem] md:h-[13.5rem] xl:col-span-5">
        <Image
          src={`/images/Admin/${image}`}
          alt="hay"
          width={410}
          height={200}
        />
      </div>

      <div className="xl:grid xl:grid-rows-3 xl:justify-left xl:col-span-7 ">
        <div className="mx-4 md:mt-4 grid grid-cols-2 ">
          <div className="font-sans text-2xl font-bold leading-7 text-[#353535]">
            {EventName}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => info()}
              className="w-20 h-7 rounded-3xl bg-custom-admin shrink-0 flex"
            >
              <div className="py-0.5 pl-1.5 pt-1">
                <Image
                  src={"/images/ReusableComponents/Sendfill.svg"}
                  alt="info"
                  width={80}
                  height={80}
                />
              </div>
              <div className="w-40 h-4 text-white text-xs font-medium py-1.5 pl-0 mr-2 ">
                Send
              </div>
            </button>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2">
          <div
            className={`mx-8 mt-2 flex items-center xl:items-start h-auto ${margin} `}
          >
            <div className="w-8 h-8 xl:-mt-2">
              <Image
                src="/images/ReusableComponents/location.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
              {Location}
            </div>
          </div>

          <div className={`mx-8 mt-2 flex ${margin} xl:mt-0`}>
            <div className="w-8 h-8">
              <Image
                src="/images/ReusableComponents/eventCalander.svg"
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

        <div className="xl:grid xl:grid-cols-2">
          <div
            className={`mx-8 mt-2 flex items-center xl:items-start ${margin}`}
          >
            <div className="w-8 h-8 xl:-mt-2">
              <Image
                src="/images/ReusableComponents/Time.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
              {Time}
            </div>
          </div>

          <div className={`mx-8 mt-2 flex ${margin}`}>
            <div className="w-8 h-8">
              <Image
                src="/images/ReusableComponents/Lineup.svg"
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
    </div>
  );
}
