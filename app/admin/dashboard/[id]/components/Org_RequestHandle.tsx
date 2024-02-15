import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "./ModalContext";
import DetailsModalContent from "./modals/DetailsModal";
import AllowModalContent from "./modals/AllowModal";
import DenyModalContent from "./modals/DenyModal";
import { Organization } from "@/app/organization/dashboard/[id]/Type";

interface OrgRequestHandleProps {
  image: string;
  organization: Organization;
}

export default function Org_RequestHandle({
  image,
  organization,
}: OrgRequestHandleProps) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAllowModal, setShowAllowModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12  m-4 w-[250px] md:w-[500px] lg:w-[679px] h-96 sm:h-32 rounded-lg bg-[#D9D9D9] ">
        <div className="sm:col-span-5 col-span-full overflow-hidden rounded-lg">
          <Image
            src={`/images/Admin/${image}`}
            alt="image2"
            width={249.64}
            height={126}
            className="shadow-xl  w-[300px] lg:w-[249.65px] md:w-[200px]"
          />
        </div>
        <div className="grid grid-rows-2 col-span-7">
          <div className="flex sm:items-center items-around sm:mt-0 mt-4">
            <div className="w-12 sm:w-48 text-[#353535] font-sans text-2xl font-bold ms-2 sm:ms-0">
              {organization.fullName}
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

{
  /* {isDetailsModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-32 w-32 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <Image
                            src={`/${image}`}
                            alt="image2"
                            width={249.64}
                            height={126}
                            className="w-auto h-auto rounded-full"
                          />
                        </div>

                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            {org.fullName}
                          </h3>
                          <div className="mt-2">
                            <div className="flex flex-col">
                              <div className="flex flex-row">
                                <div className="text-sm font-bold text-black">
                                  Address :
                                </div>
                                <p className="text-sm text-gray-500">
                                  {org.address}
                                </p>
                              </div>
                              <div className="flex flex-row">
                                <div className="text-sm font-bold text-black">
                                  phoneNumber :
                                </div>
                                <p className="text-sm text-gray-500">
                                  {org.phoneNumber}
                                </p>
                              </div>
                              <div className="flex flex-row">
                                <div className="text-sm font-bold text-black">
                                  email address :
                                </div>
                                <p className="text-sm text-gray-500">
                                  {org.email}
                                </p>
                              </div>
                            </div>
                  
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={closeModal}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )} */
}

{
  /* {isAllowModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="text-lg text-gray-500">
                            Give all rights in EventsNow to{" "}
                          </div>
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            {org.fullName} .
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={() => sendApproval(selectedOrgId!)}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Send Approval
                      </button>
                      <button
                        onClick={closeModal}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isDenyModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="text-lg text-gray-500">
                            Deny and send to review
                          </div>
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            {org.fullName} .
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={() => sendApproval(selectedOrgId!)}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Deny
                      </button>
                      <button
                        onClick={closeModal}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )} */
}
