import React from "react";
interface Invite {
  bgcolors: String;
  Description: String;
}
export default function InviteButton({ bgcolors, Description }: Invite) {
  return (
    <button className={`${bgcolors} p-1 w-20 rounded`}>
      <div className="flex text-white text-sm font-bold justify-center">
        {Description}
      </div>
    </button>
  );
}
