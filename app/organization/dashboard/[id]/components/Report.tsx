import View_Report from "@/app/organization/dashboard/[id]/components/View_Report";
import React from "react";
import { useOrg } from "../OrgContext";

export default function Report() {
  const { isSlideBar } = useOrg();
  return (
    <div className="flex md:ml-2 rounded-lg font-custom-orange shadow-3xl pl-2 bg-[#fff] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="flex flex-col gap-3 justify-start items-start">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          REPORTS
        </div>
        <div className="text-base text-[#848484] font-normal">
          Select the event, Get the report and Evaluate the performance
        </div>
      </div>

      <div
        className={`bg-white p-1 ${
          isSlideBar ? "lg:md:w-3/4 md:w-11/12" : "md:w-3/4"
        } w-11/12  flex flex-col gap-3 2xl:w-1/2  justify-start items-start md:px-5 md:py-3 xl:px-10 xl:py-5 rounded-xl`}
      >
        <div className="text-[#666] text-xl">Select the event</div>
        <div className="w-full md:w-3/4">
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
      <div className="flex h-56 w-full overflow-auto flex-col gap-5 mb-5">
        <View_Report
          isSlideBar={isSlideBar}
          img="Chart_alt_fill.svg"
          discription1="ATTENDANCE REPORT"
        />
        <View_Report
          isSlideBar={isSlideBar}
          img="Chart_alt_fill.svg"
          discription1="REVENUE REPORT"
        />
      </div>
      {/* </>
      )} */}
    </div>
  );
}
