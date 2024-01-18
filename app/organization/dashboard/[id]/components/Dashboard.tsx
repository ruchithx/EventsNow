import Image from "next/image";
import React from "react";

export default function Dashboard() {
  return (
    <div className="flex ml-2 bg-[#E9E9E9] pt-8 pl-20 flex-col justify-start items-start gap-12">
      <div className="text-3xl font-semibold text-[#304151]	font-IBM">
        Dashboard
      </div>
      <div className="flex gap-20 rounded-xl bg-white w-3/4 pt-2 pb-2 pl-24">
        <div className="hidden md:block">
          <Image
            src="/ReusableComponentData/Chart_alt_fill.svg"
            alt="revenue"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col  gap-4 items-start justify-center">
          <div className="text-[#666666] text-xl">REVENUE</div>
          <div className="text-2xl font-medium ">LKR 120000.00</div>
        </div>
      </div>
      <div className="flex  mb-10 gap-20 rounded-xl bg-white w-3/4 pt-2 pb-2 pl-24">
        <div className="hidden md:block">
          <Image
            src="/ReusableComponentData/Chart_alt_fill.svg"
            alt="revenue"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col  gap-4 items-start justify-center">
          <div className="text-[#666666] text-xl">TICKET SOLD</div>
          <div className="text-2xl font-medium ">139</div>
        </div>
      </div>
    </div>
  );
}
