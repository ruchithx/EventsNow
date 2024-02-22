"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import ProfCard from "./ProfCard";
import { UserDetails, useProf } from "../ProfContext";
type Details = {
  userDeatails: UserDetails;
  fname: string;
  lname: string;
};
export default function profile() {
  const { userDeatails, fname, lname } = useProf() as Details;

  return (
    <div className=" p-4 xl:col-span-3 col-span-1 sm:col-span-2  h-fit w-fit items-center justify-center rounded-xl shadow-3xl bg-custom-lightorange">
      <ProfCard
        profilePic="./image 3.png"
        name={`${fname} ${lname}`}
        email={userDeatails.email}
      />
    </div>
  );
}
