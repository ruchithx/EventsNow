import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Superadminevents from "./Superadminevent";

interface EventData {
  _id: string;
  eventName: string;
  startTime: String;
  eventStartDate: String;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/v1/event/getAllEvents", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default function Event() {
  const [data, setData] = useState<EventData[]>([]);

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
        title="All Events"
        description="You can see all the events currently available from here."
        text="Search Events"
        customComponent={
          <>
            {/* {data.map((event) => (
              <div key={event._id}>
                <Superadminevents
                  EventName={event.eventName}
                  image={"PictureOfGitarist.png"}
                  Location="Matara"
                  Date={event.eventStartDate}
                  Time={event.startTime}
                  Ratings={"2.45"}
                />
              </div>
            ))} */}
            <Superadminevents
              EventName={"nadagama"}
              image={"PictureOfGitarist.png"}
              Location="Matara"
              Date={"2021-09-12"}
              Time={"12:00"}
              Ratings={"2.45"}
            />
          </>
        }
      />
    </div>
  );
}
