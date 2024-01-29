"use client";
import React, { createContext, useContext, useState } from "react";

const orgContext = createContext();

function OrgContextProvider({ children }) {
  const [status, setStatus] = useState("dashboard");
  const [revenue, setRevenue] = useState(0);
  const [ticketSold, setTicketSold] = useState(0);
  const [events, setEvents] = useState([]);
  const [team, setTeam] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSlideBar, setIsSlideBar] = useState(true);

  function handleDashboard() {
    setStatus("dashboard");
    setIsDashboardOpen(false);
  }
  function handleMyEvent() {
    setStatus("myEvents");
    setIsDashboardOpen(false);
  }
  function handleMyTeam() {
    setStatus("myTeam");
    setIsDashboardOpen(false);
  }
  function handleReport() {
    setStatus("report");
    setIsDashboardOpen(false);
  }
  return (
    <orgContext.Provider
      value={{
        events,
        isSlideBar,
        setIsSlideBar,
        isDashboardOpen,
        setIsDashboardOpen,
        setIsActive,
        isActive,
        revenue,
        team,
        ticketSold,
        status,
        handleDashboard,
        handleMyEvent,
        handleMyTeam,
        handleReport,
      }}
    >
      {children}
    </orgContext.Provider>
  );
}

function useOrg() {
  const context = useContext(orgContext);
  if (context === undefined)
    throw new Error("Organization context was used outside the orgProvider");
  return context;
}
export { OrgContextProvider, useOrg };
