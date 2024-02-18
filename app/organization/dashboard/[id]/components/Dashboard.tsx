import Image from "next/image";
import React, { useState } from "react";
import { useOrg } from "../OrgContext";
import { Event } from "../Type";

interface ContentProps {
  revenue: number;
  ticketSold: number;
  isSlideBar: boolean;
  events: Event[];
}

export default function Dashboard() {
  const { revenue, ticketSold, isSlideBar, events } = useOrg() as ContentProps;
  const [selectedEvent, setSelectedEvent] = useState<string>("Choose an event");

  return (
    <div className="flex rounded-lg  shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 flex-col justify-start items-start gap-12">
      <div className="w-full flex flex-col justify-end">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          Dashboard
        </div>

        <div className="w-full flex justify-end">
          <div
            className={` p-1 w-11/12 md:w-2/3 flex flex-col  gap-3 justify-start items-start ${
              isSlideBar ? "md:px-0" : "md:px-5"
            } md:px-5 md:py-2  xl:px-10 xl:py-5 rounded-xl`}
          >
            <div className="w-full md:w-3/4">
              <select
                onChange={(e) => setSelectedEvent(e.target.value)}
                value={selectedEvent}
                id="countries"
                className="bg-white border hover:bg-slate-200 focus:outline-custom-orange border-[#848484] text-[#848484] focus:ring-custom-orange focus:border-custom-orange text-sm rounded-lg  block w-full p-2.5 "
              >
                {events.length === 0 ? (
                  <option
                    className="text-black bg-slate-200 font-medium"
                    selected
                  >
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
        </div>
      </div>

      <div
        className={`flex shadow-normalComponent border-t-[1px] border-custom-orange gap-8 md:gap-10 rounded-xl bg-white ${
          isSlideBar ? "md:w-11/12 md:pl-5" : "md:w-4/5 md:pl-10"
        }  w-11/12	  lg:w-4/5  xl:w-4/5  2xl:w-2/5 pt-2 pb-2  lg:pl-24`}
      >
        <div className="block md:ml-0 ml-2 ">
          <Image
            src="/images/organization/couldWithThreeDots.svg"
            alt="revenue"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col   gap-4 items-start justify-center">
          <div className="text-[#666666] md:text-xl text-lg">REVENUE</div>
          {revenue > 0 ? (
            <div className="md:text-2xl font-medium  text-lg  ">
              LKR {revenue}
            </div>
          ) : (
            <div className=" font-medium italic  text-lg md:text-xl ">
              no revenue
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex border-t-[1px] border-custom-orange shadow-normalComponent gap-8 md:gap-10 rounded-xl bg-white ${
          isSlideBar ? "md:w-11/12 md:pl-5" : "md:w-4/5 md:pl-10"
        }  w-11/12	   lg:w-4/5 xl:w-4/5 mb-2  2xl:w-2/5 pt-2 pb-2 md:pl-10 lg:pl-24`}
      >
        {" "}
        <div className="block md:ml-0 ml-2">
          <Image
            src="/images/organization/couldWithThreeDots.svg"
            alt="revenue"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col  gap-4 items-start justify-center">
          <div className="text-[#666666] md:text-xl text-lg">TICKET SOLD</div>
          {ticketSold > 0 ? (
            <div className="md:text-2xl font-medium  text-l ">{ticketSold}</div>
          ) : (
            <div className="font-medium italic  text-lg md:text-xl">
              no ticket sold
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
