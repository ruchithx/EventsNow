import EventCardOrgDash from "@/app/organization/dashboard/[id]/components/EventCardOrgDash";
import React from "react";

import { useOrg } from "../OrgContext";
import EmptyStateComponent from "@/components/EmptyStateComponent";
import { Event } from "../Type";

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

      <div className="ml-10 md:ml-0 items-start overflow-auto w-full flex h-80    gap-5 flex-col">
        {events.length === 0 ? (
          <EmptyStateComponent message="No event in the organization" />
        ) : (
          events.map((event) => (
            <EventCardOrgDash
              key={event._id}
              isSlideBar={isSlideBar}
              img={event.postImageLink}
              location={event.selectedTab}
              time={event.startTime}
              name={event.eventName}
              date={event.eventStartDate}
            />
          ))
        )}
      </div>
    </div>
  );
}
