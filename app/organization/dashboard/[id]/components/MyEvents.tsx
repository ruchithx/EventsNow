import EventCardOrgDash from "@/components/EventCardOrgDash";
import React from "react";
import HasData from "./HasData";
import { useOrg } from "../OrgContext";

export default function MyEvents() {
  const { events } = useOrg();
  return (
    <div className="flex md:ml-2 pl-2 bg-[#E9E9E9] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="flex flex-col gap-3 justify-start items-start">
        <div className="text-3xl font-semibold text-[#304151]	font-IBM">
          MY EVENTS
        </div>
        <div className="text-base text-[#848484] font-normal">
          You can view all your created events here
        </div>
      </div>
      {/* {events.length === 0 ? (
        <HasData message="You have not create events" /> */}
      {/* )  */}
      {/* : ( */}
      <div className=" items-start flex h-80 overflow-auto  gap-5 flex-col">
        <EventCardOrgDash
          img="bestevent.png"
          location="Matara"
          time="9.00"
          name="Nadagama"
          date="2024/01/6"
        />
        <EventCardOrgDash
          img="bestevent.png"
          location="Matara"
          time="9.00"
          name="Nadagama"
          date="2024/01/6"
        />
        <EventCardOrgDash
          img="bestevent.png"
          location="Matara"
          time="9.00"
          name="Nadagama"
          date="2024/01/6"
        />
      </div>
      {/* )} */}
    </div>
  );
}
