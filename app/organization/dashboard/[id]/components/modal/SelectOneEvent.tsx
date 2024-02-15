import React, { memo } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiAddCircleFill } from "react-icons/ri";
import { orgContext } from "./GivenPermission";
import { useOrg } from "../../OrgContext";

export default memo(function SelectOneEvent() {
  const { setModal } = useOrg() as orgContext;
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
          <div className="mr-4 flex items-center justify-between ">
            <button
              onClick={() => setModal("givenPermission")}
              type="button"
              className="text-gray-400  ml-5 button bg-transparent  rounded-lg text-sm  h-8  "
              data-modal-hide="static-modal"
            >
              <IoMdArrowRoundBack size={20} />
            </button>
            <button>
              <button
                onClick={() => setModal("")}
                type="button"
                className="text-gray-400   button bg-transparent  rounded-lg text-sm  h-8 ms-auto  "
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
            </button>
          </div>
          <div className="mb-5    md:p-3 mx-5  items-start w- space-y-4 gap-1 flex flex-col">
            <div className="text-xl	 font-normal">
              change permissions for ashan dilsara
            </div>
            <div className="flex w-full  justify-center ">
              <button>
                <div className="flex rounded-md gap-2 px-3 py-1 items-center bg-custom-orange text-white">
                  <RiAddCircleFill />
                  <div>Chose Events</div>
                </div>
              </button>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="justify-between bg-[#D9D9D9] flex  w-10/12">
                <div className="ml-2">Nadagama </div>
                <div className="">
                  <button
                    onClick={() => setModal("permissionOneEvent")}
                    className={`bg-custom-orange h-[34px] justify-self-end rounded-[5px] `}
                  >
                    <div className="flex ml-2 gap-2 items-center justify-center">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <svg id="Edit_fill">
                          <path
                            id="Subtract"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.145 9.35497L16.6248 7.87519C16.9368 7.56316 17.0928 7.40715 17.1982 7.25268C17.6624 6.57267 17.6624 5.67771 17.1982 4.99769C17.0928 4.84322 16.9368 4.68721 16.6248 4.37519L16.6248 4.37518L16.6247 4.37516C16.3127 4.06316 16.1567 3.90715 16.0023 3.80172C15.3223 3.33758 14.4273 3.33758 13.7473 3.80172C13.5928 3.90715 13.4368 4.06316 13.1248 4.37519L11.6249 5.87508C12.4636 7.32289 13.6776 8.52761 15.145 9.35497ZM10.1703 7.32963L4.35615 13.1438C3.93109 13.5689 3.71856 13.7814 3.57883 14.0425C3.43909 14.3036 3.38015 14.5983 3.26226 15.1878L2.77186 17.6398C2.70534 17.9724 2.67208 18.1387 2.76668 18.2333C2.86129 18.3279 3.0276 18.2946 3.36021 18.2281L5.81219 17.7377L5.8122 17.7377C6.40164 17.6198 6.69637 17.5609 6.95746 17.4211C7.21856 17.2814 7.43109 17.0689 7.85614 16.6438L7.85615 16.6438L13.6867 10.8133C12.2704 9.9213 11.0708 8.72991 10.1703 7.32963Z"
                            fill="white"
                          />
                        </svg>
                      </svg>

                      <div className="text-white font-mono self-center text-center text-base font-medium mr-2">
                        Edit
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="justify-between bg-[#D9D9D9] flex  w-10/12">
                <div className="ml-2">Nadagama </div>
                <div className="">
                  <button
                    onClick={() => setModal("permissionOneEvent")}
                    className={`bg-custom-orange h-[34px] justify-self-end rounded-[5px] `}
                  >
                    <div className="flex ml-2 gap-2 items-center justify-center">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <svg id="Edit_fill">
                          <path
                            id="Subtract"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.145 9.35497L16.6248 7.87519C16.9368 7.56316 17.0928 7.40715 17.1982 7.25268C17.6624 6.57267 17.6624 5.67771 17.1982 4.99769C17.0928 4.84322 16.9368 4.68721 16.6248 4.37519L16.6248 4.37518L16.6247 4.37516C16.3127 4.06316 16.1567 3.90715 16.0023 3.80172C15.3223 3.33758 14.4273 3.33758 13.7473 3.80172C13.5928 3.90715 13.4368 4.06316 13.1248 4.37519L11.6249 5.87508C12.4636 7.32289 13.6776 8.52761 15.145 9.35497ZM10.1703 7.32963L4.35615 13.1438C3.93109 13.5689 3.71856 13.7814 3.57883 14.0425C3.43909 14.3036 3.38015 14.5983 3.26226 15.1878L2.77186 17.6398C2.70534 17.9724 2.67208 18.1387 2.76668 18.2333C2.86129 18.3279 3.0276 18.2946 3.36021 18.2281L5.81219 17.7377L5.8122 17.7377C6.40164 17.6198 6.69637 17.5609 6.95746 17.4211C7.21856 17.2814 7.43109 17.0689 7.85614 16.6438L7.85615 16.6438L13.6867 10.8133C12.2704 9.9213 11.0708 8.72991 10.1703 7.32963Z"
                            fill="white"
                          />
                        </svg>
                      </svg>

                      <div className="text-white font-mono self-center text-center text-base font-medium mr-2">
                        Edit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="justify-between bg-[#D9D9D9] flex  w-10/12">
                <div className="ml-2">Nadagama </div>
                <div className="">
                  <button
                    onClick={() => setModal("permissionOneEvent")}
                    className={`bg-custom-orange h-[34px] justify-self-end rounded-[5px] `}
                  >
                    <div className="flex ml-2 gap-2 items-center justify-center">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <svg id="Edit_fill">
                          <path
                            id="Subtract"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.145 9.35497L16.6248 7.87519C16.9368 7.56316 17.0928 7.40715 17.1982 7.25268C17.6624 6.57267 17.6624 5.67771 17.1982 4.99769C17.0928 4.84322 16.9368 4.68721 16.6248 4.37519L16.6248 4.37518L16.6247 4.37516C16.3127 4.06316 16.1567 3.90715 16.0023 3.80172C15.3223 3.33758 14.4273 3.33758 13.7473 3.80172C13.5928 3.90715 13.4368 4.06316 13.1248 4.37519L11.6249 5.87508C12.4636 7.32289 13.6776 8.52761 15.145 9.35497ZM10.1703 7.32963L4.35615 13.1438C3.93109 13.5689 3.71856 13.7814 3.57883 14.0425C3.43909 14.3036 3.38015 14.5983 3.26226 15.1878L2.77186 17.6398C2.70534 17.9724 2.67208 18.1387 2.76668 18.2333C2.86129 18.3279 3.0276 18.2946 3.36021 18.2281L5.81219 17.7377L5.8122 17.7377C6.40164 17.6198 6.69637 17.5609 6.95746 17.4211C7.21856 17.2814 7.43109 17.0689 7.85614 16.6438L7.85615 16.6438L13.6867 10.8133C12.2704 9.9213 11.0708 8.72991 10.1703 7.32963Z"
                            fill="white"
                          />
                        </svg>
                      </svg>

                      <div className="text-white font-mono self-center text-center text-base font-medium mr-2">
                        Edit
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="justify-between bg-[#D9D9D9] flex  w-10/12">
                <div className="ml-2">Nadagama </div>
                <div className="">
                  <button
                    onClick={() => setModal("permissionOneEvent")}
                    className={`bg-custom-orange h-[34px] justify-self-end rounded-[5px] `}
                  >
                    <div className="flex ml-2 gap-2 items-center justify-center">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <svg id="Edit_fill">
                          <path
                            id="Subtract"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.145 9.35497L16.6248 7.87519C16.9368 7.56316 17.0928 7.40715 17.1982 7.25268C17.6624 6.57267 17.6624 5.67771 17.1982 4.99769C17.0928 4.84322 16.9368 4.68721 16.6248 4.37519L16.6248 4.37518L16.6247 4.37516C16.3127 4.06316 16.1567 3.90715 16.0023 3.80172C15.3223 3.33758 14.4273 3.33758 13.7473 3.80172C13.5928 3.90715 13.4368 4.06316 13.1248 4.37519L11.6249 5.87508C12.4636 7.32289 13.6776 8.52761 15.145 9.35497ZM10.1703 7.32963L4.35615 13.1438C3.93109 13.5689 3.71856 13.7814 3.57883 14.0425C3.43909 14.3036 3.38015 14.5983 3.26226 15.1878L2.77186 17.6398C2.70534 17.9724 2.67208 18.1387 2.76668 18.2333C2.86129 18.3279 3.0276 18.2946 3.36021 18.2281L5.81219 17.7377L5.8122 17.7377C6.40164 17.6198 6.69637 17.5609 6.95746 17.4211C7.21856 17.2814 7.43109 17.0689 7.85614 16.6438L7.85615 16.6438L13.6867 10.8133C12.2704 9.9213 11.0708 8.72991 10.1703 7.32963Z"
                            fill="white"
                          />
                        </svg>
                      </svg>

                      <div className="text-white font-mono self-center text-center text-base font-medium mr-2">
                        Edit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-11/12  justify-end  ">
              <button className="button">
                <div className="flex rounded-md gap-2 px-3 py-1 items-center bg-custom-orange text-white">
                  <RiAddCircleFill />
                  <div>Done</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
