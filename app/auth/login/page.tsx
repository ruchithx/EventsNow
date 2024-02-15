import SignupSocial from "@/components/SignupSocial";

import Footer from "@/components/Footer";

import LoginForm from "./components/LoginForm";

import CreatAccountText from "./components/CreatAccountText";

export default function LogIn() {
  return (
    <>
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

        <div className="md:w-1/2 max-md:hidden  md:col-span-1  overflow-hidden	bg-[url('/images/login/login.jpg')] bg-no-repeat bg-cover  bg-center"></div>
      </div>
      <Footer />
    </>
  );
}
