import Link from "next/link";
import React from "react";

export default function Terms() {
  return (

    <div className=" my-15 justify-center self-end font-sans">

    <div className=" mt-[100px] justify-center self-end font-sans">

      <div className="text-center ">
        By signing up, I have read an agree to{" "}
      </div>
      <div className="text-center">
        <Link className="text-[#0151FC]" href="/">
          Terms{" "}
        </Link>
        and{" "}
        <Link className="text-[#0151FC]" href="/">
          {" "}
          Privacy Policy
        </Link>{" "}
      </div>
    </div>
  );
}
