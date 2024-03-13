import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";

export default function EventListView() {
  return (
    <div className="flex gap-3 border-2 w-4/5">
      <div>
        <Image
          src="/images/event/UpcomingEvent.png"
          alt="event"
          height={120}
          width={150}
        />
      </div>
      <div className="p-3 w-full">
        <div className="flex gap-5">
          <div className="text-lg capitalize font-bold">NADA GAMA</div>
          <button className="p-1 text-white justify-center items-center  flex gap-2 bg-custom-orange rounded-xl w-fit">
            <IoIosSend />
            Info
          </button>
        </div>
        <div className="flex w-full flex-wrap gap-3">
          <div className="flex gap-2 w-2/5	 border-2">
            <Image
              src={"/images/event/eventLocation.png"}
              alt="image location"
              width={30}
              height={30}
            />
            KCC,Kandy Road,kandy.
          </div>
          <div className="flex gap-2 w-2/5	  border-2">
            <Image
              src={"/images/event/timeEvent.png"}
              alt="image location"
              width={30}
              height={30}
            />
            16.00 to 22.00.
          </div>
          <div className="flex gap-2 w-2/5	">
            <Image
              src={"/images/event/dateEvent.png"}
              alt="image location"
              width={30}
              height={30}
            />
            21st June 2023.
          </div>
        </div>
      </div>
    </div>
  );
}
