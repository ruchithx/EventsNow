import React, { memo } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Modal, useOrg } from "../../OrgContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import { Event } from "../../Type";

export type orgContext = {
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
  modalUserName: string;
  setModalUserName: React.Dispatch<React.SetStateAction<string>>;
  setPermissionID: React.Dispatch<React.SetStateAction<string>>;
  permissionID: string;
  setGlobalPermission: React.Dispatch<React.SetStateAction<string[]>>;
  globalPermission: string[];
  setSelectEventForPermission: any;
  events: Event[];
  selectEventForPermission: Event;
};

export default memo(function GivenPermission() {
  const { setModal, modalUserName } = useOrg() as orgContext;
  return (
    <>
      <div
        style={{
          // backdropFilter: "blur(2px)",
          backgroundColor: "#D9D9D9CC",
        }}
        id="static-modal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden p-4 fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        {/* <div className="  relative left-[25%] top-[20%]  w-[30rem] max-w-2xl ">
          <div className="  relative bg-white rounded-lg shadow ">
            <div className=" h-1  flex items-center justify-between    rounded-t ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="mb-5    md:p-3 mx-5  items-start w- space-y-4 gap-5 flex flex-col">
              <div className="text-lg font-medium">
                change permissions for ashan dilsara
              </div>
              <div className="flex gap-10 ">
                <button>
                  <div className="flex  rounded-md gap-2 p-1 items-center bg-custom-orange text-white">
                    <AiFillCloseCircle />

                    <div>Remove</div>
                  </div>
                </button>
                <button>
                  <div className="flex rounded-md gap-2 p-1 items-center bg-custom-orange text-white">
                    <RiAddCircleFill />
                    <div>All Events</div>
                  </div>
                </button>
                <button>
                  <div className="flex rounded-md gap-2 p-1 items-center bg-custom-orange text-white">
                    <RiAddCircleFill />
                    <div>Chose Events</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-5"></div>
          </div>
        </div> */}

        <div className="border-[1px] border-custom-orange rounded-md bg-white  w-2/5 relative top-[25%] left-[25%]">
          <div className="mr-4">
            <button
              onClick={() => setModal("")}
              type="button"
              className="text-gray-400 w-full   bg-transparent  rounded-lg text-sm  h-8 ms-auto inline-flex justify-end items-center "
              data-modal-hide="static-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="mb-5    md:p-3 mx-5  items-start w- space-y-4 gap-5 flex flex-col">
            <div className="text-xl	 font-normal">
              change permissions for {modalUserName}
            </div>
            <div className="flex w-full  justify-between ">
              <button>
                <div className="flex  rounded-md gap-2 px-3 py-1 items-center bg-custom-orange text-white">
                  <AiFillCloseCircle />
                  <div>Remove</div>
                </div>
              </button>
              <button onClick={() => setModal("allPermission")}>
                <div className="flex rounded-md gap-2 px-3 py-1 items-center bg-custom-orange text-white">
                  <RiAddCircleFill />
                  <div>All Events</div>
                </div>
              </button>
              <button onClick={() => setModal("selectOneEvent")}>
                <div className="flex rounded-md gap-2 px-3 py-1 items-center bg-custom-orange text-white">
                  <RiAddCircleFill />
                  <div>Chose Events</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
