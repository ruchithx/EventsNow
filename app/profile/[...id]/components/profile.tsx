"use client";
import React from "react";

import ProfCard from "./ProfCard";
import { UserDetails, useProf } from "../ProfContext";
type Details = {
  userDeatails: UserDetails;
  fname: string;
  lname: string;
};
export default function Profile() {
  const { userDeatails, fname, lname } = useProf() as Details;
  console.log(userDeatails);

  return (
    <div className=" p-4 xl:col-span-3 col-span-1 sm:col-span-2  h-fit w-fit items-center justify-center rounded-xl shadow-3xl bg-custom-lightorange">
      <ProfCard
        profilePic={userDeatails.image}
        name={`${fname} ${lname}`}
        email={userDeatails.email}
      />
    </div>
  );
}
