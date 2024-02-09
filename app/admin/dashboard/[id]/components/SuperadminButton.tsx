"use client";
import React from "react";

interface Dashboard_Btn {
  onClick?: () => void;
  text: string;
  icon: JSX.Element;
}

export default function Dashboard_Btn({ onClick, text, icon }: Dashboard_Btn) {
  return (
    <div
      className="flex flex-row w-52 mb-12 sm:ms-12 md:ms-20 lg:ms-12  "
      onClick={onClick}
    >
      <div className="mt-1">{icon}</div>

      <div className="sm:flex font-sans lg:text-base md:text-sm text-sm font-semibold text-gray-600 leading-normal ml-2 hover:text-black">
        {text}
      </div>
    </div>
  );
}
