import Image from "next/image";
import React from "react";
interface log {
  bgcolors: String;
  titleOfbutton: String;
  image: String;
}

export default function Login({ image, titleOfbutton, bgcolors }: log) {
  return (
    <button className={`${bgcolors} w-28 p-2 rounded-2xl`}>
      <div className="flex flex-row ml-1" justify-center>
        <Image
          src={`/ReUsableComponentData/${image}`}
          alt="Picture of the button"
          width={20}
          height={20}
        />
        <div className=" text-white text-sm font-bold ml-2">
          {titleOfbutton}
        </div>
      </div>
    </button>
  );
}
