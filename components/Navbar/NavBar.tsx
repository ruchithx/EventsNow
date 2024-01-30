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

import ResponsiveNavbar from "./ResponsiveNavbar";

export default function NavBar() {
  const [userActive, setUserActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrganizationShowButton, setIsOrganizationShowButton] =
    useState(false);
  const [showProfile, setShowProfile] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const router = useRouter();
  // const pathname = usePathname();
  // console.log(pathname);

  function clickLogoutBtn() {
    signOut();
    router.push("/");
  }

  // get data from api
  useEffect(function () {
    async function session() {
      setIsLoading(true);
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
      setIsLoading(false);
    }
    session();
  }, []);

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
          <div
            className={
              isMenuOpen
                ? "fixed shadow-2xl  right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0fc] p-5 ease-in duration-50"
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
                  src={`/ReUsableComponentData/profilpic.jpg`}
                  alt="profile picture"
                  width={60}
                  height={20}
                  className="rounded-full"
                />
                <div onClick={() => toggleMenu()} className="cursor-pointer ">
                  <IoMdClose size={30} />
                </div>
              </div>
            )}

            <div className="flex flex-col py-6 text-black">
              <ul>
                <Link href="/">
                  <Item fn={toggleMenu} text="Home">
                    <AiFillHome />
                  </Item>
                </Link>
                <Link href="/about">
                  <Item fn={toggleMenu} text="About">
                    <MdContactless />
                  </Item>
                </Link>
                {!userActive && (
                  <div className="flex flex-col  text-black">
                    <Link href="/auth/login">
                      <Item fn={toggleMenu} text="Login">
                        <RiLoginCircleFill />
                      </Item>
                    </Link>
                    <Link href="/auth/signup">
                      <Item fn={toggleMenu} text="Signup">
                        <FaLock />
                      </Item>
                    </Link>
                  </div>
                )}

                {userActive && (
                  <div className="flex flex-col  text-black">
                    <Link href={"/createorganization"}>
                      <Item fn={toggleMenu} text="Host Event">
                        <IoIosAddCircle />
                      </Item>
                    </Link>
                    <Link href="/profile">
                      <Item fn={toggleMenu} text="Profile">
                        <FaUser />
                      </Item>
                    </Link>
                  </div>
                )}
              </ul>
              {userActive && (
                <div className="mt-5 flex justify-center w-full">
                  <Login
                    image="Sign_in.svg"
                    titleOfbutton="LOGOUT"
                    fn={clickLogoutBtn}
                  />
                </div>
              )}
              {/* <button
                onClick={clickLogoutBtn}
                className="flex gap-3 items-center"
              >
                <RiLogoutCircleFill />
                <div>Logout</div>
              </button> */}
            </div>
          </div>
          <ResponsiveNavbar
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
              <div className="">
                <div className="flex m-3 items-center justify-between">
                  <div className="font-medium	">
                    ruchithsamarawickrama.sg@gmail.com
                  </div>
                  <button onClick={() => setShowProfile(false)}>
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                  <div>
                    <Image
                      src={`/ReUsableComponentData/profilpic.jpg`}
                      alt="profile picture"
                      width={60}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                  <div className="font-medium	">{`hi ${userName} !`}</div>
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
                        className="flex px-4 flex justify-center items-center py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={`/ReUsableComponentData/profilpic.jpg`}
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
              </div>
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
    <li className="p-2 	w-full  hover:bg-[#12342112] cursor-pointer font-medium  border-amber-400	text-xl ">
      <button onClick={fn} className="flex gap-3 items-center">
        <div>{children}</div>
        <div>{text}</div>
      </button>
    </li>
  );
}
