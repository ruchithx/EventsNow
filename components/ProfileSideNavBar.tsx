"use client";
import React, { useState } from "react";
import ProfileCard from "../app/profile/components/ProfileCard";
import ProfileBar from "./ProfileBar";
import ProfileDetails from "../app/profile/components/ProfileDetails";
import Event_Dashboard_Nav_bar from "../app/organization/dashboard/[id]/components/DashboardSide";
import Event_Dashboard_Btn from "../app/organization/dashboard/[id]/components/Dashboard_Btn";
import { text } from "stream/consumers";
import Upcoming_Events from "./Upcoming_Events";
// import ProfileSettings from "./ProfileSettings";
import Org_RequestHandle from "../app/admin/dashboard/[id]/components/Org_RequestHandle";
import ProfileSettings from "@/app/profile/components/ProfileSettings";

export default function ProfileSideNavBar() {
  const [content, setContent] = useState("My profile");

  const handleOvervier = (content: React.SetStateAction<string>) => {
    setContent(content);
  };

  const btn = [
    "My profile",
    "Wish list",
    "My events",
    "My tickets ",
    "Settings",
  ];

  // const details = ["First Name", "Last Name", "Email address"];
  // const detailsNew = details.map((dtl) => {
  //   return <ProfileDetails key={dtl} name={dtl} />;
  // });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 font-khand h-screen    ">
        <div className="hidden sm:block bg-custom-blue p-4 col-span-1 sm:col-span-2 lg:col-span-2  h-screen">
          <div className="grid grid-rows-5 grid-flow-col gap-4 justify-center items-center  ">
            {/* <Event_Dashboard_Nav_bar>
              {btn.map((buttonText, index) => (
                <Event_Dashboard_Btn
                  key={index}
                  onClick={() => handleOvervier(buttonText)}
                  text={buttonText}
                />
              ))}
            </Event_Dashboard_Nav_bar> */}
          </div>
        </div>

        <div className="bg-white p-4 col-span-1 sm:col-span-2 lg:col-span-7 sm:block hidden">
          <p className="text-2xl text-custom-blue mt-12 font-bold">{content}</p>

          {content === "My profile" && (
            <>
              <ProfileDetails key="First Name" name="First Name" />
              <ProfileDetails key="Last Name" name="Last Name" />
              <ProfileDetails key="Email address" name="Email address" />
            </>
          )}
          {content === "Wish list" && (
            <>
              <Upcoming_Events
                EventName={"nadagama"}
                Location={"Colombo"}
                Time={"10.00"}
                Date={"02/04/2024"}
                Ratings={"4.5"}
                image={"././profile.jpg"}
                buttonDesc={"Arka"}
              />
            </>
          )}
          {content === "Settings" && (
            <>
              <>
                <ProfileSettings name={"First Name"} />
                <ProfileSettings name={"Last Name"} />
                <ProfileSettings name={"Email Address"} />
              </>
            </>
          )}
          {content === "My events" && (
            <>
              <Org_RequestHandle OrgName={"Amna"} image={"././image 1.png"} />
            </>
          )}
        </div>

        <div className="bg-custom-blue p-4 col-span-1 sm:col-span-2 lg:col-span-3   items-center justify-center">
          <div className="h-4 bg-white w-fit p-5 rounded-md flex items-center justify-center">
            <svg
              className="mr-2"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18H13.5C14.8978 18 15.5967 18 16.1481 17.7716C16.8831 17.4672 17.4672 16.8831 17.7716 16.1481C18 15.5967 18 14.8978 18 13.5V9C18 4.02944 13.9706 0 9 0ZM9 13.0002C8.44772 13.0002 8 12.5525 8 12.0002V10H6C5.44772 10 5 9.55228 5 9C5 8.44771 5.44772 8 6 8H8V6.00024C8 5.44795 8.44771 5.00024 9 5.00024C9.55228 5.00024 10 5.44795 10 6.00024V8H12C12.5523 8 13 8.44771 13 9C13 9.55228 12.5523 10 12 10H10V12.0002C10 12.5525 9.55228 13.0002 9 13.0002Z"
                fill="#4E5381"
              />
            </svg>
            <p className="text-center text-custom-blue font-medium">
              Host an Event
            </p>
          </div>
          <ProfileCard
            profilePic="./image 3.png"
            name="Ashan Dilsara"
            accountType="Organization Account "
            email="ashandilsara8@gmail.com"
          />
        </div>
      </div>
    </>
  );
}
