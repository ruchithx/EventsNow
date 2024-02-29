"use client";
import React from "react";

import { useProf } from "../ProfContext";

import MyProfile from "./MyProfile";
import Settings from "./Settings";
import Wishlist from "./wishlist";
import MyEvents from "./MyEvents";
import MyTickets from "./MyTickets";

export default function Content() {
  type ProfStatus =
    | "myProfile"
    | "myTickets"
    | "wishList"
    | "myEvents"
    | "setting";

  interface ContentProps {
    status: ProfStatus;
  }
  const { status } = useProf() as ContentProps;
  return (
    <div>
      {status === "myProfile" && <MyProfile />}
      {status === "myTickets" && <MyTickets />}
      {status === "wishList" && <Wishlist />}
      {status === "myEvents" && <MyEvents />}
      {status === "setting" && <Settings />}
    </div>
  );
}
