import React from "react";
import ProfileDetails from "./ProfileDetails";
import Upcoming_Events from "@/components/Upcoming_Events";
import Org_RequestHandle from "./Org_RequestHandle";
export default function MyEvents() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 justify-start items-start gap-12 ">
      <div className="w-fit ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[75px]">
          Wish List
        </div>
        <Org_RequestHandle OrgName={"Amna"} image={"././image 1.png"} />
      </div>
    </div>
  );
}
