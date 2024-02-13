import React from "react";
import Image from "next/image";

interface NavBarButton {
  name?: string;
  picture: string;
}

const Profile = ({ name, picture }: NavBarButton) => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <Image
          src={picture}
          alt="profile picture"
          width={32}
          height={10}
          className="rounded-full w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Profile;
