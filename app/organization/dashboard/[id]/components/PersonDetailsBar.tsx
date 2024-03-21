import React, { useState } from "react";
import GivenPermission from "./modal/GivenPermission";
import { useOrg } from "../OrgContext";
import { EventPermissionType, OrgContext } from "@/app/Type";
interface PresonDetailsBar {
  name: string;
  email: string;
  permissionDocumentId: string;
  globalPermission: string[];
  eventPermission: EventPermissionType[];
}

export default function PersonDetailsBar({
  eventPermission,
  name,
  email,
  permissionDocumentId,
  globalPermission,
}: PresonDetailsBar) {
  const {
    setModal,
    setModalUserName,
    setPermissionID,
    setGlobalPermission,
    setEventPermission,
  } = useOrg() as OrgContext;

  const handleEditButton = () => {
    setModal("givenPermission");
    setModalUserName(name);
    setPermissionID(permissionDocumentId);
    setGlobalPermission(globalPermission);
    setEventPermission(eventPermission);
  };

  return (
    //parent div eken 3n 2k kiyala gaththe meka.wenas krla gann onnm.mn dila tynne meke mulu loku div ekatam col-span-2 kiyala-ashan
    <div className=" item-center flex-wrap  bg-[#D9D9D9] w-full flex justify-between  xl:grid xl:grid-cols-12 items-center  rounded-[5px]">
      <div className="text-base font-light md:ml-2 ml-0  md:mb-0 mb-1 xl:col-span-5	">
        {name}
      </div>
      <div className="text-base font-light   xl:col-span-6	mr-2 md:mb-0 mb-1">
        {email}
      </div>
      <div className="xl:col-span-1  grid ">
        <button
          onClick={handleEditButton}
          className={`bg-custom-orange h-[34px] justify-self-end rounded-[5px] w-[114px]`}
        >
          <div className="flex justify-around pl-1">
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
            <button>
              <div className="text-white font-mono self-center text-center text-base font-medium mr-2">
                Edit
              </div>
            </button>
          </div>
        </button>
      </div>
      {/* <GivenPermission /> */}
    </div>
  );
}
