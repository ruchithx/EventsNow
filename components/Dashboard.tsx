"use client";

function overview() {
  console.log("Direct to the overview");
}
function hostpage() {
  console.log("Direct to the host page");
}
function team() {
  console.log("Direct to the Team details");
}
function report() {
  console.log("Direct to the repots");
}
function campaign() {
  console.log("Direct to the campaign details");
}
function settings() {
  console.log("Direct to the setttings");
}
function tickets() {
  console.log("Direct to the Ticket purchases");
}

import React from "react";

interface Event_navbar {
  children: any;
}

export default function Event_Dashboard_Nav_bar({ children }: Event_navbar) {
  return (
    <div className=" w-full   py-9 text-center  ">
      <div className="grid-rows-8">{children}</div>
    </div>
  );
}
