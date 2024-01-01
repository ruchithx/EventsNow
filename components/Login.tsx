import Image from "next/image";
import React from "react";
interface log {
  titleOfbutton: String;
  image: String;
  fn: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Login({ image, titleOfbutton, fn }: log) {
  return (
    <button onClick={fn} className={`bg-custom-orange w-28 p-2 rounded-2xl`}>
      <div className="flex flex-row ml-1 justify-center">
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
