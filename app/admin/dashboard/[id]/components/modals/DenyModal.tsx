import React from "react";
import axios from "axios";
import { Organization } from "@/app/organization/dashboard/[id]/Type";
import { success } from "@/util/Toastify";
import { useAdmin } from "../../AdminContextFile";

interface DenyModalProps {
  organization: Organization;
}
type ContextData = {
  setNotification: React.Dispatch<React.SetStateAction<Organization[]>>;
  setOrganization: React.Dispatch<React.SetStateAction<Organization[]>>;
  notification: Organization[];
};
const DenyModalContent = ({ organization }: DenyModalProps) => {
  const { setOrganization, setNotification, notification } =
    useAdmin() as ContextData;
  const handleDeny = async () => {
    try {
      await axios.put(
        `/api/v1/organization/denyOrganization/${organization._id}`,
        {
          isActive: false,
        }
      );

      const updatedNotifications = [...notification, organization];
      success("Organization Denied successfully");
      setNotification(updatedNotifications);
      setOrganization((prev: Organization[]) =>
        prev.filter((org) => org._id !== organization._id)
      );
    } catch (error) {
      console.error("Error updating organization:", error);
    }
  };

  return (
    <div className="sm:flex sm:items-start mb-2 ">
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <div className="mt-2 mb-4">
          <div className="flex flex-col">
            <div className="mb-4">Are you sure you want to deny request ?</div>
            <div className="absolute right-4 bottom-4">
              <button
                onClick={handleDeny}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenyModalContent;
