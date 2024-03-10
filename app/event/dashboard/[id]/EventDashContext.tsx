"use client";
import { voidFunc } from "@/app/organization/dashboard/[id]/Type";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams, useRouter } from "next/navigation";
import { AuthContext, useAuth } from "@/app/AuthContext";
import { Post } from "../../host/[id]/components/PostTab";

export interface EventContextType {
  id: String;
  status: String;
  handleOverview: voidFunc;
  handleHostPage: voidFunc;
  handleMyteam: voidFunc;
  handleReports: voidFunc;
  handleCampaign: voidFunc;
  handleSetting: voidFunc;
  isSideBar: boolean;
  setIsSideBar: (value: boolean) => void;

  user: EventUserDeatils[];
  setStatus: Dispatch<SetStateAction<string>>;
  eventPosts: Post[];
  setEventPosts: Dispatch<SetStateAction<Post[]>>;
  allComment: Comment[];
  setAllComment: Dispatch<SetStateAction<Comment[]>>;

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

type EventUserDeatils = {
  email: string;
  name: string;
};
type Comment = {
  _id: string;
  userImage: string;
  postId: string;
  description: string;
};

const EventContext = createContext<EventContextType | string>("");

function EventContextProvider({ children }: { children: React.ReactNode }) {
  const { setEventPublish } = useAuth() as AuthContext;
  const [status, setStatus] = useState("settings");
  const params = useParams<{ id: string }>();
  const [isSideBar, setIsSideBar] = useState(true);

  const [eventPosts, setEventPosts] = useState<Post[]>([]);
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

  const [eventname, setEventname] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventStartTime, setEventStartTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
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
      setEventStartTime(event.startTime);
      setDuration(event.duration);
      setEndTime(event.endTime);

      setEventPublish(event.isPublished);

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

  const id = params.id;

  return (
    <EventContext.Provider
      value={{
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
