import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import Upcoming_Events from "@/components/Upcoming_Events";
import Org_RequestHandle from "./Org_RequestHandle";
import EventHost from "@/components/EventHost";
import MyEventCard from "./MyEventCard";
import EmptyStateComponent from "@/components/EmptyStateComponent";
export default function MyTickets() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl bg-[#fff] pt-8  justify-start items-start">
      <div className="w-fit ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[55px]">
          My Tickets
        </div>
        <div className="mt-10 mx-10">
          <EmptyStateComponent message="No ticket create yet" />
          {/* <MyEventCard
            id="1"
            OrgName={"Stein Studios "}
            image={"./images/reusableComponents/login.jpg"}
            btn="View event"
          /> */}
        </div>
      </div>
    </div>
  );
}
