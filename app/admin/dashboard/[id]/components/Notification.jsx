import React, { useState, useEffect } from "react";
import SuperadminPages from "@/components/SuperadminPages";
import Org_RequestHandle from "@/components/Org_RequestHandle";

async function getData() {
  const res = await fetch("http://localhost:3000/api/Organizations/requested", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default function Notification() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);
  const allow = async (fullName) => {
    try {
      // Make an API request to update the database
      await axios.put("http://localhost:3000/api/Organizations/exist", {
        fullName: fullName,
      });

      // Update the state to trigger a re-render without the organization card
      setData((prevData) =>
        prevData.filter((org) => org.fullName !== fullName)
      );

      // Handle any UI updates or feedback as needed
    } catch (error) {
      console.error("Error updating database:", error);
      // Handle errors or provide user feedback
    }
  };

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
                  allow={() => allow(org.fullName)}
                />
              </div>
            ))}
          </>
        }
      />
    </>
  );
}
