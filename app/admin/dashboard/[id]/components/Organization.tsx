import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Available_Orgs from "@/app/admin/dashboard/[id]/components/Available_Orgs";
import { Organization } from "@/app/organization/dashboard/[id]/Type";

async function getData() {
  const res = await fetch(
    "http://localhost:3000/api/v1/organization/approvedOrganization",
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
    <div>
      <SuperadminPages
        title="All Organizations"
        description="You can see all the organizations that currently available from here"
        text="Search Organizations"
        customComponent={
          <>
            {data.map((me) => (
              <div key={me._id}>
                <Available_Orgs organization={me} />
              </div>
            ))}
          </>
        }
      />
    </div>
  );
}
