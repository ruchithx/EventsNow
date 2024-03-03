"use client";
import React from "react";
import SideBar from "./SideBar";
import MidContent from "./MidContent";
import { UseEventContext, EventContextType } from "../EventDashContext";

export default function MainComponent() {
  const { isSideBar } = UseEventContext() as EventContextType;

  return (
    <div>
      <div className="grid grid-cols-12 gap-5 md:gap-2 lg:gap-2 xl:gap-5 mt-5 px-2">
        <div
          className={` md:block hidden ${
            isSideBar
              ? "md:col-span-3 md:ml-2  col-span-4 lg:col-span-2 "
              : "md:col-span-1   "
          }`}
        >
          <SideBar />
        </div>
        <div
          className={`lg:col-span-7 col-span-12  ${
            isSideBar ? "md:col-span-6 " : "md:col-span-8 "
          }`}
        >
          <MidContent />
        </div>
        <div
          className={`lg:col-span-3 md:block hidden
             ${isSideBar ? "md:col-span-3 md:mr-2 " : "md:col-span-3  "}`}
        >
          right hand side component
        </div>
      </div>
    </div>
  );
}
