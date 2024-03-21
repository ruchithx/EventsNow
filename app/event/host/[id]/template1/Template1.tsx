"use client";
import Footer from "@/components/Footer";

import React, { useEffect, useState } from "react";
import CoverPhoto from "../components/CoverPhoto";
import PostTab from "../components/PostTab";
import SmallView from "../components/SmallView";
import HostSideBar from "../components/HostSideBar";
import Description from "../components/Description";
// import { Event, Post } from "../SelectTemplate";

import { formatDate } from "@/util/helper";
import { EventType } from "@/app/Type";

export default function Template({ event }: { event: EventType }) {
  const date = `${formatDate(event.eventStartDate)} to ${formatDate(
    event.eventEndDate
  )}`;

  const [activeComponent, setActiveComponent] = useState("CoverPhoto");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <div className="md:flex md:justify-between ">
        {activeComponent === "CoverPhoto" && (
          <CoverPhoto
            image={event.coverImage}
            // image={"/images/ReusableComponents/PictureOfPost.jpg"}
          />
        )}

        {activeComponent === "PostTab" && <PostTab />}
        <div className="md:hidden">
          <SmallView
            EventName={event.eventName}
            Location={event.selectedTab}
            // Time={`${event.startTime} to ${
            //   parseInt(event.startTime, 10) + parseInt(event.duration, 10)
            // }`}
            Date={date}
          />
        </div>

        <div className=" hidden md:block ">
          <HostSideBar
            EventName={event.eventName}
            Location={event.selectedTab}
            Time={`${event.startTime} to ${event.endTime}`}
            Date={date}
            activeComponent={activeComponent}
            handleComponentChange={handleComponentChange}
          />
        </div>
      </div>

      <Description description={event.description} />

      <Footer />
    </div>
  );
}
