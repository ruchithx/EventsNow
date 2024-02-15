import React from "react";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer";
import CreateOrganizationFormBasic from "./components/CreateOrganizationFormBasic";

export default function page() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <div className="lg:h-screen lg:overflow-scroll">
          <CreateOrganizationFormBasic />
        </div>
        <div className=" max-lg:hidden  md:col-span-1  overflow-hidden	bg-[url('/images/CreateOrgamization/createOrganization.jpg')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}
