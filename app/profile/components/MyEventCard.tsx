import Image from "next/image";
import React from "react";

interface MyEventCard {
  image: string;
  OrgName: string;
  btn: string;
}

function MyEventCard({ image, OrgName, btn }: MyEventCard) {
  return (
    <div className="max-w-lg w-fit lg:max-w-full lg:flex  ">
      <div
        className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('/${image}')` }}
      ></div>
      <div className="bg-[#D9D9D9] lg:border-gray-400 justify-between rounded-b lg:rounded-b-none lg:rounded-r p-5 pr-24 flex flex-col leading-normal">
        <div className="mb-8 flex flex-row gap-10 justify-center items-center">
          <div className="text-gray-900 font-bold text-xl capitalize justify-start">
            {OrgName}
          </div>
          <div className="text-sm flex items-center  p-0">
            <button className="text-white font-semibold p-2 rounded-xl bg-custom-orange leading-none">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEventCard;
