"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Best_Event {
  img: String;
  eventname: String;
  year: String;
  description: String;
}

export default function BestEvent({
  img,
  eventname,
  year,
  description,
}: Best_Event) {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  }, []);

  return (
    <div className="w-full sm:w-[20rem] md:w-[16rem] bg-[#F9EBE9] mt-12 p-3 rounded-xl shadow-xl">
      <div className="mt-4 mx-auto max-w-[260px]">
        <div className="h-[200px] bg-[#AC736D] bg-cover bg-center rounded-t-lg overflow-hidden">
          <Image
            src={`/images/about/${img}`}
            height={200}
            width={250}
            alt="bestevent"
          />
        </div>
      </div>

      <div className="px-4 py-2 flex justify-between items-center">
        <div className="text-[#AC736D] font-mono text-lg font-bold">
          {eventname}
        </div>

        <button
          onClick={() => print()}
          className="w-[3.9rem] h-[1.5rem] rounded-full bg-[#AC736D] text-white font-mono"
        >
          {year}
        </button>
      </div>

      <div className="px-4 py-2">
        <div className={`${isOpen ? "" : "overflow-hidden line-clamp-5"}`}>
          <p className="leading-tight" ref={ref}>
            {description}
          </p>
        </div>
        {showReadMoreButton && (
          <button className="text-[#AC736D]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Read less..." : "Read more..."}
          </button>
        )}
      </div>
    </div>
  );
}
