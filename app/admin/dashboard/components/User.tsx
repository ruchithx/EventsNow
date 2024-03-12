import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/components/SuperadminPages";
import AdminPersonDetailsBar from "./AdminPersonalDetailBar";
import { AdminContext, User } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
import { getAllUser } from "../FetchData";
import Spinner from "@/components/Spinner";

export default function Notification() {
  const { user, setUser } = useAdmin() as AdminContext;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function reloadPage() {
    setIsLoading(true);

    const res = await getAllUser();

    if (!res.ok) {
      setIsLoading(false);
      return;
    }

    const finalRes = await res.json();

    setUser(finalRes);
    setIsLoading(false);
  }

  return (
    <>
      <SuperadminPages
        title="All Users"
        description="You can see all the users that currently available from here"
        text="Search Users"
        reloadPage={reloadPage}
        customComponent={
          <>
            {isLoading ? (
              <Spinner />
            ) : user.length > 0 ? (
              user.map((use) => (
                <AdminPersonDetailsBar
                  key={use._id}
                  name={use.firstName}
                  email={use.email}
                  userId={use._id}
                  role={use.role}
                  setUser={setUser}
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
