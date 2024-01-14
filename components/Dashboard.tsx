"use client";

import React from "react";

interface Event_navbar {
  children: any;
}

export default function Dashboard({ children }: Event_navbar) {
  return (
    <div className=" w-full  bg-dashboard  py-9 text-center  ">
      <div className="grid-rows-8">{children}</div>
    </div>
  );
}
