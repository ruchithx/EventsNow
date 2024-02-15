import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "./ModalContext";
import DetailsModalContent from "./modals/DetailsModal";
import AllowModalContent from "./modals/AllowModal";
import DenyModalContent from "./modals/DenyModal";
import { Organization } from "@/app/organization/dashboard/[id]/Type";

interface OrgRequestHandleProps {
  organization: Organization;
}

export default function Org_RequestHandle({
  organization,
}: OrgRequestHandleProps) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAllowModal, setShowAllowModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12  m-4 w-[250px] md:w-[500px] lg:w-[679px] h-96 sm:h-32 rounded-lg bg-[#D9D9D9] shadow-3xl">
        <div className="sm:col-span-5 col-span-full overflow-hidden rounded-lg">
          <Image
            src={organization.postImageLink}
            alt="image2"
            width={249.64}
            height={126}
            className="shadow-xl  w-[300px] lg:w-[249.65px] md:w-[200px]"
          />
        </div>
        <div className="grid grid-rows-2 col-span-7">
          <div className="flex sm:items-center items-around sm:mt-0 mt-4">
            <div className="w-12 sm:w-48 text-[#353535] font-sans text-2xl font-bold ms-2 sm:ms-0">
              {organization.organizationName}
            </div>
            <button
              onClick={() => setShowDetailsModal(true)}
              className="w-20 h-[30px] rounded-3xl bg-[#4E8171] ml-24 lg:ml-20 md:ml-3"
            >
              <div className="justify-center  text-white text-sans font-medium">
                Details
              </div>
            </button>
          </div>

          <div className="flex flex-row mt-4 sm:mt-2 sm:ms-0 md:ms-4 lg:ms-0 xl:ms-0">
            <button
              onClick={() => setShowAllowModal(true)}
              className="w-20 h-[30px] rounded-3xl bg-[#3C9313] ms-2 sm:ms-0"
            >
              <div className="justify-center text-white text-sans font-medium">
                Allow
              </div>
            </button>
            <button
              onClick={() => setShowDenyModal(true)}
              className="w-20 h-[30px] rounded-3xl bg-[#B63535] ml-12 sm:ml-10 "
            >
              <div className="justify-center text-white text-sans font-medium ">
                Deny
              </div>
            </button>
          </div>
        </div>
      </div>

      {showDetailsModal && (
        <Modal title="Details" onClose={() => setShowDetailsModal(false)}>
          <DetailsModalContent organization={organization} />
        </Modal>
      )}

      {showAllowModal && (
        <Modal title="Allow" onClose={() => setShowAllowModal(false)}>
          <AllowModalContent organization={organization} />
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
