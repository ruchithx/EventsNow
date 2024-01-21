import Image from "next/image";
import React from "react";
import { useOrg } from "../OrgContext";

export default function Dashboard() {
  const { revenue, ticketSold } = useOrg();

  return (
    <div className="flex pl-5 md:ml-2 bg-[#E9E9E9] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="text-3xl font-semibold text-[#304151]	font-IBM">
        Dashboard
      </div>

      <div className="flex gap-8 md:gap-20 rounded-xl bg-white md:w-3/4 w-11/12	  lg:w-3/4  xl:w-3/5  2xl:w-2/5 pt-2 pb-2 md:pl-10 lg:pl-24">
        <div className="block md:ml-0 ml-2 ">
          <Image
            src="/ReusableComponentData/Chart_alt_fill.svg"
            alt="revenue"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col  gap-4 items-start justify-center">
          <div className="text-[#666666] md:text-xl text-lg">REVENUE</div>
          {revenue > 0 ? (
            <div className="md:text-2xl font-medium  text-lg  ">
              LKR {revenue}
            </div>
          ) : (
            <div className=" font-medium italic  text-lg md:text-xl ">
              no revenue
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-8 md:gap-20 rounded-xl bg-white md:w-3/4 w-11/12	  lg:w-3/4  xl:w-3/5  2xl:w-2/5 pt-2 pb-2 md:pl-10 lg:pl-24">
        <div className="block md:ml-0 ml-2">
          <Image
            src="/ReusableComponentData/Chart_alt_fill.svg"
            alt="revenue"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col  gap-4 items-start justify-center">
          <div className="text-[#666666] md:text-xl text-lg">TICKET SOLD</div>
          {ticketSold > 0 ? (
            <div className="md:text-2xl font-medium  text-l ">
              {" "}
              {ticketSold}
            </div>
          ) : (
            <div className="font-medium italic  text-lg md:text-xl">
              no ticket sold
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
