import React from "react";
import ProfileDetails from "../components/ProfileDetails";

export default function MyProfile() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 justify-start items-start gap-12">
      <div className="w-full ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[75px]">
          My Profile
        </div>
        <div className="bg-white col-span-1 sm:col-span-2 lg:col-span-7 sm:block hidden mx-auto w-4/5">
          <ProfileDetails key="First Name" name="First Name" />
          <ProfileDetails key="Last Name" name="Last Name" />
          <ProfileDetails key="Email address" name="Email address" />
        </div>
      </div>
    </div>
  );
}
