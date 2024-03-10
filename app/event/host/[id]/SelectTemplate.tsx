"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Template from "./template1/Template1";

export type Event = {
  _id: string;
  eventName: string;
  selectedTab: string;
  eventStartDate: string;
  startTime: string;
  duration: string;
  eventTimeZone: string;
  description: string;
  postImageLink: string;
  organizationId: string;
  __v: 0;
  template: string;
  isPublished: boolean;
  registerUser: [string];
};

export type Post = {
  _id: string;
  userImage: string;
  userName: string;
  description: string;
  image: string;
  like: number;
  likeBy: any;
  eventId: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
};

export default function SelectTemplate({ event }: { event: Event }) {
  return (
    <div>{event.template === "template1" && <Template event={event} />}</div>
  );
}
