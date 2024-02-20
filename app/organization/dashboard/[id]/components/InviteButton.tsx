import React, { useState } from "react";

import Image from "next/image";

export default function InviteButton() {
  const [email, setEmail] = useState<string>("");

  function handleclick() {}

  return (
    <div className="flex gap-10 p-10">
      <div className="flex flex-row border-2 border-gray-400 bg-white rounded-lg w-72 h-10">
        <Image
          src="/images/reusableComponents/Search (1).svg"
          width={20}
          height={14}
          alt="search"
          className="bg-white ms-2"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder={"Search by email"}
          className="flex-1 focus:outline-none rounded-lg text-xs ms-2 "
        />
      </div>
      <button
        className={`bg-custom-green p-1 w-20 rounded`}
        onClick={handleclick}
      >
        <div className="flex text-white text-sm font-bold justify-center">
          Invite
        </div>
      </button>
    </div>
  );
}
