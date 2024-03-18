"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Template from "./template1/Template1";
import { EventType } from "@/app/Type";

// export type Event = {
//   _id: string;
//   eventName: string;
//   selectedTab: string;

//   startTime: string;
//   duration: string;
//   eventTimeZone: string;
//   description: string;
//   postImageLink: string;
//   organizationId: string;
//   eventEndDate: string;
//   __v: 0;
//   template: string;
//   endTime: string;
//   isPublished: boolean;
//   registerUser: [string];
//   dashboardImage: string;
//   coverImage: string;
//   eventStartDate: string;
// };

export default function SelectTemplate({ event }: { event: EventType }) {
  return (
    <div>{event.template === "template1" && <Template event={event} />}</div>
  );
}
