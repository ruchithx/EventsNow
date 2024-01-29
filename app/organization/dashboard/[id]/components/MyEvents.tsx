import EventCardOrgDash from "@/app/organization/dashboard/[id]/components/EventCardOrgDash";
import React from "react";
import HasData from "./HasData";
import { useOrg } from "../OrgContext";
import EmptyStateComponent from "@/components/EmptyStateComponent";

export default function MyEvents() {
  const { events, isSlideBar } = useOrg();
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
      {/* {events.length === 0 ? (
        <EmptyStateComponent message="No event found" />
      ) : ( */}
      <div className="ml-10 md:ml-0 items-start overflow-auto w-full flex h-80    gap-5 flex-col">
        {/* <Carousel orientation="vertical | horizontal">
          <CarouselContent>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
        </Carousel> */}
        <EventCardOrgDash
          isSlideBar={isSlideBar}
          img="bestevent.png"
          location="Matara"
          time="9.00"
          name="Nadagama"
          date="2024/01/6"
        />
        <EventCardOrgDash
          isSlideBar={isSlideBar}
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
