import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface EventCardDisabledProps {
  name: string;
  img: string;
  location: string;
  date: string;
}

export default function EventCardDisabled({
  name,
  img,
  location,
  date,
}: EventCardDisabledProps) {
  return (
    <Card className="w-64 shrink-0 overflow-hidden m-4 bg-[#959595] text-neutral-50 border-none shadow-lg opacity-80 grayscale">
      <div className="h-[301px] w-full overflow-hidden relative">
        <Image
          className="object-cover"
          src={`${img}`}
          alt={"event-img"}
          fill
        />
      </div>
       <CardContent className="p-4 grid grid-cols-3 gap-2">
        <div className="col-span-3 text-xl font-mono font-extrabold truncate">
          {name}
        </div>
      </CardContent>
      <Separator className="bg-white/30 mx-4 w-auto mb-2" />
      <CardFooter className="p-4 pt-0 grid grid-cols-12 gap-1 items-center">
        <div className="flex col-span-5 items-center">
          <Image
            src={"/images/organization/location1.svg"}
            alt={"pin-fill"}
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div className="text-xs font-khand font-semibold ml-1 truncate">
            {location}
          </div>
        </div>
        <div className="col-span-1 h-8 w-px bg-white/50 mx-auto"></div>
        <div className="flex col-span-6 items-center pl-2">
            <Image
            src={"/images/reusableComponents/Date.svg"}
            alt={"time-fill"}
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <div className="flex flex-col ml-2">
             <div className="text-xs font-khand font-semibold">
              {date}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
