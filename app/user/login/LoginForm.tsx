"use client";
import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "@/util/Toastify";

export default function LoginForm() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

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
        router.push("/");
      } else {
        error("Invalid username or password");
      }
    } catch (e) {
      console.log("💥💥💥💥💥" + e);
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-xs">
      <div className="mb-4">
        <input
          type="email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-custom-orange"
          placeholder="Enter your email"
          ref={usernameInputRef}
        />
      </div>
      <div className="mb-6 relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-custom-orange"
          placeholder="Create password"
          ref={passwordInputRef}
        />
        <span
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      </div>
      <button
        type="submit"
        className="w-full py-2 uppercase bg-custom-orange text-white rounded-md hover:bg-custom-orange focus:outline-none focus:bg-custom-orange"
      >
        Login to account
      </button>
    </form>
  );
}
