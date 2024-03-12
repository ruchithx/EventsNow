"use client";
import React, { useState,useEffect,useRef} from "react";
import SideBar from "./SideBar";
import MidContent from "./MidContent";
import { UseEventContext, EventContextType } from "../EventDashContext";
import Image from "next/image";
import EventDashButton from "./EventDashButton";
import Event from "../components/Event";

export default function MainComponent() {
  const {
    handleOverview,
    handleHostPage,
    handleMyteam,
    handleReports,
    handleCampaign,
    handleSetting,
    isSideBar,
    setIsSideBar,
    eventname,
    eventLocation,
    eventDate,
    eventStartTime,
    eventCover
  } = UseEventContext() as EventContextType;
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const menuBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuBarRef.current &&
        !menuBarRef.current.contains(event.target as Node)
      ) {
        // Clicked outside of modal, so close it
        setIsDashboardOpen(false);
      }
    };

    // Add event listener when the modal is open
    if (isDashboardOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDashboardOpen]);

  return (
    <div>
      <div
        className={`fixed 
            -left-14
            top-40`}
      >
        <button onClick={() => setIsDashboardOpen(!isDashboardOpen)}>
          <div className="  mr-5 h-10  md:hidden  flex justify-center items-center rounded-full   ">
            {/* {isDashboardOpen ? (
                  <BiArrowFromRight size={25} />
                ) : (
                  <BiArrowFromLeft size={25} />
                )} */}
            <div className="bg-myBrown w-[100px] h-[55px] flex items-center   rounded-full">
              <div className="bg-custom-orange w-[95px] h-[46px] flex justify-end pr-3 rounded-full">
                <Image
                  src="/images/reusableComponents/responsiveMenuBar.svg"
                  alt="menu bar"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div
        className={
          isDashboardOpen
            ? "absolute z-10 shadow-2xl flex flex-col  left-0 top-20 w-[65%] sm:hidden h-fit bg-[#ecf0fc]  ease-in duration-50"
            : "fixed left-[100%] top-0 p-10 ease-in duration-50"
        }
        ref={menuBarRef}
      >
        <button onClick={() => setIsDashboardOpen(false)}>
          <div className="mx-2 my-2 w-fit p-1 mb-3 ">
            {/* <MdClose size={20} /> */}
            <Image
              src="/images/reusableComponents/close.svg"
              alt="close"
              width={29}
              height={29}
            />
          </div>
        </button>
        <div className=" flex flex-col mx-5">
          <EventDashButton
            isSlideBar={isSideBar}
            img="overview.svg"
            text="Overview"
            onClick={() => handleOverview()}
          />
          <EventDashButton
            isSlideBar={isSideBar}
            img="bookmark.svg"
            text="Host Page"
            onClick={() => handleHostPage()}
          />
          <EventDashButton
            isSlideBar={isSideBar}
            img="team.svg"
            text="My Team"
            onClick={() => handleMyteam()}
          />
          <EventDashButton
            isSlideBar={isSideBar}
            img="file_dock.svg"
            text="Reports"
            onClick={() => handleReports()}
          />
          <EventDashButton
            isSlideBar={isSideBar}
            img="bell_pin.svg"
            text="Campaign"
            onClick={() => handleCampaign()}
          />
          <EventDashButton
            isSlideBar={isSideBar}
            img="Setting.svg"
            text="Settings"
            onClick={() => handleSetting()}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 md:gap-2 lg:gap-2 xl:gap-5 mt-5 px-2">
        <div
          className={` md:block hidden ${
            isSideBar
              ? "md:col-span-3 md:ml-2  col-span-4 lg:col-span-2 "
              : "md:col-span-1   "
          }`}
        >
          <SideBar />
        </div>
        <div
          className={`lg:col-span-7 col-span-12  ${
            isSideBar ? "md:col-span-5 " : "md:col-span-7 "
          }`}
        >
          <MidContent />
        </div>
        <div
          className={`lg:col-span-3 md:block hidden
             ${isSideBar ? "md:col-span-3 md:mr-2 " : "md:col-span-3  "}`}
        >
          <Event 
          EventName={eventname}
          Location={eventLocation}
          Time={eventStartTime}
          Date={eventDate.substring(0, 10)}
          eventCover={eventCover}
          />
        </div>
      </div>
    </div>
  );
}
