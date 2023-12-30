"use client";
import LoginFormBasic from "@/components/LoginFormBasic";
import NavBar from "@/components/NavBar";
import SignupSocial from "@/components/SignupSocial";
import Image from "next/image";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <NavBar />
      <div className="md:grid   md:grid-cols-2  ">
        <div className="grid grid-cols-6">
          <div className="col-span-1"></div>
          <div className="col-span-4 ">
            <div className="grid grid-cols-8">
              <div></div>
              <div className="col-span-6">
                <LoginFormBasic />
              </div>
              <div></div>
            </div>
            <div className="flex justify-center">
              <SignupSocial />
            </div>
            <Terms />
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className=" invisible md:visible col-span-1 overflow-hidden h-auto	">
          <Image src={"/login.jpg"} alt={"event-img"} width={1000} height={1} />
        </div>
      </div>
    </div>
  );
}

export default page;
