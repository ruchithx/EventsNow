"use client";
import { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext();

function AuthContextProvider({ children }) {
  const [emailAuth, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
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
