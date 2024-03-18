import React, { useState, useEffect } from "react";
import SuperadminPages from "@/app/admin/dashboard/components/SuperadminPages";
import Available_Orgs from "@/app/admin/dashboard/components/Available_Orgs";
// import { Organization } from "@/app/admin/Type";
import { useAdmin } from "../AdminContextFile";
import EmptyStateComponent from "@/components/EmptyStateComponent";
// import { AdminContext } from "../../Type";
import { getAllOrganization } from "../FetchData";
import Spinner from "@/components/Spinner";
import { MdRefresh } from "react-icons/md";
import { AdminContext, OrganizationType } from "@/app/Type";

export default function Organization() {
  const { organization, setOrganization, setNotification } =
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
    <div>
      <SuperadminPages
        title="All Organizations"
        description="You can see all the organizations that currently available from here"
        text="Search Organizations"
        reloadPage={reloadPage}
        customComponent={
          <>
            {isLoading ? (
              <Spinner />
            ) : organization.length === 0 ? (
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
