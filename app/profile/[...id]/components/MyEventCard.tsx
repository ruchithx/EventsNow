import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MyEventCard {
  image: string;
  OrgName: string;
  btn: string;
  id: string;
}

function MyEventCard({ image, OrgName, btn, id }: MyEventCard) {
  return (
    <div className="max-w-lg w-fit lg:max-w-full lg:flex rounded-lg ">
      <div
        className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="bg-[#D9D9D9] lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-5  flex flex-col leading-normal">
        <div className="mb-8 justify-between flex  gap-10  items-start">
          <div className="text-gray-900 font-bold text-xl capitalize ">
            {OrgName}
          </div>
          <div className="text-sm   ">
            {btn === "Dashboard" ? (
              <Link href={`/event/dashboard/${id}`}>
                <div className="text-white font-semibold p-2 rounded-xl bg-custom-orange leading-none">
                  {btn}
                </div>
              </Link>
            ) : (
              <Link href={`/event/host/${id}`}>
                <div className="text-white font-semibold p-2 rounded-xl bg-custom-orange leading-none">
                  {btn}
                </div>
              </Link>
            )}
            {/* <button className="text-white font-semibold p-2 rounded-xl bg-custom-orange leading-none">
              {btn}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEventCard;
