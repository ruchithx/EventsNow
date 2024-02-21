import React from "react";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { EventDashContext } from "./EventDashContext";


export default function page() {
  return (
    <div>
      <EventDashContext>
        <div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <SideBar />
            </div>
            <div className="col-span-3">{<Content />} </div>
          </div>
        </div>
      </EventDashContext>
    </div>
  );
}
