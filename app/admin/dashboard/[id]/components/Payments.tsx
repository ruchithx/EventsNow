import React from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Superadminevents from "./Superadminevent";

export default function Payments() {
  return (
    <div>
      <SuperadminPages
        title="Payments Page"
        description="You can get all the details about payments from here"
        text="Search Payments"
        customComponent={
          <Superadminevents
            EventName="Nadagama"
            image={"image 3.png"}
            Location="Matara"
            Date="12.05.2024"
            Time="23.00"
            Ratings={"2.45"}
          />
        }
      />
    </div>
  );
}
