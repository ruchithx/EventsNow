"use client";
import Image from "next/image";
function print() {}
import React from "react";

interface View_Report {
  discription1: String;
  img: String;
}

export default function View_Report({ discription1, img }: View_Report) {
  return (
    <div className="grid grid-cols-12 w-3/4 h-32 rounded-[10px] bg-[#F8F8F8]  border divide-[#848484]">
      <div className="col-span-4 my-3 md:ml-5 lg:ml-14 overflow-hidden">
        <Image
          src={`/ReusableComponentData/${img}`}
          alt="compo5"
          width={100}
          height={100}
        />
      </div>

      <div className="col-span-5 mt-4">
        <div className="text-[#666] font-sans text-xl font-normal">EVENT’S</div>
        <div className="text-[#353535] font-sans md:text-md xl:text-2xl lg:text-xl md:text-lg font-bold mt-6">
          {discription1}
        </div>
      </div>

      <div className="col-span-3 my-10">
        <button
          onClick={() => print()}
          className="w-[116px] h-10 rounded-md bg-custom-orange"
        >
          <div className="flex">
            <div className="ml-4">
              <Image src="/print.svg" alt="print" width={24} height={24} />
            </div>

            <div className="w-[87.751px] h-[19.317px] judtify-center text-white font-sans text-base font-medium mr-3 ">
              Print
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
