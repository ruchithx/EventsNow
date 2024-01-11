"use client";

import BestEvent from "./About/components/BestEvent";

import Upcoming_Events from "@/components/Upcoming_Events";
export default function Home() {
  return (
   
      <div className='mt-1 md:mt-4  gap-4 grid  md:grid-cols-3  place-items-center   justify-center items-center -mt-20 xl:mt-1 overflow-hidden'>
        <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />
      <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />
      <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />
      </div>
      
    
  );
}
