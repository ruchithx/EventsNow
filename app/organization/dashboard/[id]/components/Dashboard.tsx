import Image from "next/image";
import React from "react";
import { useOrg } from "../OrgContext";

export default function Dashboard() {
  const { revenue, ticketSold } = useOrg();

  return (
    <div className="flex ml-2 bg-[#E9E9E9] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="text-3xl font-semibold text-[#304151]	font-IBM">
        Dashboard
      </div>

      <div className="flex gap-20 rounded-xl bg-white md:w-3/4  lg:w-3/4  xl:w-3/5  2xl:w-2/5 pt-2 pb-2 md:pl-10 lg:pl-24">
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
          {revenue > 0 ? (
            <div className="text-2xl font-medium ">LKR {revenue}</div>
          ) : (
            <div className="text-xl font-medium italic ">no revenue yet</div>
          )}
        </div>
      </div>

      <div className="flex  mb-10 gap-20 rounded-xl bg-white w-3/4 xl:w-3/5 2xl:w-2/5 pt-2 pb-2 md:pl-10 lg:pl-24">
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
          {ticketSold > 0 ? (
            <div className="text-2xl font-medium "> {ticketSold}</div>
          ) : (
            <div className="text-xl font-medium italic ">
              no ticket sold yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
