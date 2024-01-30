"use client";

import React, { createContext, useContext, useState } from "react";

const adminContext = createContext();

function AdminContextProvider({ children }) {
  const [status, setStatus] = useState("");
  console.log(status);

  function handleNotification() {
    console.log("Notification");

    setStatus("Notification");
  }
  function handleOrganization() {
    setStatus("Organization");
  }
  function handleEvent() {
    setStatus("Event");
  }
  function handleUser() {
    setStatus("User");
  }
  return (
    <adminContext.Provider
      value={{
        status,
        handleNotification,
        handleOrganization,
        handleEvent,
        handleUser,
      }}
    >
      {children}
    </adminContext.Provider>
  );
}

function useAdmin() {
  const context = useContext(adminContext);
  if (context === undefined)
    throw new Error("Admin context was used outside the AdminProvider");
  return context;
}
export { AdminContextProvider, useAdmin };
