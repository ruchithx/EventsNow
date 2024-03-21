import React from "react";
import Image from "next/image";

interface CoverPhotoProps {
  image: String;
}

export default function CoverPhoto({ image }: CoverPhotoProps) {
  return (
    <div className="overflow-hidden xl:w-[71rem]  md:w-[57rem] sm:w-full ">
      <Image
        // src={"/images/event/HostPage/cover2.jpg"}
        src={`${image}`}
        alt="hay"
        width={1000}
        height={100}
        // className="w-[3500px] h-[2161px]"

        className="w-full h-screen object-cover"
      />
    </div>
  );
}
