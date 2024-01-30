"use client";
import React from "react";
import Dashboard from "./Dashboard";
import Report from "./Report";
import MyTeam from "./MyTeam";
import MyEvents from "./MyEvents";
import { useOrg } from "../OrgContext";
import Setting from "./Setting";

export default function Content() {
  const { status } = useOrg();
  return (
    <div>
      {status === "dashboard" && <Dashboard />}
      {status === "report" && <Report />}
      {status === "myTeam" && <MyTeam />}
      {status === "myEvents" && <MyEvents />}
      {status === "setting" && <Setting />}
    </div>
  );
}
