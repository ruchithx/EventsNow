"use client";
import React, { use } from "react";
import Image from "next/image";
import NavBarButton from "./NavBarButton";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";
import Link from "next/link";
import Spinner from "../Spinner";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Login from "../Login";
import { MdContactless } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import { RiLogoutCircleFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

import { useAuth } from "@/app/AuthContext";

import { boolean } from "zod";
import dynamic from "next/dynamic";

export default function NavBar() {
  const [userActive, setUserActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser]: any = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrganizationShowButton, setIsOrganizationShowButton] =
    useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { emailAuth, setEmail }: any = useAuth();

  const ResponsiveMenuBar = dynamic(() => import("./ResponsiveMenuBar"));
  const NavbarProfile = dynamic(() => import("./NavbarProfile"));

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const router = useRouter();

  function clickLogoutBtn() {
    signOut();
    setEmail("");
    localStorage.removeItem("email");
  }

  // get data from api
  useEffect(
    function () {
      async function session() {
        setIsLoading(true);
        const session = await getSession();

        if (session) {
          const name = session?.user?.name ? session?.user?.name : "";
          console.log(session?.user);
          setUser(session?.user);
          if (name !== "") {
            setUserActive(true);
            setUserName(name);
          } else {
            const email = emailAuth;

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
              console.log(data);
              setUser(data);
              setUserName(data.firstName);
            } else {
              setUserActive(false);
            }
          }
        }
        setIsLoading(false);
      }
      session();
    },
    [emailAuth]
  );

  return (
    <div>
      {/* check data has loaded */}
      {isLoading ? (
        <nav className="dark:bg-navWhite ">
          <Spinner />
        </nav>
      ) : (
        <nav className="dark:bg-navWhite ">
          <div className="2xl:px-16 flex flex-wrap items-center justify-between mx-auto p-3">
            {/* Events now logo and name */}
            <Link href="/">
              <button className="button">
                <div className="flex items-center gap-3">
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
              </button>
            </Link>

            <div
              className="hidden w-full md:flex md:w-auto  items-end"
              id="navbar-default"
            >
              <ul className="text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-navWhite dark:border-gray-700">
                {/* home button */}
                <li>
                  <Link href={"/"}>
                    <button
                      className=" block button py-2 px-3 text-white  rounded md:bg-transparent md:text-eventBrown-700 md:p-0 dark:text-eventBrown md:dark:text-eventBrown"
                      aria-current="page"
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <Link href={"/about"}>
                  <NavBarButton text={"About"} />
                </Link>

                {/* when user exist */}
                {userActive && (
                  <>
                    {/* crete event button */}
                    <Link href={"/createorganization"}>
                      <Login
                        titleOfbutton={"HOST EVENT"}
                        image={"createevent.svg"}
                      />
                    </Link>

                    {/* my profile part */}
                    <div className="relative   group transition-all">
                      <button
                        className="button"
                        onClick={() => setShowProfile(true)}
                      >
                        <Profile name={userName} picture="User_cicrle" />
                      </button>
                      {/* <div className="absolute  hidden  group-hover:flex group-hover:justify-center	group-hover:gap-2	  transition-all">
                        <div className="mt-4 ">
                          <Login
                            fn={clickLogoutBtn}
                            titleOfbutton={"LOGOUT"}
                            image={"Subtract.svg"}
                          />
                        </div>
                        <Link href={"/profile"} className="mt-4">
                          <Login
                            fn={clickLogoutBtn}
                            titleOfbutton={"PROFILE"}
                            image={"pprofile.svg"}
                          />
                        </Link>
                      </div> */}
                    </div>
                  </>
                )}
                {/* there is no user exist */}
                {!userActive && (
                  <>
                    <Link href={"/auth/login"}>
                      <Login titleOfbutton={"LOGIN"} image={"Sign_in.svg"} />
                    </Link>
                    <Link href={"/auth/signup"}>
                      <Login
                        titleOfbutton={"SIGNUP"}
                        image={"Sign_in_squre_fill.svg"}
                      />
                    </Link>
                  </>
                )}
              </ul>
            </div>
            <div
              onClick={() => toggleMenu()}
              className="sm:hidden cursor-pointer"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>

          <ResponsiveMenuBar
            userActive={userActive}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            clickLogoutBtn={clickLogoutBtn}
          />
          <div className="relative">
            <NavbarProfile
              setShowProfile={setShowProfile}
              showProfile={showProfile}
              clickLogoutBtn={clickLogoutBtn}
              user={user}
              isOrganizationShowButton={isOrganizationShowButton}
              setIsOrganizationShowButton={setIsOrganizationShowButton}
            />
          </div>
        </nav>
      )}
    </div>
  );
}

export function Item({
  text,
  children,
  fn,
}: {
  text?: string;
  children?: any;
  fn?: () => void;
}) {
  return (
    <li className="p-2 	w-full  hover:bg-[#12342112] cursor-pointer   border-amber-400	text-xl ">
      <button onClick={fn} className="flex gap-3 items-center">
        <div>{children}</div>
        <div>{text}</div>
      </button>
    </li>
  );
}
