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

  console.log(status);

  function handleDashboard() {
    setStatus("dashboard");
  }
  function handleMyEvent() {
    setStatus("myEvents");
  }
  function handleMyTeam() {
    setStatus("myTeam");
  }
  function handleReport() {
    setStatus("report");
  }
  return (
    <orgContext.Provider
      value={{
        events,
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
