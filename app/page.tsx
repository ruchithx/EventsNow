"use client";

import Footer from "@/components/Footer";

import EventCardNew from "@/components/EventCardNew";

import EventCardEventDash from "@/components/EventCardEventDash";
import Upcoming_Events from "@/components/UpcomingEvents";
import EventCardNewOrg from "@/components/EventCardNewOrg";
import EventCardDisabled from "@/components/EventCardDisabled";
import EventCard from "@/components/EventCard";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineViewList } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import Post from "@/components/Post";

export default function Home() {
  return (
    <div>
      {/* <EventCardNew event={"ARQM"} organization={"ASd"} /> */}
      {/* <EventCardNewOrg

        event={"Nadagama"}
        date={"2022/05/1"}
        time={"09.00"}
        location={"online"}
      /> */}

      <div>Hero sectin</div>

      {/* <EventCardNewOrg
        event="nadagama"
        date="2002-2-1"
        time="9.00"
        location="matara"
      />
      <EventCardNew event="erewe" organization="sdsd" /> */}
      <div className="flex flex-row mt-4">
        <div className="font-bold text-[70px] text-[#906953] ms-12 w-1/2">
          Upcoming Events
        </div>
        <div className="w-1/2 flex flex-row justify-evenly">
          {" "}
          <div className="mt-12 flex flex-row">
            Sort By
            <div className="relative ml-4">
              <select className="appearance-none bg-white border border-gray-300 px-4 py-1 rounded-md shadow-sm text-sm focus:outline-none focus:border-gray-400">
                <option value="location">Location</option>
                <option value="name">Name</option>
                <option value="organization">Organization</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
          <div className="mt-12 flex flex-row gap-4 mr-20">
            View As
            <div className="mt-1 flex flex-row gap-3 cursor-pointer ">
              <HiOutlineViewGrid className="cursor-pointer hover:bg-gray-200 " />

              <HiOutlineViewList className="cursor-pointer hover:bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap ms-12">
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
        <EventCard
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
          time={"10.00AM"}
        />
      </div>
      <div className="flex flex-row justify-evenly mt-4">
        <div className="font-bold text-[70px] text-[#906953] ms-12 w-1/2">
          OutDated Events
        </div>
        <div className="w-1/2 flex flex-row justify-evenly">
          {" "}
          <div className="mt-12 flex flex-row">
            Sort By
            <div className="relative ml-4">
              <select className="appearance-none bg-white border border-gray-300 px-4 py-1 rounded-md shadow-sm text-sm focus:outline-none focus:border-gray-400">
                <option value="location">Location</option>
                <option value="name">Name</option>
                <option value="organization">Organization</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
          <div className="mt-12 flex flex-row gap-4 mr-20">
            View As
            <div className="mt-1 flex flex-row gap-3 cursor-pointer ">
              <HiOutlineViewGrid className="cursor-pointer hover:bg-gray-200 " />

              <HiOutlineViewList className="cursor-pointer hover:bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap ms-12">
        {" "}
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
        <EventCardDisabled
          name={"Nadagama"}
          img={"images/event/UpcomingEvent.png"}
          location={"Matara"}
          date={"2024/12/12"}
        />
      </div>
      <Footer />
    </div>
  );
}
