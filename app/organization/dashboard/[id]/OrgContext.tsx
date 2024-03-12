"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useParams, notFound } from "next/navigation";
import {
  Event,
  OrgContext,
  OrgStatus,
  Organization,
  Team,
  User,
  voidFunc,
} from "./Type";
import { useAuth } from "@/app/AuthContext";
import { AuthContext } from "@/components/Navbar/NavBar";

export type Modal =
  | ""
  | "givenPermission"
  | "allPermission"
  | "permissionOneEvent"
  | "selectOneEvent";

interface OrgContextProviderProps {
  children: React.ReactNode;
}

export type EventPermission = {
  eventId: string;
  eventPermission: string[];
};

const orgContext = createContext<OrgContext | string>("");

function OrgContextProvider({ children }: OrgContextProviderProps) {
  const [status, setStatus] = useState<OrgStatus>("dashboard");
  const [revenue, setRevenue] = useState<number>(0);
  const [ticketSold, setTicketSold] = useState<number>(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [team, setTeam] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  const [isSlideBar, setIsSlideBar] = useState<boolean>(true);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const params = useParams();
  const router = useRouter();
  const [editedName, setEditedName] = useState<string>("");
  const [modal, setModal] = useState<Modal>("");
  const [modalUserName, setModalUserName] = useState<string>("");
  const [permissionID, setPermissionID] = useState<string>("");
  const [globalPermission, setGlobalPermission] = useState<string[]>([]);
  const { setOrganizationId } = useAuth() as AuthContext;
  const [selectEventForPermission, setSelectEventForPermission] =
    useState<Event | null>(null);
  const [organizationImage, setOrganizationImage] = useState<string>("");

  const id: string | any = params.id;

  // async function handleOrganizationTeam() {
  //   const res2 = await fetch(
  //     "${process.env.NEXT_PUBLIC_URL}/api/v1/permission/getOrganiztionUsers",
  //     {
  //       method: "POST",
  //       mode: "cors",
  //       body: JSON.stringify({ id: params.id }),
  //     }
  //   );

  //   const finalResponse2 = await res2.json();
  //   return finalResponse2;
  // }

  const [eventPermission, setEventPermission] = useState<EventPermission[]>([]);
  useEffect(
    function () {
      async function getData() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/getOrganization`,
            {
              method: "POST",
              mode: "cors",
              body: JSON.stringify(params.id),
            }
          );

          if (!res.ok) {
            router.push("/404");
            return;
          }

          const finalResponse = await res.json();

          if (finalResponse.message === "No organization") {
            router.push("/404");
          }

          setEditedName(finalResponse.organization.organizationName || "");
          setOrganization(finalResponse.organization);
          setOrganizationImage(finalResponse.organization.postImageLink || "");

          setIsActive(finalResponse.organization.isActive);

          // get users in organization
          const res2 = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/v1/permission/getOrganiztionUsers`,
            {
              method: "POST",
              mode: "cors",
              body: JSON.stringify({ id: params.id }),
            }
          );

          const finalResponse2 = await res2.json();

          const team = finalResponse2.filter(
            (user: Team) =>
              user.userData.email !== finalResponse.organization.email
          );

          setTeam(team);
          setOrganizationId(params.id);
          // get events in organization
          const res3 = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/getOrganizationEvent`,
            {
              method: "POST",
              mode: "cors",
              body: JSON.stringify(params.id),
            }
          );

          const finalResponse3 = await res3.json();
          setEvents(finalResponse3);

          setIsLoading(false);
        } catch (error) {
          router.push("/404");
          notFound();
        }
      }

      getData();
    },
    [params.id, router, setOrganizationId]
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
        ticketSold,
        status,
        handleDashboard,
        handleMyEvent,
        handleMyTeam,
        handleReport,
        organization,
        editedName,
        setEditedName,
        modal,
        setModal,
        team,
        setTeam,
        modalUserName,
        setModalUserName,
        permissionID,
        setPermissionID,
        globalPermission,
        setGlobalPermission,
        setEvents,
        selectEventForPermission,
        setSelectEventForPermission,
        eventPermission,
        setEventPermission,
        id,
        organizationImage,
        setOrganizationImage,
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
