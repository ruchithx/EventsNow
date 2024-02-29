"use client";

import Footer from "@/components/Footer";

import { getAllOrganization } from "./admin/dashboard/[id]/FetchData";
import EventCardNew from "@/components/EventCardNew";
import { useAdmin } from "./admin/dashboard/[id]/AdminContextFile";
import EventCardEventDash from "@/components/EventCardEventDash";
import Upcoming_Events from "@/components/UpcomingEvents";
import EventCardNewOrg from "@/components/EventCardNewOrg";
import EventCardDisabled from "@/components/EventCardDisabled";
import EventCard from "@/components/EventCard";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineViewList } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
  async function handleClickIt() {
    const res = await getAllUser();
    const data = await res.json();
    console.log("Organization data", data);
  }

  return (
    <div>
      <EventCardNew event={"ARQM"} organization={"ASd"} />
      <EventCardNewOrg
        event={"Adkd"}
        date={"45"}
        time={"45/55"}
        location={"ndndd"}
      />
      <button onClick={handleClickIt}> click it </button>

      <div>Hero sectin</div>
      {/* <div className="flex flex-row justify-between">
        <div className="font-bold text-[80px] text-[#906953] ms-8 ">
          Upcoming Events
        </div>
        <div className="mt-14 flex flex-row">
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
        <div className="mt-14 flex flex-row gap-4 mr-20">
          View As
          <div className="mt-1 flex flex-row gap-3 cursor-pointer ">
            <HiOutlineViewGrid className="cursor-pointer hover:bg-gray-200 " />

            <HiOutlineViewList className="cursor-pointer hover:bg-gray-200" />
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
      <div className="font-bold text-[80px] text-[#906953] ms-8">
        Out dated Event
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
      </div> */}
      <Footer />
    </div>
  );
}
