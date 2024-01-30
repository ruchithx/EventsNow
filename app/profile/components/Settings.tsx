"use client";
import react from "react";
import ProfileSettings from "../components/ProfileSettings";

export default function Settings() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 justify-start items-start gap-12">
      <div className="w-full ml-0">
        <div className="text-3xl font-semibold text-custom-orange font-IBM ml-[75px]">
          Settings
        </div>
        <div className="bg-white col-span-1 sm:col-span-2 lg:col-span-7 sm:block hidden mx-auto w-4/5">
          <ProfileSettings name={"First Name"} />
          <ProfileSettings name={"Last Name"} />
          <ProfileSettings name={"Email Address"} />
        </div>
      </div>
    </div>
  );
}
