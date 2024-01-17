import React from "react";
import SideBar from "./components/SideBar";

import Content from "./components/Content";
import { OrgContextProvider } from "./OrgContext";

export default function page() {
  return (
    <>
      <OrgContextProvider>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="col-span-3">{<Content />} </div>
        </div>
      </OrgContextProvider>
    </>
  );
}
