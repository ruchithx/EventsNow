import { useState } from "react";
import ProfileSettings from "../components/ProfileSettings";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Profsettings from "./Profsettings";
import ChangePassword from "./ChangePassword";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Settings() {
  const [birthday, setBirthday] = useState(null);

  const handleDateChange = (date: any) => {
    setBirthday(date);
  };
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-3xl md:pl-10 md:ml-2 pl-0 bg-[#fff] pt-8 lg:pl-6 justify-start items-start gap-12 ">
      <div className="w-full ml-0 ">
        <div className="text-3xl font-semibold text-custom-orange font-IBM">
          Settings
        </div>
        <div className="bg-white w-full sm:w-4/5 md:w-4/5 lg:w-4/5 mx-auto">
          <form>
            <div className="space-y-12">
              <div className="pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Profsettings name="first name" type="text" />
                  <Profsettings name="last name" type="text" />

                  <Profsettings name="email" type="email" />

                  <div className="sm:col-span-4">
                    <h1 className="h1 text-xl font-semibold leading-7 text-gray-900">
                      Other Informations
                    </h1>
                  </div>
                  <Profsettings name="Mobile Number" type="text" />
                  <Profsettings name="Primary email address" type="text" />
                  <Profsettings name="address" type="text" />
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
                      selected={birthday}
                      onChange={handleDateChange}
                      dateFormat="MM/dd/yyyy"
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
                  <Profsettings name="meal preferences" type="text" />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-start gap-x-6 sm:col-span-3">
              <button
                type="submit"
                className="bg-custom-orange text-white py-2 px-4 rounded-md shadow-sm hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-custom-orange focus:ring-offset-2 sm:text-sm"
              >
                Save
              </button>
            </div>
          </form>
          <div className="sm:col-span-3">
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
}
