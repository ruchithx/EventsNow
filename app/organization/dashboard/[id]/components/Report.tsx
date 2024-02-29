import View_Report from "@/app/organization/dashboard/[id]/components/View_Report";
import React, { useState } from "react";
import { useOrg } from "../OrgContext";
import { Event } from "../Type";
import EmptyStateComponent from "@/components/EmptyStateComponent";

interface contextProps {
  isSlideBar: boolean;
  events: Event[];
}

export default function Report() {
  const [selectedEvent, setSelectedEvent] = useState<string>("Choose an event");
  const { isSlideBar, events } = useOrg() as contextProps;

  function report() {
    if (selectedEvent === "Choose an event") {
      return <EmptyStateComponent message="Choose an event" />;
    } else if (selectedEvent === "No events") {
      return <EmptyStateComponent message="No events" />;
    } else {
      return (
        <>
          <View_Report
            eventName={selectedEvent}
            isSlideBar={isSlideBar}
            img="couldWithThreeDots.svg"
            discription1="ATTENDANCE REPORT"
          />
          <View_Report
            eventName={selectedEvent}
            isSlideBar={isSlideBar}
            img="revenueReport.svg"
            discription1="REVENUE REPORT"
          />
        </>
      );
    }
  }

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
            onChange={(e) => setSelectedEvent(e.target.value)}
            value={selectedEvent}
            id="countries"
            className="bg-white border hover:bg-slate-200 focus:outline-custom-orange border-[#848484] text-[#848484] focus:ring-custom-orange focus:border-custom-orange text-sm rounded-lg  block w-full p-2.5 "
          >
            {events.length === 0 ? (
              <option className="text-black bg-slate-200 font-medium" selected>
                No events{" "}
              </option>
            ) : (
              <>
                <option
                  className="text-black bg-slate-200 font-medium"
                  selected
                >
                  Choose an event
                </option>
                {events.map((event) => (
                  <option
                    className="text-black bg-slate-200 font-medium	"
                    key={event._id}
                    value={event.eventName}
                  >
                    {event.eventName}
                  </option>
                ))}
              </>
            )}
            {/* <option selected>Choose an event</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
          </select>
        </div>
      </div>
      <div className="flex h-56 w-full overflow-auto flex-col gap-5 mb-5">
        {/* {selectedEvent === "Choose an event" ? (
          <EmptyStateComponent message="Choose an event" />
        ) : } */}
        {report()}
      </div>
      {/* </>
      )} */}
    </div>
  );
}
