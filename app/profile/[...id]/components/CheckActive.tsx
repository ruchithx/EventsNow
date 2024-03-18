"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import { useProf } from "../ProfContext";
import Image from "next/image";

import OrganizationRequestPending from "@/components/OrganizationRequestPending";

import Dashboard_Btn from "@/app/organization/dashboard/[id]/components/Dashboard_Btn";
import Profile from "./profile";
import Spinner from "@/components/Spinner";
import { ProfContext } from "@/app/Type";
// import ProfContext from './../ProfContext'

export default function CheckActive() {
  const {
    isActive,
    setIsActive,
    isLoading,
    isSlideBar,
    handleProfile,
    handlemyTickets,
    handleMyEvents,
    handleWishList,

    isDashboardOpen,
    setIsDashboardOpen,
    handleSetting,
  } = useProf() as ProfContext;

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {isActive ? (
            <div>
              <div className="grid grid-cols-12 gap-5 md:gap-2 lg:gap-2 xl:gap-5">
                <div
                  className={`xl:col-span-2  md:block hidden ${
                    isSlideBar
                      ? "md:col-span-3 md:ml-2  col-span-4"
                      : "md:col-span-1  col-span-2"
                  }`}
                >
                  <SideBar />
                </div>

                <div
                  className={`xl:col-span-7 col-span-12  ${
                    isSlideBar ? "md:col-span-6 " : "md:col-span-8 "
                  }`}
                >
                  <Content />
                </div>
                <div
                  className={`xl:col-span-3 md:block hidden
             ${isSlideBar ? "md:col-span-3 md:mr-2 " : "md:col-span-3  "}`}
                >
                  <Profile />
                </div>
              </div>

              <div
                className={`fixed 
            -left-14
            top-40`}
              >
                <button onClick={() => setIsDashboardOpen(!isDashboardOpen)}>
                  <div className="  mr-5 h-10  md:hidden  flex justify-center items-center rounded-full   ">
                    <div className="bg-myBrown w-[100px] h-[55px] flex items-center   rounded-full">
                      <div className="bg-custom-orange w-[95px] h-[46px] flex justify-end pr-3 rounded-full">
                        <Image
                          src="/images/profile/responsiveMenuBar.svg"
                          alt="menu bar"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div>
                <div
                  className={
                    isDashboardOpen
                      ? "absolute shadow-2xl flex flex-col  left-0 top-20 w-[65%] sm:hidden h-fit bg-[#ecf0fc]  ease-in duration-50"
                      : "fixed left-[100%] top-0 p-10 ease-in duration-50"
                  }
                >
                  <button onClick={() => setIsDashboardOpen(false)}>
                    <div className="mx-2 my-2 w-fit p-1 mb-3 ">
                      <Image
                        src="/images/profile/close.svg"
                        alt="close"
                        width={29}
                        height={29}
                      />
                    </div>
                  </button>
                  <div className=" flex flex-col mx-5">
                    <Dashboard_Btn
                      isSlideBar={isSlideBar}
                      img="profile.svg"
                      text="My Profile"
                      onClick={() => handleProfile()}
                    />
                    <Dashboard_Btn
                      isSlideBar={isSlideBar}
                      img="wishlist.svg"
                      text="Wish List"
                      onClick={() => handleWishList()}
                    />
                    <Dashboard_Btn
                      isSlideBar={isSlideBar}
                      img="myevents.svg"
                      text="My Events"
                      onClick={() => handleMyEvents()}
                    />
                    <Dashboard_Btn
                      isSlideBar={isSlideBar}
                      img="mytickets.svg"
                      text="My Tickets"
                      onClick={() => handlemyTickets()}
                    />
                    <Dashboard_Btn
                      isSlideBar={isSlideBar}
                      img="Setting.svg"
                      text="Settings"
                      onClick={() => handleSetting()}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <OrganizationRequestPending message="decision pending " />
          )}
        </div>
      )}
    </div>
  );
}
