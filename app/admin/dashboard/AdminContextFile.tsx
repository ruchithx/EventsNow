"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  use,
} from "react";
import {
  Event,
  User,
  AdminContext,
  voidFunc,
  Organization,
} from "@/app/admin/Type";
import { getAllEvents, getAllOrganization, getAllUser } from "./FetchData";
import { getSession, useSession } from "next-auth/react";
import { getUser } from "@/components/Navbar/NavBar";
import { useRouter } from "next/navigation";

interface AdminContextProps {
  children: React.ReactNode;
}

const adminContext = createContext<AdminContext | string>("");

function AdminContextProvider({ children }: AdminContextProps) {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState<User[]>([]);
  const [event, setEvent] = useState<Event[]>([]);
  const [notification, setNotification] = useState<Organization[]>([]);
  const [organization, setOrganization] = useState<Organization[]>([]);
  const [payment, setPayment] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const handleNotification: voidFunc = () => {
    setStatus("Notification");
  };
  const handleOrganization: voidFunc = () => {
    setStatus("Organization");
  };
  const handleEvent: voidFunc = () => {
    setStatus("Event");
  };
  const handleUser: voidFunc = () => {
    setStatus("User");
  };
  const handlePayments: voidFunc = () => {
    setStatus("Payments");
  };

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const session = await getSession();
      if (!session) {
        router.push("/404");
      }

      const data = await getUser({ email: session?.user?.email });

      if (data.role !== "admin") {
        router.push("/404");
      }

      // const res3 = await fetch(
      //   // `api/v1/organization/getAllOrganization`,
      //   `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/getAllOrganization`,
      //   {
      //     next: {
      //       revalidate: 30,
      //     },
      //   }
      // );

      const res3 = await getAllOrganization();

      if (!res3.ok) {
        setIsLoading(false);
        return;
      }

      const { organization } = await res3.json();

      const resActive = organization.filter(
        (org: Organization) => org.isActive
      );
      const notActive = organization.filter(
        (org: Organization) => !org.isActive
      );

      if (resActive.length !== 0) {
        setOrganization(resActive);
      }
      if (notActive.length !== 0) {
        setNotification(notActive);
      }

      // const res = await fetch(
      //   // `api/v1/user/getAllUser`
      //   `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getAllUser`
      // );

      const res = await getAllUser();

      if (!res.ok) {
        setIsLoading(false);
        return;
      }

      const finalRes = await res.json();

      setUser(finalRes);

      const res2 = await getAllEvents();

      if (!res2.ok) {
        setIsLoading(false);
        return;
      }

      const finalRes1 = await res2.json();

      setEvent(finalRes1);

      setIsLoading(false);
    }
    getData();
  }, [router]);

  return (
    <adminContext.Provider
      value={{
        status,
        handleNotification,
        handleOrganization,
        handleEvent,
        handleUser,
        handlePayments,
        notification,
        organization,
        event,
        user,
        payment,
        setNotification,
        setOrganization,
        setEvent,
        setUser,
        setPayment,
        isLoading,
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
