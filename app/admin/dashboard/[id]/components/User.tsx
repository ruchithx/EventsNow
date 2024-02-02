import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import AdminPersonDetailsBar from "./AdminPersonalDetailBar";
interface UserData {
  _id: string;
  firstName: string;
  email: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/Users", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default function Notification() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <SuperadminPages
        title="All Users"
        description="You can see all the users that currently available from here"
        text="Search Users"
        customComponent={
          <>
            {data.length > 0 ? (
              data.map((user) => (
                <div key={user._id}>
                  <AdminPersonDetailsBar
                    name={user.firstName}
                    email={user.email}
                  />
                </div>
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
