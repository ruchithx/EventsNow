import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import AdminPersonDetailsBar from "./AdminPersonalDetailBar";
import { User } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
interface userProps {
  user: User[];
}

export default function Notification() {
  const { user } = useAdmin() as userProps;

  return (
    <>
      <SuperadminPages
        title="All Users"
        description="You can see all the users that currently available from here"
        text="Search Users"
        customComponent={
          <>
            {user.length > 0 ? (
              user.map((use) => (
                <AdminPersonDetailsBar
                  key={use._id}
                  name={use.firstName}
                  email={use.email}
                />
              ))
            ) : (
              <p>No users available.</p>
            )}
          </>
        }
      />
    </>
  );
}
