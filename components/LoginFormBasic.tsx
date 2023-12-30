"use client";
import React, { useState } from "react";

export default function LoginFormBasic() {
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setCPassword] = useState("");

  async function sendLoginData() {
    console.log(firstName, lastName, email, password, passwordConfirm);
    const data = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };
    const res = await fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    });

    console.log(res);
    setFristName("");
    setLastName("");
    setemail("");
    setpassword("");
    setCPassword("");
  }

  return (
    <div className="mx-auto  flex justify-center">
      <div className="">
        <div className=" mt-2 leading-none	 text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold">
          Create account
        </div>
        <form
          className=" flex-column "
          action={sendLoginData}
          onSubmit={() => sendLoginData}
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFristName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Enter your first name  "
          ></input>

          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Enter your last name  "
          ></input>

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

          <input
            type="password"
            name="cPassword"
            id="cPassword"
            value={passwordConfirm}
            onChange={(e) => setCPassword(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Confirm password  "
          ></input>

          <button
            type="submit"
            className="flex text-center p-1 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono"
          >
            CREATE ACCOUNT{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
