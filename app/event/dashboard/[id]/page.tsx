import React from "react";
import { EventContextProvider } from "./EventDashContext";
import SideBar from "./components/SideBar";
import Container from "./components/Container";

export default function Page() {
  return (
    <EventContextProvider>
      <div className="grid grid-cols-12 gap-5 md:gap-2 lg:gap-2 xl:gap-5 mt-5 mx-2">
        <div className=" col-span-2">
          <SideBar />
        </div>
        <div className=" col-span-7">
          
          middle part
        </div>
        <div className=" ">
          right hand side component
        </div>
      </div>
    </EventContextProvider>
  );
}
