"use client";
import { da } from "date-fns/locale";
import { useParams, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProfContext = createContext<ProfContext | string>("");

type VoidFunc = () => void;

export interface ProfContext {
  lname: string;
  fname: string;
  isLoading: boolean;
  isSlideBar: boolean;
  isDashboardOpen: boolean;
  setIsSlideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDashboardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setLname: React.Dispatch<React.SetStateAction<string>>;
  setFname: React.Dispatch<React.SetStateAction<string>>;
  passwordExists: boolean;
  userId: any;

  status: string;
  handleSetting: VoidFunc;
  handleProfile: VoidFunc;
  handleWishList: VoidFunc;
  handleMyEvents: VoidFunc;
  handlemyTickets: VoidFunc;
  setUserDeatails: React.Dispatch<React.SetStateAction<UserDetails>>;
  userDeatails: UserDetails;
  eventDetails: any;
  register: any;
  userImage: string;
  setUserImage: React.Dispatch<React.SetStateAction<string>>;
  registerEvent: RegisterEventType[];
}
interface ProfContextProviderProps {
  children: React.ReactNode;
}
export type UserDetails = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  __v: Number;
};

export type RegisterEventType = {
  _id: string;
  eventName: string;
  postImageLink: string;
};

function ProfContextProvider({ children }: ProfContextProviderProps) {
  const [status, setStatus] = useState("myProfile");
  const [isActive, setIsActive] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSlideBar, setIsSlideBar] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [passwordExists, setPasswordExists] = useState<boolean>(false);
  const [userDeatails, setUserDeatails] = useState<UserDetails>({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    __v: 0,
  });
  const [eventDetails, setEventDetails] = useState<any>();
  const [register, setRegister] = useState<any>([]);
  const [userImage, setUserImage] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const params = useParams();
  const router = useRouter();
  const userId = params.id;

  const [registerEvent, setRegisterEvent] = useState<RegisterEventType[]>([]);

  const handleProfile: VoidFunc = () => {
    setStatus("myProfile");
    setIsDashboardOpen(false);
  };
  const handleWishList: VoidFunc = () => {
    setStatus("wishList");
    setIsDashboardOpen(false);
  };
  const handleMyEvents: VoidFunc = () => {
    setStatus("myEvents");
    setIsDashboardOpen(false);
  };
  const handlemyTickets: VoidFunc = () => {
    setStatus("myTickets");
    setIsDashboardOpen(false);
  };
  const handleSetting: VoidFunc = () => {
    setStatus("setting");
    setIsDashboardOpen(false);
  };
  useEffect(
    function () {
      async function getData() {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getOneUserById`,
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(params.id),
          }
        );

        if (!res.ok) {
          // router.push("/404");
          setIsLoading(false);

          return;
        }
        const finalResponse = await res.json();

        setUserDeatails(finalResponse);
        setUserImage(finalResponse.image);
        setFname(finalResponse.firstName);
        setLname(finalResponse.lastName);
        if (finalResponse.password) {
          setPasswordExists(true);
        }

        setIsLoading(false);
      }
      async function getWishList() {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getWishList/${params.id}`
        );

        if (!res.ok) {
          // router.push("/404");
          setIsLoading(false);

          return;
        }
        const finalrespone = await res.json();
        setEventDetails(finalrespone);
      }
      async function getRegisterdUser() {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getRegisteredUser/${params.id}`
        );

        if (!res.ok) {
          setIsLoading(false);

          return;
        }
        const finalrespone = await res.json();
        if (finalrespone.length > 0) {
          setRegister(finalrespone);
        }
      }
      async function getManageEvents() {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/userManageEvent/${params.id}`
        );
        if (!res.ok) {
          setIsLoading(false);
          return;
        }
        const data = await res.json();

        setRegisterEvent(data);
      }
      getData();
      getWishList();
      getRegisterdUser();
      getManageEvents();
    },

    [params.id]
  );

  return (
    <ProfContext.Provider
      value={{
        registerEvent,
        handleSetting,
        isSlideBar,
        setIsSlideBar,
        isDashboardOpen,
        setIsDashboardOpen,
        setIsActive,
        isActive,
        isLoading,
        fname,
        lname,
        userId,
        userImage,
        setUserImage,
        status,
        handleProfile,
        handleWishList,
        handleMyEvents,
        handlemyTickets,
        setUserDeatails,
        userDeatails,
        eventDetails,
        register,
        setLname,
        setFname,
        passwordExists,
      }}
    >
      {children}
    </ProfContext.Provider>
  );
}

function useProf() {
  const context = useContext(ProfContext);
  if (context === undefined)
    throw new Error("Organization context was used outside the orgProvider");
  return context;
}
export { ProfContextProvider, useProf };
