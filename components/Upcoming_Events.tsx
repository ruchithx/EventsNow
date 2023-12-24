"use client";
import Image from "next/image";

function info() {
  console.log("Direct to the info page");
}

import React from "react";

interface Upcoming_Events {
  EventName: String;
  Location: String;
  Time: String;
  Date: String;
  Ratings: String;
  image: String;
  buttonDesc: String;
}

export default function Upcoming_Events({
  EventName,
  Location,
  Time,
  Date,
  Ratings,
  image,
  buttonDesc,
}: Upcoming_Events) {
  const margin = EventName.length > 14 ? "mt-4" : " mt-0";

  return (
    <div className="grid grid-cols-3 m-4 w-[1192px] h-[194.5px] rounded-lg bg-[#D9D9D9]">
      <div>
        <Image src={`/${image}`} alt="hay" width={410} height={200} />
      </div>

      <div className="grid grid-rows-3 ml-6 h-[194.5px]">
        <div className="grid grid-cols-2 pt-6 item-center">
          <div className="font-sans text-2xl font-bold leading-7 text-[#353535] pt-2">
            {EventName}
          </div>

          <div className="pt-2">
            <button
              onClick={() => info()}
              className="w-20 h-7 rounded-3xl bg-[#D47151] shrink-0 flex"
            >
              <div className="py-0.5 pl-1.5 pt-1">
                <Image
                  src={"Send_fill.svg"}
                  alt="info"
                  width={80}
                  height={80}
                />
              </div>
              <div className="w-40 h-4 text-white text-xs font-medium py-1.5 pl-0 mr-2 ">
                {buttonDesc}
              </div>
            </button>
          </div>
        </div>

        <div className={`flex items-center h-auto ${margin}`}>
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.4028 26.4711C18.1917 25.5629 25.3337 21.5085 25.3337 14.6667C25.3337 9.51205 21.155 5.33337 16.0003 5.33337C10.8457 5.33337 6.66699 9.51205 6.66699 14.6667C6.66699 21.5085 13.8089 25.5629 15.5978 26.4711C15.8518 26.6001 16.1488 26.6001 16.4028 26.4711ZM16.0003 18.6667C18.2095 18.6667 20.0003 16.8758 20.0003 14.6667C20.0003 12.4576 18.2095 10.6667 16.0003 10.6667C13.7912 10.6667 12.0003 12.4576 12.0003 14.6667C12.0003 16.8758 13.7912 18.6667 16.0003 18.6667Z"
                fill="#455273"
              />
            </svg>
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
            {Location}
          </div>
        </div>

        <div className={`flex ${margin}`}>
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect
                x="4"
                y="8"
                width="24"
                height="20"
                rx="2"
                stroke="#455273"
              />
              <path
                d="M4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8H24C25.8856 8 26.8284 8 27.4142 8.58579C28 9.17157 28 10.1144 28 12V13.3333H4V12Z"
                fill="#455273"
              />
              <path
                d="M9.33301 4L9.33301 8"
                stroke="#455273"
                stroke-linecap="round"
              />
              <path
                d="M22.667 4L22.667 8"
                stroke="#455273"
                stroke-linecap="round"
              />
              <rect
                x="9.33301"
                y="16"
                width="5.33333"
                height="2.66667"
                rx="0.5"
                fill="#455273"
              />
              <rect
                x="9.33301"
                y="21.3334"
                width="5.33333"
                height="2.66667"
                rx="0.5"
                fill="#455273"
              />
              <rect
                x="17.333"
                y="16"
                width="5.33333"
                height="2.66667"
                rx="0.5"
                fill="#455273"
              />
              <rect
                x="17.333"
                y="21.3334"
                width="5.33333"
                height="2.66667"
                rx="0.5"
                fill="#455273"
              />
            </svg>
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 pt-2 ">
            {Date}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 h-[194.5px]">
        <div className="flex items-center"></div>

        <div className={`flex items-center ${margin}`}>
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M7.95297 4.18173C7.04867 4.42403 6.22409 4.90011 5.5621 5.5621C4.90011 6.22409 4.42403 7.04867 4.18173 7.95297"
                stroke="#455273"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M24.047 4.18173C24.9513 4.42403 25.7759 4.90011 26.4379 5.5621C27.0999 6.22409 27.576 7.04867 27.8183 7.95297"
                stroke="#455273"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9997 26.6667C21.8907 26.6667 26.6663 21.8911 26.6663 16C26.6663 10.109 21.8907 5.33337 15.9997 5.33337C10.1086 5.33337 5.33301 10.109 5.33301 16C5.33301 21.8911 10.1086 26.6667 15.9997 26.6667ZM16.9997 10.6667C16.9997 10.1144 16.552 9.66671 15.9997 9.66671C15.4474 9.66671 14.9997 10.1144 14.9997 10.6667V15.75C14.9997 16.4404 15.5593 17 16.2497 17H19.9997C20.552 17 20.9997 16.5523 20.9997 16C20.9997 15.4478 20.552 15 19.9997 15H16.9997V10.6667Z"
                fill="#455273"
              />
            </svg>
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
            {Time}
          </div>
        </div>

        <div className={`flex ${margin}`}>
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28 8L20.7071 15.2929C20.3166 15.6834 19.6834 15.6834 19.2929 15.2929L16.7071 12.7071C16.3166 12.3166 15.6834 12.3166 15.2929 12.7071L9.33333 18.6667"
                stroke="#455273"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 4V24.8C4 25.9201 4 26.4802 4.21799 26.908C4.40973 27.2843 4.71569 27.5903 5.09202 27.782C5.51984 28 6.0799 28 7.2 28H28"
                stroke="#455273"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 pt-2">
            {Ratings}
          </div>
        </div>
      </div>
    </div>
  );
}
