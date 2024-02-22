import React from "react";
import useModal from "./ModalContext";
import UserData from "./Org_RequestHandle";
import Image from "next/image";

interface ModalProps {
  data: UserData[];
}

const OrgDetailModal: React.FC<ModalProps> = ({ data }) => {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      {isOpen && (
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
                      src={``}
                      alt="image2"
                      width={249.64}
                      height={126}
                      className="w-auto h-auto rounded-full"
                    />
                  </div>
                  {data.map((org) => (
                    <div key={org._id}>
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
                          {/* You can render the actual organization details here */}
                        </div>
                      </div>
                    </div>
                  ))}
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
      )}
    </>
  );
};

export default OrgDetailModal;
