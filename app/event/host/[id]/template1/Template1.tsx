"use client";
import Footer from "@/components/Footer";

import React, { useEffect, useState } from "react";
import CoverPhoto from "../components/CoverPhoto";
import PostTab from "../components/PostTab";
import SmallView from "../components/SmallView";
import HostSideBar from "../components/HostSideBar";
import Description from "../components/Description";
import { Event, Post } from "../SelectTemplate";
import { parse } from "path";
import { formatDate } from "@/util/helper";

export default function Template({ event }: { event: Event }) {
  const date = formatDate(event.eventStartDate);

  const [activeComponent, setActiveComponent] = useState("CoverPhoto");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <div className="md:flex relative ">
        {activeComponent === "CoverPhoto" && (
          <CoverPhoto
            image={event.postImageLink}
            // image={"/images/ReusableComponents/PictureOfPost.jpg"}
          />
        )}

        {activeComponent === "PostTab" && <PostTab />}
        <div className="md:hidden">
          <SmallView
            EventName={event.eventName}
            Location={event.selectedTab}
            Time={`${event.startTime} to ${
              parseInt(event.startTime, 10) + parseInt(event.duration, 10)
            }`}
            Date={date}
          />
        </div>

        <div className="md:absolute md:right-0 hidden md:block ">
          <HostSideBar
            EventName={event.eventName}
            Location={event.selectedTab}
            Time={`${event.startTime} to ${event.startTime + event.duration}`}
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
