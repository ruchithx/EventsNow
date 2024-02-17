"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  AdminContext,
  voidFunc,
  Event,
  User,
  Organization,
} from "@/app/admin/Type";

interface AdminContextProps {
  children: React.ReactNode;
  organization: Organization;
}

const adminContext = createContext<AdminContext | string>("");

function AdminContextProvider({ children }: AdminContextProps) {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState<User[]>([]);
  const [event, setEvent] = useState<Event[]>([]);
  const [notification, setNotification] = useState<Organization[]>([]);
  const [organization, setOrganization] = useState<Organization[]>([]);
  const [payment, setPayment] = useState<any[]>([]);

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
  async function getData() {
    const res = await fetch("http://localhost:3000/api/v1/user/getAllUser", {
      next: {
        revalidate: 30,
      },
    });
    const finalRes = await res.json();

    setUser(finalRes);

    const res2 = await fetch(
      "http://localhost:3000/api/v1/event/getAllEvents",
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const finalRes1 = await res2.json();
    setEvent(finalRes1);

    const res3 = await fetch(
      "http://localhost:3000/api/v1/organization/getAllOrganization",
      {
        next: {
          revalidate: 30,
        },
      }
    );

    const resActive = organization.find((org) => org.isActive);
    const notActive = organization.find((org) => !org.isActive);

    if (resActive) {
      const finalRes2 = resActive;
      // setOrganization(finalRes2);
    } else if (notActive) {
      const finalRes3 = notActive;
      // setNotification(finalRes3);
    }

    // const res3 = await fetch(
    //   "http://localhost:3000/api/v1/organization/requestOrganization",
    //   {
    //     next: {
    //       revalidate: 30,
    //     },
    //   }
    // );
    // const finalRes2 = await res3.json();
    // setNotification(finalRes2);

    // const res4 = await fetch(
    //   "http://localhost:3000/api/v1/organization/approvedOrganization",
    //   {
    //     next: {
    //       revalidate: 30,
    //     },
    //   }
    // );
    // const finalRes3 = await res4.json();
    // setOrganization(finalRes3);
  }
  useEffect(() => {
    getData();
  }, []);

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
