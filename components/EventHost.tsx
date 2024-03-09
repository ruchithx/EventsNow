import { useProf } from "@/app/profile/[...id]/ProfContext";
import MyEventCard from "@/app/profile/[...id]/components/MyEventCard";
import React, { useState } from "react";
type RigisterEvent = {
  register: any[];
};
function ToggleButtons({ btn1, btn2 }: { btn1: string; btn2: string }) {
  const [btnState, setBtnState] = useState(1);

  const handleToggle = (selectedBtn: number) => {
    setBtnState(selectedBtn);
  };
  const { register } = useProf() as any as RigisterEvent;

  return (
    <div className="flex h-screen flex-col items-center font-IBM pr-4 ml-5 overflow-y-scroll">
      <div className="bg-initial rounded-2xl m-4 md:w-2/2 flex items-center justify-center">
        <button
          className={`${
            btnState === 1
              ? "bg-custom-orange text-white"
              : "bg-transparent text-custom-orange"
          } rounded-2xl text-center whitespace-nowrap uppercase w-full md:w-2/3 p-3 sm:p-2 md:p-3`}
          onClick={() => handleToggle(1)}
        >
          {btn1}
        </button>
        <button
          className={`${
            btnState === 2
              ? "bg-custom-orange text-white"
              : "bg-transparent text-custom-orange"
          } rounded-2xl text-center whitespace-nowrap uppercase w-full md:w-2/3 p-3 sm:p-2 md:p-3`}
          onClick={() => handleToggle(2)}
        >
          {btn2}
        </button>
      </div>
      <div className="m-4 p-2 font-IBM rounded-2xl bg-white grid grid-cols-1 gap-4">
        {btnState === 1 && (
          <>
            <MyEventCard
              OrgName={"Stein Studios "}
              image={"./images/reusableComponents/PictureOfPost.jpg"}
              btn="Show Details"
            />
          </>
        )}
        {btnState === 2 && (
          <>
            {register ? (
              register.map((e: any) => (
                <MyEventCard
                  OrgName={e.eventName}
                  image={e.postImageLink}
                  btn="Show Details"
                />
              ))
            ) : (
              <p>No registered events found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ToggleButtons;
