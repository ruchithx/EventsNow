"use client";
import React, { createContext, useContext, useState } from "react";

const orgContext = createContext();

function OrgContextProvider({ children }) {
  const [status, setStatus] = useState("");
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
