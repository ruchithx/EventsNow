import React from "react";

import Image from "next/image";
interface superadminpages {
  text: String;
  title: String;
  description: String;
  customComponent: React.ReactNode;
}

export default function SuperadminPages({
  text,
  title,
  description,
  customComponent,
}: superadminpages) {
  const showSearchBar = title !== "All organization requests";

  return (
    <div className="flex flex-col ms-12 md:ms-24 lg:ms-24">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between">
        <div className="flex flex-col p-4 justify-start ">
          <div className="text-custom-darkgreen text-4xl font-bold mb-8">
            {title}
          </div>
          <div className="text-normal font-normal">{description}</div>
        </div>

        {showSearchBar && (
          <div className="w-72 bg-gray-100  flex-col flex justify-start p-2 rounded-lg border-2 border-gray-400 max-h-20 mt-8">
            <div className="ms-4 mb-4">
              <div className="font-normal text-gray-500 mb-2">{text}</div>
              <div className="flex flex-row border-2 border-gray-400 bg-white rounded-lg w-52  h-6">
                <Image
                  src="/ReUsableComponentData/Search (1).svg"
                  width={20}
                  height={14}
                  alt="search"
                  className="bg-white ms-2"
                />
                <input
                  type="text"
                  placeholder={"type and search"}
                  className="flex-1 focus:outline-none rounded-lg text-xs ms-2 "
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-12 md:w-3/4 lg:w-3/4 ms-0">{customComponent}</div>
    </div>
  );
}
