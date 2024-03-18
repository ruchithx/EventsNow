import Image from "next/image";
import React, { memo } from "react";
import { useOrg } from "../OrgContext";
import { OrgContext } from "@/app/Type";
// import { Event, Organization, Team, User } from "../Type";

// interface contextProps {
//   organization: Organization;
//   editedName: string;
//   team: Team[];
//   events: Event[];
// }

const DashboardDetails = memo(function DashboardDetails() {
  const { organization, editedName, team, events } = useOrg() as OrgContext;

  return (
    <div>
      <div className="bg-[#D9D9D9] rounded-lg items-center  h-full py-3 px-4 flex flex-col  ">
        <div className="flex flex-col items-start gap-3 justify-start">
          <Image
            src={`${organization.postImageLink}`}
            alt="organization dp"
            width={226}
            className="rounded-lg"
            height={300}
          />
          <div className="md:text-lg lg:text-2xl  gap-2   items-center  flex text-[#353535]">
            {editedName}
          </div>
          <div className="md:text-base lg:text-base flex justify-center items-center  gap-2">
            <Image
              src="/images/organization/TeamOfUsers.svg"
              alt="user count"
              width={30}
              height={30}
            />
            User Count - {team.length}
          </div>
          <div className="md:text-base lg:text-base flex justify-center items-center gap-3">
            <Image
              src="/images/organization/Bookmark_light.svg"
              alt="user count"
              width={26}
              height={26}
            />
            Event Count - {events.length}
          </div>
        </div>
      </div>
    </div>
  );
});

// export default function DashboardDetails() {}
export default DashboardDetails;
