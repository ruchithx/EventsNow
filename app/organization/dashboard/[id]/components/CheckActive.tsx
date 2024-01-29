"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import { useOrg } from "../OrgContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { HiAdjustments } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { AiOutlineRightCircle } from "react-icons/ai";
import { BiArrowFromLeft } from "react-icons/bi";
import { BiArrowFromRight } from "react-icons/bi";

import { MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import { Item } from "@/components/NavBar";
import { AiOutlineCloseCircle } from "react-icons/ai";
import EmptyStateComponent from "@/components/EmptyStateComponent";
import OrganizationRequestPending from "@/components/OrganizationRequestPending";
import DashboardDetails from "@/app/organization/dashboard/[id]/components/DashboardDetails";
import Dashboard_Btn from "@/app/organization/dashboard/[id]/components/Dashboard_Btn";

export default function CheckActive() {
  const params = useParams();

  const {
    isActive,
    setIsActive,
    isSlideBar,
    handleDashboard,
    handleMyEvent,
    handleMyTeam,
    handleReport,
    isDashboardOpen,
    setIsDashboardOpen,
  } = useOrg();

  useEffect(function () {
    async function getData() {
      const res = await fetch(
        `http://localhost:3000/api/v1/organization/getOrganization`,
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(params.id),
        }
      );

      if (!res.ok) {
        console.log("error of fetch function");
        return;
      }

      const { organization } = await res.json();

      if (!organization) {
        return;
      }
      setIsActive(organization.isActive);
    }
    getData();
  }, []);

  return (
    <div>
      {isActive ? (
        <div>
          <div className="grid grid-cols-12 gap-5 md:gap-2 lg:gap-2 xl:gap-5">
            <div
              className={`lg:col-span-2  md:block hidden ${
                isSlideBar
                  ? "md:col-span-3 md:ml-2  col-span-4"
                  : "md:col-span-1  col-span-2"
              }`}
            >
              <SideBar />
              {/* <div className="flex h-screen items-center gap-10 flex-col py-5 w-12 bg-black">
                <Image
                  src={`/Dashboard.svg`}
                  alt="team"
                  width={24}
                  height={24}
                />
                <Image src={`/event.svg`} alt="team" width={24} height={24} />
                <Image src={`/report.svg`} alt="team" width={24} height={24} />
                <Image src={`/Team.svg`} alt="team" width={24} height={24} />
              </div> */}
            </div>

            <div
              className={`lg:col-span-7 col-span-12  ${
                isSlideBar ? "md:col-span-6 " : "md:col-span-8 "
              }`}
            >
              <Content />
            </div>
            <div
              className={`lg:col-span-3 md:block hidden
             ${isSlideBar ? "md:col-span-3 md:mr-2 " : "md:col-span-3  "}`}
            >
              <DashboardDetails />
            </div>
          </div>

          <div
            className={`fixed ${
              isDashboardOpen ? "left-[65%]" : "left-0"
            }  top-40`}
          >
            <button onClick={() => setIsDashboardOpen(!isDashboardOpen)}>
              <div className="mr-5 h-10  md:hidden  flex justify-center items-center rounded-full   ">
                {isDashboardOpen ? (
                  <BiArrowFromRight size={25} />
                ) : (
                  <BiArrowFromLeft size={25} />
                )}
              </div>
            </button>
          </div>
          <div>
            <div
              className={
                isDashboardOpen
                  ? "absolute shadow-2xl flex flex-col  left-0 top-20 w-[65%] sm:hidden h-screen bg-[#ecf0fc] p-5 ease-in duration-50"
                  : "fixed left-[100%] top-0 p-10 ease-in duration-50"
              }
            >
              <Dashboard_Btn
                isSlideBar={isSlideBar}
                img="Dashboard.svg"
                text="Dashboard"
                onClick={() => handleDashboard()}
              />
              <Dashboard_Btn
                isSlideBar={isSlideBar}
                img="event.svg"
                text="Events"
                onClick={() => handleMyEvent()}
              />
              <Dashboard_Btn
                isSlideBar={isSlideBar}
                img="report.svg"
                text="Report"
                onClick={() => handleReport()}
              />
              <Dashboard_Btn
                isSlideBar={isSlideBar}
                img="Team.svg"
                text="Team"
                onClick={() => handleMyTeam()}
              />
              {/* <div className="flex flex-col py-6 text-black">
                <ul>
                  <Item fn={handleDashboard} text="Dashboard"></Item>
                  <Item fn={handleMyEvent} text="My event"></Item>
                  <Item fn={handleMyTeam} text="My team"></Item>
                  <Item fn={handleReport} text="Reports"></Item>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <OrganizationRequestPending message="decision pending " />
      )}
    </div>
  );
}