import NavBar from "@/components/Navbar/NavBar";
import React from "react";
import EventRegisterFormBasic from "./components/EventRegisterFormBasic";

import Footer from "@/components/Footer";

export default function page() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="grid lg:grid-cols-2">
        <div className="lg:h-screen lg:overflow-scroll">
          <EventRegisterFormBasic />
        </div>

        <div className=" max-lg:hidden  md:col-span-1  overflow-hidden 	bg-[url('/images/createEvent/eventRegFormImg.png')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}
