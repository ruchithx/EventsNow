"use client";
import { useContext, createContext, useState, useEffect } from "react";

interface AuthContext {
  emailAuth: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const authContext = createContext<AuthContext | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [emailAuth, setEmail] = useState<string>("");

  useEffect(() => {
    const email: any = localStorage.getItem("email");
    setEmail(email);
  }, []);

  return (
    <authContext.Provider value={{ emailAuth, setEmail }}>
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
