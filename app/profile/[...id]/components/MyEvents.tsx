import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import Upcoming_Events from "@/components/Upcoming_Events";
import Org_RequestHandle from "./Org_RequestHandle";
import EventHost from "@/components/EventHost";
import { ProfContext, useProf } from "../ProfContext";

export default function MyEvents() {
  const [manageEventsContent, setManageEventsContent] =
    useState("MANAGE EVENTS");
  const [manage, setManage] = useState(true);

  const handleManageEventsContent = () => {
    if (manage) {
      //setManageEventsContent("MANAGE EVENTS");
      setManage(!manage);
    } else {
      //setManageEventsContent("REGISTERED EVENTS");
    }
  };
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl  bg-[#fff] pt-8 justify-start items-start gap-12 ">
      <div className="w-fit ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[55px]">
          My Events
        </div>
        <div className="">
          <EventHost btn1={"MANAGE EVENTS"} btn2={"REGISTERED EVENTS"} />
        </div>
      </div>
    </div>
  );
}
