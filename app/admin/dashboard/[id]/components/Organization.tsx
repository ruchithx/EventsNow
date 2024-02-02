import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Available_Orgs from "@/components/Available_Orgs";
interface UserData {
  _id: string;
  fullName: string;
}
async function getData() {
  const res = await fetch("http://localhost:3000/api/Organizations/Exist", {
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
    <div>
      <SuperadminPages
        title="All Organizations"
        description="You can see all the organizations that currently available from here"
        text="Search Organizations"
        customComponent={
          <>
            {data.map((me) => (
              <div key={me._id}>
                <Available_Orgs
                  OrgName={me.fullName}
                  image={"image 1.png"}
                  noOfEvents={"34"}
                  noOfMembers={"12"}
                />
              </div>
            ))}
          </>
        }
      />
    </div>
  );
}
