"use client";
import { useState } from "react";

import React from "react";
import Profile from "@/components/Profile";
import SuperadminButton from "@/components/SuperadminButton";
import SuperadminPages from "@/components/SuperadminPages";
import Org_RequestHandle from "@/components/Org_RequestHandle";
import Available_Orgs from "@/components/Available_Orgs";
import Upcoming_Events from "@/components/Upcoming_Events";
import { Updock } from "next/font/google";
import PersonDetailsBar from "@/components/PersonDetailsBar";

export default function page() {
  const [component, setComponent] = useState(null);
  function clickButton(comp: any) {
    setComponent(comp);
  }
  return (
    <div>
      <div className="p-4 bg-gray-200 w-full">
        <div className="flex justify-end">
          <Profile picture={"User_cicrle"} name="Ashan dilz" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row mt-2">
        <div className="bg-gray-200 w-full md:w-1/4 lg:w-1/4 flex justify-center">
          <div className="flex flex-col w-3/4 ">
            <SuperadminButton
              onClick={() => clickButton("Notification")}
              text="Notificaton"
            />
            <SuperadminButton
              onClick={() => clickButton("Organization")}
              text="Organizations"
            />
            <SuperadminButton
              onClick={() => clickButton("Event")}
              text="Events"
            />
            <SuperadminButton
              onClick={() => clickButton("User")}
              text="Users"
            />
          </div>
        </div>
        <div className="sm:w-full md:w-3/4 lg:w-3/4 sm:p-4 ">
          {component === "Notification" && (
            <SuperadminPages
              title="All organization requests"
              description="You can see all the organizations that currently available from here"
              text="Search"
              customComponent={
                <Org_RequestHandle
                  OrgName={"Stein Studios"}
                  image={"image 1.png"}
                />
              }
            />
          )}
          {component === "Organization" && (
            <SuperadminPages
              title="All Organizations"
              description="You can see all the organizations that currently available from here"
              text="Search Organizations"
              customComponent={
                <Available_Orgs
                  OrgName={"Stein Studios"}
                  image={"image 1.png"}
                  noOfEvents={"34"}
                  noOfMembers={"12"}
                />
              }
            />
          )}
          {component === "Event" && (
            <SuperadminPages
              title="All Events"
              description="You can see all the events currently available from here."
              text="Search Events"
              customComponent={
                <Upcoming_Events
                  EventName="Nadagama"
                  image={"image 3.png"}
                  Location="Matara"
                  Date="12.05.2024"
                  Time="23.00"
                  Ratings={"2.45"}
                  buttonDesc={"Info"}
                />
              }
            />
          )}
          {component === "User" && (
            <SuperadminPages
              title="All Users"
              description="You can see all the users that currently available from here"
              text="Search Users"
              customComponent={
                <PersonDetailsBar
                  name="Ashan Dilsara"
                  email="ashandilsara@gmail.com"
                />
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
