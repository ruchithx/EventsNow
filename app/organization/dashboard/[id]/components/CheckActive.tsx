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

import { MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import { Item } from "@/components/NavBar";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CheckActive() {
  const params = useParams();

  const {
    isActive,
    setIsActive,
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
          <div className="md:grid  md:grid-cols-4">
            <div className="md:col-span-1  md:block hidden ">
              <SideBar />
            </div>

            <div className="md:col-span-3">
              <Content />
            </div>
          </div>
          <div className="fixed -right-9 top-20">
            <button onClick={() => setIsDashboardOpen(true)}>
              <div className="mr-5 h-10  md:hidden  flex justify-center items-center rounded-full   bg-custom-orange">
                <HiOutlineGlobeAlt size={30} />
              </div>
            </button>
          </div>
          <div>
            <div
              className={
                isDashboardOpen
                  ? "fixed shadow-2xl  left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0fc] p-5 ease-in duration-50"
                  : "fixed left-[100%] top-0 p-10 ease-in duration-50"
              }
            >
              <div className="w-full flex items-center justify-end ">
                <div className="cursor-pointer ">
                  <button onClick={() => setIsDashboardOpen(false)}>
                    <AiOutlineCloseCircle size={25} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col py-6 text-black">
                <ul>
                  <Item fn={handleDashboard} text="Dashboard"></Item>
                  <Item fn={handleMyEvent} text="My event"></Item>
                  <Item fn={handleMyTeam} text="My team"></Item>
                  <Item fn={handleReport} text="Reports"></Item>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20">
          <Image
            src="/ReUsableComponentData/Bean Eater-1s-200px.svg"
            alt="Loader"
            width={50}
            height={50}
          />
          <div>Your requst is pending</div>
        </div>
      )}
    </div>
  );
}
