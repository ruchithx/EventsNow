'use client'
import React from "react";
import ContainerWithStroke from "./ContainerWithStroke";
import Image from "next/image";
interface Props {
  reportName: string;
  image: string;
  getReport: () => void;
  size: number;

}

export default function GetReportComponent({ reportName, image, getReport,size}: Props) {
  
  return (
    <ContainerWithStroke>
      <div className="flex justify-between pr-20 pl-4">
        <Image
          className="justify-self-center my-3"
          src={`/images/eventDash/${image}.svg`}
          alt="reports "
          width={size}
          height={size}
        />
        <div className="content-center justify-start pl-20 grid gap-2 w-full">
          <div className=" text-left text-[#666]">EVENT’S</div>
          <div className="mx-auto text-lg text-[#353535] font-bold">
            {reportName}
          </div>
        </div>
        <button className="bg-custom-orange rounded-md py-1 my-auto text-white font-mono text-base font-normal pr-7 drop-shadow-md flex " onClick={getReport}>
          <Image
            className="my-auto mx-2"
            src="/images/eventDash/print.svg"
            alt="print"
            width={20}
            height={20}
          />
          Print
        </button>
      </div>
    </ContainerWithStroke>
  );
}
