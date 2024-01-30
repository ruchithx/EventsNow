"use client";
import React, { use, useState } from "react";
import Dashboard from "@/app/organization/dashboard/[id]/components/DashboardSide";
import Dashboard_Btn from "@/app/organization/dashboard/[id]/components/Dashboard_Btn";
import { useOrg } from "../OrgContext";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

export default function SideBar() {
  const {
    handleDashboard,
    isSlideBar,
    setIsSlideBar,
    handleMyEvent,
    handleReport,
    handleMyTeam,
    handleSetting,
  } = useOrg();
  return (
    <div>
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
            img="Dashboard.svg"
            text="Dashboard"
            onClick={() => handleDashboard()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="event.svg"
            text="Events"
            onClick={() => handleMyEvent()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="report.svg"
            text="Report"
            onClick={() => handleReport()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="Team.svg"
            text="Team"
            onClick={() => handleMyTeam()}
          />
          <Dashboard_Btn
            isSlideBar={isSlideBar}
            img="Setting_alt_line.svg"
            text="Setting"
            onClick={() => handleSetting()}
          />
        </div>
      </Dashboard>
    </div>
  );
}
