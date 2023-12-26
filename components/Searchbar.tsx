import React from "react";
import Image from "next/image";
interface searchbar {
  image: String;
}
export default function Searchbar({ image }: searchbar) {
  return (
    <div className="flex flex-row justify-between w-60 p-2 rounded-md">
      <Image
        src={`/ReUsableComponentData/${image}`}
        alt="Picture of the button"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder="Search event"
        className="border-white outline-none"
      />
    </div>
  );
}
