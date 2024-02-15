import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Organization } from "@/app/organization/dashboard/[id]/Type";

interface Data {
  organization: Organization;
}

const DetailsModalContent = ({ organization }: Data) => {
  return (
    <div className="sm:flex sm:items-start mb-2">
      <div className="mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 ">
        <Image
          src={`/images/Admin/PictureOfaSinger.png`}
          alt="image2"
          width={249.64}
          height={126}
          className="w-auto h-auto rounded-full ms-4"
        />
      </div>

      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          className="text-lg leading-6 font-medium text-gray-900 flex justify-center mb-4"
          id="modal-headline"
        >
          {organization.fullName}
        </h3>
        <div className="mt-2 mb-4">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="text-sm font-bold text-black">Address :</div>
              <p className="text-sm text-gray-500">{organization.address}</p>
            </div>
            <div className="flex flex-row">
              <div className="text-sm font-bold text-black">phoneNumber :</div>
              <p className="text-sm text-gray-500">
                {organization.phoneNumber}
              </p>
            </div>
            <div className="flex flex-row">
              <div className="text-sm font-bold text-black">email :</div>
              <p className="text-sm text-gray-500">{organization.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModalContent;
