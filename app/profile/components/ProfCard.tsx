import Image from "next/image";
import React from "react";

interface ProfileCard {
  profilePic: string;
  name: string;
  accountType: string;
  email: string;
}

function ProfCard({ profilePic, name, accountType, email }: ProfileCard) {
  return (
    <div className="relative flex flex-col text-gray-700  bg-clip-border rounded-xl w-fit mt-5  bg-white ">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-fit">
        <Image
          src={`/${profilePic}`}
          width={258}
          height={248}
          alt="profile picture"
        />
      </div>
      <div className="pt-6 text-center  ">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block mb-2 font-sans text-lg antialiased  leading-snug tracking-normal text-gray-500">
          {accountType}
        </p>
        <p className="block mb-2 font-sans text-md antialiased  leading-snug tracking-normal text-black">
          {email}
        </p>
      </div>
    </div>
  );
}

export default ProfCard;
