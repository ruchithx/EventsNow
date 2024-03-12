import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { error, success } from "@/util/Toastify";
import { ProfContext, useProf } from "../ProfContext";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to manage visibility of the confirm password
  const { userId } = useProf() as ProfContext;

  const handleCurrentPasswordChange = (e: any) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (newPassword.length < 8) {
      setErrorMessage("New Password is short ");
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match");
    } else {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/user/changeUserPassword`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: userId,
              currentPassword,
              newPassword,
            }),
          }
        );
        if (!response.ok) {
          setErrorMessage("Failed to change password");
        }
        const data = await response.json();
        if (data.error === "An error occurred") {
          error("There is a problem on server");
        }
        if (data.error === "Incorrect Password") {
          error("Current password is wrong");
        }
        if (data.message === "Password changed successfully") {
          success("Password Changed Successfully");
        }
       
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setErrorMessage("");
      } catch (error) {
        console.error("Error changing password:", error);
        setErrorMessage("An unexpected error occurred");
      }
    }
  }

  return (
    <div className="sm:col-span-4 capitalize mt-6">
      <h2 className="text-xl font-semibold">Change Password</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label
            htmlFor="current-password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Current Password:
          </label>
          <input
            type="password"
            id="current-password"
            placeholder="Enter your Current Password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="block w-full rounded-md border-2 border-custom-orange p-2 text-gray-900 placeholder-gray-400  focus:ring-custom-orange focus:border-custom-orange focus:outline-none sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            New Password:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              value={newPassword}
              placeholder="Enter your New Password"
              onChange={handleNewPasswordChange}
              className="block w-full rounded-md border-2 border-custom-orange p-2 text-gray-900 placeholder-gray-400 focus:ring-custom-orange focus:border-custom-orange focus:outline-none sm:text-sm pr-10" // Added padding for the toggle button
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            >
              {showConfirmPassword ? (
                <HiEyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <HiEye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm New Password:
          </label>

          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            placeholder="Re-Enter your New Password"
            onChange={handleConfirmPasswordChange}
            className="block w-full rounded-md border-2 border-custom-orange p-2 text-gray-900 placeholder-gray-400 focus:ring-custom-orange focus:border-custom-orange focus:outline-none sm:text-sm"
          />
        </div>
        {errorMessage && (
          <div className="text-red-500  pb-3 font-semibold">{errorMessage}</div>
        )}
        <button
          type="submit"
          className="bg-custom-orange text-white py-2 px-4 rounded-md shadow-sm flex items-center gap-2 hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-custom-orange focus:ring-offset-2 sm:text-sm"
        >
          <FontAwesomeIcon icon={faLock} className="text-white" />
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
