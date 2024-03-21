"use client";
import Image from "next/image";
import React from "react";

interface EventDashButtonProps {
  onClick: () => void;
  text: string;
  img: string;
  isSlideBar: boolean;
}

export default function EventDashButton({
  onClick,
  isSlideBar,
  text,
  img,
}: EventDashButtonProps) {
  return (
    <button onClick={onClick} className="  hover:opacity-80  my-12 mt-2">
      <div className=" flex lg:gap-3 xl:gap-5 gap-5	">
        <Image
          src={`/images/eventDash/${img}`}
          alt="team"
          width={24}
          height={24}
        />

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
