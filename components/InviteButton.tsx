import React from "react";

export default function InviteButton() {
  return (
    <div className="flex gap-10 ">
      <input
        type="text"
        placeholder={` Search by email `}
        className="border-2  rounded-lg border-zinc-100 focus:outline-none focus:ring focus:ring-violet-100	"
      />
      <button className={`bg-custom-green p-1 w-20 rounded`}>
        <div className="flex text-white text-sm font-bold justify-center">
          Invite
        </div>
      </button>
    </div>
  );
}
