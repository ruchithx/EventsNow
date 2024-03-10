"use client";
// import { OrganizationProps } from "@/components/Navbar/NavBar";
// import { OrganizationProps } from "@/components/Navbar/NavBar";
import { useContext, createContext, useState, useEffect } from "react";
import { any } from "zod";
import { OrganizationProps } from "../components/Navbar/NavBar";

import React from "react";
export interface AuthContext {
  organizationId: string | null;
  setOrganizationId: React.Dispatch<React.SetStateAction<string>>;
  emailAuth: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  organization: OrganizationProps[];
  setOrganization: React.Dispatch<React.SetStateAction<OrganizationProps[]>>;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const authContext = createContext<AuthContext | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [organization, setOrganization] = useState<OrganizationProps[]>([]);
  const [emailAuth, setEmail] = useState<string>("");
  const [organizationId, setOrganizationId] = useState<string>("");

  useEffect(() => {
    const email: any = localStorage.getItem("email");
    setEmail(email);
  }, []);

  return (
    <authContext.Provider
      value={{
        emailAuth,
        setEmail,
        organization,
        setOrganization,
        organizationId,
        setOrganizationId,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);
  if (context === undefined)
    throw new Error("Authcontext was used outside the authProvider");
  return context;
}

export { AuthContextProvider, useAuth };
