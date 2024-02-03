import React from "react";

import Image from "next/image";

interface superadminpages {
  title: String;
  description: String;
  customComponent: React.ReactNode;
  text: String;
}

const handleClick = () => {};

export default function SuperadminPages({
  text,
  title,
  description,
  customComponent,
}: superadminpages) {
  const showSearchBar = title !== "All organization requests";

  return (
    <div
      className="flex flex-col ms-0 sm:ms-2 cursor-pointer "
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row lg:flex-row sm:justify-center md:justify-between lg:justify-between ">
        <div className="flex flex-col p-4 sm:justify-center md:justify-start  lg:justify-start xl:ms-12 ">
          <div className="text-profileName text-4xl font-semibold mb-8 ">
            {title}
          </div>
          <div className="text-normal font-normal text-gray-600 italic ">
            {description}
          </div>
        </div>

        {showSearchBar && (
          <div className="sm:w-64 md:w-80 lg:w-80 bg-gray-100  flex-col flex  p-1 rounded-lg border-2 border-gray-400   max-h-32 mt-0 sm:mt-8 lg:shadow-md md:shadow-none sm:shadow-none ms-6 md:ms-2 lg:ms-0 mr-4">
            <div className="ms-4 mb-4 mt-0 sm:mt-2 ">
              <div className="sm:hidden md:flex lg:flex font-normal text-gray-500 mb-4">
                {text}
              </div>
              <div className="flex flex-row border-2 border-gray-400 bg-white rounded-lg sm:w-36 md:w-64 lg:w-64 h-10 md:h-8">
                <input
                  type="text"
                  placeholder={"Search....."}
                  className="flex-1 focus:outline-none rounded-lg text-xs ms-2 "
                />
                <Image
                  src="/ReUsableComponentData/Search (1).svg"
                  width={20}
                  height={20}
                  alt="search"
                  className="bg-white mr-2 w-auto h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-[320px] md:w-[520px] lg:w-[920px] ms-4 mt-6 xl:ms-12 h-80 overflow-y-auto">
        {customComponent}
      </div>
    </div>
  );
}
