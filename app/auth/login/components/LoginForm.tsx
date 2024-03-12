"use client";
import React, { useState, useRef, useEffect } from "react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "@/util/Toastify";

import Image from "next/image";
import { useAuth } from "@/app/AuthContext";

interface contextProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function LoginForm() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isPageSubmitting, setIsPageSubmitting] = useState<boolean>(false);
  const { setEmail }: any = useAuth() as contextProps;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    async function checkSession() {
      //setIsPageSubmitting is not working yet
      setIsPageSubmitting(true);
      if (status === "unauthenticated") {
        setIsSubmitting(false);
        return;
      }

      if (status === "authenticated") {
        const res = await fetch("/api/v1/user/getOneUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user?.email,
          }),
        });
        if (!res.ok) {
          setIsPageSubmitting(false);
          return;
        }
        const { data } = await res.json();
        setIsPageSubmitting(false);
        if (data.role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
        setIsPageSubmitting(false);
      }
    }
    checkSession();
  }, [status, session, router]);

  async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const enteredUsername = usernameInputRef.current?.value;
      const enteredPassword = passwordInputRef.current?.value;

      if (!enteredUsername || !enteredPassword) {
        error("Enter username and password");
        return;
      }
    

      const res = await fetch("/api/v1/user/checkLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredUsername,
          password: enteredPassword,
        }),
      });

      const { data } = await res.json();

      if (data === "Invalid user name or password") {
        error("Invalid username or password");
        setIsSubmitting(false);
        return;
      }

      const result = await signIn("credentials", {
        redirect: false,
        email: enteredUsername,
        password: enteredPassword,
      });

    
      // remember this has error solve it later
      // if (!result?.error && result)
      if (result?.status === 200 && result?.ok) {
        localStorage.setItem("email", enteredUsername);
        setEmail(enteredUsername);
        setUsername("");
        setPassword("");

        data.role === "admin"
          ? router.push("/admin/dashboard")
          : router.push("/");
      } else {
        error("user login failed");
      }
      setIsSubmitting(false);
    } catch (e) {
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
          placeholder="Enter password"
          ref={passwordInputRef}
        />
      </div>

      {isSubmitting ? (
        <button className="button flex text-center mt-10 mb-10 xl:mb-20  px-2 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono ">
          <div className="flex gap-2 justify-center items-center">
            <div> Login</div>
            <Image
              src="/images/reusableComponents/Loading.svg"
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
