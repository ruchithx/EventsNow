import Image from "next/image";
import React from "react";

export default function DashboardDetails() {
  return (
    <div>
      <div className="bg-[#D9D9D9] rounded-lg items-center h-full p-3 flex flex-col gap-3 ">
        <div>
          <Image
            src="/bestevent.png"
            alt="organization dp"
            width={226}
            className="rounded-lg"
            height={300}
          />
        </div>
        <div className="flex gap-2  flex-col items-start">
          <div className="md:text-lg lg:text-xl rounded-full gap-2 px-2  items-center bg-custom-orange flex text-[#353535]">
            <Image
              src="/Send_fill.svg"
              alt="organization name"
              width={24}
              height={24}
            />
            Stein Studios
          </div>
          <div className="md:text-base lg:text-lg font-medium">Event=5</div>
          <div className="md:text-base lg:text-lg font-medium">Member=5</div>
        </div>
      </div>
    </div>
  );
}
