import React from "react";
import Footer from "@/components/Footer";
import EventCardDisabled from "@/components/EventCardDisabled";
import { formatDate } from "@/util/helper";
// import EventCardDisabled from "@/components/EventCardDisabled";

// import EventViewMode from "../components/EventViewMode";
// import { Event } from "./admin/Type";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/event/outdatedEvents`,
      {}
    );
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// import HeroSection from "@/components/HeroSection";
// import { formatDate } from "@/util/helper";

export default async function Home() {
  const data = await getData();
  return (
    <div>
      {/* <HeroSection />

      <EventViewMode />
      <div className="font-bold text-[30px] md:text-[40px] lg:text-[60px] text-[#906953] drop-shadow-lg ms-8">
        Outdated Events
      </div>
  */}

      <div className="flex flex-wrap ms-12">
        {data.map((e: any) => (
          <EventCardDisabled
            key={e._id}
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
