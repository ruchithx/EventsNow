"use client";
import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import { useOrg } from "../OrgContext";
import Image from "next/image";

export default function CheckActive() {
  const { isActive } = useOrg();
  return (
    <div>
      {isActive ? (
        <div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <SideBar />
            </div>
            <div className="col-span-3">{<Content />} </div>
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
