import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Superadminevents from "./Superadminevent";
import { Event } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";

interface EventData {
  event: Event[];
}

export default function Event() {
  const events = useAdmin() as EventData;

  return (
    <div>
      <SuperadminPages
        title="All Events"
        description="You can see all the events currently available from here."
        text="Search Events"
        customComponent={
          <>
            {/* {events.map((event) => (
             
                <Superadminevents
                key={event._id}
                  EventName={event.eventName}
                  image={"PictureOfGitarist.png"}
                  Location="Matara"
                  Date={event.eventStartDate}
                  Time={event.startTime}
                  Ratings={"2.45"}
                />
           
            ))} */}
          </>
        }
      />
    </div>
  );
}
