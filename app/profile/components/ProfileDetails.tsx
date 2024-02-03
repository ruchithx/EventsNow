import React from "react";

interface Details {
  name: String;
}

export default function ProfileDetails({ name }: Details) {
  return (
    <div className="border-gray border-2  w-full p-4 rounded-lg bg-custom-gray mt-5">
      <label htmlFor="fname">{name}</label> <br />
      <div className="border-gray border-2   w-full p-4 rounded-lg bg-white my-2"></div>
    </div>
  );
}
