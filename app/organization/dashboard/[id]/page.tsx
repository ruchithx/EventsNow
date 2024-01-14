import React from "react";
import SideBar from "./components/SideBar";
import { OrgDashboardProvider } from "./OrgDashboardContext";
import Content from "./components/Content";

export default function page() {
  return (
    <OrgDashboardProvider>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-3">
          <Content />
        </div>
      </div>
    </OrgDashboardProvider>
  );
}
