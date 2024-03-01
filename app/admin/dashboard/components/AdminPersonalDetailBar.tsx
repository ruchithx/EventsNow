import React, { useState, useEffect } from "react";
import Modal from "./ModalContext";
import BlacklistModalContent from "./modals/BlacklistModal";
import MakeAdminModalContent from "./modals/MakeAdminModal";
import Image from "next/image";

interface PresonDetailsBar {
  name: string;
  email: string;
}

export default function AdminPersonDetailsBar({
  name,
  email,
}: PresonDetailsBar) {
  const [showBlacklistModal, setShowBlacklistModal] = useState(false);
  const [showMakeAdminModal, setMakeAdminModal] = useState(false);

  return (
    <div>
      <div className="my-2 sm:my-4 justify-between ms-2 sm:ms-0 mt-6 bg-[#D9D9D9] w-64 md:w-[380px] xl:w-[900px] lg:w-[720px]  col-span-2 grid grid-cols-12  rounded-[5px] mb-2 shadow-3xl">
        <div className="text-base font-light col-span-3 hidden md:hidden lg:flex ms-2">
          {name}
        </div>
        <div className="text-base font-light col-span-5	mr-2 md:mb-0 mb-1 ms-2 md:ms-2 lg:ms-0 flex ">
          {email}
        </div>
        <div className="xl:col-span-4  flex gap-2 ">
        <button
            onClick={() =>  setMakeAdminModal(true)}
            className={`bg-custom-blue h-[34px]  rounded-[5px] w-8 lg:w-[210px] md:w-12 xl:w-44  ms-28 md:ms-[180px] lg:ms-0 shadow-3xl`}
          >
            <div className="flex justify-around pl-1">
             <Image 
                src={"/images/admin/Info_fill.png"}
                width={25}
                height={25}
                alt="cancel"/>
              <div className="text-white font-mono self-center text-center text-base font-medium mr-2 hidden md:hidden lg:flex ">
                Make admin
              </div>
            </div>
          </button>
          <button
            onClick={() => setShowBlacklistModal(true)}
            className={`bg-custom-green h-[34px]  rounded-[5px] w-8 lg:w-[210px] md:w-12 xl:w-48  ms-28 md:ms-[180px] lg:ms-0 shadow-3xl`}
          >
            <div className="flex justify-around pl-1">
            <Image 
                src={"/images/admin/Cancel_fill.png"}
                width={25}
                height={25}
                alt="cancel"/>
              <div className="text-white font-mono self-center text-center text-base font-medium mr-2 hidden md:hidden lg:flex ">
                Block user
              </div>
            </div>
          </button>
        </div>
      </div>

      {showBlacklistModal && (
        <Modal title="Details" onClose={() => setShowBlacklistModal(false)}>
          <BlacklistModalContent userId={""} />
        </Modal>
      )}

      {showMakeAdminModal && (
        <Modal title="Details" onClose={() => setMakeAdminModal(false)}>
          <MakeAdminModalContent userId={""} />
        </Modal>
      )}
    </div>
  );
}
