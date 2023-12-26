import React, { useState } from "react";
import SignupSocial from "@/components/SignupSocial";
import Terms from "@/components/Terms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2  p-8">
          <h1 className="text-custom-blue font-khand text-5xl text-center mt-3 font-bold">
            Log-in to Events now
          </h1>
          <div className="flex flex-col items-center my-12">
            <form onSubmit={handleSubmit} className="w-full max-w-xs">
              <div className="mb-4">
                <input
                  type="email"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-custom-orange"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-custom-orange"
                  placeholder="Create password"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-2 uppercase bg-custom-orange text-white rounded-md hover:bg-custom-orange focus:outline-none focus:bg-custom-orange"
              >
                Login to account
              </button>
            </form>
          </div>
          <SignupSocial />

          <Terms />
        </div>
        <img
          className="md:w-1/2 h-[730px]"
          src="./ReUsableComponentData/login.jpg"
          alt="Man"
        />
      </div>
    </>
  );
}
