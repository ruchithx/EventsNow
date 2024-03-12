import {
  ProfContext,
  RegisterEventType,
  useProf,
} from "@/app/profile/[...id]/ProfContext";
import MyEventCard from "@/app/profile/[...id]/components/MyEventCard";
import React, { useState } from "react";
import EmptyStateComponent from "./EmptyStateComponent";
type RigisterEvent = {
  register: any[];
};
function ToggleButtons({ btn1, btn2 }: { btn1: string; btn2: string }) {
  const [btnState, setBtnState] = useState(1);

  const handleToggle = (selectedBtn: number) => {
    setBtnState(selectedBtn);
  };
  const { register, registerEvent } = useProf() as ProfContext;

  return (
    <div className="flex h-screen flex-col items-center font-IBM pr-4 ml-5 ">
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
      <div className="m-4 p-2 font-IBM rounded-2xl bg-white  gap-4 h-80 overflow-auto">
        <div className="flex flex-col gap-2 justify-start w-full">
          {btnState === 1 && (
            <>
              {registerEvent.length > 0 ? (
                registerEvent.map((event: RegisterEventType) => (
                  <MyEventCard
                    id={event._id}
                    key={event._id}
                    OrgName={event.eventName}
                    image={event.postImageLink}
                    btn="Dashboard"
                  />
                ))
              ) : (
                <EmptyStateComponent message="No manage events found." />
              )}
            </>
          )}

          {/* {btnState === 1 &&
          (registerEvent.length > 0 ? (
            <>
            
              registerEvent.map((event)=>{ <MyEventCard
                OrgName={"Stein Studios "}
                image={"./images/reusableComponents/PictureOfPost.jpg"}
                btn="Show Details"
              />}
              )
           
            </>
          ) : (
            <EmptyStateComponent message="No manege events found." />
          ))} */}
          {btnState === 2 && (
            <>
              {register.length > 0 ? (
                register.map((e: any) => (
                  <MyEventCard
                    id={e._id}
                    key={e._id}
                    OrgName={e.eventName}
                    image={e.postImageLink}
                    btn="Event"
                  />
                ))
              ) : (
                <EmptyStateComponent message="No registered events found." />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleButtons;
