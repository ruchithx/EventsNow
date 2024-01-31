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
      <div className="bg-initial  w-full mt-7 font-semibold font-khand rounded-2xl items-center flex flex-col md:flex-row">
        <div
          className={`${
            btnState === 1 ? "bg-custom-orange" : "bg-transparent"
          } mb-3 md:mb-0 md:mr-3 p-2 rounded-2xl flex-1 w-full`}
        >
          <button
            className={`${
              btnState === 1
                ? "bg-custom-orange text-white"
                : "bg-transparent text-custom-orange"
            } rounded-2xl w-full uppercase`}
            onClick={() => handleToggle(1)}
          >
            {btn1}
          </button>
        </div>
        <div
          className={`${
            btnState === 2 ? "bg-custom-orange" : "bg-transparent"
          } p-2 rounded-2xl flex-1 w-full`}
        >
          <button
            className={`${
              btnState === 2
                ? "bg-custom-orange text-white"
                : "bg-transparent text-custom-orange"
            } rounded-2xl w-full uppercase`}
            onClick={() => handleToggle(2)}
          >
            {btn2}
          </button>
        </div>
      </div>
      <div className="bg-white  mt-7   w-full p-2  font-khand rounded-2xl items-center flex flex-col md:flex-row">
        {btnState === 1 && (
          <Org_RequestHandle OrgName={"Amna"} image={"././image 1.png"} />
        )}

        {btnState === 2 && (
          <h2>
            Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Sed nisi eaque
            maxime fuga perferendis esse distinctio deleniti mollitia, neque
            pariatur enim illum! Eveniet, suscipit corrupti tempore velit
            officiis repellendus labore! hhhh
          </h2>
        )}
      </div>
    </>
  );
}
