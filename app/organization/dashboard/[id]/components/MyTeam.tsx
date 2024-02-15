import InviteButton from "@/components/InviteButton";
import PersonDetailsBar from "@/components/PersonDetailsBar";
import React from "react";
import { useOrg } from "../OrgContext";

import EmptyStateComponent from "@/components/EmptyStateComponent";

export default function MyTeam() {
  // const { team } = useOrg();
  return (
    <div className="flex pl-5 rounded-lg  shadow-3xl  md:ml-2 bg-[#fff] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="flex flex-col gap-3 justify-start items-start">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          MY TEAM
        </div>
        <div className="text-base text-[#848484] font-normal">
          Invite your team, Streamline your organization works
        </div>
      </div>
      <div>
        <InviteButton />
      </div>
      <div className="w-full border-[1px] border-black"></div>
      <div className=" mb-5 w-full 2xl:w-3/5 xl:w-3/4 flex flex-col gap-4 justify-start md:px-6 px-0 items-start  rounded-xl">
        {/* {team.length === 0 ? (
          <EmptyStateComponent message="No user in the organization" />
        ) : (
          <> */}
        <PersonDetailsBar
          name="ruchith"
          email="ruchithsamarawickrama.sg@gmail.com"
        />
        <PersonDetailsBar
          name="ruchith"
          email="ruchithsamarawickrama.sg@gmail.com"
        />{" "}
        <PersonDetailsBar
          name="ruchith"
          email="ruchithsamarawickrama.sg@gmail.com"
        />
        <PersonDetailsBar
          name="ruchith"
          email="ruchithsamarawickrama.sg@gmail.com"
        />{" "}
        <PersonDetailsBar
          name="ruchith"
          email="ruchithsamarawickrama.sg@gmail.com"
        />
        <PersonDetailsBar
          name="ruchith"
          email="ruchithsamarawickrama.sg@gmail.com"
        />
        {/* </>
        )} */}
      </div>
    </div>
  );
}
