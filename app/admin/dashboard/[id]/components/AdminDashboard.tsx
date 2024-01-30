"use client";
import React, { useState } from "react";
import { useAdmin } from "../AdminContextFile";
import SuperadminButton from "@/components/SuperadminButton";
import Notification from "./Notification";
import Organization from "./Organization";
import Event from "./Event";
import User from "./User";
import { HiMenu } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { SiHomebridge } from "react-icons/si";
import { FaRegCircleUser } from "react-icons/fa6";

export default function AdminDashboard() {
  const { handleNotification, handleOrganization, handleEvent, handleUser } =
    useAdmin();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const { status } = useAdmin();
  return (
    <div>
      <div className=" md:flex lg:flex flex flex-col md:flex-row lg:flex-row mt-8 md:h-[670px] lg:h-[670px] sm:h-8">
        <div className="sm:hidden sm:flex-col md:flex lg:flex sm:w-full md:w-1/5 lg:w-1/6  ms-4 md:h-[670px] lg:h-[670px] sm:h-8 ">
          <div className="flex flex-col   shadow-3xl items-center ">
            <div className=" flex flex-row mt-2 md:h-[670px] lg:h-[670px] sm:h-4">
              <div className="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 sm:hidden md:flex lg:flex justify-center ">
                <div className="sm:hidden md:flex md:flex-col lg:flex lg:flex-col md:w-3/4 lg:w-3/4 sm:w-full mt-8 sm:ms-8 md:ms-8 lg:ms-8 ">
                  <SuperadminButton
                    text="Notification"
                    onClick={() => handleNotification()}
                    icon={<IoMdNotificationsOutline />}
                  />
                  <SuperadminButton
                    text="Organization"
                    onClick={() => handleOrganization()}
                    icon={<GoOrganization />}
                  />
                  <SuperadminButton
                    text="Event"
                    onClick={() => handleEvent()}
                    icon={<SiHomebridge />}
                  />
                  <SuperadminButton
                    text="User"
                    onClick={handleUser}
                    icon={<FaRegCircleUser />}
                  />
                </div>
                <div
                  onClick={handleClick}
                  className="sm:hidden cursor-pointer pl-24"
                >
                  <HiMenu size={30} />
                </div>
                {show && <AdminDashboard />}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-full md:w-4/5 lg:w-5/6 xl:w-3/4  sm:mr-0 lg:mr-12 md:mr-2 h-[670px] lg:ms-8 md:ms-4 sm:ms-0 xl:ms-12 shadow-3xl">
          <div>
            {status === "Notification" && <Notification />}
            {status === "Organization" && <Organization />}
            {status === "Event" && <Event />}
            {status === "User" && <User />}
          </div>
        </div>
      </div>
    </div>
  );
}
