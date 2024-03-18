import React from "react";
import ProfileDetails from "./ProfileDetails";
import { useProf } from "../ProfContext";
import { ProfContext } from "@/app/Type";

export default function MyProfile() {
  const { userDeatails } = useProf() as ProfContext;
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl p-0  bg-[#fff] pt-8  justify-start items-start ">
      <div className="w-full ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[55px]">
          My Profile
        </div>
        <div className="bg-white col-span-1 p-0 sm:col-span-2 lg:col-span-7 sm:block  mx-auto w-4/5">
          <ProfileDetails
            key="First Name"
            name="First Name"
            data={userDeatails.firstName}
          />
          <ProfileDetails
            key="Last Name"
            name="Last Name"
            data={userDeatails.lastName}
          />
          <ProfileDetails
            key="Email address"
            name="Email address"
            data={userDeatails.email}
          />
        </div>
      </div>
    </div>
  );
}
