import React from "react";

export default function OrganizationRequestPending({
  message,
}: {
  message?: string;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative grid justify-items-center">
        <div className="h-12 w-12 md:h-20  md:w-20 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0  h-12 md:h-20  w-12 md:w-20 rounded-full border-t-8 border-b-8 border-custom-orange animate-spin"></div>
        <div className="text-[#252526] text-center font-mono pt-10  ">
          Your organization is not active <br /> please wait for admin to
          approve
        </div>
      </div>
    </div>
  );
}
