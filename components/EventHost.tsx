import Org_RequestHandle from "@/app/profile/components/Org_RequestHandle";
import React, { useState } from "react";

interface btn {
  btn1: string;
  btn2: string;
}

export default function ToggleButtons({ btn1, btn2 }: btn) {
  const [btnState, setBtnState] = useState(1);

  const handleToggle = (selectedBtn: number) => {
    setBtnState(selectedBtn);
  };

  return (
    <>
      <div className="bg-initial ml-12 m-4 w-2/3 whitespace-nowrap h-full p-2 text-sm font-semibold font-IBM rounded-2xl flex items-center justify-between">
        <button
          className={`${
            btnState === 1
              ? "bg-custom-orange text-white"
              : "bg-transparent text-custom-orange"
          } rounded-2xl text-center uppercase flex-1 h-full p-1`}
          onClick={() => handleToggle(1)}
        >
          {btn1}
        </button>
        <button
          className={`${
            btnState === 2
              ? "bg-custom-orange text-white"
              : "bg-transparent text-custom-orange"
          } rounded-2xl text-center uppercase flex-1 h-full p-1`}
          onClick={() => handleToggle(2)}
        >
          {btn2}
        </button>
      </div>

      <div className="m-4 p-2 font-IBM rounded-2xl flex flex-col md:flex-row text-center wrap whitespace-nowrap grid grid-cols-5">
        {btnState === 1 && (
          <Org_RequestHandle OrgName={"Amna"} image={"././image 1.png"} />
        )}

        {btnState === 2 && (
          <>
            <Org_RequestHandle OrgName={"Amna"} image={"././image 1.png"} />
          </>
        )}
      </div>
    </>
  );
}
