"use client";
import React from "react";

interface Event_Dashboard_Btn {
  onClick: () => void;
  text: string;
}

export default function Event_Dashboard_Btn({
  onClick,
  text,
}: Event_Dashboard_Btn) {
  return (
    <button
      onClick={onClick}
      className=" w-full px-[70px] hover:opacity-80  flex justify-center items-center  h-12   rounded-lg bg-navWhite my-12 mt-4"
    >
      <div className=" font-sans text-center	text-base font-semibold text-[#696969]  leading-normal">
        {text}
      </div>
    </button>
  );
}
