"use client";
import Image from "next/image";
import React from "react";

interface Dashboard_Btn {
  onClick?: () => void;
  text?: string;
  img: string;
  isSlideBar?: boolean;
}

export default function Dashboard_Btn({
  onClick,
  isSlideBar,
  text,
  img,
}: Dashboard_Btn) {
  return (
    <button onClick={onClick} className="  hover:opacity-80  my-12 mt-2 ">
      <div className=" flex lg:gap-3 xl:gap-5 gap-5	">
        <Image src={`/${img}`} alt="team" width={24} height={24} />

        {isSlideBar ? (
          <div className=" font-sans  text-center text-base font-semibold text-black  leading-normal">
            {text}
          </div>
        ) : (
          ""
        )}
      </div>
    </button>
  );
}
