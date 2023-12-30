import Link from "next/link";
import React from "react";
import Footer from '../components/Footer'

export default function Terms() {
  return (

    <div className=" my-5 justify-center self-end font-sans">

    

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
