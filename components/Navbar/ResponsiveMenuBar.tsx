import React, { memo, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Item, User } from "./NavBar";
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
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clickLogoutBtn: () => void;
  user: User;
}

// setIsMenuOpen={setIsMenuOpen}
// isMenuOpen={isMenuOpen}

const ResponsiveMenuBar = memo(function ResponsiveMenuBar({
  isMenuOpen,
  clickLogoutBtn,
  userActive,
  user,
  setIsMenuOpen,
}: props) {
  const menuBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuBarRef.current &&
        !menuBarRef.current.contains(event.target as Node)
      ) {
        // Clicked outside of modal, so close it
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the modal is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={
        isMenuOpen
          ? "fixed shadow-2xl  right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0fc] p-5 ease-in duration-50"
          : "fixed left-[100%] top-0 p-10 ease-in duration-50"
      }
      ref={menuBarRef}
    >
      <div
        className={`w-full ${
          userActive ? "hidden" : "block"
        } flex items-center justify-end `}
      >
        <div onClick={() => setIsMenuOpen(false)} className="cursor-pointer ">
          <IoMdClose size={25} />
        </div>
      </div>
      {userActive && (
        <Link href={`/profile/${user._id}`}>
          <div className="flex justify-between items-center mt-5">
            <Image
              src={user.image}
              alt="profile picture"
              width={50}
              height={20}
              className="rounded-full w-auto h-auto"
            />
            <div
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer "
            >
              <IoMdClose size={30} />
            </div>
          </div>
        </Link>
      )}
      <div className="flex flex-col py-6 text-black">
        <ul>
          <Link href="/">
            <Item fn={() => setIsMenuOpen(false)} text="Home">
              {/* <AiFillHome /> */}
            </Item>
          </Link>
          <Link href="/about">
            <Item fn={() => setIsMenuOpen(false)} text="About">
              {/* <MdContactless /> */}
            </Item>
          </Link>
          {!userActive && (
            <div className="flex flex-col  text-black">
              <Link href="/auth/login">
                <Item fn={() => setIsMenuOpen(false)} text="Login">
                  {/* <RiLoginCircleFill /> */}
                </Item>
              </Link>
              <Link href="/auth/signup">
                <Item fn={() => setIsMenuOpen(false)} text="Signup">
                  {/* <FaLock /> */}
                </Item>
              </Link>
            </div>
          )}

          {userActive && (
            <div className="flex flex-col  text-black">
              <Link href={"/createorganization"}>
                <Item fn={() => setIsMenuOpen(false)} text="Host Event">
                  {/* <IoIosAddCircle /> */}
                </Item>
              </Link>
              <Link href={`/profile/${user._id}`}>
                <Item fn={() => setIsMenuOpen(false)} text="Profile">
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
