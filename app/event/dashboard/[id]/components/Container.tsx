"use client";
import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className=" flex flex-col  pl-8 shadow-3xl bg-[#FCFCFD] rounded-lg  text-center  ">
      <div className=" grid-rows-8 mt-5 gap-3 flex flex-col ">{children}</div>
    </div>
  );
}
