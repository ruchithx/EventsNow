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
  return (
    <div className=" w-full  bg-[#D9D9D9] my-4  max-sm:mr-24 rounded-xl  shadow-lg grid lg:grid-cols-6 ">
      <div
        className="lg:rounded-l-xl max-lg:rounded-t-xl overflow-hidden bg-no-repeat bg-cover lg:col-span-2 bg-center h-40 lg:h-full "
        style={{ backgroundImage: `url(${img as string})` }}
      ></div>
      <div className="lg:col-span-4 rounded-r-xl pt-1">
        <div className="  flex justify-between px-6">
          <div className=" my-2 text-[#353535] font-semibold sm:font-bold text-lg sm:text-24">
            {name}
          </div>

          <button className=" max-sm:hidden text-center hide flex gap-2 bg-[#D47151] text-white rounded-2xl px-2 my-auto py-1 ml-4 font-IBM ">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Filter">
                <path
                  id="Vector 7"
                  d="M4.375 10L4.375 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 9"
                  d="M16.1919 16.667L16.1919 15.0003"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 8"
                  d="M4.375 16.667L4.375 13.3337"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 10"
                  d="M16.1919 10L16.1919 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 11"
                  d="M10.2837 5.83301L10.2837 3.33301"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 12"
                  d="M10.2837 16.667L10.2837 10.0003"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <ellipse
                  id="Ellipse 36"
                  cx="4.37514"
                  cy="11.6667"
                  rx="1.68813"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <ellipse
                  id="Ellipse 37"
                  cx="10.2833"
                  cy="7.49967"
                  rx="1.68813"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <ellipse
                  id="Ellipse 38"
                  cx="16.192"
                  cy="12.4997"
                  rx="1.68813"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
            </svg>
            Dashboard
          </button>
        </div>

        <div className="grid  gap-2 pl-4 pb-4">
          <div className=" flex">
            <Image
              src="/images/admin/Pin_fill_blue.svg"
              alt="calendar"
              width={35}
              height={40}
            />
            <div className="ml-2 my-auto font-mono text-[#353C4E] text-sm font-medium">
              {location}
            </div>
          </div>
          <div className="flex  ">
            <Image
              src="/images/admin/Clock_fill_blue.svg"
              alt="calendar"
              width={31}
              height={40}
            />
            <div className="ml-2 my-auto font-mono text-[#353C4E] text-sm font-medium">
              {time}
            </div>
          </div>
          <div className=" flex">
            <Image
              src="/images/admin/Date_range_light_blue.svg"
              alt="calendar"
              width={35}
              height={40}
            />
            <div className=" ml-2 my-auto font-mono text-[#353C4E] text-sm font-medium">
              {date.substring(0, 10)}
            </div>
          </div>
          {/* <div className="flex">
            <Image
              src="/images/admin/Line_up_blue.svg"
              alt="calendar"
              width={35}
              height={40}
            />
            <div className="my-auto font-mono text-[#353C4E] text-sm font-medium">
              {}
            </div>
          </div> */}
        </div>
        <div className="flex sm:hidden content-center ">
          <button className=" text-center mb-8 flex gap-2 bg-[#D47151] text-white rounded-2xl px-2 my-auto py-1 ml-4 font-IBM ">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Filter">
                <path
                  id="Vector 7"
                  d="M4.375 10L4.375 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 9"
                  d="M16.1919 16.667L16.1919 15.0003"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 8"
                  d="M4.375 16.667L4.375 13.3337"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 10"
                  d="M16.1919 10L16.1919 3.33333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 11"
                  d="M10.2837 5.83301L10.2837 3.33301"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 12"
                  d="M10.2837 16.667L10.2837 10.0003"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <ellipse
                  id="Ellipse 36"
                  cx="4.37514"
                  cy="11.6667"
                  rx="1.68813"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <ellipse
                  id="Ellipse 37"
                  cx="10.2833"
                  cy="7.49967"
                  rx="1.68813"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <ellipse
                  id="Ellipse 38"
                  cx="16.192"
                  cy="12.4997"
                  rx="1.68813"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
            </svg>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCardOrgDash;
