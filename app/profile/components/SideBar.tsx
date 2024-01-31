"use client";
import React, { use, useState } from "react";
import Dashboard from "@/app/organization/dashboard/[id]/components/DashboardSide";
import Dashboard_Btn from "@/app/organization/dashboard/[id]/components/Dashboard_Btn";
import { useProf } from "../ProfContext";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export default function SideBar() {
  const {
    handleDashboard,
    isSlideBar,
    setIsSlideBar,
    handleMyEvent,
    handleReport,
    handleMyTeam,
    handleSetting,
  } = useProf();
  return (
    <div className="">
      <Dashboard>
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
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="profile.svg"
            text="My Profile"
            onClick={() => handleDashboard()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="wishlist.svg"
            text="Wish List"
            onClick={() => handleMyEvent()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="myevents.svg"
            text="My Events"
            onClick={() => handleMyTeam()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="mytickets.svg"
            text="My Tickets"
            onClick={() => handleReport()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="Setting_alt_line.svg"
            text="Settings"
            onClick={() => handleSetting()}
          />
        </div>
      </Dashboard>
    </div>
  );
}