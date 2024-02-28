import React, { useEffect, useState } from "react";
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
  // const [notification, setNotification] = useState<Organization[]>([]);
  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(
  //       // `api/v1/organization/getAllOrganization`,
  //       `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/getAllOrganization`,
  //       {
  //         cache: "no-store",
  //         headers: {
  //           "Cache-Control": "no-cache",
  //         },
  //       }
  //     );

  //     const data = await res.json();

  //     setNotification(data.organization);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <SuperadminPages
        title="All organization requests"
        description="Check organization requests and handle them."
        text="Search"
        customComponent={
          <>
            {notification.length === 0 ? (
              <EmptyStateComponent message="No Organization" />
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
