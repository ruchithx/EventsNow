import Link from "next/link";
import React from "react";

export default function CreatAccountText() {
  return (
    <div className=" my-15 justify-center self-end font-sans">
      <div className=" mt-[100px] justify-center self-end font-sans">
        <div className="text-center ">If you do not have an account</div>
        <div className="text-center">
          <Link className="text-[#0151FC]" href="/auth/signup">
            create account
          </Link>
        </div>
      </div>
    </div>
  );
}
