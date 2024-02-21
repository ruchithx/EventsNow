import React from "react";
import Image from "next/image";
interface searchbar {
  text: String;
}

export default function SearchBar({ text }: searchbar) {
  return (
    <>
      <div className="w-72 bg-gray-100  flex-col flex justify-start p-2 rounded-lg border-2 border-gray-400 max-h-20 mt-8">
        <div className="ms-4 mb-4">
          <div className="font-normal text-gray-500 mb-2">{text}</div>
          <div className="flex flex-row border-2 border-gray-400 bg-white rounded-lg w-52  h-6">
            <Image
              src="/images/reusableComponents/Search (1).svg"
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
    </>
  );
}
