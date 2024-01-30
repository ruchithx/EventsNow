"use client";
import { createContext, useContext, useState } from "react";

const eventContext = createContext();

function EventDashContext({ children }) {
  const [status, setStatus] = useState("");

  function handleDashboard() {
    setStatus("dashboard");
  }
  function handleMyevent() {
    setStatus("myevent");
  }

  return (
    <eventContext.Provider value={{ handleDashboard, handleMyevent, status }}>
      {children}
    </eventContext.Provider>
  );
}

function useEvent() {
  const context = useContext(eventContext);
  if (context === undefined)
    throw new Error("event context was used outside the orgProvider");
  return context;
}

export { EventDashContext, useEvent };
