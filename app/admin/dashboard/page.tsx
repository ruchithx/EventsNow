import React from "react";
import { AdminContextProvider } from "./AdminContextFile";
import AdminDashboard from "./components/AdminDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin dashboard | EventsNow",
  description: "This is the admin dashboard page",
};

export default function page() {
  return (
    <>
      <AdminContextProvider>
        <AdminDashboard />
      </AdminContextProvider>
    </>
  );
}
