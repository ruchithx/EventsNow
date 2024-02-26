import SignUpFormBasic from "./components/SignUpFormBasic";
import SignupSocial from "@/components/SignupSocial";

import Terms from "@/components/Terms";

import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <div className="md:grid   md:grid-cols-2  ">
        <div className=" py-4 px-12 sm:px-24  md:px-12 lg:px-24 xl:px-36 2xl:px-48">
          <SignUpFormBasic />
          <SignupSocial />
          <div className="pb-4 ">
            <Terms />
          </div>
        </div>
        <div className=" max-md:hidden  md:col-span-1  overflow-hidden	bg-[url('/images/login/login.jpg')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
