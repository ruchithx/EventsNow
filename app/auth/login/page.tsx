import SignupSocial from "@/components/SignupSocial";
import Image from "next/image";
import Footer from "@/components/Footer";
// import CreatAccountText from "./CreatAccountText";
import LoginForm from "./components/LoginForm";
import NavBar from "@/components/NavBar";
import CreatAccountText from "./components/CreatAccountText";

export default function LogIn() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2  p-8">
          <h1 className="text-custom-blue font-khand text-5xl text-center mt-3 font-bold">
            Log-in to Events now
          </h1>
          <div className="flex flex-col items-center my-12">
            <LoginForm />
          </div>
          <SignupSocial />

          <CreatAccountText />
        </div>
        {/* <div className=" invisible md:visible col-span-1 overflow-hidden h-auto	">
          <Image src={"/login.jpg"} alt={"event-img"} width={1000} height={1} />
        </div> */}

        <div className="md:w-1/2 ">
          <Image
            src="/ReUsableComponentData/login.jpg"
            alt="Man"
            width={700}
            height={1}
            className=" h-screen w-screen  hidden md:sm:block"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
