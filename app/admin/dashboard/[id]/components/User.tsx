import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import AdminPersonDetailsBar from "./AdminPersonalDetailBar";
import { User } from "@/app/admin/Type";
interface UserData {
  user: User;
}

export default function Notification({ user }: UserData) {
  return (
    <>
      <SuperadminPages
        title="All Users"
        description="You can see all the users that currently available from here"
        text="Search Users"
        customComponent={
          <>
            {AdminPersonDetailsBar && (
              <AdminPersonDetailsBar
                name={user.firstName}
                email={user.email}
                user={user}
              />
            )}
          </>
        }
      />
    </>
  );
}
