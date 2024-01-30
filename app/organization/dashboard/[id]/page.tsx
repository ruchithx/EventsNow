import React from "react";

import CheckActive from "./components/CheckActive";
import { OrgContextProvider } from "./OrgContext";

export default function page() {
  return (
    <div className="py-5 ">
      <OrgContextProvider>
        <CheckActive />
      </OrgContextProvider>
    </div>
  );
}
