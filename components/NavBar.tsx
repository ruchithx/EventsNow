"use client";
import React from "react";
import Image from "next/image";
import NavBarButton from "./NavBarButton";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Login from "./Login";
import Profile from "@/components/Profile";

export default function NavBar() {
  const [userActive, setUserActive] = useState(false);
  const [userName, setUserName] = useState();
  const router = useRouter();

  function clickHomeBtn() {
    router.push("/");
  }
  function clickAboutBtn() {
    router.push("/about");
  }

  function clickLoginBtn() {
    router.push("/user/login");
  }
  function clickLogoutBtn() {
    signOut();
    router.push("/");
  }
  function clickSignupBtn() {
    router.push("/user/signup");
  }

  useEffect(function () {
    async function session() {
      const session = await getSession();

      if (session) {
        const name = session?.user?.name ? session?.user?.name : "";
        if (name !== "") {
          setUserActive(true);
          setUserName(name);
        } else {
          const email = session?.user?.email;
          console.log(email);
          const user = await fetch(
            "http://localhost:3000/api/v1/user/getOneUser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );

          const { data } = await user.json();
          if (data) {
            setUserActive(true);

            setUserName(data.firstName);
          } else {
            setUserActive(false);
          }
        }
      }
    }
    session();
  }, []);

  return (
    <nav className="dark:bg-navWhite ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/ReUsableComponentData/nav-logo.png"
            alt="EventNow Logo"
            width={30}
            height={20}
          />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-eventBrown    ">
            EventNow
          </span>
        </div>

        <div
          className="hidden w-full md:block md:w-auto flex items-end"
          id="navbar-default"
        >
          <ul className="text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-navWhite dark:border-gray-700">
            <li>
              <button
                onClick={clickHomeBtn}
                className=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-eventBrown-700 md:p-0 dark:text-eventBrown md:dark:text-eventBrown"
                aria-current="page"
              >
                Home
              </button>
            </li>
            <NavBarButton handleNavBarButton={clickAboutBtn} text={"About"} />

            {userActive && (
              <Login
                fn={clickLogoutBtn}
                titleOfbutton={"LOGOUT"}
                image={"Subtract.svg"}
              />
            )}
            {userActive && <Profile name={userName} picture="User_cicrle" />}

            {!userActive && (
              <Login
                fn={clickLoginBtn}
                titleOfbutton={"SIGNIN"}
                image={"Sign_in.svg"}
              />
            )}
            {!userActive && (
              <Login
                fn={clickSignupBtn}
                titleOfbutton={"SIGNUP"}
                image={"Sign_in_squre_fill.svg"}
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
