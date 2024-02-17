import React, { useState, useEffect } from "react";
import SuperadminPages from "./SuperadminPages";
import Org_RequestHandle from "./Org_RequestHandle";
import { Organization } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";

interface notificationProps {
  organization: Organization[];
}

export default function Notification() {
  const { organization } = useAdmin() as notificationProps;

  return (
    <>
      <SuperadminPages
        title="All organization requests"
        description="You can see all the organizations that currently available from here"
        text="Search"
        customComponent={
          <>
            {organization.map((org) => (
              <Org_RequestHandle key={org._id} organization={org} />
            ))}
          </>
        }
      />
    </>
  );
}
