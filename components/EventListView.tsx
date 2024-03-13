import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSend } from "react-icons/io";

type EventListViewProps = {
  id: string;
  name: string;
  location: string;
  time: string;
  date: string;
  img: string;
};

export default function EventListView({
  id,
  name,
  location,
  time,
  date,
  img,
}: EventListViewProps) {
  console.log(id);
  return (
    <div className="flex gap-3 rounded-sm xl:w-3/5 lg:w-4/5 bg-[#D9D9D9]">
      <div className="">
        <Image src={img} alt="event" height={180} width={230} />
      </div>
      <div className="p-3 w-full flex flex-col justify-start gap-3">
        <div className="flex sm:flex-row flex-col sm:gap-10 gap-2  mb-4">
          <div className="capitalize font-bold text-2xl	">{name}</div>
          <button>
            <div className="flex gap-2  w-20 px-1 justify-center items-center text-white bg-custom-orange rounded-xl ">
              <IoIosSend />
              <Link href={`/event/host/${id}`}>Info</Link>
            </div>
          </button>
          {/* <div className="bg-custom-orange rounded-xl text-white flex justify-center ">
            <button className="  justify-center items-center  flex gap-2 ">
              <IoIosSend />
              Info
            </button>
          </div> */}
        </div>
        <div className="flex sm:flex-row flex-col   w-full  gap-3">
          <div className="flex gap-2 sm:w-1/2	w-full ">
            <Image
              src={"/images/event/eventLocation.png"}
              alt="image location"
              width={30}
              height={30}
            />
            {location}
          </div>
          <div className="flex gap-2 sm:w-1/2	w-full ">
            <Image
              src={"/images/event/timeEvent.png"}
              alt="image location"
              width={30}
              height={30}
            />
            {time}
          </div>
        </div>
        <div className="flex gap-2 sm:w-1/2	w-full mt-2	 ">
          <Image
            src={"/images/event/dateEvent.png"}
            alt="image location"
            width={30}
            height={30}
          />
          {date}
        </div>
      </div>
    </div>
  );
}
