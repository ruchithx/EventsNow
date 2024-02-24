"use client";
import React from "react";
import ContainerWithStroke from "./ContainerWithStroke";
import Image from "next/image";
import Link from "next/link";

interface OverviewSubComponentProps {
  image: string;
  text: string;
  linkToDetails: string;

}
export default function OverviewSubComponent({image,text,linkToDetails}: OverviewSubComponentProps) {
  return (
    <ContainerWithStroke>
      <Image
        className="justify-self-center"
        src={`/images/eventDash/${image}`}
        
        alt="tickets "
        width={80}
        height={80}
      />
      <div className="text-[#273B4A] font-mono tracking-tight">
        {text}
        {/* Total Ticket Sale */}
      </div>
      <Link
        className="pl-0.5 justify-self-start font-mono text-[#455273] font-normal hover:underline hover:text-sky-600 "
        href={linkToDetails}
      >
        view details
      </Link>
    </ContainerWithStroke>
  );
}
