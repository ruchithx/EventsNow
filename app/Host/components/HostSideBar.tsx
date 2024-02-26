import React from "react";
import { useState } from "react";
import Image from "next/image";
import PostTab from "./PostTab";
import CoverPhoto from "./CoverPhoto";

interface HostSideBar {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
  activeComponent: string; // Add prop for active component
  handleComponentChange: (component: string) => void; // Add prop for handling component change
}

function buyTckets() {}

export default function HostSideBar({
  EventName,
  Location,
  Time,
  Date,
  activeComponent,
  handleComponentChange,
}: HostSideBar) {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handleClick = (buttonNumber: number) => {setActiveButton(buttonNumber);};

  
  return (
    <div className="xl:w-96 xl:h-[45rem] md:h-[36rem] bg-white items-end md:w-80">
      <div className=' text-center text-[#454545cc] md:text-4xl xl:text-5xl sm:text-xl font-normal xl:pt-16 md:pt-10 font-["Roboto"]'>
        {EventName}
      </div>

      <div className="flex md:w-64 h-14 rounded-3xl bg-[#F9EBE9] items-center xl:mx-16 md:mx-8 xl:my-12 md:my-8 ">
        <button
          className={` md:text-md font-medium ml-2 w-40 h-12 rounded-3xl  ${
            activeButton === 1
              ? "bg-[#D47151] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
          }`}
          onClick={() => {
            if (activeComponent !== "CoverPhoto") {
              handleComponentChange("CoverPhoto");
              handleClick(1);
            }
          }}
        >
          EVENT HOST
        </button>
        <button
          className={` md:text-md font-medium mr-2 w-40 h-12 rounded-3xl  ${
            activeButton === 2
              ? "bg-[#D47151] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
          }`}
          onClick={() => {
            
            if (activeComponent !== "PostTab") {
              handleComponentChange("PostTab");
              handleClick(2);
            }
          }}
        >
          COMMUNITY
        </button>
      </div>

      <div className="text-left xl:ml-12 md:ml-8 text-[#455273] xl:text-3xl md:text-2xl font-bold xl:mt-16 ">
        QUICK FACTS
      </div>

      <div className="grid grid-rows-3 gap-6 xl:ml-12 md:ml-8 text-left mt-8">
        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/ReusableComponents/Pin_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] xl:text-2xl md:text-xl  align-top -mt-8 font-['Roboto'] ml-12">
            {Location}
          </div>
        </div>

        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/ReusableComponents/Date_org.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] xl:text-2xl  md:text-xl font-['Roboto'] align-top -mt-8 ml-12">
            {Date}
          </div>
        </div>

        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/ReusableComponents/Clock_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] xl:text-2xl  md:text-xl  font-['Roboto'] align-top -mt-8 ml-12">
            {Time}
          </div>
        </div>

        <div className="flex xl:pt-24 md:pt-14 items-center ">
          <button className="flex xl:w-36 md:w-32 xl:h-16 md:h-12 bg-[#D47151] rounded-l-2xl items-center xl:px-4  ">
            <div className=" w-10 h-10 mt-2">
              <Image
                src="/images/Event/HostPage/Check_fill.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="font-medium xl:text-lg md:text-md text-white text-left leading-tight ml-4">
              Buy tickets
            </div>
          </button>

          <button className="flex xl:w-36 md:w-32 xl:h-16 md:h-12 bg-[#455273] rounded-r-2xl items-center xl:px-4">
            <div className=" w-10 h-10 mt-2 md:ml-4 xl:ml-0">
              <Image
                src="/images/Event/HostPage/Paper_fill.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="font-medium xl:text-lg md:text-md text-white text-left leading-tight xl:ml-4 md:ml-2">
              Add to Wish List
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
