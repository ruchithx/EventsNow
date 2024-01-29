"use client";
import Image from "next/image";

interface EventCardOrgDash {
  img: string;
  name: string;
  location: string;
  date: string;
  time: string;
  isSlideBar: boolean;
}

function eventDashboardHandler() {}
function EventCardOrgDash({
  img,
  name,
  location,
  date,
  time,
  isSlideBar,
}: EventCardOrgDash) {
  const values1 = name.length > 21 ? "md:mb-4 mb-0" : "md:mb-10 mb-0";
  const values2 = name.length > 21 ? "" : "mb:mt-4 mt-0";
  return (
    <div
      className={` flex ${
        isSlideBar ? "2xl:w-1/2 md:w-11/12 md:h-60 sm:h-20   " : ""
      }   flex-col items-start h-fit  gap-2 md:gap-0 md:grid md:grid-cols-12 mr-3  rounded-[10px] bg-[#D9D9D9]`}
    >
      <div
        className={`md:col-span-4 md:h-60 sm:h-20   overflow-hidden rounded-l-lg 
        ${isSlideBar ? "lg:block md:hidden " : "block"}
           `}
      >
        <Image
          className="object-center rounded-[10px]"
          src={`/${img}`}
          width={256}
          height={301}
          alt="event picture"
        />
      </div>

      <div
        className={`  ${values1} md:grid ${
          isSlideBar ? "lg:col-span-5 md:col-span-8" : "md:col-span-5"
        }
        md:grid-rows-9  md:ml-5 ml-2`}
      >
        <div
          className={` ml-2  ${values2} font-mono text-[#353535] text-2xl font-bold	row-span-3`}
        >
          {name}
        </div>

        <div className="flex row-span-2">
          <Image
            src="/Pin_fill1.svg"
            width={32}
            height={32}
            alt="event picture"
          />
          <div className="ml-5 my-3 mystyle font-mono text-[#353c4e] font-normal	text-[16px]	">
            {location}
          </div>
        </div>

        <div className="flex row-span-2">
          <Image
            src="/Date_range_light1.svg"
            width={32}
            height={32}
            alt="event picture"
          />
          <div className="ml-5 my-3 mystyle font-mono text-[#353c4e] font-normal	text-[16px]	">
            {date}
          </div>
        </div>

        <div className="flex row-span-2">
          <Image
            src="/Clock_fill.svg"
            width={32}
            height={32}
            alt="event picture"
          />
          <div className="ml-5 my-3 font-mono text-[#353c4e] font-normal	text-[13px][16px]	">
            {time}
          </div>
        </div>
      </div>

      <div
        className={` ${
          isSlideBar ? "lg:col-span-3 md:col-span-4" : "md:col-span-3"
        }  md:ml-0 ml-2 md:mb-0 mb-2`}
      >
        <button
          onClick={() => eventDashboardHandler()}
          className=" hover:bg-[#D47165] font-mono bg-custom-orange w-30 lg:p-2 md:px-2 p-1 rounded-[29px] text-white bg-custom text-[13px] font-medium md:mt-4 mt-0"
        >
          <div className="justify-center flex gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="lg:block hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Filter">
                <path
                  id="Vector 7"
                  d="M4.16666 10L4.16666 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 9"
                  d="M15.8333 16.6667L15.8333 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 8"
                  d="M4.16666 16.6667L4.16666 13.3333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 10"
                  d="M15.8333 10L15.8333 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 11"
                  d="M10 5.83333L10 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 12"
                  d="M10 16.6667L10 10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  id="Ellipse 36"
                  cx="4.16667"
                  cy="11.6667"
                  r="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  id="Ellipse 37"
                  cx="10"
                  cy="7.5"
                  r="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  id="Ellipse 38"
                  cx="15.8333"
                  cy="12.5"
                  r="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
            </svg>
            Dashboard
          </div>
        </button>
      </div>
    </div>
  );
}

export default EventCardOrgDash;
