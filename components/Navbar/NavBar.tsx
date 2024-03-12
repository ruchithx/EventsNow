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

import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import NavBarProfile from "./NavBarProfile";
import ResponsiveMenuBar from "./ResponsiveMenuBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

export type OrganizationProps = {
  map: any;
  name: string;
  image: string;
  id: string;
};

type ID = {
  id: string;
};

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  role: string;
};

export interface AuthContext {
  organizationId: string | null;
  eventPublish: boolean;
  emailAuth: string | null;
  setOrganizationId: any;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  organization: OrganizationProps[];
  setOrganization: React.Dispatch<React.SetStateAction<OrganizationProps[]>>;
}

export const getUser = async ({ email }: any) => {
  const user = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getOneUser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  const { data } = await user.json();
  return data;
};

export default function NavBar() {
  const [userActive, setUserActive] = useState<boolean>(false);
  const [newUserPath, setNewUserPath] = useState<boolean>(false);
  // const [organization, setOrganization] = useState<OrganizationProps[]>([]);
  const [user, setUser] = useState<User>({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [showProfile, setShowProfile] = useState<boolean>(false);

  const {
    emailAuth,
    eventPublish,
    setEmail,
    organization,
    setOrganization,
    organizationId,
  } = useAuth() as AuthContext;

  // const ResponsiveMenuBar = dynamic(() => import("./ResponsiveMenuBar"));
  // const NavBarProfile = dynamic(() => import("./NavBarProfile"));
  const pathname = usePathname();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const router = useRouter();

  async function clickLogoutBtn() {
    await signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}` });
    setEmail("");
    localStorage.removeItem("email");
    router.push("/");
  }

  const getUserOrganization = async ({ id }: ID) => {
    // const organization = await fetch(
    //   `${process.env.NEXT_PUBLIC_URL}/api/v1/user/userOrganization`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ id }),
    //   }
    // );
    // if (!organization.ok) {
    //   setIsLoading(false);
    //   return;
    // }
    // const organizationData = await organization.json();
    // setOrganization(organizationData);
  };

  // get data from api
  useEffect(
    function () {
      async function session() {
        // setIsLoading(true);

        if (pathname.startsWith("/organization/newUser")) {
          setNewUserPath(true);
        }
        const session = await getSession();

        if (session) {
          const name = session?.user?.name ? session?.user?.name : "";
          if (name !== "") {
            const data = await getUser({ email: session?.user?.email });

            if (data) {
              setUserActive(true);
              setUser(data);

              const organization = await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/v1/user/userOrganization`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: data._id }),
                }
              );

              if (!organization.ok) {
                setIsLoading(false);
                return;
              }

              const organizationData = await organization.json();

              setOrganization(organizationData);
              // getUserOrganization({ id: data._id });
            } else {
              // clickLogoutBtn();
              setUserActive(false);
            }
          } else {
            const email = emailAuth;

            const data = await getUser({ email });

            if (data) {
              setUserActive(true);
              setUser(data);
              const organization = await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/v1/user/userOrganization`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: data._id }),
                }
              );

              if (!organization.ok) {
                setIsLoading(false);
                return;
              }

              const organizationData = await organization.json();

              setOrganization(organizationData);
            } else {
              // clickLogoutBtn();
              setUserActive(false);
            }
          }
        }
        setIsLoading(false);
      }
      session();
    },
    [emailAuth, pathname, organizationId, setOrganization]
  );

  return (
    <div>
      {newUserPath ? null : (
        <div>
          {/* check data has loaded */}
          {isLoading ? (
            <nav className="dark:bg-navWhite ">
              <Spinner />
            </nav>
          ) : (
            <nav className="dark:bg-navWhite">
              <div className=" flex flex-wrap items-center justify-between mx-auto p-2">
                {/* Events now logo and name */}
                {pathname.startsWith("/event/dashboard") ? (
                  <Link href={`/organization/dashboard/${organizationId}`}>
                    <button
                      className={`bg-custom-orange button  h-8 rounded-2xl`}
                    >
                      <div className="flex text-white  flex-row ml-2 mr-2  gap-2 p-0 items-center justify-center">
                        <IoMdArrowRoundBack />

                        <div className=" text-white text-sm S font-bold ">
                          Organization
                        </div>
                      </div>
                    </button>
                  </Link>
                ) : (
                  <Link href="/">
                    <button className="button">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/images/reusableComponents/nav-logo.svg"
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
                )}

                <div
                  className="hidden w-full md:flex md:w-auto  items-end"
                  id="navbar-default"
                >
                  <ul className=" justify-center items-center text-xl font-medium flex   p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-navWhite dark:border-gray-700">
                    {/* home button */}

                    {pathname.startsWith("/organization/dashboard") ? (
                      <Link href={`/createevent/${organizationId}`}>
                        <Login
                          titleOfbutton={"HOST EVENT"}
                          image={"createevent.svg"}
                        />
                      </Link>
                    ) : (
                      <>
                        {pathname.startsWith("/event/dashboard") && (
                          <div>
                            {eventPublish ? (
                              <div className="text-green-600 text-sm	 flex items-center gap-2">
                                <div className="text-green-600">
                                  <FaCircle size={15} />
                                </div>
                                publish
                              </div>
                            ) : (
                              <div className=" text-red-600 text-sm	 flex items-center gap-2">
                                <div className="text-red-600">
                                  <FaCircle size={15} />
                                </div>
                                Not publish
                              </div>
                            )}
                            <div></div>
                          </div>
                        )}
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
                          <span className="sr-only animate-ping">
                            Notifications
                          </span>
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
                              : "flex gap-4"
                          } `}
                        >
                          {user.role === "admin" && (
                            <Link href={"/admin/dashboard"}>
                              <Login
                                titleOfbutton={"ADMIN DASHBOARD"}
                                image={"createevent.svg"}
                              />
                            </Link>
                          )}
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
                          onClick={() =>
                            setShowProfile(
                              (showProfile: boolean) => !showProfile
                            )
                          }
                        >
                          <Profile picture={user?.image} />
                        </button>
                      </>
                    )}

                    {/* there is no user exist */}
                    {!userActive && (
                      <>
                        <Link href={"/auth/login"}>
                          <Login
                            titleOfbutton={"LOGIN"}
                            image={"Sign_in.svg"}
                          />
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
                    <div
                      onClick={() => toggleMenu()}
                      className="cursor-pointer "
                    >
                      <IoMdClose size={30} />
                    </div>
                  </div>
                )}
                <ResponsiveMenuBar
                  user={user}
                  userActive={userActive}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  clickLogoutBtn={clickLogoutBtn}
                />
              </div>
              {/* */}
              <div className="relative">
                <div
                  className={`absolute ${
                    !showProfile
                      ? "hidden"
                      : "xl:w-3/12 lg:w-3/12 md:w-1/3 2xl:w-1/5 sm:block hidden"
                  } rounded-2xl top-13 right-0   bg-gray-700 text-white`}
                >
                  <NavBarProfile
                    setShowProfile={setShowProfile}
                    showProfile={showProfile}
                    user={user}
                    clickLogoutBtn={clickLogoutBtn}
                  />
                </div>
              </div>
            </nav>
          )}
        </div>
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
