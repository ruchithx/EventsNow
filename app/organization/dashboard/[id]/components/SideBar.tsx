"use client";
import React, { use, useState } from "react";
import Dashboard from "@/components/Dashboard";
import Dashboard_Btn from "@/components/Dashboard_Btn";
import { useOrg } from "../OrgContext";

export default function SideBar() {
  const { handleDashboard, handleMyEvent, handleReport, handleMyTeam } =
    useOrg();
  return (
    <div>
      <Dashboard>
        <Dashboard_Btn text="DASHBOARD" onClick={() => handleDashboard()} />
        <Dashboard_Btn text="MY EVENTS" onClick={() => handleMyEvent()} />
        <Dashboard_Btn text="REPORTS" onClick={() => handleReport()} />
        <Dashboard_Btn text="MY TEAM" onClick={() => handleMyTeam()} />
      </Dashboard>
    </div>
  );
}
