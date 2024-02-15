"use client";
import React from "react";
import Image from "next/image";
import NavBarButton from "./NavBarButton";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

import Profile from "@/components/Profile";
import Link from "next/link";
import Spinner from "../Spinner";
import { AiOutlineMenu } from "react-icons/ai";

import Login from "../Login";
import { useAuth } from "@/app/AuthContext";

import dynamic from "next/dynamic";

import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import NavBarProfile from "./NavBarProfile";

export default function NavBar() {
  const [userActive, setUserActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser]: any = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showProfile, setShowProfile] = useState(false);
  const { emailAuth, setEmail }: any = useAuth();

  const ResponsiveMenuBar = dynamic(() => import("./ResponsiveMenuBar"));
  const pathname = usePathname();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

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
        console.log("session", session);

        if (session) {
          console.log("jelo");
          const name = session?.user?.name ? session?.user?.name : "";
          setUser(session?.user);

          if (name !== "") {
            const data = await getUser({ email: session?.user?.email });

            setUserActive(true);
            setUser(data);
          } else {
            const email = emailAuth;
            const data = await getUser({ email });

            if (data) {
              setUserActive(true);
              setUser(data);
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

  const getUser = async ({ email }: any) => {
    const user = await fetch("http://localhost:3000/api/v1/user/getOneUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const { data } = await user.json();
    return data;
  };

  return (
    <div>
      {/* check data has loaded */}
      {isLoading ? (
        <nav className="dark:bg-navWhite ">
          <Spinner />
        </nav>
      ) : (
        <nav className="">
          <div className="2xl:px-16 flex flex-wrap items-center justify-between mx-auto p-2">
            {/* Events now logo and name */}
            <Link href="/">
              <button className="button">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/ReusableComponents/nav-logo.svg"
                    alt="EventNow Logo"
                    width={30}
                    height={20}
                    className="w-auto h-auto"
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
              <ul className=" justify-center items-center text-xl font-medium flex   p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-navWhite dark:border-gray-700">
                {/* home button */}

                {pathname.startsWith("/organization/dashboard") ? (
                  <Link href={"/createevent"}>
                    <Login
                      titleOfbutton={"HOST EVENT"}
                      image={"createevent.svg"}
                    />
                  </Link>
                ) : (
                  <>
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
                  </>
                )}

                {/* <li>
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
                </Link> */}

                {/* when user exist */}
                {userActive && (
                  <>
                    {/* crete event button */}
                    <button
                      type="button"
                      className={`${
                        pathname.startsWith("/admin") ? "hidden" : "flex"
                      } button relative h-8 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-custom-orange rounded-lg `}
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-6 h-4 text-xs font-bold text-white bg-red-600  rounded-full -top-2 -end-3 ">
                        2
                      </div>
                    </button>
                    <div
                      className={`${
                        pathname.startsWith("/organization/dashboard") ||
                        pathname.startsWith("/admin") ||
                        pathname.startsWith("/event/dashboard")
                          ? "hidden"
                          : "flex"
                      } `}
                    >
                      <Link href={"/createorganization"}>
                        <Login
                          titleOfbutton={"HOST EVENT"}
                          image={"createevent.svg"}
                        />
                      </Link>
                    </div>
                    {/* my profile part */}

                    <button
                      className="button"
                      onClick={() => setShowProfile(true)}
                    >
                      <Profile name={user.firstName} picture={user?.image} />
                    </button>
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
          <div
            className={
              isMenuOpen
                ? "fixed shadow-2xl  right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0fc] p-5 ease-in duration-50 z-50"
                : "fixed left-[100%] top-0 p-10 ease-in duration-50"
            }
          >
            <div
              className={`w-full ${
                userActive ? "hidden" : "block"
              } flex items-center justify-end `}
            >
              <div onClick={() => toggleMenu()} className="cursor-pointer ">
                <IoMdClose size={25} />
              </div>
            </div>
            {userActive && (
              <div className="flex justify-between items-center mt-5">
                <Image
                  src={`/images/profile/profile.jpg`}
                  alt="profile picture"
                  width={60}
                  height={20}
                  className="rounded-full w-auto h-auto"
                />
                <div onClick={() => toggleMenu()} className="cursor-pointer ">
                  <IoMdClose size={30} />
                </div>
              </div>
            )}
          </div>
          <ResponsiveMenuBar
            userActive={userActive}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            clickLogoutBtn={clickLogoutBtn}
          />
          <div className="relative">
            <div
              className={`absolute ${
                !showProfile
                  ? "hidden"
                  : "lg:w-1/3 md:w-1/2 2xl:w-1/5 sm:block hidden"
              } rounded-2xl top-13 right-0   bg-gray-700 text-white`}
            >
              {/* <div className="">
                <div className="flex m-3 items-center justify-between">
                  <div className="font-medium	">{user?.email}</div>
                  <button onClick={() => setShowProfile(false)}>
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                  <div>
                    <Image

                      src={user?.image}

                      alt="profile picture"
                      width={60}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                  <div className="font-medium	">{`hi ${user?.firstName} !`}</div>
                  <div>
                    <button className="rounded-full py-2 px-4 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      Manage your account
                    </button>
                  </div>
                </div>
                <div className=" mt-5 mb-5 md:p-3 lg:p-0 w-full flex xl:w-full  justify-center">
                  <div className="z-20  w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700">
                    <div className="  px-4 py-2 font-medium items-center flex justify-between text-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 dark:text-white">
                      <div className="flex gap-2  items-center">
                        <MdOutlineManageAccounts size={25} />
                        <div className="text-xl">organization accounts</div>
                      </div>
                      {isOrganizationShowButton ? (
                        <button
                          onClick={() => setIsOrganizationShowButton(false)}
                        >
                          <AiOutlineUpCircle size={20} />
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsOrganizationShowButton(true)}
                        >
                          <AiOutlineDownCircle size={20} />
                        </button>
                      )}
                    </div>
                    <div
                      className={`divide-y ${
                        isOrganizationShowButton ? "hidden" : ""
                      } divide-gray-100 dark:divide-gray-700`}
                    >
                      <a
                        href="#"
                        className="flex px-4  justify-center items-center py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={`/images/ReusableComponents/profilpic.jpg`}
                            alt="profile picture"
                            width={40}
                            height={20}
                            className="rounded-full"
                          />
                        </div>
                        <div className="w-full ps-3">
                          <div className="text-gray-500 font-medium text-md mb-1.5 dark:text-gray-400">
                            Organization 1
                          </div>
                        </div>
                      </a>
                    </div>
                    <button onClick={clickLogoutBtn}>
                      <div className="items-center gap-2 text-xl flex px-4 py-2 font-medium  text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                        <MdOutlineLogout />
                        logout
                      </div>
                    </button>
                  </div>
                </div>
              </div> */}
              <NavBarProfile
                setShowProfile={setShowProfile}
                user={user}
                clickLogoutBtn={clickLogoutBtn}
              />
            </div>
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
