import React from "react";

interface CreateAccount {
  Description: String;
  bgcolors: String;
}

export default function CreateAccount({
  bgcolors,
  Description,
}: CreateAccount) {
  return (
    <button className={`w-52 p-1 rounded-lg ${bgcolors}`}>
      <div className="flex justify-center text-white font-bold">
        {Description}
      </div>
    </button>
  );
}
