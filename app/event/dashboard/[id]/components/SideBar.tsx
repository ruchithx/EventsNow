"use client";
import React from "react";
import Dashboard from "@/components/Dashboard";
import Dashboard_Btn from "@/components/Dashboard_Btn";
import { useEvent } from "../EventDashContext";

export default function SideBar() {
  const { handleDashboard, handleMyevent } = useEvent();
  return (
    <div>
      <Dashboard>
        <Dashboard_Btn text="DASHBOARD" onClick={() => handleDashboard()} />
        <Dashboard_Btn text="MY EVENTS" onClick={() => handleMyevent()} />
      </Dashboard>
    </div>
  );
}
