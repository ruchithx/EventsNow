"use client";
import React, { ReactChild, ReactChildren, useContext, useState } from "react";
const { createContext } = require("react");

const orgDashboardContext = createContext();
interface Props {
  children: ReactChild | ReactChildren;
}

function OrgDashboardProvider({ children }: Props) {
  const [status, setStatus] = useState("");

  function handleDashboard() {
    setStatus("dashboard");
  }
  function handleMyEvents() {
    setStatus("myEvents");
  }
  function handleMyTeam() {
    setStatus("myTeam");
  }
  function handleReport() {
    setStatus("report");
  }
  return (
    <orgDashboardContext.provider
      value={{
        status,
        handleDashboard,
        handleMyEvents,
        handleMyTeam,
        handleReport,
      }}
    >
      {children}
    </orgDashboardContext.provider>
  );
}

function useOrgDashboard() {
  const context = useContext(orgDashboardContext);
  if (context === undefined)
    throw new Error(
      "orgDashboar context was used outside the orgDashboardprovider"
    );
  return context;
}
export { OrgDashboardProvider, useOrgDashboard };
