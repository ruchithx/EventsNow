"use client";
import React, { useEffect, useState } from "react";

import ProfileSettings from "../components/ProfileSettings";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Profsettings from "./Profsettings";
import ChangePassword from "./ChangePassword";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserDetails, useProf } from "../ProfContext";
import { useParams } from "next/navigation";
import { error, success } from "@/util/Toastify";
type Detailss = {
  userDeatails: UserDetails;
  setLname: React.Dispatch<React.SetStateAction<string>>;
  setFname: React.Dispatch<React.SetStateAction<string>>;
  fname: string;
  lname: string;
};

export default function Settings() {
  const params = useParams();
  const [showOtherInfo, setShowOtherInfo] = useState(false);

  const [mobile, setMobile] = useState<number>();
  const [birth, setBirth] = useState<any>();
  const [pemail, setPemail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [tshirt, setTshirt] = useState<string>("");
  const [meal, setMeal] = useState<string>("");

  const toggleOtherInfo = () => {
    setShowOtherInfo(!showOtherInfo);
  };
  useEffect(
    function () {
      async function postOther() {
        const res = await fetch(
          `http://localhost:3000/api/v1/user/updateUser/${params.id}`,
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(params.id),
          }
        );
        if (!res.ok) {
          return;
        }
        const response = await res.json();

        setMobile(response.mobileNumber);
        setBirth(response.birthday);
        setPemail(response.primaryEmail);
        setAddress(response.address);
        setGender(response.gender);
        setTshirt(response.tshirt);
        setMeal(response.meal);
      }
      postOther();
    },
    [params.id]
  );
  const { userDeatails, setLname, setFname, lname, fname } =
    useProf() as Detailss;

  const handleSave = async () => {
    try {
      const data = {
        firstName: fname,
        lastName: lname,
        birthday: birth,
        mobileNumber: mobile,
        primaryEmail: pemail,
        address: address,
        gender: gender,
        tshirtSize: tshirt,
        meal: meal,
      };
      const res = await fetch(
        `http://localhost:3000/api/v1/user/updateUser/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        error("Failed to save settings");
        return;
      }
      success("Data save successfully");
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-0 bg-[#fff] pt-8 lg:pl-6 justify-start items-start gap-12 ">
      <div className="w-full ml-0 ">
        <div className="text-3xl font-semibold text-custom-orange font-IBM">
          Settings
        </div>
        <div className="bg-white w-full sm:w-4/5 md:w-4/5 lg:w-4/5 mx-auto">
          <div className="space-y-12">
            <div className="pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <form className="sm:col-span-4">
                  <Profsettings
                    name="first name"
                    type="text"
                    value={fname}
                    setFname={setFname}
                  />
                  <Profsettings
                    name="last name"
                    type="text"
                    value={lname}
                    setFname={setLname}
                  />
                </form>
                <div className="sm:col-span-4">
                  <button
                    onClick={toggleOtherInfo}
                    className="text-custom-orange hover:underline mt-4"
                  >
                    {showOtherInfo ? "Hide" : "Show"} Other Informations
                  </button>
                </div>

                {showOtherInfo && (
                  <form className="sm:col-span-4">
                    <div className="sm:col-span-4">
                      <Profsettings
                        name="Mobile Number"
                        type="text"
                        value={mobile}
                        setFname={setMobile}
                      />
                      <Profsettings
                        name="Primary email address"
                        type="text"
                        value={pemail}
                        setFname={setPemail}
                      />

                      <Profsettings
                        name="address"
                        type="text"
                        value={address}
                        setFname={setAddress}
                      />
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="birthday"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select your birthday:
                        </label>
                        <DatePicker
                          placeholderText="Enter your Birthday"
                          id="birthday"
                          selected={birth}
                          onChange={(date) => setBirth(date)}
                          dateFormat="dd/MM/yyyy"
                          yearDropdownItemNumber={50}
                          className="mt-1 p-2 border-2 border-custom-orange rounded-md focus:outline-none focus:ring-custom-orange focus:border-custom-orange block w-full shadow-sm sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-3 capitalize">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          gender
                        </label>
                        <div className="mt-2">
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            id="gender"
                            name="gender"
                            autoComplete="gender-name"
                            className="block w-full rounded-md border-0 capitalize py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-orange focus:ring-2 focus:ring-inset focus:ring-custom-orange sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option
                              className="text-gray-100"
                              value=""
                              disabled
                              selected
                              hidden
                            >
                              Select Gender
                            </option>
                            <option>male</option>
                            <option>female</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-3 capitalize">
                        <label
                          htmlFor="tShirt"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          t-shirt size
                        </label>
                        <div className="mt-2">
                          <select
                            value={tshirt}
                            onChange={(e) => setTshirt(e.target.value)}
                            id="tShirt"
                            name="tShirt"
                            autoComplete="tShirt-name"
                            className="block w-full rounded-md border-0 capitalize py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-orange focus:ring-2 focus:ring-inset focus:ring-custom-orange sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option
                              className="text-gray-100"
                              value=""
                              disabled
                              selected
                              hidden
                            >
                              Select T-Shirt Size
                            </option>
                            <option>extra small</option>
                            <option>small</option>
                            <option>medium</option>
                            <option>large</option>
                            <option>extra large</option>
                            <option>XXL</option>
                            <option>XXXL</option>
                          </select>
                        </div>
                      </div>
                      <Profsettings
                        name="meal preferences"
                        type="text"
                        value={meal}
                        setFname={setMeal}
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-start gap-x-6 sm:col-span-3">
            <button
              onClick={handleSave}
              type="submit"
              className="bg-custom-orange button text-white py-2 px-4 rounded-md shadow-sm hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-custom-orange focus:ring-offset-2 sm:text-sm"
            >
              Save
            </button>
          </div>

          <div className="sm:col-span-3">
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
}
