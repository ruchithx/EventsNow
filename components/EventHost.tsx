import MyEventCard from "@/app/profile/[...id]/components/MyEventCard";
import React, { useState } from "react";
// import MyEventCard from "@/app/profile/components/MyEventCard";

function ToggleButtons({ btn1, btn2 }: { btn1: string; btn2: string }) {
  const [btnState, setBtnState] = useState(1);

  const handleToggle = (selectedBtn: number) => {
    setBtnState(selectedBtn);
  };

  return (
    <div className="flex flex-col items-center font-IBM pr-4">
      <div className="bg-initial rounded-2xl m-4  md:w-2/2 flex items-center justify-center ">
        <button
          className={`${
            btnState === 1
              ? "bg-custom-orange text-white"
              : "bg-transparent text-custom-orange"
          } rounded-2xl text-center whitespace-nowrap uppercase w-full md:w-2/3 p-3 `}
          onClick={() => handleToggle(1)}
        >
          {btn1}
        </button>
        <button
          className={`${
            btnState === 2
              ? "bg-custom-orange text-white"
              : "bg-transparent text-custom-orange"
          } rounded-2xl text-center whitespace-nowrap uppercase w-full md:w-2/3 p-3`}
          onClick={() => handleToggle(2)}
        >
          {btn2}
        </button>
      </div>
      <div className="m-4 p-2 font-IBM rounded-2xl bg-white grid grid-cols-1 gap-4">
        {btnState === 1 && (
          <>
            <MyEventCard
              OrgName={"EvetnNow Studios "}
              image={"./images/ReusableComponents/login.jpg"}
              btn="Show Details"
            />
          </>
        )}
        {btnState === 2 && (
          <>
            <MyEventCard
              OrgName={"Stein Studios "}
              image={"./images/ReusableComponents/PictureOfPost.jpg"}
              btn="Show Details"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ToggleButtons;
