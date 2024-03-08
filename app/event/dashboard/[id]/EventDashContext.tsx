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
  const router = useRouter();

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

  const eventPost = async () => {
    const res = await fetch(`/api/v1/post/getAllPostEvent/${params.id}`);
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    async function handleContext() {
      const event = await getEvent();
      if (event.message === "No event") {
        router.push("/404");
        return;
      }
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
  }, []);

  return (
    <EventContext.Provider
      value={{
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
