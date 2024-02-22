"use client";
import React, { use, useState } from "react";

import EventDashButton from "./EventDashButton";

import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import Container from "./Container";
import { UseEventContext, EventContextType } from "../EventDashContext";

export default function SideBar() {
  const [isSlideBar, setIsSlideBar] = useState(true);
 const {handleOverview,handleHostPage,handleMyteam,handleReports,handleCampaign,handleSetting} = UseEventContext() as EventContextType;

  return (
    <div>
      <Container>
        <div>
          <button
            className="lg:hidden block"
            onClick={() => setIsSlideBar(!isSlideBar)}
          >
            <div className="flex items-end  ">
              {isSlideBar ? (
                <HiArrowCircleLeft size={40} />
              ) : (
                <HiArrowCircleRight size={40} />
              )}
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start">
          <EventDashButton
            isSlideBar={isSlideBar}
            img="overview.svg"
            text="Overview"
            onClick={() => handleOverview()}
          />
          <EventDashButton
            isSlideBar={isSlideBar}
            img="bookmark.svg"
            text="Host Page"
            onClick={() => handleHostPage()}
          />
          <EventDashButton
            isSlideBar={isSlideBar}
            img="team.svg"
            text="My Team"
            onClick={() => handleMyteam()}
          />
          <EventDashButton
            isSlideBar={isSlideBar}
            img="file_dock.svg"
            text="Reports"
            onClick={() => handleReports()}
          />
          <EventDashButton
            isSlideBar={isSlideBar}
            img="bell_pin.svg"
            text="Campaign"
            onClick={() => handleCampaign()}
          />
          <EventDashButton
            isSlideBar={isSlideBar}
            img="Setting.svg"
            text="Settings"
            onClick={() => handleSetting()}
          />
        </div>
      </Container>
    </div>
  );
}
