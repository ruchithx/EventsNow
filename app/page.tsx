"use client";

import EventHost from "@/components/EventHost";
import NavBar from "@/components/NavBar";

import Org_RequestHandle from "@/components/Org_RequestHandle";
import ProfileSettings from "@/components/ProfileSettings";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";
import LinearIndeterminate from "@/components/Spinner";
import Upcoming_Events from "@/components/Upcoming_Events";
import UpcomingEvents from "@/components/UpcomingEvents"

export default function Home() {
  return (
    <div>
      <NavBar />
      <ProfileSideNavBar />
      {/* <UpcomingEvents
      EventName = "NADAGAMA"
      Location = "Anjradhapura"
      Time =" 12"
      Date="32/587/3"
      Ratings = "3"
      image = "image 1.png"
      buttonDesc = "info"
      /> */}
    </div>
  );
}
