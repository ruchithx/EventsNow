import Image from "next/image";
import React, { memo, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";
import { OrganizationProps, User } from "./NavBar";
import Link from "next/link";
import { type } from "os";
import { useAuth } from "@/app/AuthContext";

interface NavBarProfileProps {
  user: User;

  setShowProfile: (value: boolean) => void;
  clickLogoutBtn: () => void;
}
type Organization = {
  organization: OrganizationProps[];
};

const NavBarProfile = memo(function NavBarProfile({
  user,

  setShowProfile,
  clickLogoutBtn,
}: NavBarProfileProps) {
  const [isOrganizationShowButton, setIsOrganizationShowButton] =
    useState(false);

  const { organization } = useAuth() as unknown as Organization;
  console.log(organization, "organization");

  return (
    <div className="">
      <div className="z-10 flex m-3 items-center justify-between">
        <div className="2xl:text-xl xl:text-base lg:text-xs text-xs	 font-medium	">
          {user?.email}
        </div>
        <button onClick={() => setShowProfile((value: boolean) => !value)}>
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
          <button className="rounded-full 2xl:text-xl py-2 px-2 md:px-1 md:py-1 md:text-sm lg:text-sm xl:text-base xl:py-1 xl:px-2 lg:px-2 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Manage your account
          </button>
        </Link>
      </div>
      <div className=" mt-5 mb-5 md:p-3 lg:p-0 w-full flex xl:w-full  justify-center">
        <div className="z-20  w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700">
          <div className="  px-4 py-2 font-medium items-center flex justify-between text-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 dark:text-white">
            <div className="flex gap-2  items-center">
              <MdOutlineManageAccounts size={25} />
              <div className="2xl:text-xl xl:text-lg   md:text-sm">
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
                  href={`/organization/dashboard/${org.id}`}
                  className="flex px-4  justify-center items-center py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={org.image}
                      alt="profile picture"
                      width={20}
                      height={10}
                      className="rounded-full"
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
            <div className="items-center gap-2 text-xl flex px-4 py-2 font-medium  text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white 2xl:text-xl xl:text-lg   md:text-sm">
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
