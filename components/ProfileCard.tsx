import Image from "next/image";
import React from "react";

interface ProfileCard {
  profilePic: string;
  name: string;
  accountType: string;
  email: string;
}

export default function ProfileCard({
  profilePic,
  name,
  accountType,
  email,
}: ProfileCard) {
  return (
    <div className="mt-48">
      <div className="bg-[#D9D9D9] w-[400px] h-[254px] text-center font-mono font-medium ">
        <Image
          className=" rounded-full w-[258px] h-[258px] object-cover object-center border-[6px] border-white mx-auto relative z-40 top-[-160px] "
          src={`/${profilePic}`}
          width={258}
          height={258}
          alt="profile picture"
        />
        <div className="text-[#393939]  text-[22px] top-[-160px] py-1 relative">
          {name}
        </div>
        <div className="text-[#6F6F6F] py-1 top-[-160px] relative">
          {accountType}
        </div>
        <div className="py-1 text-[#393939] top-[-160px] relative">{email}</div>
      </div>
    </div>
  );
}
