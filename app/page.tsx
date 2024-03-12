import React from "react";
import Footer from "@/components/Footer";
import EventCardDisabled from "@/components/EventCardDisabled";
import EventViewMode from "./Components";
//getevent functoion, api(data gnna ispublish bll),

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
];
const disablearr = [
  {
    name: "ladagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
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
    name: "ladagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
    time: "12:00 PM",
  },
  {
    name: "ladagama",
    img: "images/event/UpcomingEvent.png",
    location: "Matara",
    date: "2024/12/5",
    time: "12:00 PM",
  },
];

export default function Home() {
  return (
    <div>
      <EventViewMode />
      <div className="font-bold text-[60px] text-[#906953] drop-shadow-lg ms-8">
        Outdated Events
      </div>
      <div className="flex flex-wrap ms-12">
        {disablearr.map((event, index) => (
          <EventCardDisabled
            key={index}
            name={event.name}
            img={event.img}
            location={event.location}
            date={event.date}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
