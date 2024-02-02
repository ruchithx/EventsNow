import React, { useState, useEffect } from "react";
import SuperadminPages from "./SuperadminPages";
import Org_RequestHandle from "./Org_RequestHandle";
interface UserData {
  _id: string;
  fullName: string;
}
async function getData() {
  const res = await fetch("http://localhost:3000/api/Organizations/requested", {
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
        title="All organization requests"
        description="You can see all the organizations that currently available from here"
        text="Search"
        customComponent={
          <>
            {data.map((org) => (
              <div key={org._id}>
                <Org_RequestHandle
                  OrgName={org.fullName}
                  image={"image 1.png"}
                />
              </div>
            ))}
          </>
        }
      />
    </>
  );
}
