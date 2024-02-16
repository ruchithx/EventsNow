import config from "@/tailwind.config";
import Image from "next/image";
import React from "react";

export default function BUyAdd() {
  return (
    <button className="flex flex-row justify-center text-white ">
      <div className="flex justify-center w-32 bg-custom-orange text-white font-semibold rounded-s-lg p-1">
        <Image
          className=" mr-4"
          src={`/images/reusableComponents/CorrectionMark.svg`}
          alt="Picture of the button"
          width={30}
          height={30}
        />
        Buy Tickets
      </div>
      <div className="flex justify-center w-32 bg-custom-blue text-white font-semibold rounded-e-lg p-1">
        <Image
          className="mr-4"
          src={`/images/reusableComponents/Paper_fill.svg`}
          alt="Picture of the button"
          width={30}
          height={30}
        />
        Add to wishlist
      </div>
    </button>
  );
}
