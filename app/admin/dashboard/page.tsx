import React from "react";
import { AdminContextProvider } from "./AdminContextFile";
import AdminDashboard from "./components/AdminDashboard";

export default function page() {
  return (
    <>
      <AdminContextProvider>
        <AdminDashboard />
      </AdminContextProvider>
    </>
  );
}

