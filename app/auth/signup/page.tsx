import SignUpFormBasic from "./components/SignUpFormBasic";
import SignupSocial from "@/components/SignupSocial";

import Terms from "@/components/Terms";

import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <div className="md:grid   md:grid-cols-2  ">
        <div className="grid  grid-cols-6 col-span-1">
          <div className="col-span-1"></div>
          <div className="col-span-4 ">
            <div className="grid grid-cols-8">
              <div></div>
              <div className="col-span-6">
                <SignUpFormBasic />
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
        <div className=" max-md:hidden  md:col-span-1  overflow-hidden	bg-[url('/images/login/login.jpg')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
