"use client";
import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "@/util/Toastify";
import { useAuth } from "@/app/AuthContext";

export default function LoginForm() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setEmail }: any = useAuth();

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
        localStorage.setItem("email", enteredUsername);
        setEmail(enteredUsername);
        setUsername("");
        setPassword("");
      } else {
        error("Invalid username or password");
      }
    } catch (e) {
      console.log("💥💥💥💥💥" + e);
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
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-custom-orange"
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
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-custom-orange"
          placeholder="Create password"
          ref={passwordInputRef}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 uppercase bg-custom-orange text-white rounded-md hover:bg-custom-orange focus:outline-none focus:bg-custom-orange"
      >
        c Login to account
      </button>
    </form>
  );
}
