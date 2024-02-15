import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import Upcoming_Events from "@/components/Upcoming_Events";
import Org_RequestHandle from "./Org_RequestHandle";
import EventHost from "@/components/EventHost";
import MyEventCard from "./MyEventCard";
export default function MyTickets() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 justify-start items-start gap-12 ">
      <div className="w-fit ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-10">
          My Tickets
        </div>
        <div className="mt-10 mx-10">
          <MyEventCard
            OrgName={"Stein Studios "}
            image={"././image 1.png"}
            btn="View event"
          />
        </div>
      </div>
    </div>
  );
}
