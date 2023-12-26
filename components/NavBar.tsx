import React from "react";

export default function NavBar() {
  return (
    <nav className="dark:bg-navWhite">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
        <a href="#">
          <img
            src="./ReUsableComponentData/nav-logo.png"
            className="h-12 w-15"
            alt="EventNow Logo"
          />
        </a>
        <div className="mr-12">
          <ul className="text-xl font-medium flex   p-4 md:p-0  md:flex-row   md:mt-0 md:border-0 md:bg-navWhite  md:dark:bg-navWhite ">
            <li>
              <a
                href="#"
                className="py-2 px-3 text-white  rounded md:bg-transparent md:text-eventBrown-700 md:p-0 dark:text-eventBrown md:dark:text-eventBrown "
                aria-current="page"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-xl font-medium flex  p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-white  md:dark:bg-navWhite ">
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-eventBrown md:p-0 dark:text-white md:dark:hover:text-eventBrown  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-eventBrown md:p-0 dark:text-white md:dark:hover:text-eventBrown  dark:hover:text-white md:dark:hover:bg-transparent"
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
