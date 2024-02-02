import React from "react";
import Image from "next/image";
export default function InviteButton() {
  return (
    <div className="flex gap-10 p-10 ">
      <div className="flex flex-row border-2 border-gray-400 bg-white rounded-lg w-72  h-10">
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
      <button className={`bg-custom-orange  p-1 w-24 rounded-full`}>
        <div className="flex text-white text-md font-bold justify-center">
          Invite
        </div>
      </button>
    </div>
  );
}
