import React from "react";
import Footer from "@/components/Footer";
import EventCardDisabled from "@/components/EventCardDisabled";
import { formatDate } from "@/util/helper";
import EventViewMode from "@/components/EventViewMode";
import HeroSection from "@/components/HeroSection";
// import EventCardDisabled from "@/components/EventCardDisabled";

// import EventViewMode from "../components/EventViewMode";
// import { Event } from "./admin/Type";

export interface EventType {
  _id: string;
  eventName: string;
  selectedTab: string;
  eventLocation: string;
  eventStartDate: string;
  startTime: string;
  duration: string;
  eventTimeZone: string;
  description: string;
  postImageLink: string;
  organizationId: [string];
  isPublished: boolean;
  registerUser: [string];
  dashboardImage: string;
  __v: number;
}

async function getOutDateEvent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/outdatedEvents`,
      { next: { revalidate: 10 } }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getEvent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getPublishedEvents`,
      { next: { revalidate: 10 } }
    );
    const event = await response.json();

    return event;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// import HeroSection from "@/components/HeroSection";
// import { formatDate } from "@/util/helper";

export default async function Home() {
  const data = await getOutDateEvent();
  const event = await getEvent();
  return (
    <div>
      <HeroSection />

      <EventViewMode event={event} />
      {data.length !== 0 && (
        <div className="font-bold text-[30px] md:text-[40px] lg:text-5xl text-[#906953] drop-shadow-lg ms-8">
          Outdated Events
        </div>
      )}

      <div className="flex flex-wrap ms-12">
        {data.map((e: any) => (
          <EventCardDisabled
            key={e._id}
            name={e.eventName}
            img={e.dashboardImage}
            location={e.selectedTab}
            date={formatDate(e.eventStartDate)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
