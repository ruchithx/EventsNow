"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Organization } from "@/app/organization/dashboard/[id]/Type";
import Modal from "./ModalContext";
import DetailsModalContent from "@/app/admin/dashboard/components/modals/DetailsModal";
import DenyModalContent from "./modals/DenyModal";

interface Available_Orgs {
  organization: Organization;
}

export default function Available_Orgs({ organization }: Available_Orgs) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);
  const value =
    organization.fullName.length > 10
      ? "w-[250px] md:w-[250px] lg:w-[720px]"
      : "lg:w-[720px] w-72 md:w-[250px]";
  return (
    <div>
      <div
        className={`grid grid-cols-1 lg:grid-cols-11 md:grid-cols-1  sm:m-6  ${value} h-auto md:h-auto lg:h-32 rounded-lg bg-[#D9D9D9] mt-6 ms-10 lg:ms-0 md:ms-20 shadow-3xl`}
      >
        <div className="col-span-full lg:col-span-3 md:col-span-full overflow-hidden  rounded-lg ">
          <Image
            src={organization.postImageLink}
            alt="compo4"
            width={249.65}
            height={126}
            className="sm:h-32 h-auto"
          />
        </div>

        <div className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center sm:justify-start pl-8 sm:mt-0 md:mt-4 lg:mt-0">
          <div className=" justify-auto flex flex-col  md:justify-center lg:justify-around">
            <div className="flex w-full md:w-1/2  lg:w-full text-[#353535] font-sans text-2xl font-bold mt-2 leading-7  ">
              {organization.organizationName}
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row gap-4 ml-0">
              <button
                onClick={() => setShowDenyModal(true)}
                className=" w-20 h-[30px] rounded-3xl bg-[#B63535] mt-2 ml-0 md:ml-12 lg:ml-0 "
              >
                <div className="flex justify-center text-white text-sans font-medium ">
                  Deny
                </div>
              </button>
              <button
                onClick={() => setShowDetailsModal(true)}
                className=" w-20 h-[30px] rounded-3xl bg-[#4E8171] mt-2 ml-0 md:ml-12 lg:ml-0 "
              >
                <div className="flex justify-center text-white text-sans font-medium ">
                  Details
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`col-span-full md:col-span-full lg:col-span-5 mr-3 mb-3 sm:mb-0 ms-3 lg:ms-0 md:ms-0 `}
        >
          <div className="lg:w-64 w-48 md:w-48 lg:h-24 h-28 md:h-28 rounded bg-[#F4F4F4] mt-2 md:mt-4 lg:mt-5 ml-0 md:ml-6 lg:ml-10 mb-0 md:mb-4 lg:mb-0 ">
            <div className="grid grid-cols-12">
              <div className="col-span-8 sm:col-span-8 m-6">
                <div className="text-[#353C4E] font-sans text-sm font-normal leading-4">
                  Number of Events
                </div>
                <div className="text-[#353C4E] font-sans text-sm font-normal leading-4 mt-3">
                  Number of Members
                </div>
              </div>

              <div className="col-span-4 sm:col-span-4 m-6">
                <div className="text-[#353C4E] font-sans text-sm font-bold leading-4 mb-8 md:mb-8 lg:mb-0">
                  {/* {organization.numberofevents} */} 32
                </div>
                <div className="text-[#353C4E] font-sans text-sm font-bold leading-4 mt-6">
                  {/* {organization.numberofmembers} */}34
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDetailsModal && (
        <Modal title="Details" onClose={() => setShowDetailsModal(false)}>
          <DetailsModalContent organization={organization} />
        </Modal>
      )}
      {showDenyModal && (
        <Modal title="Deny" onClose={() => setShowDenyModal(false)}>
          <DenyModalContent organization={organization} />
        </Modal>
      )}
    </div>
  );
}
