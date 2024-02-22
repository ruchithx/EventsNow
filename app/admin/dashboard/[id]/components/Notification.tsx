import React from "react";
import SuperadminPages from "./SuperadminPages";
import Org_RequestHandle from "./Org_RequestHandle";
import { Organization } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
import EmptyStateComponent from "@/components/EmptyStateComponent";

interface notificationProps {
  notification: Organization[];
}

export default function Notification() {
  const { notification } = useAdmin() as notificationProps;
  console.log(notification);

  return (
    <>
      <SuperadminPages
        title="All organization requests"
        description="You can see all the organizations that currently available from here"
        text="Search"
        customComponent={
          <>
            {notification.length === 0 ? (
              <EmptyStateComponent message="No Events" />
            ) : (
              notification.map((org) => (
                <Org_RequestHandle key={org._id} organization={org} />
              ))
            )}
          </>
        }
      />
    </>
  );
}
