"use client";
import { error, success } from "@/util/Toastify";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const router = useSearchParams();
  const organizationId = router.get("organizationId");
  const userId = router.get("userId");

  useEffect(() => {
    async function createOrganizer() {
      if (!organizationId || !userId) {
        return;
      }
      const res = await fetch(
        "http://localhost:3000/api/v1/permission/createOrganizer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            organizationId,
            userId,
            globalPermission: [],
          }),
        }
      );
      const data = await res.json();
      if (data.message === "success to create organizer") {
        success("success to create organizer");
      }
      if (data.message === "User already exists in the organization") {
        error("User already exists in the organization");
      }
    }

    // Check if the code is running in a browser environment
    createOrganizer();
  }, [organizationId, userId]); // Include the missing dependencies 'organizationId' and 'userId' in the dependency array.

  return (
    <div className=" flex flex-col">
      <h1>You have add to the organization team </h1>
      <Link href="/">
        <button className="button w-1/5   bg-custom-orange">
          {" "}
          Click ,go to the EventNow
        </button>{" "}
      </Link>
    </div>
  );
}
