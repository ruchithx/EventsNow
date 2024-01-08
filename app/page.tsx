"use client";
import NavBar from "@/components/NavBar";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";

import Upcoming_Events from "@/components/Upcoming_Events";
export default function Home() {
  return (
    <div>
      <NavBar />
      <ProfileSideNavBar />
      <Upcoming_Events
        EventName="Nadagama"
        image={"image 1.png"}
        Location="Matara"
        Date="12.05.2024"
        Time="23.00"
        Ratings={"2.45"}
        buttonDesc={"Info"}
      />
    </div>
  );
}
