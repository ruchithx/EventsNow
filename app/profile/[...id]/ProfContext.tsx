"use client";
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

  status: string;
  handleSetting: VoidFunc;
  handleProfile: VoidFunc;
  handleWishList: VoidFunc;
  handleMyEvents: VoidFunc;
  handlemyTickets: VoidFunc;
  setUserDeatails: React.Dispatch<React.SetStateAction<UserDetails>>;
  userDeatails: UserDetails;
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

function ProfContextProvider({ children }: ProfContextProviderProps) {
  const [status, setStatus] = useState("myProfile");
  const [isActive, setIsActive] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSlideBar, setIsSlideBar] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userDeatails, setUserDeatails] = useState<UserDetails>({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    __v: 0,
  });
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const params = useParams();
  const router = useRouter();

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
          "http://localhost:3000/api/v1/user/getOneUserById",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(params.id),
          }
        );

        if (!res.ok) {
          // router.push("/404");
          return;
        }
        const finalResponse = await res.json();
        console.log("Testtttttttt");
        console.log(finalResponse);
        setUserDeatails(finalResponse);
        setFname(finalResponse.firstName);
        setLname(finalResponse.lastName);
        setIsLoading(false);
      }
      getData();
    },

    [params.id]
  );

  return (
    <ProfContext.Provider
      value={{
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

        status,
        handleProfile,
        handleWishList,
        handleMyEvents,
        handlemyTickets,
        setUserDeatails,
        userDeatails,
        setLname,
        setFname,
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
