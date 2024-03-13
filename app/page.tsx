import React from "react";

import EventCardDisabled from "@/components/EventCardDisabled";

import EventViewMode from "../components/EventViewMode";
import { Event } from "./admin/Type";

async function getData(): Promise<Event[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/event/outdatedEvents`,
    {
      method: "GET",
      mode: "cors",
    }
  );
  const data = await response.json();
  return data;
}

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { formatDate } from "@/util/helper";

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <HeroSection />

      <EventViewMode />
      <div className="font-bold text-[30px] md:text-[40px] lg:text-[60px] text-[#906953] drop-shadow-lg ms-8">
        Outdated Events
      </div>

      <div className="flex flex-wrap ms-12">
        {data.map((e, index) => (
          <EventCardDisabled
            key={index}
            name={e.eventName}
            img={e.postImageLink}
            location={e.selectedTab}
            date={formatDate(e.eventStartDate)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
