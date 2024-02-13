"use client";
import { OrganizationProps } from "@/components/Navbar/NavBar";
import { useContext, createContext, useState, useEffect } from "react";
import { any } from "zod";

interface AuthContext {
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

  console.log(organization);

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
