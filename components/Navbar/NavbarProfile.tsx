import Image from "next/image";
import React from "react";
import {
  AiOutlineClose,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";

interface NavbarProfileProps {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  showProfile: boolean;
  clickLogoutBtn: () => void;
  user: any;

  isOrganizationShowButton: boolean;
  setIsOrganizationShowButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarProfile({
  setShowProfile,
  showProfile,
  clickLogoutBtn,
  user,
  isOrganizationShowButton,
  setIsOrganizationShowButton,
}: NavbarProfileProps) {
  return (
    <div
      className={`absolute ${
        !showProfile ? "hidden" : "lg:w-1/3 md:w-1/2 2xl:w-1/5 sm:block hidden"
      } rounded-2xl top-13 right-0   bg-gray-700 text-white`}
    >
      <div className="">
        <div className="flex m-3 items-center justify-between">
          <div className="font-medium	">{user?.email}</div>
          <button onClick={() => setShowProfile(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <div>
            <Image
              src={`/ReUsableComponentData/profilpic.jpg`}
              alt="profile picture"
              width={60}
              height={20}
              className="rounded-full"
            />
          </div>
          <div className="font-medium	">{`hi ${user?.name} !`}</div>
          <div>
            <button className="rounded-full py-2 px-4 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Manage your account
            </button>
          </div>
        </div>
        <div className=" mt-5 mb-5 md:p-3 lg:p-0 w-full flex xl:w-full  justify-center">
          <div className="z-20  w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700">
            <div className="  px-4 py-2 font-medium items-center flex justify-between text-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 dark:text-white">
              <div className="flex gap-2  items-center">
                <MdOutlineManageAccounts size={25} />
                <div className="text-xl">organization accounts</div>
              </div>
              {isOrganizationShowButton ? (
                <button onClick={() => setIsOrganizationShowButton(false)}>
                  <AiOutlineUpCircle size={20} />
                </button>
              ) : (
                <button onClick={() => setIsOrganizationShowButton(true)}>
                  <AiOutlineDownCircle size={20} />
                </button>
              )}
            </div>
            <div
              className={`divide-y ${
                isOrganizationShowButton ? "hidden" : ""
              } divide-gray-100 dark:divide-gray-700`}
            >
              <a
                href="#"
                className="flex px-4  justify-center items-center py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={`/ReUsableComponentData/profilpic.jpg`}
                    alt="profile picture"
                    width={40}
                    height={20}
                    className="rounded-full"
                  />
                </div>
                <div className="w-full ps-3">
                  <div className="text-gray-500 font-medium text-md mb-1.5 dark:text-gray-400">
                    Organization 1
                  </div>
                </div>
              </a>
            </div>
            <button onClick={clickLogoutBtn}>
              <div className="items-center gap-2 text-xl flex px-4 py-2 font-medium  text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                <MdOutlineLogout />
                logout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
