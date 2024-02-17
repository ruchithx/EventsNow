import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/[id]/components/SuperadminPages";
import Available_Orgs from "@/app/admin/dashboard/[id]/components/Available_Orgs";
import { Organization } from "@/app/organization/dashboard/[id]/Type";
import { useAdmin } from "../AdminContextFile";

interface orgProps {
  organization: Organization[];
}

export default function Notification() {
  const { organization } = useAdmin() as orgProps;
  return (
    <div>
      <SuperadminPages
        title="All Organizations"
        description="You can see all the organizations that currently available from here"
        text="Search Organizations"
        customComponent={
          <>
            {organization.map((me) => (
              <Available_Orgs key={me._id} organization={me} />
            ))}
          </>
        }
      />
    </div>
  );
}
