import React, { memo } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Item } from "./NavBar";
import Login from "../Login";
import { MdContactless } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

interface props {
  isMenuOpen: boolean;
  userActive: boolean;
  toggleMenu: () => void;
  clickLogoutBtn: () => void;
}

const ResponsiveMenuBar = memo(function ResponsiveMenuBar({
  isMenuOpen,
  toggleMenu,
  clickLogoutBtn,
  userActive,
}: props) {
  return (
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
            src={`/images/reusableComponents/profilpic.jpg`}
            alt="profile picture"
            width={50}
            height={20}
            className="rounded-full w-auto h-auto"
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
              {/* <AiFillHome /> */}
            </Item>
          </Link>
          <Link href="/about">
            <Item fn={toggleMenu} text="About">
              {/* <MdContactless /> */}
            </Item>
          </Link>
          {!userActive && (
            <div className="flex flex-col  text-black">
              <Link href="/auth/login">
                <Item fn={toggleMenu} text="Login">
                  {/* <RiLoginCircleFill /> */}
                </Item>
              </Link>
              <Link href="/auth/signup">
                <Item fn={toggleMenu} text="Signup">
                  {/* <FaLock /> */}
                </Item>
              </Link>
            </div>
          )}

          {userActive && (
            <div className="flex flex-col  text-black">
              <Link href={"/createorganization"}>
                <Item fn={toggleMenu} text="Host Event">
                  {/* <IoIosAddCircle /> */}
                </Item>
              </Link>
              <Link href="/profile">
                <Item fn={toggleMenu} text="Profile">
                  {/* <FaUser /> */}
                </Item>
              </Link>
            </div>
          )}
        </ul>
        {userActive && (
          <div className="mt-10 flex justify-center w-full">
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
  );
});
export default ResponsiveMenuBar;
