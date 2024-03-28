import React from "react";
import axios from "axios";
import { Organization } from "@/app/admin/Type";
import { useAdmin } from "../../AdminContextFile";
import { success } from "@/util/Toastify";
import { error } from "@/util/Toastify";

interface Data {
  organization: Organization;
}

type ContextData = {
  setOrganization: React.Dispatch<React.SetStateAction<Organization[]>>;
  setNotification: React.Dispatch<React.SetStateAction<Organization[]>>;
  notification: Organization[];
};

const AllowModalContent = ({ organization }: Data) => {
  const { setOrganization, setNotification, notification } =
    useAdmin() as ContextData;

  console.log(organization);

  const handleAllow = async () => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/updateOrganization/${organization._id}`,
        {
          isActive: true,
        }
      );

      if (res.status !== 200) {
        error("Failed to Allow the organization");
        return;
      }

      const newNotification = notification.filter(
        (org) => org._id !== organization._id
      );

      const sendEmailRes = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/organizationAproveEmail`,
        {
          email: organization.email,
          name: organization.organizationName,
        }
      );

      if (sendEmailRes.status !== 200) {
        error("Failed to send email to the organization");
        return;
      }

      success("Organization Allowed successfully");
      setNotification(newNotification);

      setOrganization((prev: Organization[]) => [...prev, organization]);
    } catch (error) {
      console.error("Error updating......", error);
    }
  };
  return (
    <div className="sm:flex sm:items-start mb-2 mt-6">
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <div className="mt-2 mb-4">
          <div className="flex flex-col">
            <div className="mb-4">
              This action will give all the rights in eventsNow to the
              organization ?
            </div>
            <div className="absolute right-4 bottom-4">
              <button
                onClick={handleAllow}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllowModalContent;
