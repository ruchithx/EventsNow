import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

import { IoClose } from "react-icons/io5";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { error, success } from "@/util/Toastify";

type Props = {
  handleTemplate1: () => void;
  setShowTemplate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Template({ setShowTemplate, handleTemplate1 }: Props) {
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
        <div className="border-[1px] divide-x-2 mb-10  rounded-xl bg-white w-4/5 2xl:w-1/5 lg:w-2/5 md:w-3/5  relative md:top-[25%] md:left-[25%]  top-[5%] left-[5%] 2xl:left-[35%]">
          <div className="text-black p-3 text-xl ">
            <div className="flex justify-between">
              select template
              <button
                onClick={() => setShowTemplate(false)}
                className="bg-slate-300 hover:bg-slate-400  w-8 col-span-1 rounded-full p-2 flex justify-center items-center"
              >
                <IoClose />
              </button>
            </div>
          </div>
          <div className="flex gap-5 mb-10 p-5">
            <button onClick={handleTemplate1}>
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  src={"/images/createEvent/eventRegFormImg.png"}
                  alt="template1"
                  width={40}
                  height={40}
                />
                template 1
              </div>
            </button>
            <button>
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  src={"/images/createEvent/eventRegFormImg.png"}
                  alt="template1"
                  width={40}
                  height={40}
                />
                template 2
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
