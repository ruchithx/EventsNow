"use client";
// import { voidFunc } from "@/app/organization/dashboard/[id]/Type";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthContext";
// import { Post } from "../../host/[id]/components/PostTab";

// import { Post } from "../../host/[id]/SelectTemplate";
import {
  AuthContext,
  Comment,
  EventContextType,
  EventUserDeatils,
  PostType,
  voidFunc,
} from "@/app/Type";

// export interface EventContextType {
//   id: String;
//   status: String;
//   handleOverview: voidFunc;
//   handleHostPage: voidFunc;
//   handleMyteam: voidFunc;
//   handleReports: voidFunc;
//   handleCampaign: voidFunc;
//   handleSetting: voidFunc;
//   isSideBar: boolean;
//   setIsSideBar: (value: boolean) => void;

//   user: EventUserDeatils[];
//   setStatus: Dispatch<SetStateAction<string>>;
//   eventPosts: Post[];
//   setEventPosts: Dispatch<SetStateAction<Post[]>>;
//   allComment: Comment[];
//   setAllComment: Dispatch<SetStateAction<Comment[]>>;

//   eventname: String;
//   eventLocation: String;
//   eventType: String;
//   eventDate: String;
//   eventStartTime: String;

//   endTime: String;
//   eventVisibility: boolean;

//   setEventname: (value: string) => void;
//   setEventLocation: (value: string) => void;
//   setEventType: (value: string) => void;
//   setEventDate: (value: string) => void;
//   setEventStartTime: (value: string) => void;

//   setEndTime: (value: string) => void;
//   setEventVisibility: (value: boolean) => void;

//   eventDashboardImage: string;
//   eventCoverImage: string;
//   eventEndTime: string;
//   startTime: string;

//   setEventEndDate: React.Dispatch<React.SetStateAction<string>>;
//   eventEndDate: string;

//   setEventDashboardImage: React.Dispatch<React.SetStateAction<string>>;
//   setEventCoverImage: React.Dispatch<React.SetStateAction<string>>;
// }

const EventContext = createContext<EventContextType | string>("");

function EventContextProvider({ children }: { children: React.ReactNode }) {
  const { setEventPublish } = useAuth() as AuthContext;
  const [status, setStatus] = useState("overview");
  const params = useParams<{ id: string }>();
  const [isSideBar, setIsSideBar] = useState(true);

  const [eventPosts, setEventPosts] = useState<PostType[]>([]);
  const [allComment, setAllComment] = useState<Comment[]>([]);

  const [isloading, setIsloading] = useState(false);

  const handleOverview: voidFunc = () => {
    setStatus("overview");
  };
  const [user, setUser] = useState<EventUserDeatils[]>([]);
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
  const id = useParams<{ id: string }>().id;
  const [eventname, setEventname] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventEndDate, setEventEndDate] = useState<string>("");
  const [eventStartTime, setEventStartTime] = useState<string>("");
  const [eventEndTime, setEventEndTime] = useState<string>("");

  const [endTime, setEndTime] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [eventVisibility, setEventVisibility] = useState<boolean>(false);
  const [eventCoverImage, setEventCoverImage] = useState<string>("");
  const [eventDashboardImage, setEventDashboardImage] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const getEvent = async () => {
      const res = await fetch(`/api/v1/event/getOneEvent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: params.id,
        }),
      });
      if (!res.ok) {
        router.push("/404");
        return;
      }
      const data = await res.json();
      return data;
    };

    const eventPost = async () => {
      const res = await fetch(`/api/v1/post/getAllPostEvent/${params.id}`);
      if (!res.ok) {
        return;
      }
      const data = await res.json();
      return data;
    };

    const getUser = async () => {
      const res = await fetch(`/api/v1/event/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: params.id,
        }),
      });
      if (!res.ok) {
        return;
      }
      const data = await res.json();

      return data;
    };

    async function handleContext() {
      const event = await getEvent();
      if (event.message === "No event") {
        router.push("/404");
        return;
      }
      setEventname(event.eventName);
      setEventLocation(event.eventLocation);
      setEventType(event.selectedTab);
      setEventDate(event.eventStartDate);
      setEventEndDate(event.eventEndDate);
      setEventStartTime(event.startTime);

      setEndTime(event.endTime);
      // setStartTime(event.startTime);
      setEventPublish(event.isPublished);
      setEventVisibility(event.isPublished);
      setEventCoverImage(event.coverImage);
      setEventDashboardImage(event.dashboardImage);
      setEventEndTime(event.eventEndDate);

      const user = await getUser();
      if (!user) {
        return;
      }
      setUser(user);

      const posts = await eventPost();
      setEventPosts(posts);
    }
    handleContext();
  }, [params.id, router, setEventPublish, status]);

  return (
    <EventContext.Provider
      value={{
        setEventEndDate,
        eventEndDate,

        id,
        status,
        user,
        handleOverview,
        handleHostPage,
        handleMyteam,
        handleReports,
        handleCampaign,
        handleSetting,
        isSideBar,
        setIsSideBar,

        setStatus,
        eventPosts,
        setEventPosts,
        allComment,
        setAllComment,

        eventname,
        eventLocation,
        eventType,
        eventDate,
        eventStartTime,

        endTime,
        eventVisibility,
        eventEndTime,
        startTime,

        eventDashboardImage,
        eventCoverImage,

        setEventname,
        setEventLocation,
        setEventType,
        setEventDate,
        setEventStartTime,

        setEndTime,
        setEventVisibility,

        setEventDashboardImage,
        setEventCoverImage,
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
