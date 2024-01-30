import React from "react";
import { ProfContextProvider } from "./ProfContext";
import CheckActive from "./components/CheckActive";

export default function page() {
  return (
    <div className="py-5 ">
      <ProfContextProvider>
        <CheckActive />
      </ProfContextProvider>
      {/* <CheckActive /> */}
    </div>
  );
}
