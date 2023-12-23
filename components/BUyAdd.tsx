import config from "@/tailwind.config";
import Image from "next/image";
import React from "react";
interface buyadd {
  Description1: String;
  Description2: String;
  image1: String;
  image2: String;
  bgcolors0: String;
  bgcolors1: String;
}
export default function BUyAdd({
  image1,
  image2,
  Description1,
  Description2,
  bgcolors1,
  bgcolors0,
}: buyadd) {
  return (
    <button className="flex flex-row justify-center text-white ">
      <div
        className={`flex justify-center w-32 ${bgcolors0} text-white font-semibold rounded-s-lg p-1`}
      >
        <Image
          className=" mr-4"
          src={`/ReUsableComponentData/${image1}`}
          alt="Picture of the button"
          width={30}
          height={30}
        />
        {Description1}
      </div>
      <div
        className={`flex justify-center w-32 ${bgcolors1} text-white font-semibold rounded-e-lg p-1`}
      >
        <Image
          className="mr-4"
          src={`/ReUsableComponentData/${image2}`}
          alt="Picture of the button"
          width={30}
          height={30}
        />
        {Description2}
      </div>
    </button>
  );
}
