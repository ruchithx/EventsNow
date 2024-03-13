import React from "react";
import Footer from "@/components/Footer";
import EventCardDisabled from "@/components/EventCardDisabled";

import EventViewMode from "./Components";
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

export default async function Home() {
  const data = await getData();
  return (
    <div>
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
            date={e.eventStartDate}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
