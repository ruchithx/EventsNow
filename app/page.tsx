"use client";

import EventHost from "@/components/EventHost";
import NavBar from "@/components/NavBar";

import Org_RequestHandle from "@/components/Org_RequestHandle";
import ProfileSettings from "@/components/ProfileSettings";
import ProfileSideNavBar from "@/components/ProfileSideNavBar";
import LinearIndeterminate from "@/components/Spinner";
import Upcoming_Events from "@/components/Upcoming_Events";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ProfileSideNavBar />
    </div>
  );
}
