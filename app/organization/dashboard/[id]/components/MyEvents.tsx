import React from "react";

import { useOrg } from "../OrgContext";
import EmptyStateComponent from "@/components/EmptyStateComponent";
import { Event } from "../Type";
import EventCardOrgDash from "./EventCardOrgDash";

interface contextProps {
  isSlideBar: boolean;
  events: Event[];
}

export default function MyEvents() {
  const { events, isSlideBar } = useOrg() as contextProps;

  return (
    <div className="flex rounded-lg  md:ml-2 pl-2 shadow-3xl bg-[#fff] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="flex flex-col gap-3 justify-start items-start">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          MY EVENTS
        </div>
        <div className="text-base text-[#848484] font-normal">
          You can view all your created events here
        </div>
      </div>

      <div className="  overflow-y-auto w-full grid h-96 gap-5 pr-16 sm:max-md:grid-cols-2 ">
        <div>
          {events.length === 0 ? (
            <EmptyStateComponent message="No event in the organization" />
          ) : (
            events.map((event) => (
              // <EventCardNewOrg
              //   key={event._id}
              //   event="nadagama"
              //   date="2002-2-1"
              //   time="9.00"
              //   location="matara"
              // />

              <EventCardOrgDash
                id={event._id}
                key={event._id}
                isSlideBar={isSlideBar}
                img={event.coverImage}
                location={event.selectedTab}
                time={event.startTime}
                name={event.eventName}
                date={event.eventStartDate}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
