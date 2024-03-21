"use client";
import React, { use, useState } from "react";
import Dashboard from "@/app/organization/dashboard/[id]/components/DashboardSide";
import Dashboard_Btn from "@/app/organization/dashboard/[id]/components/Dashboard_Btn";
import { useOrg } from "../OrgContext";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { OrgContext } from "@/app/Type";
// import { voidFunc } from "../Type";

// interface contextProps {
//   handleDashboard: voidFunc;
//   isSlideBar: boolean;
//   setIsSlideBar: (value: boolean) => void;
//   handleMyEvent: voidFunc;
//   handleReport: voidFunc;
//   handleMyTeam: voidFunc;
//   handleSetting: voidFunc;
// }

export default function SideBar() {
  const {
    handleDashboard,
    isSlideBar,
    setIsSlideBar,
    handleMyEvent,
    handleReport,
    handleMyTeam,
    handleSetting,
  } = useOrg() as OrgContext;

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
            img="Setting.svg"
            text="Setting"
            onClick={() => handleSetting()}
          />
        </div>
      </Dashboard>
    </div>
  );
}
