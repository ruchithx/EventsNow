import React from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Superadminevents from "./Superadminevent";

export default function Event() {
  return (
    <div>
      <SuperadminPages
        title="All Events"
        description="You can see all the events currently available from here."
        text="Search Events"
        customComponent={
          <>
            <Superadminevents
              EventName="Nadagama"
              image={"image 3.png"}
              Location="Matara"
              Date="12.05.2024"
              Time="23.00"
              Ratings={"2.45"}
            />
            <Superadminevents
              EventName="Nadagama"
              image={"image 3.png"}
              Location="Matara"
              Date="12.05.2024"
              Time="23.00"
              Ratings={"2.45"}
            />
          </>
        }
      />
    </div>
  );
}
