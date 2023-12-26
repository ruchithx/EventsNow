"use client";
import React from "react";
import SignupSocial from "@/components/SignupSocial";
import Terms from "@/components/Terms";
import { useState } from "react";
import Image from "next/image";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle form submission (e.g., API calls, validation)
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div>
      <div className="flex ">
        <div className="w-1/2  justify-center items-center  ">
          <h1 className="text-custom-blue font-khand text-5xl text-center mt-3 font-bold">
            Log-in to Events now
          </h1>
          <div className="flex flex-col items-center my-[113px]">
            <form onSubmit={handleSubmit} className="w-full max-w-xs">
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-[12px] focus:outline-none  focus:border-custom-orange"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-[12px] -md focus:outline-none  focus:border-custom-orange"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 uppercase bg-custom-orange text-white rounded-[12px] hover:bg-custom-orange focus:outline-none focus:bg-custom-orange"
              >
                Login to account
              </button>
            </form>
          </div>
          <SignupSocial />
          <div className="self-end">
            <Terms />
          </div>
        </div>
        <Image
          src="/ReUsableComponentData/login.jpg"
          alt="Man"
          width={800}
          height={918}
        />
        {/* <img
          className="w-1/2 h-[918px]"
          src="./ReUsableComponentData/login.jpg"
          alt="Man"
        /> */}
      </div>
      <div className="bg-myBrown mt-0 p-0  h-[63px] flex flex-col"></div>
    </div>
  );
}
