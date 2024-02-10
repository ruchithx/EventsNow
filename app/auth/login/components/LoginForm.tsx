"use client";
import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "@/util/Toastify";
import { useAuth } from "@/app/AuthContext";
import Image from "next/image";

export default function LoginForm() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setEmail }: any = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const enteredUsername = usernameInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    if (!enteredUsername || !enteredPassword) {
      error("Enter username and password");
      return;
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredUsername,
        password: enteredPassword,
      });

      if (!result?.error && result) {
        localStorage.setItem("email", enteredUsername);
        setEmail(enteredUsername);
        setUsername("");
        setPassword("");
      } else {
        error("Invalid username or password");
      }
      setIsSubmitting(false);
    } catch (e) {
      console.log("💥💥💥💥💥" + e);
      setIsSubmitting(false);
    }
  }
  return (
    <form onSubmit={(e: any) => handleSubmit(e)} className="w-full max-w-xs">
      <div className="mb-4">
        <input
          type="email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-[6px] border rounded-md focus:outline-none focus:outline-custom-orange"
          placeholder="Enter your email"
          ref={usernameInputRef}
        />
      </div>
      <div className="mb-6 ">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-[6px] border rounded-md focus:outline-none focus:outline-custom-orange"
          placeholder="Create password"
          ref={passwordInputRef}
        />
      </div>

      {isSubmitting ? (
        <button className="button flex text-center mt-10 mb-10 xl:mb-20  px-2 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono ">
          <div className="flex gap-2 justify-center items-center">
            <div> Login</div>
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
          className="button w-full py-[6px] uppercase bg-custom-orange text-white rounded-md hover:bg-custom-orange focus:outline-none focus:bg-custom-orange"
        >
          Login to account
        </button>
      )}
    </form>
  );
}
