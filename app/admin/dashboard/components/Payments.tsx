import React from "react";
import SuperadminPages from "@/app/admin/dashboard/components/SuperadminPages";
import Superadminevents from "./Superadminevent";

export default function Payments() {
  return (
    <div>
      <SuperadminPages
        title="Payments Page"
        description="You can get all the details about payments from here"
        text="Search Payments"
        customComponent={""}
      />
    </div>
  );
}
