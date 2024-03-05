import React from "react";
import { EventContextProvider } from "./EventDashContext";

import MainComponent from "./components/MainComponent";

export default function Page() {
  return (
    <EventContextProvider>
      <MainComponent />
    </EventContextProvider>
  );
}
