import React from "react";
import Image from "next/image";
import { Organization } from "@/app/admin/Type";

interface Data {
  organization: Organization;
}

const DetailsModalContent = ({ organization }: Data) => {
  return (
    <div className="flex flex-col h-72 overflow-y-auto px-8 py-8">
      <div className="flex justify-center">
        <Image
          src={organization.postImageLink}
          alt={organization.organizationName}
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col space-y-4 ml-8 mt-4 ">
        <div className="flex flex-col space-y-1">
          {" "}
          <h2>Organization Name </h2>
          <div className="font-underlined border-b border-gray-400 text-gray-300">
            {" "}
            {organization.organizationName}
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          {" "}
          <h2>Phone number</h2>
          <div className="font-underlined border-b border-gray-400 text-gray-300">
            {" "}
            {organization.phoneNumber}
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          {" "}
          <h2>Address</h2>
          <div className="font-underlined border-b border-gray-400 text-gray-300 max-w-48 overflow-ellipsis overflow-hidden">
            {" "}
            {organization.address}
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          {" "}
          <h2>Company Name</h2>
          <div className="font-underlined border-b border-gray-400 text-gray-300">
            {" "}
            {organization.companyName}
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          {" "}
          <h2>Founded</h2>
          <div className="font-underlined border-b border-gray-400 text-gray-300">
            {" "}
            {organization.fullName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModalContent;
