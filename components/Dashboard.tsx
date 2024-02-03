"use client";

function overview() {}
function hostpage() {}
function team() {}
function report() {}
function campaign() {}
function settings() {}
function tickets() {}

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
