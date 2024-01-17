import React from "react";
import Image from "next/image";

interface NavBarButton {
  name: string;
  picture: string;
}

export default function Profile({ name, picture }: NavBarButton) {
  return (
    <div>
      <button className="flex gap-4  items-center justify-end">
        <Image
          src={`/ReUsableComponentData/${picture}.svg`}
          alt="profile picture"
          width={40}
          height={10}
          className="rounded-full"
        />
        <div>
          <div className="text-profileName text-18  font-Inter">{name}</div>
        </div>
      </button>
    </div>
  );
}
