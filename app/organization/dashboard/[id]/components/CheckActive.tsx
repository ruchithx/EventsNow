"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import { useOrg } from "../OrgContext";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CheckActive() {
  const params = useParams();

  const { isActive, setIsActive } = useOrg();

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
          <div className="grid grid-cols-4">
            <div className="col-span-1 md:block hidden ">
              <SideBar />
            </div>
            <div className="col-span-3">
              <Content />
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
