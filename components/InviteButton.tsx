import React from "react";
import Image from "next/image";
export default function InviteButton() {
  return (
    <div className="flex gap-10 justify-center items-center ">
      <div className="flex flex-row border-2 border-gray-400 bg-white rounded-lg md:w-52 lg:w-72  h-10">
        <Image
          src="/ReUsableComponentData/Search (1).svg"
          width={20}
          height={14}
          alt="search"
          className="bg-white ms-2"
        />
        <input
          type="text"
          placeholder={"Search by email"}
          className="flex-1 focus:outline-none rounded-lg text-xs ms-2 "
        />
      </div>
      <button
        className={`bg-custom-orange  h-9 lg:w-20 w-16 lg:rounded-full rounded-xl`}
      >
        <div className="flex text-white lg:text-md md:text-xs font-bold justify-center">
          Invite
        </div>
      </button>
    </div>
  );
}
