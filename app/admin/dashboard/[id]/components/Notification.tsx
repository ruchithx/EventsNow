import React, { useState, useEffect } from "react";
import SuperadminPages from "./SuperadminPages";
import Org_RequestHandle from "./Org_RequestHandle";
import { Organization } from "@/app/organization/dashboard/[id]/Type";

async function getData() {
  const res = await fetch(
    "http://localhost:3000/api/v1/organization/requestOrganization",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  return res.json();
}

export default function Notification() {
  const [data, setData] = useState<Organization[]>([]);

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
                  organization={org}
                  image={"PictureOfaSinger.png"}
                />
              </div>
            ))}
          </>
        }
      />
    </>
  );
}
