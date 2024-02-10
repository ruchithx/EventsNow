"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../../../components/Spinner";
import { error, success } from "../../../../util/Toastify";
import Image from "next/image";

export default function LoginFormBasic() {
  const [firstName, setFristName] = useState("");
  const [spinner, setSpinner] = useState(false);

  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setCPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function sendLoginData(e: any) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
      };

      if (!firstName || !lastName || !email || !password || !passwordConfirm) {
        error("Please fill the form");
        setIsSubmitting(false);
        return;
      }

      const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!email_pattern.test(email)) {
        setIsSubmitting(false);
        error("Your Email is not valied");
        return;
      }
      if (!(password.length > 6)) {
        setIsSubmitting(false);
        error("Password length is short");
        return;
      }
      if (password !== passwordConfirm) {
        setIsSubmitting(false);
        error("Password and Password confirm is not the same");
        return;
      }

      const user = await fetch("http://localhost:3000/api/v1/user/exist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const dat = await user.json();

      if (dat.user !== null) {
        setIsSubmitting(false);
        error("Already exist this email");
        return;
      }

      const res = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setIsSubmitting(false);
        error("There is a error for registartion");
        return;
      }

      setFristName("");
      setLastName("");
      setemail("");
      setpassword("");
      setCPassword("");
      setSpinner(false);
      success("Successfully created your account");
      router.push("/auth/login");
      setIsSubmitting(false);
    } catch (e) {
      setIsSubmitting(false);
      console.log(e);
    }
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
          onSubmit={(e) => sendLoginData(e)}
        >
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFristName(e.target.value)}
            className="focus:outline-custom-orange my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Enter your first name  "
          ></input>

          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="focus:outline-custom-orange my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Enter your last name  "
          ></input>

          <input
            required
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="focus:outline-custom-orange my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Enter your email "
          ></input>

          <input
            required
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="focus:outline-custom-orange my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Create password  "
          ></input>

          <input
            required
            type="password"
            name="cPassword"
            id="cPassword"
            value={passwordConfirm}
            onChange={(e) => setCPassword(e.target.value)}
            className="focus:outline-custom-orange my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder="Confirm password  "
          ></input>

          {isSubmitting ? (
            <button className="button flex text-center mt-10 mb-10 xl:mb-20  px-2 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono ">
              <div className="flex gap-2 justify-center items-center">
                <div> Creating</div>
                <Image
                  src="/LoadingBtnIcon.svg"
                  alt="loading btn"
                  width={40}
                  height={40}
                />
              </div>
            </button>
          ) : (
            <button
              type="submit"
              className="button flex text-center p-1 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono"
            >
              CREAT ACCOUNT
            </button>
          )}
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
