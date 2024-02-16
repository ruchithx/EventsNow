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
    <div className="mt-48 grid col-span-1">
      <div className="bg-[#D9D9D9] h-[150px] md:h-[200px] lg:h-[258px] text-center font-mono font-medium ">
        <Image
          className=" rounded-full w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:h-[258px] lg:w-[258px] object-cover object-center border-[6px] border-white mx-auto  z-40 top-[-160px] "
          src={`/images/profile/${profilePic}`}
          width={258}
          height={258}
          alt="profile picture"
        />
        <div className="text-[#393939]  text-[22px] top-[-160px] py-1 ">
          {name}
        </div>
        <div className="text-[#6F6F6F] py-1 top-[-160px] ">{accountType}</div>
        <div className="py-1 text-[#393939] top-[-160px] ">{email}</div>
      </div>
    </div>
  );
}
