"use client";
import React from "react";
import Dashboard from "./Dashboard";
// import MyEvents from "@/app/organization/dashboard/[id]/components/MyEvents";
import { useEvent } from "../EventDashContext";
import MyEvent from "./MyEvent";

export default function Content() {
  const { status } = useEvent();
  return (
    <div>
      {status === "dashboard" && <Dashboard />}
      {status === "myevent" && <MyEvent />}
    </div>
  );
}
