import View_Report from "@/components/View_Report";
import React from "react";

export default function Report() {
  return (
    <div className="flex ml-2 bg-[#E9E9E9] pt-8 pl-20 flex-col justify-start items-start gap-12">
      <div className="flex flex-col gap-3 justify-start items-start">
        <div className="text-3xl font-semibold text-[#304151]	font-IBM">
          MY EVENTS
        </div>
        <div className="text-base text-[#848484] font-normal">
          You can view all your created events here
        </div>
      </div>
      <div className="bg-white w-3/4 flex flex-col gap-3 justify-start items-start px-10 py-5 rounded-xl">
        <div className="text-[#666] text-xl">Select the event</div>
        <div className="w-3/4">
          <select
            id="countries"
            className="bg-white border border-[#848484] text-[#848484] focus:ring-gray-300 focus:border-gray-500 text-sm rounded-lg  block w-full p-2.5 "
          >
            <option selected>Choose an event</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <View_Report
          img="Chart_alt_fill.svg"
          discription1="ATTENDANCE REPORT"
        />
        <View_Report img="Chart_alt_fill.svg" discription1="REVENUE REPORT" />
      </div>
    </div>
  );
}
