import Image from "next/image";
import React from "react";

function info() {}

interface Upcoming_Events {
  EventName: string;
  Location: string;
  Time: string;
  Date: string;
  Ratings: string;
  image: string;
  buttonDesc: string;
}

export default function WishListCArd({
  EventName,
  Location,
  Time,
  Date,
  Ratings,
  image,
  buttonDesc,
}: Upcoming_Events) {
  //const margin = EventName.length > 14 ? "mt-4" : " mt-0";

  return (
    <div className="bg-[#D9D9D9] h-fit my-6 mx-4 rounded-lg md:grid md:grid-cols-2 sm:grid-cols-2 w-[340px] md:w-[800px] md:h-fit xl:grid-cols-12 xl:h-fit">
      <div className="pt-4 mx-4 my-4 md:mx-0 md:my-0 md:pt-0 rounded-lg overflow-hidden h-fit md:h-[13.5rem] xl:col-span-5">
        <Image src={`${image}`} alt="hay" width={410} height={200} />
      </div>

      <div className="xl:grid xl:grid-rows-3 xl:justify-left xl:col-span-7 capitalize">
        <div className="mx-4 md:mt-4 grid grid-cols-2 ">
          <div className="font-sans text-2xl capitalize font-bold leading-7 text-[#353535]">
            {EventName}
          </div>

          <div className="flex justify-end whitespace-nowrap h-fit">
            <button
              onClick={() => info()}
              className="flex items-center bg-[#4E8171] text-white rounded-3xl py-1 px-3"
            >
              <div className="mr-2">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Send_fill">
                    <path
                      id="Subtract"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.48116 12.1048L7.60892 11.4807C5.25571 10.6963 4.0791 10.3041 4.0791 9.58335C4.0791 8.86259 5.25571 8.47039 7.60892 7.68598L15.3721 5.09826C17.0279 4.54633 17.8558 4.27036 18.2928 4.70738C18.7298 5.14439 18.4538 5.97228 17.9019 7.62805L17.9019 7.62807L17.9019 7.62808L15.3142 15.3913L15.3142 15.3913L15.3142 15.3913C14.5298 17.7445 14.1376 18.9211 13.4168 18.9211C12.6961 18.9211 12.3039 17.7445 11.5195 15.3912L10.8954 13.519L15.0823 9.33212C15.4728 8.9416 15.4728 8.30843 15.0823 7.91791C14.6917 7.52738 14.0586 7.52738 13.6681 7.91791L9.48116 12.1048Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-xs font-medium">{buttonDesc}</div>
            </button>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2">
          <div className={`mx-8 mt-2 flex items-center xl:items-start h-auto `}>
            <div className="w-8 h-8 xl:-mt-2">
              <Image
                src="/images/reusableComponents/sendfill.svg"
                alt="print"
                width={32}
                height={32}
              />
            </div>
            <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
              {Location}
            </div>
          </div>

          <div className={`mx-8 mt-2 flex  xl:mt-0`}>
            <div className="w-8 h-8">
              <Image src="/Datelight.svg" alt="print" width={32} height={32} />
            </div>
            <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 pt-2 ">
              {Date}
            </div>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2">
          <div className={`mx-8 mt-2 flex items-center xl:items-start `}>
            <div className="w-8 h-8 xl:-mt-2">
              <Image src="/Clockfill.svg" alt="print" width={32} height={32} />
            </div>
            <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 ">
              {Time}
            </div>
          </div>

          <div className={`mx-8 mt-2 flex `}>
            <div className="w-8 h-8">
              <Image src="/Lineup.svg" alt="print" width={32} height={32} />
            </div>
            <div className="text-[#353C4E] text-center text-base font-normal leading-4 pl-4 pt-2">
              {Ratings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
