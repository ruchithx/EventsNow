"use client";
import React, { createContext, useState, useContext } from "react";

export interface EventContextType {
  status: String;
}

const EventContext = createContext<EventContextType | string>("");

function EventContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState("loading");
  return (
    <EventContext.Provider
      value={{
        status
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
