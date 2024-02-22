import React from "react";

import Footer from "@/components/Footer";
import CreateOrganizationFormBasic from "./components/CreateOrganizationFormBasic";

export default function Page() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <div className="lg:h-screen lg:overflow-scroll">
          <CreateOrganizationFormBasic />
        </div>
        <div className=" max-lg:hidden  md:col-span-1  overflow-hidden	bg-[url('/images/createOrgamization/createOrganization.jpg')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}
