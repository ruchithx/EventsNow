import Image from "next/image";
import React, { memo } from "react";

import { IoClose } from "react-icons/io5";

export default memo(function GivenPermission() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9CC",
        }}
        id="static-modal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden p-4 fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="border-[1px] divide-x-2 mb-10  rounded-md bg-white  w-2/5 relative top-[25%] left-[25%]">
          <div className="mr-4 grid grid-cols-12 p-3 w-full border-b-[1px]  border-slate-200">
            <div className="text-xl text-center col-span-11	font-bold		">
              Create Post
            </div>
            <div className="bg-slate-300 w-8 col-span-1 rounded-full p-2 flex justify-center items-center">
              <IoClose />
            </div>
          </div>

          <div className="p-5">
            <div className="flex gap-3 justify-start items-start">
              <Image
                src={`/images/reusableComponents/profilpic.jpg`}
                alt="profile picture"
                width={40}
                height={40}
                className="rounded-full mt-1"
              />
              <div>
                <div className="text-black text-lg font-medium	 font-Inter">
                  kasun silva
                </div>
              </div>
            </div>
            <div className=" mt-5 font-Inter ">
              <input
                type="text "
                className=" outline-none text-2xl	w-full text-gray-600"
                placeholder="What's on your mind?"
              />
            </div>
          </div>
          <button className="w-full">
            <div className="border-[2px] items-center full m-2 rounded-2xl font-medium p-3 flex justify-between ">
              Add to your post
              <Image
                src={`/images/event/post/add-post-btn.png`}
                alt="profile picture"
                width={20}
                height={20}
              />
            </div>
          </button>

          <button className="w-full rounded-2xl flex justify-center items-center p-1 bg-custom-orange text-white text-bold text-lg ">
            Post
          </button>
          {/* <div className="mb-5    md:p-3 mx-5  items-start w- space-y-4 gap-5 flex flex-col"></div> */}
        </div>
      </div>
    </>
  );
});
