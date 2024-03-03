"use client";
import React, { use, useState } from "react";

import EventDashButton from "./EventDashButton";

import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import Container from "./Container";
import { UseEventContext, EventContextType } from "../EventDashContext";

export default function SideBar() {
  const {
    handleOverview,
    handleHostPage,
    handleMyteam,
    handleReports,
    handleCampaign,
    handleSetting,
    isSideBar,
    setIsSideBar,
  } = UseEventContext() as EventContextType;

  return (
    <div>
      <div className=" flex flex-col  items-center shadow-3xl bg-[#FCFCFD] rounded-lg py- text-center  ">
        <div className=" grid-rows-8 mt-5 gap-3 flex flex-col items-center">
          <div
            className={`mt-8 ${
              isSideBar
                ? "md:col-span-3 md:ml-2  col-span-4"
                : "md:col-span-1  col-span-2"
            }`}
          >
            <div>
              <button
                className="xl:hidden block"
                onClick={() => setIsSideBar(!isSideBar)}
              >
                <div className="flex items-end  ">
                  {isSideBar ? (
                    <HiArrowCircleLeft size={40} />
                  ) : (
                    <HiArrowCircleRight size={40} />
                  )}
                </div>
              </button>
            </div>
            <div
              className={`flex flex-col  ${
                isSideBar ? "items-start" : "items-center"
              } `}
            >
              <EventDashButton
                isSlideBar={isSideBar}
                img="overview.svg"
                text="Overview"
                onClick={() => handleOverview()}
              />
              <EventDashButton
                isSlideBar={isSideBar}
                img="bookmark.svg"
                text="Host Page"
                onClick={() => handleHostPage()}
              />
              <EventDashButton
                isSlideBar={isSideBar}
                img="team.svg"
                text="My Team"
                onClick={() => handleMyteam()}
              />
              <EventDashButton
                isSlideBar={isSideBar}
                img="file_dock.svg"
                text="Reports"
                onClick={() => handleReports()}
              />
              <EventDashButton
                isSlideBar={isSideBar}
                img="bell_pin.svg"
                text="Campaign"
                onClick={() => handleCampaign()}
              />
              <EventDashButton
                isSlideBar={isSideBar}
                img="Setting.svg"
                text="Settings"
                onClick={() => handleSetting()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
