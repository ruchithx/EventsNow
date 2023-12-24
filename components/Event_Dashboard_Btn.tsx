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
      className=" w-[306.14px] w-96 h-12 rounded-lg bg-[#A986A9] mx-9 mt-9"
    >
      <div className=" font-sans	text-base font-semibold text-white leading-normal">
        {text}
      </div>
    </button>
  );
}
