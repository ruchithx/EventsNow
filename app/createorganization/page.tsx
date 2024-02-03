import React from "react";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer";
import CreateOrganizationFormBasic from "./components/CreateOrganizationFormBasic";

export default function page() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <CreateOrganizationFormBasic />
        <div className=" max-lg:hidden  md:col-span-1  overflow-hidden	bg-[url('/createOrganization.jpg')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}
