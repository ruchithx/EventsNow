import React, { MouseEventHandler } from "react";
interface NavBarButton {
  text: string;
  // handleNavBarButton: MouseEventHandler<HTMLButtonElement>;
}

export default function NavBarButton({
  text,
}: // handleNavBarButton,
NavBarButton) {
  return (
    <li>
      <button className="button">
        <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-eventBrown md:p-0 dark:text-white md:dark:hover:text-eventBrown dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          {text}
        </div>
      </button>
    </li>
  );
}
