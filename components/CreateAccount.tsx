import React from "react";

interface CreateAccount {
  Description: String;
}

export default function CreateAccount({ Description }: CreateAccount) {
  return (
    <button className={`w-52 p-1 rounded-lg bg-custom-orange`}>
      <div className="flex justify-center text-white font-bold">
        {Description}
      </div>
    </button>
  );
}
