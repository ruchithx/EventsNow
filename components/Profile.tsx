import React from "react";
import Image from "next/image";

interface NavBarButton {
  name?: string;
  picture: string;
}

export default function Profile({ name, picture }: NavBarButton) {
  return (
    <div>
      <div className="flex   items-center justify-end">
        <Image
          src={`/ReUsableComponentData/${picture}.svg`}
          alt="profile picture"
          width={40}
          height={10}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
