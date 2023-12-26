import React, { useState } from "react";

export default function ToggleButtons() {
  const [btnState, setBtnState] = useState(true);

  const handleToggle = () => {
    setBtnState((prevState) => !prevState);
  };

  return (

    <div className="bg-initial m-4 w-1/4 h-15 p-2 font-semibold font-khand rounded-2xl flex text-center">
      <div
        className={`${
          btnState ? "bg-custom-orange" : "bg-transparent"
        } mr-3 p-2 rounded-2xl w-1/2`}
      >
        <button
          className={`${
            btnState
              ? "bg-custom-orange text-white "
              : "bg-transparent text-custom-orange"
          }  rounded-2xl  text-center  uppercase `}
          onClick={handleToggle}
        >
          Event Host
        </button>
      </div>
      <div
        className={`${
          !btnState ? "bg-custom-orange" : "bg-transparent"
        } text-custom-orange p-2 w-1/2 rounded-2xl`}
      >
        <button
          className={`${
            btnState
              ? "bg-transparent text-custom-orange  "
              : " bg-custom-orange  text-white "
          }  rounded-2xl  text-center  uppercase `}
          onClick={handleToggle}
        >
          Community
        </button>

      </div>
    </div>
  );
}
