"use client";
import { voidFunc } from "@/app/organization/dashboard/[id]/Type";
import React, { createContext, useState, useContext } from "react";

export interface EventContextType {
  status: String;
  handleOverview: voidFunc;
  handleHostPage: voidFunc;
  handleMyteam: voidFunc;
  handleReports: voidFunc;
  handleCampaign: voidFunc;
  handleSetting: voidFunc;
}

const EventContext = createContext<EventContextType | string>("");

function EventContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState("settings");
  const handleOverview: voidFunc = () => {
    setStatus("overview");
  };
  const handleHostPage: voidFunc = () => {
    setStatus("hostpage");
  };
  const handleMyteam: voidFunc = () => {
    setStatus("myteam");
  };
  const handleReports: voidFunc = () => {
    setStatus("reports");
  };
  const handleCampaign: voidFunc = () => {
    setStatus("campaign");
  };
  const handleSetting: voidFunc = () => {
    setStatus("settings");
  };

  return (
    <EventContext.Provider
      value={{
        status,
        handleOverview,
        handleHostPage,
        handleMyteam,
        handleReports,
        handleCampaign,
        handleSetting,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

function UseEventContext() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error(
      "useEventContext must be used within a EventContextProvider"
    );
  }
  return context;
}

export { EventContextProvider, UseEventContext };
