import React from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="dark:bg-navWhite">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/ReUsableComponentData/nav-logo.png"
            alt="EventNow Logo"
            width={30}
            height={20}
          />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-eventBrown    ">
            EventNow
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-navWhite dark:border-gray-700">
            <li>
              <a
                href="#"
                className=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-eventBrown-700 md:p-0 dark:text-eventBrown md:dark:text-eventBrown"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-eventBrown md:p-0 dark:text-white md:dark:hover:text-eventBrown dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-eventBrown md:p-0 dark:text-white md:dark:hover:text-eventBrown dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
