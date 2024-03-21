"use client";
import React, { use, useState } from "react";
import Dashboard from "@/app/organization/dashboard/[id]/components/DashboardSide";
import Dashboard_Btn from "@/app/organization/dashboard/[id]/components/Dashboard_Btn";
import { useProf } from "../ProfContext";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { ProfContext } from "@/app/Type";
// type VoidFunc = () => void;

export default function SideBar() {
  const {
    handleProfile,
    isSlideBar,
    setIsSlideBar,
    handleWishList,
    handleMyEvents,
    handlemyTickets,
    handleSetting,
  } = useProf() as ProfContext;
  return (
    <div className="">
      <Dashboard>
        <div>
          <button
            className="lg:hidden block"
            onClick={() => setIsSlideBar(!isSlideBar)}
          >
            <div className="flex items-end  ">
              {isSlideBar ? (
                <HiArrowCircleLeft size={40} />
              ) : (
                <HiArrowCircleRight size={40} />
              )}
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start ">
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
      </Dashboard>
    </div>
  );
}
