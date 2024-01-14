import React from "react";
import { useOrgDashboard } from "./../OrgDashboardContext";
import Dashboard from "./Dashboard";
import Report from "./Report";
import MyTeam from "./MyTeam";
import MyEvents from "./MyEvents";

export default function Content() {
  const { status }: any = useOrgDashboard();
  return (
    <div>
      {status === "dashboard" && <Dashboard />}
      {status === "report" && <Report />}
      {status === "my-team" && <MyTeam />}
      {status === "my-events" && <MyEvents />}
    </div>
  );
}
