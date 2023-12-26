import React from "react";
import Image from "next/image";
interface bestpost {
  title: String;
  description: String;
  image: String;
  year: String;
}
export default function BestPost({
  title,
  description,
  image,
  year,
}: bestpost) {
  return (
    <div className="bg-custom-lightorange p-8 w-96 filter drop-shadow-xl">
      <div className="flex flex-col items-center bg-myBrown pl-4 pb-2">
        <Image
          className="flex justify-center  "
          src={`/ReUsableComponentData/${image}`}
          alt="Picture of the button"
          width={360}
          height={460}
        />
      </div>
      <div className="flex flex-row justify-evenly mt-8 mb-8 ">
        <div className="text-myBrown text-2xl font-mono font-semibold">
          {title}
        </div>
        <button className="bg-myBrown text-white rounded-md pl-4 pr-4 ">
          {year}
        </button>
      </div>
      <div className="p-4 text-lg font-normal text-center">{description}</div>
    </div>
  );
}
