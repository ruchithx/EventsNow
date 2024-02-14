import React from "react";
import Image from "next/image";

function Share() {
  console.log("Direct to the Share options");
}

function preview() {
  console.log("Direct to the preview options");
}

interface Event {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
  buttonDesc: String;
}

export default function Event({
  EventName,
  Location,
  Time,
  Date,
  buttonDesc,
}: Event) {
const width1 = buttonDesc.length > 14 ? "w-48" : " w-36"; 
const width2 = buttonDesc.length > 14 ? "w-12" : " w-14";
  return (
    <div className="w-64 xl:w-72 xl:h-[40rem] h-[38rem] rounded-xl bg-[#D9D9D9] shadow-inner xl:py-8 xl:px-8 py-6 px-6 ">
      <div className="xl:w-56 w-52 h-60 xl:h-64  ">
        <Image
          className=" rounded-md  "
          src={"/image 1.png"}
          alt="hay"
          width={410}
          height={200}
        />
      </div>

      <div className='text-[#353535] font-[" Roboto"] text-2xl py-4 font-medium font-["Roboto"] '>
        {EventName}
      </div>

      <div className="grid grid-rows-5 gap-6 ">
        <div>
          <div className="w-8 h-8 ">
            <Image
              src="/images/ReusableComponents/Pin_fill.svg"
              alt="print"
              width={32}
              height={32}
            />
          </div>
          <div className="text-[#353C4E] text-lg text-center align-top -mt-8 font-['Inter']">
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
          <div className="text-[#353C4E] text-lg text-center font-['Inter'] align-top -mt-8">
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
          <div className="text-[#353C4E] text-lg text-center font-['Inter'] align-top -mt-8">
            {Time}
          </div>
        </div>

        <div className="flex xl:gap-4 gap-1">
          <button
            onClick={() => Share()}
            className="w-24 h-8 rounded-3xl bg-white shrink-0 flex"
          >
            <div className=" pl-4 pt-2  ">
              <Image
                src={"/images/ReusableComponents/Vector.svg"}
                alt="info"
                width={50}
                height={50}
              />
            </div>
            <div className="w-40 h-4 text-[#535353] text-sm font-medium font-['IBM Plex Mono'] py-1.5 pl-0 mr-2 ">
              Share
            </div>
          </button>

          <button
            onClick={() => preview()}
            className="w-28 h-8 rounded-3xl bg-white shrink-0 flex"
          >
            <div className=" pl-4 pt-1  ">
              <Image
                src={"/images/ReusableComponents/View_alt.svg"}
                alt="info"
                width={60}
                height={60}
              />
            </div>
            <div className="w-40 h-4 text-[#535353] text-sm font-['IBM Plex Mono'] font-medium py-1.5 pl-0 mr-2 ">
              Preview
            </div>
          </button>
        </div>

        <div>
          <button
            onClick={() => preview()}
            className={`${width1} h-8 rounded-3xl bg-[#D47151] shrink-0 flex`}>
            <div className={` pl-4 pt-1 ${width2} `}>
              <Image
                src={"/images/ReusableComponents/Send_fill.svg"}
                alt="info"
                width={40}
                height={40}
              />
            </div>
            <div className="w-40 h-4 text-white text-sm font-medium py-1.5 pl-0 mr-2 font-['IBM Plex Mono'] ">
              {buttonDesc}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
