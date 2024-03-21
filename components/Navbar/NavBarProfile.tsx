import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AiOutlineClose,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";
import { OrganizationProps, User } from "./NavBar";
import Link from "next/link";

import { useAuth } from "@/app/AuthContext";

interface NavBarProfileProps {
  user: User;
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
  clickLogoutBtn: () => void;
}
type Organization = {
  organization: OrganizationProps[];
};

const NavBarProfile = memo(function NavBarProfile({
  user,
  showProfile,
  setShowProfile,
  clickLogoutBtn,
}: NavBarProfileProps) {
  const [isOrganizationShowButton, setIsOrganizationShowButton] =
    useState<boolean>(false);

  const { organization } = useAuth() as unknown as Organization;
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        // Clicked outside of modal, so close it
        setShowProfile(false);
      }
    };

    // Add event listener when the modal is open
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile, setShowProfile]);

  return (
    <div ref={profileRef} className="  .modal-content">
      <div className="z-20 flex m-3 items-center justify-between">
        <div className="2xl:text-base  xl:text-base lg:text-xs text-xs	 font-medium	">
          {user?.email}
        </div>
        <button onClick={() => setShowProfile(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="flex justify-center items-center flex-col gap-2">
        <div>
          <Image
            src={user?.image}
            alt="profile picture"
            width={60}
            height={20}
            className="rounded-full w-auto h-auto"
          />
        </div>
        <div className="font-medium	">{`hi ${user?.firstName} !`}</div>

        <Link href={`/profile/${user._id}`}>
          <button
            onClick={() => setShowProfile(false)}
            className="rounded-full 2xl:text-base py-2 px-2 md:px-1 md:py-1 md:text-sm lg:text-sm xl:text-base xl:py-1 xl:px-2 lg:px-2 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Manage your account
          </button>
        </Link>
      </div>
      <div className=" mt-5 mb-5 md:p-3 lg:p-0 w-full flex xl:w-full  justify-center">
        <div className="z-20  w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700">
          <div className="  px-4 py-2 font-medium items-center flex justify-between text-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 dark:text-white">
            <div className="flex gap-2  items-center">
              <MdOutlineManageAccounts size={25} />
              <div className="2xl:text-base xl:text-base   md:text-sm">
                organization accounts
              </div>
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
          {/* {organization.length === 0 ? <div>No organization</div>} */}

          <div
            className={`divide-y ${
              isOrganizationShowButton ? "hidden" : ""
            } divide-gray-100 dark:divide-gray-700`}
          >
            {organization.length === 0 ? (
              <div className="text-custom-orange flex justify-center">
                No organization
              </div>
            ) : (
              organization.map((org: OrganizationProps) => (
                <Link
                  onClick={() => setShowProfile(false)}
                  key={org.id}
                  href={`/organization/dashboard/${org.id}`}
                  className="flex px-4  justify-center items-center py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={org.image}
                      alt="profile picture"
                      width={20}
                      height={10}
                      className="rounded-full w-auto h-auto"
                    />
                  </div>
                  <div className="w-full ps-3">
                    <div className="text-gray-500 text-sm font-medium text-md mb-1.5 dark:text-gray-400">
                      {org.name}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <button onClick={clickLogoutBtn}>
            <div className="items-center gap-2  flex px-4 py-2 font-medium  text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white 2xl:text-base xl:text-base   md:text-sm text-sm">
              <MdOutlineLogout />
              logout
            </div>
          </button>
        </div>
      </div>
    </div>
  );
});

export default NavBarProfile;
