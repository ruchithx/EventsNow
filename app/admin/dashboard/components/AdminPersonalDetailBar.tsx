import React, { useState, useEffect } from "react";
import Modal from "./ModalContext";
import BlacklistModalContent from "./modals/BlacklistModal";
import MakeAdminModalContent from "./modals/MakeAdminModal";
import Image from "next/image";
import { User } from "../../Type";

interface PresonDetailsBar {
  name: string;
  email: string;
  userId: String;
  role: String;
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}

export default function AdminPersonDetailsBar({
  name,
  email,
  userId,
  role,
  setUser,
}: PresonDetailsBar) {
  const [showBlacklistModal, setShowBlacklistModal] = useState(false);
  const [showMakeAdminModal, setMakeAdminModal] = useState(false);

  return (
    <div>
      <div className="my-2 sm:my-4 justify-between ms-2 sm:ms-0 mt-6 bg-[#D9D9D9] w-full   xl:w-[900px] lg:w-[720px]  col-span-2 grid grid-cols-12  rounded-[5px] mb-2 shadow-3xl">
        <div className="text-base font-light lg:col-span-3  hidden lg:flex ms-2">
          {name}
        </div>
        <div className="text-base font-light lg:col-span-5 col-span-8	mr-2 md:mb-0 mb-1 ms-2 md:ms-2 lg:ms-0 flex ">
          {email}
        </div>

        <div className="col-span-4  flex gap-2 ">

          {role !== "admin" && (
            <>
              <button
                onClick={() => setMakeAdminModal(true)}

                className={`bg-custom-blue h-[34px]  rounded-[5px] w-20 md:w-32 xl:w-44  shadow-3xl`}
              >
                <div className="flex justify-around pl-1">
                  <div className="lg:hidden xl:grid grid">
                    <Image
                      src={"/images/admin/Info_fill.png"}
                      width={25}
                      height={25}
                      alt="cancel"
                    />
                  </div>
                  <div className="text-white font-mono self-center text-center text-base font-medium mr-2 hidden lg:flex ">

                    Make admin
                  </div>
                </div>
              </button>
              <button
                onClick={() => setShowBlacklistModal(true)}

                className={`bg-custom-green h-[34px]  rounded-[5px] w-20 md:w-32 xl:w-44  shadow-3xl `}
              >
                <div className="flex justify-around pl-1">
                  <div className="lg:hidden xl:grid grid">
                    <Image
                      src={"/images/admin/Cancel_fill.png"}
                      width={25}
                      height={25}
                      alt="cancel"
                    />
                  </div>
                  <div className="text-white font-mono self-center text-center text-base font-medium xl:mr-2 hidden lg:flex ">

                    Block user
                  </div>
                </div>
              </button>
            </>
          )}

          {role === "admin" && (
            <>

              <div className="">
                <button className="bg-custom-blue  h-[34px] rounded-[5px]  w-[3.9rem] sm:w-[5.4rem] md:w-[7.3rem] xl:w-36 shadow-3xl ">
                  <div className="flex justify-around pl-1">
                  <div className="lg:hidden xl:grid grid">
                    <Image
                      src={"/images/admin/Info_fill.png"}
                      width={25}
                      height={25}
                      alt="cancel"
                    /></div>
                    <div className="text-white font-mono self-center text-center text-base font-medium xl:mr-6 hidden lg:flex ">
                      Admin
                    </div>
                  </div>
                </button>
              </div>

            </>
          )}
        </div>
      </div>

      {showBlacklistModal && (
        <Modal title="Details" onClose={() => setShowBlacklistModal(false)}>
          <BlacklistModalContent userId={""} />
        </Modal>
      )}

      {showMakeAdminModal && (
        <Modal title="Details" onClose={() => setMakeAdminModal(false)}>
          <MakeAdminModalContent
            setMakeAdminModal={setMakeAdminModal}
            userId={userId}
            setUser={setUser}
          />
        </Modal>
      )}
    </div>
  );
}
