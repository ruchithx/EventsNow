import Image from "next/image";
import React, { useState } from "react";
import styles from "./Login.module.css";

interface LogProps {
  titleOfButton: string;
  image: string;
  fn?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Login({ image, titleOfButton, fn }: LogProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(!isClicked);

    if (fn) {
      fn(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-custom-orange h-8 rounded-2xl ${
        isClicked ? styles.clicked : ""
      }`}
    >
      <div className="flex flex-row ml-2 mr-2 gap-2 p-0 items-center justify-center">
        <Image
          src={`/ReUsableComponentData/${image}`}
          alt="Picture of the button"
          width={20}
          height={20}
        />
        <div className="text-white text-sm font-bold">{titleOfButton}</div>
      </div>
    </button>
  );
}
