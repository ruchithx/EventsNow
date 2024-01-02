import React from "react";
interface Bar {
  name: String;
}

export default function ProfileBar({ name }: Bar) {
  return (
    <div className="p-2 my-2  bg-navWhite rounded-xl border ">
      <button className=" flex justify-center items-center w-full hover:font-bold ">
        {name}
      </button>
    </div>
  );
}
