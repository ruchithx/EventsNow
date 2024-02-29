import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/components/SuperadminPages";
import { AdminContext, Event } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
import Upcoming_Events from "./Superadminevent";
import EmptyStateComponent from "@/components/EmptyStateComponent";
import Spinner from "@/components/Spinner";
import { getAllEvents } from "../FetchData";

export default function Event() {
  const { event, setEvent } = useAdmin() as AdminContext;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function reloadPage() {
    setIsLoading(true);

    const res2 = await getAllEvents();

    if (!res2.ok) {
      setIsLoading(false);
      return;
    }

    const finalRes1 = await res2.json();

    setEvent(finalRes1);
    setIsLoading(false);
  }

  return (
    <div>
      <SuperadminPages
        title="All Events"
        description="You can see all the events currently available from here."
        text="Search Events"
        reloadPage={reloadPage}
        customComponent={
          <>
            {isLoading ? (
              <Spinner />
            ) : event.length === 0 ? (
              <EmptyStateComponent message="No Events" />
            ) : (
              event.map((e) => <Upcoming_Events key={e._id} event={e} />)
            )}
            {}
          </>
        }
      />
    </div>
  );
}
