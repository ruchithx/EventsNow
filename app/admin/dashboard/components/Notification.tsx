import React, { useEffect, useState } from "react";
import SuperadminPages from "./SuperadminPages";
import Org_RequestHandle from "./Org_RequestHandle";
// import { AdminContext, Organization } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
import EmptyStateComponent from "@/components/EmptyStateComponent";
import { MdRefresh } from "react-icons/md";
import Spinner from "@/components/Spinner";
import { getAllOrganization } from "../FetchData";
import { AdminContext, OrganizationType } from "@/app/Type";

export default function Notification() {
  const { notification, setOrganization, setNotification } =
    useAdmin() as AdminContext;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function reloadPage() {
    setIsLoading(true);

    const res3 = await getAllOrganization();

    if (!res3.ok) {
      setIsLoading(false);
      return;
    }

    const { organization } = await res3.json();

    const resActive = organization.filter(
      (org: OrganizationType) => org.isActive
    );
    const notActive = organization.filter(
      (org: OrganizationType) => !org.isActive
    );

    if (resActive.length !== 0) {
      setOrganization(resActive);
    }
    if (notActive.length !== 0) {
      setNotification(notActive);
    }
    setIsLoading(false);
  }

  return (
    <>
      <SuperadminPages
        title="All organization requests"
        description="Check organization requests and handle them."
        text="Search"
        reloadPage={reloadPage}
        customComponent={
          <>
            {isLoading ? (
              <Spinner />
            ) : notification.length === 0 ? (
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
