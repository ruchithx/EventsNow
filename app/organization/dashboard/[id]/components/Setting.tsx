import React from "react";
import { useOrg } from "../OrgContext";
import ProfileSettings from "@/app/profile/components/ProfileSettings";

export default function Setting() {
  const { isSlideBar } = useOrg();

  return (
    <div className="flex rounded-lg  shadow-3xl md:pl-10 md:ml-2 pl-5 bg-[#fff] pt-8 lg:pl-12 flex-col justify-start items-start gap-12">
      <div className="md:w-11/12 w-11/12  lg:w-full flex flex-col gap-3">
        <div className="flex justify-center items-center gap-5">
          <div className="bg-[#455273] w-32 h-2"></div>
          <div className="text-2xl text-[#455273]">ACCOUNT DETAILS</div>
          <div className="bg-[#455273] w-32 h-2"></div>
        </div>
        <div className="md:w-full lg:w-3/4 text-[#666666]">
          <ProfileSettings name={"name"} />
        </div>
      </div>
      <div className="w-11/12 lg:w-full ">
        <div className="flex justify-center items-center gap-5">
          <div className="bg-[#455273] w-32 h-2"></div>
          <div className="text-2xl text-[#455273]">ADVANCED DETAILS</div>
          <div className="bg-[#455273] w-32 h-2"></div>
        </div>
        <div className="w-full  lg:w-3/4">
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFristName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder=" Bank  "
          />
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFristName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Branch  "
          />
          <div className="my-5 flex gap-1">
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              // value={firstName}
              // onChange={(e) => setFristName(e.target.value)}
              className="  w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
              placeholder=" Account Name  "
            />
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              // value={firstName}
              // onChange={(e) => setFristName(e.target.value)}
              className="  w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
              placeholder="Account Number "
            />
          </div>
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFristName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="payout frequency  "
          />
        </div>
      </div>
    </div>
  );
}
