"use client";
import BestEvent from "@/components/BestEvent";
import NavBar from "@/components/NavBar";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";
export default function Home() {
  return (
    <div>
      {/* <NavBar />
      <ProfileSideNavBar /> */}

      <BestEvent 
        img="bestevent.png"
        eventname={"MEGA"}
        year={"2021"}
        description={"Darani, an extraordinary event, was held with unmatched grandeur and elegance. This remarkable gathering celebrated the fusion of culture and creativity, creating an unforgettable experience for all attendees. From captivating performances to delectable cuisine, Darani left a lasting impression on every guest. It was a momentous journey, where the vibrancy of tradition blended seamlessly with modernity. The event's success is a testament to the "}
      />

    </div>
  );
}
