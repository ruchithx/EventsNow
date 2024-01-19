import React, { useState } from "react";

export default function ToggleButtons({
  btn1,
  btn2,
}: {
  btn1: string;
  btn2: string;
  onClick: () => void;
}) {
  const [btnState, setBtnState] = useState(true);

  const handleToggle = () => {
    setBtnState((prevState) => !prevState);
  };

  return (
    <div className="bg-initial m-4 auto h-15 p-2 font-semibold font-khand rounded-2xl flex text-center whitespace-nowrap ">
      <div
        className={`${
          btnState ? "bg-custom-orange" : "bg-transparent"
        } mr-3 p-2 rounded-2xl flex-1 whitespace-nowrap`}
      >
        <button
          className={`${
            btnState
              ? "bg-custom-orange text-white "
              : "bg-transparent text-custom-orange"
          }  rounded-2xl  text-center  uppercase w-full whitespace-nowrap`}
          onClick={handleToggle}
        >
          {btn1}
        </button>
      </div>
      <div
        className={`${
          !btnState ? "bg-custom-orange" : "bg-transparent"
        } text-custom-orange p-2 rounded-2xl flex-1 whitespace-nowrap`}
      >
        <button
          className={`${
            btnState
              ? "bg-transparent text-custom-orange  "
              : " bg-custom-orange  text-white "
          }  rounded-2xl  text-center  uppercase w-full whitespace-nowrap`}
          onClick={handleToggle}
        >
          {btn2}
        </button>
      </div>
    </div>
  );
}
