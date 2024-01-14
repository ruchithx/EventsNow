import React, { use } from "react";
import Dashboard from "@/components/Dashboard";
import Dashboard_Btn from "@/components/Dashboard_Btn";
import { useOrgDashboard } from "./../OrgDashboardContext";
export default function SideBar() {
  const { handleDashboard, handleMyEvents, handleReports, handleMyTeam }: any =
    useOrgDashboard();
  return (
    <div>
      <Dashboard>
        <Dashboard_Btn text="DASHBOARD" onClick={() => handleDashboard()} />
        <Dashboard_Btn text="MY EVENTS" onClick={() => handleMyEvents()} />
        <Dashboard_Btn text="REPORTS" onClick={() => handleReports()} />
        <Dashboard_Btn text="MY TEAM" onClick={() => handleMyTeam()} />
      </Dashboard>
    </div>
  );
}
