import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import { Event } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
import Upcoming_Events from "./Superadminevent";
import EmptyStateComponent from "@/components/EmptyStateComponent";

interface EventData {
  event: Event[];
}

export default function Event() {
  const { event } = useAdmin() as EventData;
  console.log(event);
  return (
    <div>
      <SuperadminPages
        title="All Events"
        description="You can see all the events currently available from here."
        text="Search Events"
        customComponent={
          <>
            {event.length === 0 ? (
              <EmptyStateComponent message="No Events" />
            ) : (
              event.map((e) => <Upcoming_Events key={e._id} event={e} />)
            )}
          </>
        }
      />
    </div>
  );
}
