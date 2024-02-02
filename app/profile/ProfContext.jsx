"use client";
import React, { createContext, useContext, useState } from "react";

const ProfContext = createContext();

function ProfContextProvider({ children }) {
  const [status, setStatus] = useState("dashboard");
  const [revenue, setRevenue] = useState(0);
  const [ticketSold, setTicketSold] = useState(0);
  const [events, setEvents] = useState([]);
  const [team, setTeam] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSlideBar, setIsSlideBar] = useState(true);

  function handleProfile() {
    setStatus("myProfile");
    setIsDashboardOpen(false);
  }
  function handleWishList() {
    setStatus("wishList");
    setIsDashboardOpen(false);
  }
  function handleMyEvents() {
    setStatus("myEvents");
    setIsDashboardOpen(false);
  }
  function handleyTickets() {
    setStatus("myTickets");
    setIsDashboardOpen(false);
  }
  function handleSetting() {
    setStatus("setting");
    setIsDashboardOpen(false);
  }

  return (
    <ProfContext.Provider
      value={{
        events,
        handleSetting,
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
        handleProfile,
        handleWishList,
        handleMyEvents,
        handleyTickets,
      }}
    >
      {children}
    </ProfContext.Provider>
  );
}

function useProf() {
  const context = useContext(ProfContext);
  if (context === undefined)
    throw new Error("Organization context was used outside the orgProvider");
  return context;
}
export { ProfContextProvider, useProf };
