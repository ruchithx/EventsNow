"use client";
import { voidFunc } from "@/app/organization/dashboard/[id]/Type";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { get } from "http";

export interface EventContextType {
  status: String;
  handleOverview: voidFunc;
  handleHostPage: voidFunc;
  handleMyteam: voidFunc;
  handleReports: voidFunc;
  handleCampaign: voidFunc;
  handleSetting: voidFunc;
  isSideBar: boolean;
  setIsSideBar: (value: boolean) => void;
  eventname: String;
  eventLocation: String;
  eventType: String;
  eventDate: String;
  eventStartTime: String;
  duration: String;
  endTime: String;
  setEventname: (value: string) => void;
  setEventLocation: (value: string) => void;
  setEventType: (value: string) => void;
  setEventDate: (value: string) => void;
  setEventStartTime: (value: string) => void;
  setDuration: (value: string) => void;
  setEndTime: (value: string) => void;
}

const EventContext = createContext<EventContextType | string>("");

function EventContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState("settings");
  const [isSideBar, setIsSideBar] = useState(true);
  const [isloading, setIsloading] = useState(false);
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
  //setting tab
  const [eventname, setEventname] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventStartTime, setEventStartTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  //get id using params

  const { id }: string | any = useParams();
  const router = useRouter();

  useEffect(
    function () {
      async function getEventData() {
        setIsloading(true);
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getEvent`,
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(id),
          }
        );
        
        
        const finalResponse = await res.json();
        if (!res.ok || finalResponse.message === "No event") {
          router.push("/404");
          return;
        }
        if (!finalResponse.event) {
          return;
        }
        
        setEventname(finalResponse.event.eventName );
        setEventLocation(finalResponse.event.eventLocation );
        setEventType(finalResponse.event.selectedTab );
        setEventDate(finalResponse.event.eventStartDate);
        setEventStartTime(finalResponse.event.startTime );
        setDuration(finalResponse.event.duration );
        setEndTime(finalResponse.event.endTime );

        setIsloading(false);
      }
      getEventData();
    },
    [id, router]
  );

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
        isSideBar,
        setIsSideBar,
        eventname,
        eventLocation,
        eventType,
        eventDate,
        eventStartTime,
        duration,
        endTime,
        setEventname,
        setEventLocation,
        setEventType,
        setEventDate,
        setEventStartTime,
        setDuration,
        setEndTime,
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
