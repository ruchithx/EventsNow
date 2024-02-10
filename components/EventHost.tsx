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
      <div className="bg-initial m-4 h-16 p-2 font-semibold font-IBM rounded-2xl flex text-center whitespace-nowrap">
        <div
          className={`${
            btnState === 1 ? "bg-custom-orange" : "bg-transparent"
          } mr-3 p-2 rounded-2xl flex-1 whitespace-nowrap`}
        >
          <button
            className={`${
              btnState === 1
                ? "bg-custom-orange text-white"
                : "bg-transparent text-custom-orange"
            } rounded-2xl text-center uppercase w-full h-full`}
            onClick={() => handleToggle(1)}
          >
            {btn1}
          </button>
        </div>
        <div
          className={`${
            btnState === 2 ? "bg-custom-orange" : "bg-transparent"
          } p-2 rounded-2xl flex-1 whitespace-nowrap`}
        >
          <button
            className={`${
              btnState === 2
                ? "bg-custom-orange text-white"
                : "bg-transparent text-custom-orange"
            } rounded-2xl text-center uppercase w-full h-full`}
            onClick={() => handleToggle(2)}
          >
            {btn2}
          </button>
        </div>
      </div>
      <div className="m-4 p-2 font-IBM rounded-2xl flex flex-col md:flex-row text-center wrap whitespace-nowrap grid grid-cols-5">
        {btnState === 1 && (
          <Org_RequestHandle OrgName={"Amna"} image="PictureOfaSinger.png" />
        )}

        {btnState === 2 && (
          <>
            <Org_RequestHandle OrgName={"Amna"} image="PictureOfaSinger.png" />

            <h1>Hiiiii</h1>
          </>
        )}
      </div>
    </>
  );
}
