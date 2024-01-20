"use client";

import NavBar from "@/components/NavBar";

import Org_RequestHandle from "@/components/Org_RequestHandle";
import ProfileSettings from "@/components/ProfileSettings";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";
import LinearIndeterminate from "@/components/Spinner";
import UpcomingEvents from "@/components/UpcomingEvents";


export default function Home() {
  return (
    <div>
      <UpcomingEvents
        EventName ="NADAGAMA "
        Location = "Anuradhapura"
        Time = "11.00pm"
        Date = "2024/12/3"
        Ratings = "4"
        image = "image 1.png"
        buttonDesc = "Info"
      />


    </div>
  );
}
