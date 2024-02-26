"use client";
import React from "react";
import Image from "next/image";

function Allow() {}

function deny() {}

function details() {}

interface org_requesthandle {
  image: String;
  OrgName: String;
}

export default function Org_RequestHandle({
  image,
  OrgName,
}: org_requesthandle) {
  return (
    <div className="grid grid-cols-12  m-4 w-[250px] md:w-[500px] lg:w-[679px] h-96 sm:h-32 rounded-lg bg-[#D9D9D9] ">
      <div className="sm:col-span-5 col-span-full overflow-hidden rounded-lg">
        <Image
          src={`/images/profile/${image}`}
          alt="image2"
          width={249.64}
          height={126}
          className="shadow-xl  w-[300px] lg:w-[249.65px] md:w-[200px]"
        />
      </div>

      <div className="grid grid-rows-2 col-span-7">
        <div className="flex sm:items-center items-around sm:mt-0 mt-4">
          <div className="w-12 sm:w-48 text-[#353535] font-sans text-2xl font-bold ms-2 sm:ms-0">
            {OrgName}
          </div>
          <button
            onClick={() => details()}
            className="w-20 h-[30px] rounded-3xl bg-[#4E8171] ml-24 lg:ml-20 md:ml-3"
          >
            <div className="justify-center  text-white text-sans font-medium">
              Details
            </div>
          </button>
        </div>

        <div className="flex flex-row mt-4 sm:mt-2 sm:ms-0 md:ms-4 lg:ms-0 xl:ms-0">
          <button
            onClick={() => Allow()}
            className="w-20 h-[30px] rounded-3xl bg-[#3C9313] ms-2 sm:ms-0"
          >
            <div className="justify-center text-white text-sans font-medium">
              Allow
            </div>
          </button>
          <button
            onClick={() => deny()}
            className="w-20 h-[30px] rounded-3xl bg-[#B63535] ml-12 sm:ml-10 "
          >
            <div className="justify-center text-white text-sans font-medium ">
              Deny
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
