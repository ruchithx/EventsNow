"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { OrgContext, OrgStatus, Organization, voidFunc } from "./Type";

interface OrgContextProviderProps {
  children: React.ReactNode;
}

const orgContext = createContext<OrgContext | string>("");

function OrgContextProvider({ children }: OrgContextProviderProps) {
  
  const [status, setStatus] = useState<OrgStatus>("dashboard");
  const [revenue, setRevenue] = useState<number>(0);
  const [ticketSold, setTicketSold] = useState<number>(0);
  const [events, setEvents] = useState([]);
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  const [isSlideBar, setIsSlideBar] = useState<boolean>(true);
  const [organization, setOrganization] = useState<Organization | null>(null);
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

  const handleDashboard: voidFunc = () => {
    setStatus("dashboard");
    setIsDashboardOpen(false);
  };

  const handleMyEvent: voidFunc = () => {
    setStatus("myEvents");
    setIsDashboardOpen(false);
  };

  const handleMyTeam: voidFunc = () => {
    setStatus("myTeam");
    setIsDashboardOpen(false);
  };

  const handleReport: voidFunc = () => {
    setStatus("report");
    setIsDashboardOpen(false);
  };

  const handleSetting: voidFunc = () => {
    setStatus("setting");
    setIsDashboardOpen(false);
  };

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
