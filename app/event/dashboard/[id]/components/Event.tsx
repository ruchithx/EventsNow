import React from "react";
import Image from "next/image";

function Share() {}

function preview() {}

interface Event {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
  eventCover: String;
}

export default function Event({
  EventName,
  Location,
  Time,
  Date,
  eventCover,
}: Event) {
  return (
    <div className=" w-64 xl:w-72   rounded-xl bg-[#D9D9D9] shadow-inner xl:pt-8 xl:px-8 pt-6 px-6  ">
      <button >
        <div className="py-0.5 text-custom-orange bg-white w-fit rounded-md flex items-center justify-center whitespace-nowrap mb-3 px-2 hover:bg-[#ece3df] ">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z"
              fill="#D47151"
            />
          </svg>
          View Event
        </div>
      </button>

      <Image
        className=" rounded-md  "
        src={eventCover as string}
        alt="event cover"
        width={410}
        height={200}
      />

      <div className="text-[#353535] font-mono text-2xl py-4  font-medium  ">
        {EventName}
      </div>

      <div className="grid grid-rows-5 gap-6 ">
        <div className="flex gap-3">
          <Image
            className="grid content-center "
            src="/images/ReusableComponents/Pin_fill.svg"
            alt="print"
            width={32}
            height={32}
          />

          <div className="text-[#353C4E] text-base text-start align-top font-mono grid content-center">
            {Location}
          </div>
        </div>

        <div className="flex gap-3">
          <Image
            className="grid content-center"
            src="/images/ReusableComponents/Date_org.svg"
            alt="print"
            width={32}
            height={32}
          />

          <div className="text-[#353C4E] text-base text-start font-mono align-top grid content-center">
            {Date}
          </div>
        </div>

        <div className="flex gap-3 ">
          <Image
            className="grid content-center"
            src="/images/ReusableComponents/Clock_fill.svg"
            alt="print"
            width={32}
            height={32}
          />

          <div className="text-[#353C4E] text-base text-start  font-mono align-top grid content-center">
            {Time}
          </div>
        </div>

        <div className="flex xl:gap-4 gap-1">
          <button
            onClick={() => Share()}
            className="w-24 h-8 rounded-3xl bg-white shrink-0 flex"
          >
            <div className=" pl-4 pt-2  ">
              <Image
                src={"/images/ReusableComponents/Vector.svg"}
                alt="info"
                width={50}
                height={50}
              />
            </div>
            <div className="w-40 h-4 text-[#535353] text-sm font-medium font-['IBM Plex Mono'] py-1.5 pl-0 mr-2 ">
              Share
            </div>
          </button>

          <button
            onClick={() => preview()}
            className="w-28 h-8 rounded-3xl bg-white shrink-0 flex"
          >
            <div className=" pl-4 pt-1  ">
              <Image
                src={"/images/ReusableComponents/View_alt.svg"}
                alt="info"
                width={60}
                height={60}
              />
            </div>
            <div className="w-40 h-4 text-[#535353] text-sm font-['IBM Plex Mono'] font-medium py-1.5 pl-0 mr-2 ">
              Preview
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
