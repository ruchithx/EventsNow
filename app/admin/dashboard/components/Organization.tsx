import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/components/SuperadminPages";
import Available_Orgs from "@/app/admin/dashboard/components/Available_Orgs";
import { Organization } from "@/app/organization/dashboard/[id]/Type";
import { useAdmin } from "../AdminContextFile";
import EmptyStateComponent from "@/components/EmptyStateComponent";

interface orgProps {
  organization: Organization[];
}

export default function Organization() {
  const { organization } = useAdmin() as orgProps;
  console.log(organization);
  return (
    <div>
      <SuperadminPages
        title="All Organizations"
        description="You can see all the organizations that currently available from here"
        text="Search Organizations"
        customComponent={
          <>
            {organization.length === 0 ? (
              <EmptyStateComponent message="No Events" />
            ) : (
              organization.map((me) => (
                <Available_Orgs key={me._id} organization={me} />
              ))
            )}
          </>
        }
      />
    </div>
  );
}
