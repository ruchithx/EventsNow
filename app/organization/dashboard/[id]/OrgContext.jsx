"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
const orgContext = createContext();

function OrgContextProvider({ children }) {
  const [status, setStatus] = useState("dashboard");
  const [revenue, setRevenue] = useState(0);
  const [ticketSold, setTicketSold] = useState(0);
  const [events, setEvents] = useState([]);
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSlideBar, setIsSlideBar] = useState(true);
  const [organization, setOrganization] = useState({});
  const params = useParams();
  const router = useRouter();

  useEffect(
    function () {
      async function getData() {
        setIsLoading(true);
        const res = await fetch(
          `http://localhost:3000/api/v1/organization/getOrganization`,
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(params.id),
          }
        );

        const finalResponse = await res.json();

        if (!res.ok || finalResponse.message === "No organization") {
          router.push("/404");
          return;
        }

        if (!finalResponse.organization) {
          return;
        }
        setOrganization(finalResponse.organization);
        setIsLoading(false);

        setIsActive(finalResponse.organization.isActive);
      }
      getData();
    },
    [params.id]
  );

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

  function handleSetting() {
    setStatus("setting");
    setIsDashboardOpen(false);
  }

  return (
    <orgContext.Provider
      value={{
        events,
        handleSetting,
        isSlideBar,
        setIsSlideBar,
        isDashboardOpen,
        setIsDashboardOpen,
        isLoading,
        isActive,
        revenue,
        team,
        ticketSold,
        status,
        handleDashboard,
        handleMyEvent,
        handleMyTeam,
        handleReport,
        organization,
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
