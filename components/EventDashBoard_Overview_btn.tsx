import Image from "next/image";
import React from "react";

interface EventDashBoard {
  description: String;
  image: String;
}

export default function EventDashBoard_Overview_btn({
  description,
  image,
}: EventDashBoard) {
  return (
    <div className="bg-black text-white w-52 p-3 ">
      <div className="flex flex-col	justify-center items-center gap-2">
        <Image
          src={`/reusableComponent/${image}`}
          alt="Picture of the author"
          width={50}
          height={100}
        />
        <div>
          <div>{description}</div>
          <div>View details</div>
        </div>
      </div>
    </div>
  );
}
