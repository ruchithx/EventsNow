import React from "react";
import Image from "next/image";

interface NavBarButton {
  name?: string;
  picture: string;
}

export default function Profile({ name, picture }: NavBarButton) {
  return (
    <div>
      <button className="flex   items-center justify-end">
        <Image
          src={`/images/Profile/${picture}.svg`}
          alt="profile picture"
          width={40}
          height={10}
          className="rounded-full"
        />
      </button>
    </div>
  );
}
