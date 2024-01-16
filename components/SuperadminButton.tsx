"use client";
import React from "react";

interface superadminbutton {
  onClick: () => void;
  text: string;
}

export default function SuperadminButton({ onClick, text }: superadminbutton) {
  return (
    <button
      onClick={onClick}
      className=" w-full px-[70px] hover:opacity-80  flex justify-center items-center  h-12   rounded-lg bg-custom-admin my-12 mt-4"
    >
      <div className=" font-sans text-center	text-base font-semibold text-custom-gray  leading-normal">
        {text}
      </div>
    </button>
  );
}
