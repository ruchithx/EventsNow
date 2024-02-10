import React from "react";
import Image from "next/image";

interface NavBarButton {
  name?: string;
  picture: string;
}

const Profile = ({ name, picture }: NavBarButton) => {
  return (
    <div>
      <div className="flex   items-center justify-end">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/eventsnow-fb0ee.appspot.com/o/eventCover-Flashback?alt=media&token=6f6021ae-dd93-4d5c-931c-9dc50ae5dd4f"
          alt="profile picture"
          width={40}
          height={10}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Profile;
