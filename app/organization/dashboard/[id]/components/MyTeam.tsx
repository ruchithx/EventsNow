import React from "react";
import { Modal, useOrg } from "../OrgContext";

import EmptyStateComponent from "@/components/EmptyStateComponent";
import { IoMdArrowRoundBack } from "react-icons/io";
import PersonDetailsBar from "./PersonDetailsBar";
import GivenPermission from "./modal/GivenPermission";
import AllPermission from "./modal/AllPermission";
import PermissionOneEvent from "./modal/PermissionOneEvent";
import SelectOneEvent from "./modal/SelectOneEvent";
import { Team, User } from "../Type";
import InviteButton from "./InviteButton";

interface OrgProps {
  modal: Modal;
  team: Team[];
}

export default function MyTeam() {
  const { modal, team } = useOrg() as OrgProps;

  function handleModal() {
    switch (modal) {
      case "givenPermission":
        return <GivenPermission />;
      case "allPermission":
        return <AllPermission />;
      case "permissionOneEvent":
        return <PermissionOneEvent />;
      case "selectOneEvent":
        return <SelectOneEvent />;
      case "":
        return;
    }
  }
  // const { team } = useOrg();
  return (
    <div className="flex pl-5 rounded-lg  shadow-3xl  md:ml-2 bg-[#fff] pt-8 md:pl-12 flex-col justify-start items-start gap-12">
      <div className="flex flex-col gap-3 justify-start items-start">
        <div className="text-3xl font-semibold text-custom-orange	font-IBM">
          MY TEAM
        </div>
        <div className="text-base text-[#848484] font-normal">
          Invite your team, Streamline your organization works
        </div>
      </div>
      <div>
        <InviteButton />
      </div>
      <div className="w-full border-[1px] border-black"></div>
      <div className=" mb-5 w-full 2xl:w-3/5 xl:w-3/4 flex flex-col gap-4 justify-start md:px-6 px-0 items-start  rounded-xl">
        {team.length === 0 ? (
          <EmptyStateComponent message="No user in the organization" />
        ) : (
          team.map((user) => (
            <PersonDetailsBar
              key={user.userData._id}
              name={user.userData.firstName}
              email={user.userData.email}
              permissionDocumentId={user.permissionDocumentId}
              globalPermission={user.globalPermission}
              eventPermission={user.eventPermission}
            />
          ))
        )}

        {/* <PersonDetailsBar
          key="65c9d12e0606616b4bd18384"
          name="Ruchith"
          email="ruchith.sg@gmail.com"
          permissionDocumentId="65ccbecac05925097ff25c71"
          globalPermission={[
            "Manage Event",
            "Mark Attendance",
            "Manage Payments",
            "Manage Profile",
            "Manage Payout Details",
            "Manage Host Page",
          ]}
          eventPermission={[
            { eventId: "Event 1", eventPermission: ["View Only Event"] },
            { eventId: "Event 2", eventPermission: ["Manage Event"] },
            {
              eventId: "65cd9557ff509df8c5e2b23c",
              eventPermission: ["View Only Event", "Mark Attendance"],
            },
          ]}
        /> */}

        {handleModal()}
      </div>
    </div>
    // <>
    //   <button
    //     data-modal-target="static-modal"
    //     data-modal-toggle="static-modal"
    //     className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     type="button"
    //   >
    //     Toggle modal
    //   </button>

    //   <div
    //     style={{ backdropFilter: "blur(8px)" }}
    //     id="static-modal"
    //     data-modal-backdrop="static"
    //     aria-hidden="true"
    //     className=" overflow-y-auto overflow-x-hidden  fixed   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    //   >
    //     <div className="relative left-[25%] top-[20%] p-4 w-full max-w-2xl max-h-full">
    //       <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //         <div className="flex items-center justify-between p-1 md:p-1 border-b rounded-t dark:border-gray-600">
    //           <button>
    //             <IoMdArrowRoundBack size={25} />
    //           </button>

    //           <button
    //             type="button"
    //             className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //             data-modal-hide="static-modal"
    //           >
    //             <svg
    //               className="w-3 h-3"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 14 14"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    //               />
    //             </svg>
    //             <span className="sr-only">Close modal</span>
    //           </button>
    //         </div>

    //         <div className="p-4 md:p-5 space-y-4">
    //           <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //             With less than a month to go before the European Union enacts
    //             new consumer privacy laws for its citizens, companies around the
    //             world are updating their terms of service agreements to comply.
    //           </p>
    //           <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //             The European Union’s General Data Protection Regulation
    //             (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
    //             common set of data rights in the European Union. It requires
    //             organizations to notify users as soon as possible of high-risk
    //             data breaches that could personally affect them.
    //           </p>
    //         </div>

    //         <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
    //           <button
    //             data-modal-hide="static-modal"
    //             type="button"
    //             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //             I accept
    //           </button>
    //           <button
    //             data-modal-hide="static-modal"
    //             type="button"
    //             className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
    //           >
    //             Decline
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
