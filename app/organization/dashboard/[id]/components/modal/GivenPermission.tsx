import React, { memo } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useOrg } from "../../OrgContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
// import { Event, Team } from "../../Type";
import { error, success } from "@/util/Toastify";
import { OrgContext } from "@/app/Type";

// export type orgContext = {
//   setModal: React.Dispatch<React.SetStateAction<Modal>>;
//   modalUserName: string;
//   setModalUserName: React.Dispatch<React.SetStateAction<string>>;
//   setPermissionID: React.Dispatch<React.SetStateAction<string>>;
//   permissionID: string;
//   setGlobalPermission: React.Dispatch<React.SetStateAction<string[]>>;
//   globalPermission: string[];
//   setSelectEventForPermission: any;
//   events: Event[];
//   selectEventForPermission: Event;
//   setEventPermission: React.Dispatch<React.SetStateAction<EventPermission[]>>;
//   eventPermission: EventPermission[];
//   team: Team[];
//   setTeam: React.Dispatch<React.SetStateAction<Team[]>>;
// };

export default memo(function GivenPermission() {
  const { setModal, modalUserName, team, setTeam, permissionID } =
    useOrg() as OrgContext;

  async function deletePermission() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/permission/deleteUserPermission`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: permissionID }),
      }
    );

    if (!res.ok) {
      error("Failed to remove permission");
      return;
    }

    const newTeam = team.filter(
      (team) => team.permissionDocumentId !== permissionID
    );

    success("Permission removed successfully");
    setTeam(newTeam);
    setModal("");
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9CC",
        }}
        id="static-modal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden p-4 fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
              <button onClick={deletePermission}>
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
