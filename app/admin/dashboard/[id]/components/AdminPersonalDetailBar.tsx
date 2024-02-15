import React from "react";
interface PresonDetailsBar {
  name: string;
  email: string;
}

export default function AdminPersonDetailsBar({
  name,
  email,
}: PresonDetailsBar) {
  function editDetails() {}
  return (
    //parent div eken 3n 2k kiyala gaththe meka.wenas krla gann onnm.mn dila tynne meke mulu loku div ekatam col-span-2 kiyala-ashan
    <div className="my-2 sm:my-4 justify-between ms-2 sm:ms-0 mt-6 bg-[#D9D9D9] w-64 md:w-[380px] lg:w-[720px]  col-span-2 grid grid-cols-12  rounded-[5px] mb-2 ">
      <div className="text-base font-light col-span-5 hidden md:hidden lg:flex ms-2">
        {name}
      </div>
      <div className="text-base font-light col-span-6	mr-2 md:mb-0 mb-1 ms-2 md:ms-2 lg:ms-0 flex ">
        {email}
      </div>
      <div className="xl:col-span-1  grid ">
        <button
          onClick={editDetails}
          className={`bg-custom-green h-[34px]  rounded-[5px] w-8 lg:w-[210px] md:w-12 ms-28 md:ms-[180px] lg:ms-0`}
        >
          <div className="flex justify-around pl-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
            </svg>
            <div className="text-white font-mono self-center text-center text-base font-medium mr-2 hidden md:hidden lg:flex">
              Add to blacklist
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
