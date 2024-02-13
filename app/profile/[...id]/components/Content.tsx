"use client";
import React from "react";

import { useProf } from "../ProfContext";
import ProfileDetails from "@/app/profile/[...id]/components/ProfileDetails";
import Upcoming_Events from "@/components/Upcoming_Events";
import Org_RequestHandle from "@/app/profile/[...id]/components/Org_RequestHandle";
import MyProfile from "./MyProfile";
import Settings from "./Settings";
import Wishlist from "./wishlist";
import MyEvents from "./MyEvents";

export default function Content() {
  const { status } = useProf();
  return (
    <div>
      {status === "myProfile" && <MyProfile />}
      {status === "myTickets"}
      {status === "wishList" && <Wishlist />}
      {status === "myEvents" && <MyEvents />}
      {status === "setting" && <Settings />}
    </div>
  );
}
