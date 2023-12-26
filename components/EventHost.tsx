import React, { useState } from "react";

export default function ToggleButtons() {
  const [btnState, setBtnState] = useState(true);

  const handleToggle = () => {
    setBtnState((prevState) => !prevState);
  };

  return (
    <div className="bg-initial m-4 md:w-1/2 lg:w-1/4 p-2 font-semibold font-khand rounded-2xl text-center">
      <div className="flex">
        <div
          className={`${
            btnState ? "bg-custom-orange" : "bg-transparent"
          } flex-1 mr-3 p-2 rounded-l-2xl`}
        >
          <button
            className={`${
              btnState
                ? "bg-custom-orange text-white"
                : "bg-transparent text-custom-orange"
            } rounded-l-2xl rounded-r-none px-4 py-2 uppercase w-full`}
            onClick={handleToggle}
          >
            Event Host
          </button>
        </div>
        <div
          className={`${
            !btnState ? "bg-custom-orange" : "bg-transparent"
          } flex-1 p-2 rounded-r-2xl`}
        >
          <button
            className={`${
              btnState
                ? "bg-transparent text-custom-orange"
                : "bg-custom-orange text-white"
            } rounded-r-2xl rounded-l-none px-4 py-2 uppercase w-full`}
            onClick={handleToggle}
          >
            Community
          </button>
        </div>
      </div>
    </div>
  );
}
