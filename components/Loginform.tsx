"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

export default function LoginFormBasic() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="mx-auto  flex justify-center">
      <div className="">
        <div className="text-center text-[#455273] font-khand  text-[64px] font-semibold">
          Login
        </div>
        <form className=" flex-column ">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Enter your email "
          ></input>

          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Create password  "
          ></input>

          <button
            type="submit"
            className="flex text-center p-1 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono"
          >
            LOGIN ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}
