import React from "react";
import Footer from "@/components/Footer";
import EventCardDisabled from "@/components/EventCardDisabled";

import EventViewMode from "./Components";

// const getEvent = async ({ id }: any) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getPublishedEvents`,
//     { method: "GET" }
//   );
//   const data = await res.json();
//   return data;
// };
async function getData({ id }: any) {
  console.log(process.env.NEXT_PUBLIC_URL);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getPublishedEvents`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export const initialEventArr = [
  {
    name: "Nadagama",
    img: "images/event/UpcomingEvent.png",
    location: "akuressa",
    date: "2024/02/12",
    time: "12:00 PM",
  },
  {
    name: "sadagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/11/12",
    time: "12:00 PM",
  },
  {
    name: "aadagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/10",
    time: "12:00 PM",
  },
  {
    name: "hadagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
    time: "12:00 PM",
  },
  {
    name: "oadagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/9",
    time: "12:00 PM",
  },
  {
    name: "radagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/4",
    time: "12:00 PM",
  },
  {
    name: "wadagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/1",
    time: "12:00 PM",
  },
  {
    name: "ladagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
    time: "12:00 PM",
  },
  {
    name: "Sandwani",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
    time: "12:00 PM",
  },
  {
    name: "Mayasi gee saraniya",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
    time: "12:00 PM",
  },
];

export default async function Home({ params }: any) {
  const data = await getData(params);
  return (
    <div>
      <EventViewMode />
      <div className="font-bold text-[60px] text-[#906953] drop-shadow-lg ms-8">
        Outdated Events
      </div>
      {data.map((e: any) => (
        <EventCardDisabled
          key={e._id}
          name={e.name}
          img={e.img}
          location={e.location}
          date={e.date}
        />
      ))}
      <div className="flex flex-wrap ms-12"></div>
      <Footer />
    </div>
  );
}
