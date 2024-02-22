import React from "react";
import Image from "next/image";
interface viewdetails {
  image: String;
  Description: String;
}
export default function ViewDetailsButton({ image, Description }: viewdetails) {
  return (
    <div className="w-48 rounded-md bg-white p-4">
      <div className="flex justify-center">
        <Image
          src={`/images/reusableComponents/viewDetails.svg`}
          alt="Picture of the button"
          width={50}
          height={50}
        />
      </div>
      <div className="justify-start text-gray-800 ms-4">
        <div className="font-normal">{Description}</div>
        <div className="font-light">View Details</div>
      </div>
    </div>
  );
}
