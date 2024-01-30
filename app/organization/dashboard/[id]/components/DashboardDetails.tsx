import Image from "next/image";
import React from "react";

export default function DashboardDetails() {
  return (
    <div>
      <div className="bg-[#D9D9D9] rounded-lg items-center  h-full py-3 px-4 flex flex-col  ">
        <div className="flex flex-col items-start gap-3 justify-start">
          <Image
            src="/bestevent.png"
            alt="organization dp"
            width={226}
            className="rounded-lg"
            height={300}
          />
          <div className="md:text-lg lg:text-2xl  gap-2   items-center  flex text-[#353535]">
            Stein Studios
          </div>
          <div className="md:text-base lg:text-base flex justify-center items-center  gap-2">
            <Image
              src="/Group_light.svg"
              alt="user count"
              width={30}
              height={30}
            />
            User Count - 8
          </div>
          <div className="md:text-base lg:text-base flex justify-center items-center gap-3">
            <Image
              src="/Bookmark_light.svg"
              alt="user count"
              width={26}
              height={26}
            />
            Event Count - 2
          </div>
        </div>
      </div>
    </div>
  );
}
