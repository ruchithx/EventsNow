import React from "react";
import { UserDetails, useProf } from "../ProfContext";

interface Details {
  name: string;
  type: string;
  value?: string | number;
  setFname?: any;
}
type Detailss = {
  fname: string;
  userDeatails: UserDetails;
  lname: string;
};

function Profsetti({ name, type, value, setFname }: Details) {
  return (
    <div className="sm:col-span-4 capitalize mt-2">
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2">
        <input
          onChange={(e) => setFname(e.target.value)}
          id={type}
          value={value}
          name={type}
          type={type}
          placeholder={`Enter your ${name}`}
          autoComplete="email"
          className={`block w-full p-2  rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-orange placeholder:text-gray-300  focus:ring-2 focus:ring-inset focus:ring-custom-orange sm:text-sm sm:leading-6 ${
            name == "Primary email address" ? "lowercase" : "capitalize"
          }`}
        />
      </div>
    </div>
  );
}

export default Profsetti;
