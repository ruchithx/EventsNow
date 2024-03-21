"use client";
import React from "react";

import ProfCard from "./ProfCard";
import { useOrg } from "../OrgContext";
// import { Event, Organization, Team } from "../Type";
import { OrgContext } from "@/app/Type";
// import ProfileCard from "@/app/profile/[...id]/components/ProfileCard";

// interface contextProps {
//   editedName: string;
//   team: Team[];
//   events: Event[];
//   organization: Organization;
//   organizationImage: string;
// }

export default function Profile() {
  const { editedName, team, events, organizationImage } =
    useOrg() as OrgContext;

  return (
    <div className=" lg:p-3 p-0 h-fit w-fit items-center justify-center rounded-xl shadow-3xl bg-custom-lightorange">
      <div className="p-2">
        <div className="p-2  bg-white w-fit rounded-md flex items-center justify-center whitespace-nowrap">
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
              fill="#D47151"
            />
          </svg>
          <p className="lg:text-base text-sm text-center  text-custom-orange font-medium">
            Organization Profile
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ProfCard
          profilePic={organizationImage}
          name={editedName}
          teamCount={team.length}
          eventCount={events.length}
        />
      </div>
    </div>
  );
}
