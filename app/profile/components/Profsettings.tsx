import React from "react";

interface Details {
  name: string;
  type: string;
}

function Profsetti({ name, type }: Details) {
  return (
    <div className="sm:col-span-4 capitalize">
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2">
        <input
          id={type}
          name={type}
          type={type}
          placeholder={`Enter your ${name}`}
          autoComplete="email"
          className="block w-full p-2 capitalize rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-orange placeholder:text-gray-300  focus:ring-2 focus:ring-inset focus:ring-custom-orange sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default Profsetti;
