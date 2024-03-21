"use client";
import React from "react";

import { useProf } from "../ProfContext";

import MyProfile from "./MyProfile";
import Settings from "./Settings";
import Wishlist from "./wishlist";
import MyEvents from "./MyEvents";
import MyTickets from "./MyTickets";
import { ProfContext } from "@/app/Type";

export default function Content() {
  const { status } = useProf() as ProfContext;
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
