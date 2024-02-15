"use client";

import React from "react";

interface Event_navbar {
  children: React.ReactNode;
}

export default function Dashboard({ children }: Event_navbar) {
  return (
    <div className=" flex flex-col  items-center shadow-3xl bg-[#FCFCFD] rounded-lg py- text-center  ">
      <div className=" grid-rows-8 mt-5 gap-3 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
