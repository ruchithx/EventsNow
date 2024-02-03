import SignUpFormBasic from "./components/SignUpFormBasic";
import SignupSocial from "@/components/SignupSocial";
import Image from "next/image";
import Terms from "@/components/Terms";
import LoginFormBasic from "@/components/Loginform";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar/NavBar";

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
        <div className=" max-md:hidden  md:col-span-1  overflow-hidden	bg-[url('/login.jpg')] bg-no-repeat bg-cover  bg-center">
          {/* <Image src={'/login.jpg'} alt={"event-img"} height={1} width={10000} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
