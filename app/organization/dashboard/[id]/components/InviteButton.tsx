import React, { useState } from "react";
import Image from "next/image";
import { OrgContext } from "../Type";
import { useOrg } from "../OrgContext";
import { error, success } from "@/util/Toastify";

export default function InviteButton() {
  const { organization, isSlideBar } = useOrg() as OrgContext;
  const [email, setEmail] = useState<string>("");

  async function handleclick() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/inviteTeamMember`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          organizationId: organization?._id,
        }),
      }
    );

    const data = await res.json();

    if (data === "No User  exists") {
      error("No User  exists in the system");
    }
    if (data === "Email sent successfully") {
      success("Invitation sent successfully");
    }
  }

  return (
    <div className="flex gap-10 ">
      <div
        className={`flex flex-row border-2 border-gray-400 bg-white rounded-lg ${
          isSlideBar ? "md:w-48" : "md:w-72 "
        } sm:w-48 w-40   h-10`}
      >
        <Image
          src="/images/reusableComponents/Search (1).svg"
          width={20}
          height={14}
          alt="search"
          className="bg-white ms-2"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder={"Search by email"}
          className="flex-1 focus:outline-none rounded-lg text-xs ms-2 "
        />
      </div>
      <button
        className={`bg-custom-orange p-1 w-20 rounded-2xl`}
        onClick={handleclick}
      >
        <div className="flex button text-white text-sm font-bold justify-center">
          Invite
        </div>
      </button>
    </div>
  );
}
