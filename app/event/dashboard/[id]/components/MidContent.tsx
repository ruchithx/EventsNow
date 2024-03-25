"use client";
import React, { useState } from "react";
import { UseEventContext, EventContextType } from "../EventDashContext";
import Overview from "./Overview";
import Campaign from "./Campaign";
import Settings from "./Settings";
import Hostpage from "./Hostpage";
import Myteam from "./Myteam";
import Reports from "./Reports";
import EditPost from "./EditPost";
import SendEmail from "./SendEmail";
import EventPreview from "./hostPage/EventPreview";
// import Template1 from "./hostPage/Template1";

export default function MidContent() {
  const { status, setStatus } = UseEventContext() as EventContextType;
  const [close, setClose] = useState(false);
  return (
    <div>
      {status === "overview" && <Overview />}
      {status === "hostpage" && <Hostpage />}
      {status === "myteam" && <Myteam />}
      {status === "reports" && <Reports />}
      {status === "campaign" && <Campaign />}
      {status === "settings" && <Settings />}
      {status === "editpost" && <EditPost />}
      {status === "sendemail" && <SendEmail />}
      {status === "preview" && <EventPreview setStatus={setStatus} />}
    </div>
  );
}
