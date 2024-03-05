import Image from "next/image";
import React from "react";

interface ProfileCard {
  profilePic: string;
  name: string;
  teamCount: number;
  eventCount: number;
}

function ProfCard({ profilePic, name, eventCount, teamCount }: ProfileCard) {
  return (
    <div className="border-2 flex flex-col justify-start items-start text-gray-700  bg-clip-border rounded-xl lg:w-full w-11/12 mt-5  bg-white ">
      <div className=" mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-fit">
        <Image
          src={`${profilePic}`}
          width={258}
          height={248}
          alt="profile picture"
        />
      </div>
      <div className="p-4  ">
        <h4 className="block mb-2 font-sans lg:text-2xl text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>

        <p className="flex flex-col items-start mb-2 font-sans lg:text-2xl text-sm antialiased  leading-snug tracking-normal text-black">
          <div className="md:text-sm lg:text-base font-medium	 flex justify-center items-center  gap-2">
            <Image
              src="/images/organization/TeamOfUsers.svg"
              alt="user count"
              width={30}
              height={30}
            />
            User Count -{teamCount}
          </div>
          <div className="md:text-sm lg:text-base font-medium	 flex justify-center items-center gap-3">
            <Image
              src="/images/organization/Bookmark_light.svg"
              alt="user count"
              width={26}
              height={26}
            />
            Event Count -{eventCount}
          </div>
        </p>
      </div>
    </div>
  );
}

export default ProfCard;
